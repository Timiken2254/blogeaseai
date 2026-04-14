import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Feather } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed in successfully!");
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeToTerms) {
      toast.error("Please agree to the Terms of Service and Privacy Policy");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Please check your email to verify.");
    }
    setLoading(false);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Branding */}
      <div className="hidden bg-foreground lg:flex lg:flex-col lg:justify-center lg:p-16">
        <div className="mx-auto max-w-md space-y-8">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <Feather className="h-8 w-8 text-primary" />
            <span className="font-display text-2xl font-bold text-background">BlogEase AI</span>
          </Link>
          <h1 className="font-display text-4xl font-bold leading-tight text-background">
            Your AI-Powered <span className="italic text-primary">Blogging</span> Companion
          </h1>
          <p className="text-lg text-background/50">
            Create, optimize, and grow your blog with 25+ AI tools — completely free, no limits.
          </p>
          <div className="rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur">
            <blockquote className="font-display italic text-background/70">
              "The best tool I've found for blogging. BlogEase AI saves me hours every single week."
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-background/50">— Sarah Johnson, Content Creator</p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2">
              <Feather className="h-7 w-7 text-primary" />
              <span className="font-display text-xl font-bold">BlogEase AI</span>
            </Link>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Log in</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <div className="mt-6 space-y-6">
                <div className="space-y-1">
                  <h2 className="font-display text-2xl font-bold">Welcome back</h2>
                  <p className="text-sm text-muted-foreground">Enter your credentials to continue</p>
                </div>
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <Button className="w-full rounded-full" size="lg" type="submit" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="signup">
              <div className="mt-6 space-y-6">
                <div className="space-y-1">
                  <h2 className="font-display text-2xl font-bold">Create your account</h2>
                  <p className="text-sm text-muted-foreground">All tools are free — get started in seconds</p>
                </div>
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input id="signup-name" type="text" placeholder="Jane Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
                  </div>
                  <div className="rounded-xl border bg-muted/50 p-4 space-y-3">
                    <p className="text-xs font-semibold">Before creating your account:</p>
                    <ul className="text-xs text-muted-foreground space-y-1 pl-4">
                      <li>• All tools and features are completely free</li>
                      <li>• Your content is private and secure</li>
                      <li>• 14-day refund guarantee on any future paid features</li>
                      <li>• You can delete your account at any time</li>
                    </ul>
                    <div className="flex items-start gap-2 pt-1">
                      <Checkbox id="terms" checked={agreeToTerms} onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)} required />
                      <Label htmlFor="terms" className="text-xs leading-relaxed cursor-pointer">
                        I have read and agree to the{" "}
                        <Link to="/terms" className="text-primary hover:underline font-semibold" target="_blank">Terms of Service</Link>,{" "}
                        <Link to="/privacy" className="text-primary hover:underline font-semibold" target="_blank">Privacy Policy</Link>, and{" "}
                        <Link to="/refund" className="text-primary hover:underline font-semibold" target="_blank">Refund Policy</Link>
                      </Label>
                    </div>
                  </div>
                  <Button className="w-full rounded-full" size="lg" type="submit" disabled={loading || !agreeToTerms}>
                    {loading ? "Creating account..." : "Create Free Account"}
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} BlogEase AI. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
