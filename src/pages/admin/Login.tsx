import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      // Use server-side edge function to verify admin status
      const { data: adminCheck } = await supabase.functions.invoke('check-admin-status', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });
      
      if (adminCheck?.isAdmin) {
        navigate('/admin/dashboard');
      }
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin/login`
        }
      });

      if (authError) throw authError;

      toast({
        title: "Account Created",
        description: "Please contact an administrator to grant you admin access, then login.",
      });
      
      setIsSignUp(false);
      setEmail("");
      setPassword("");
    } catch (error: any) {
      toast({
        title: "Sign Up Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      if (authData.session) {
        // Use server-side edge function to verify admin status
        const { data: adminCheck, error: adminError } = await supabase.functions.invoke('check-admin-status', {
          headers: {
            Authorization: `Bearer ${authData.session.access_token}`,
          },
        });

        if (adminError || !adminCheck?.isAdmin) {
          await supabase.auth.signOut();
          throw new Error("You don't have admin access. Please contact an administrator.");
        }

        toast({
          title: "Login Successful",
          description: "Welcome to the admin dashboard",
        });
        
        navigate('/admin/dashboard');
      }
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted/50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {isSignUp ? "Admin Sign Up" : "Admin Login"}
          </CardTitle>
          <CardDescription className="text-center">
            {isSignUp 
              ? "Create an account to request admin access"
              : "Enter your credentials to access the admin dashboard"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading 
                ? (isSignUp ? "Creating account..." : "Logging in...") 
                : (isSignUp ? "Sign Up" : "Login")
              }
            </Button>
            
            <div className="text-center">
              <Button
                type="button"
                variant="link"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setEmail("");
                  setPassword("");
                }}
                className="text-sm"
              >
                {isSignUp 
                  ? "Already have an account? Login" 
                  : "Need an account? Sign Up"
                }
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
