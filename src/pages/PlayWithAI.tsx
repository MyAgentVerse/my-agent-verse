import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload, FileText, Sparkles, AlertCircle } from "lucide-react";
import logo from "@/assets/myagentverse-logo-new.png";

const SUPPORTED_TYPES = ["application/pdf", "image/jpeg", "image/png", "text/plain"];

const questionSchema = z.object({
  question: z.string().min(1, "Please enter a question."),
});

type QuestionFormData = z.infer<typeof questionSchema>;

const PlayWithAI = () => {
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "processing" | "ready" | "error">("idle");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [aiResponse, setAiResponse] = useState<{
    answer: string;
    confidence: "High" | "Low";
  } | null>(null);
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const questionForm = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      question: "",
    },
  });

  const validateFile = (file: File): string | null => {
    if (!SUPPORTED_TYPES.includes(file.type)) {
      return "This demo currently accepts only one document in Image (JPG, PNG), PDF, or TXT format. Please upload a supported file to continue.";
    }
    return null;
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const error = validateFile(file);
    if (error) {
      setUploadError(error);
      setUploadStatus("error");
      toast({
        title: "Invalid File Format",
        description: error,
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    setUploadError(null);
    setUploadStatus("uploading");
    setAiResponse(null);
    questionForm.reset();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "https://ai-agent.msdreamsolutions.com/webhook/demo/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed. Please try again.");
      }

      setUploadStatus("processing");
      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUploadStatus("ready");

      toast({
        title: "Document Ready",
        description: "Your document is ready. You can now ask questions.",
      });
    } catch (error: any) {
      setUploadStatus("error");
      setUploadError(error.message || "Upload failed. Please try again.");
      toast({
        title: "Upload Failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAskQuestion = async (values: QuestionFormData) => {
    const trimmedQuestion = values.question.trim();
    
    if (!trimmedQuestion) {
      return;
    }

    if (uploadStatus !== "ready") {
      toast({
        title: "Upload Required",
        description: "Please upload a document first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoadingQuestion(true);
    setAiResponse(null);

    const payload = { question: trimmedQuestion };
    console.log("Sending question payload:", payload);
    
    try {
      const response = await fetch("https://ai-agent.msdreamsolutions.com/webhook/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response.");
      }

      const data = await response.json();

      setAiResponse({
        answer: data.answer || "I don't know based on the provided document.",
        confidence: data.confidence || "Low",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingQuestion(false);
    }
  };

  const questionValue = questionForm.watch("question");
  const isTextareaDisabled = uploadStatus !== "ready" || isLoadingQuestion;
  const isButtonDisabled = isTextareaDisabled || !questionValue?.trim();

  return (
    <>
      <Helmet>
        <title>Play with AI | MyAgentVerse</title>
        <meta name="description" content="Upload a document and ask questions powered by AI. Experience our document Q&A demo." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/">
              <img src={logo} alt="MyAgentVerse" className="h-10" />
            </a>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Page Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-3">Play with AI</h1>
            <p className="text-lg text-muted-foreground mb-2">
              Upload a document and ask questions — powered by AI (Demo)
            </p>
            <p className="text-sm text-muted-foreground/80 bg-muted/50 inline-block px-4 py-2 rounded-full">
              This is a demo environment. Currently supports one document at a time.
            </p>
          </div>

          {/* File Upload Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Document
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    uploadStatus === "ready"
                      ? "border-green-500 bg-green-50/50"
                      : uploadStatus === "error"
                      ? "border-destructive bg-destructive/5"
                      : "border-muted-foreground/25 hover:border-primary/50"
                  }`}
                >
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.txt"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                    id="file-upload"
                    disabled={uploadStatus === "uploading" || uploadStatus === "processing" || uploadStatus === "ready"}
                  />
                  <label
                    htmlFor="file-upload"
                    className={`cursor-pointer ${
                      uploadStatus === "uploading" || uploadStatus === "processing" || uploadStatus === "ready"
                        ? "cursor-not-allowed opacity-60"
                        : ""
                    }`}
                  >
                    {selectedFile && uploadStatus === "ready" ? (
                      <div className="flex flex-col items-center gap-2">
                        <FileText className="h-12 w-12 text-primary" />
                        <p className="font-medium text-foreground">{selectedFile.name}</p>
                        <p className="text-sm text-primary">Document ready. You can now ask questions.</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="h-12 w-12 text-muted-foreground" />
                        <p className="font-medium text-foreground">Click to upload a document</p>
                        <p className="text-sm text-muted-foreground">
                          Supported formats: PDF, Image (JPG/PNG), TXT. One document only.
                        </p>
                      </div>
                    )}
                  </label>
                </div>

                {/* Upload Progress */}
                {(uploadStatus === "uploading" || uploadStatus === "processing") && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {uploadStatus === "uploading" ? "Uploading document…" : "Processing document…"}
                    </div>
                    <Progress value={uploadStatus === "uploading" ? 50 : 90} />
                  </div>
                )}

                {/* Error Message */}
                {uploadStatus === "error" && uploadError && (
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>{uploadError}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Question Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Ask a Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...questionForm}>
                <form onSubmit={questionForm.handleSubmit(handleAskQuestion)} className="space-y-4">
                  <FormField
                    control={questionForm.control}
                    name="question"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ask a question about your document</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Example: What is this document about?"
                            className="min-h-[100px] resize-none"
                            {...field}
                            disabled={isTextareaDisabled}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isButtonDisabled}
                  >
                    {isLoadingQuestion ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Getting Answer...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Ask AI
                      </>
                    )}
                  </Button>
                  {uploadStatus !== "ready" && (
                    <p className="text-sm text-muted-foreground text-center">
                      Upload a document first to ask questions.
                    </p>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* AI Response */}
          {aiResponse && (
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    AI Answer
                  </span>
                  <Badge
                    variant={aiResponse.confidence === "High" ? "default" : "secondary"}
                  >
                    {aiResponse.confidence} Confidence
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{aiResponse.answer}</p>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Source: <span className="font-medium">Uploaded document</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t py-6 mt-12">
          <p className="text-center text-sm text-muted-foreground">
            Questions? Call us at{" "}
            <a href="tel:+12816998318" className="text-primary hover:underline font-medium">
              (281) 699-8318
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default PlayWithAI;
