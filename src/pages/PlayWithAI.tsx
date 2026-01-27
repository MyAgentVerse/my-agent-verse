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
import {
  Loader2,
  Upload,
  FileText,
  Sparkles,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import logo from "@/assets/myagentverse-logo-new.png";

const SUPPORTED_TYPES = ["text/plain"];
const [sessionId, setSessionId] = useState<string | null>(null);



const questionSchema = z.object({
  question: z.string().min(1, "Please enter a question."),
});  

type QuestionFormData = z.infer<typeof questionSchema>;

const PlayWithAI = () => {
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "ready" | "error"
  >("idle");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const questionForm = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
    defaultValues: { question: "" },
  });

  const validateFile = (file: File): string | null => {
    if (!SUPPORTED_TYPES.includes(file.type)) {
      return "Only PDF, JPG, PNG, or TXT files are supported.";
    }
    return null;
  };

  const handleStartOver = () => {
    setUploadStatus("idle");
    setSelectedFile(null);
    setSessionId(null);
    setAiResponse(null);
    setUploadError(null);
    questionForm.reset();
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      setUploadStatus("error");
      setUploadError(error);
      toast({
        title: "Invalid File",
        description: error,
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    setUploadStatus("uploading");
    setAiResponse(null);
    questionForm.reset();

    try {
      const documentText = await readFileAsText(file);

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentText }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setSessionId(data.sessionId);
      setUploadStatus("ready");

      toast({
        title: "Document Ready",
        description: "You can now ask questions.",
      });
    } catch (err: any) {
      setUploadStatus("error");
      setUploadError(err.message);
      toast({
        title: "Upload Failed",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  const handleAskQuestion = async (values: QuestionFormData) => {
    if (!sessionId) {
      toast({
        title: "Upload Required",
        description: "Please upload a document first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoadingQuestion(true);
    setAiResponse(null);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          question: values.question.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get answer");
      }

      setAiResponse(data.answer);
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsLoadingQuestion(false);
    }
  };

  const isTextareaDisabled = uploadStatus !== "ready" || isLoadingQuestion;

  return (
    <>
      <Helmet>
        <title>Play with AI | MyAgentVerse</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
        <header className="border-b bg-background">
          <div className="container mx-auto px-4 py-4">
            <img src={logo} alt="MyAgentVerse" className="h-10" />
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Upload */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload Document</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                type="file"
                accept=".txt"
                onChange={handleFileChange}
                ref={fileInputRef}
                disabled={uploadStatus === "ready"}
              />

              {uploadStatus === "ready" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={handleStartOver}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Start Over
                </Button>
              )}

              {uploadStatus === "uploading" && (
                <div className="mt-4 flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Uploading...
                </div>
              )}

              {uploadStatus === "error" && uploadError && (
                <div className="mt-4 text-destructive flex gap-2">
                  <AlertCircle />
                  {uploadError}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Ask */}
          <Card>
            <CardHeader>
              <CardTitle>Ask a Question</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...questionForm}>
                <form
                  onSubmit={questionForm.handleSubmit(handleAskQuestion)}
                  className="space-y-4"
                >
                  <FormField
                    control={questionForm.control}
                    name="question"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Question</FormLabel>
                        <FormControl>
                          <Textarea
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
                    disabled={isTextareaDisabled}
                    className="w-full"
                  >
                    {isLoadingQuestion ? "Thinking…" : "Ask AI"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Answer */}
          {aiResponse && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>AI Answer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{aiResponse}</p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </>
  );
};

export default PlayWithAI;
