import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Feather } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Side - Branding */}
      <div className="hidden bg-hero-gradient lg:flex lg:flex-col lg:justify-center lg:p-12">
        <div className="mx-auto max-w-md space-y-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <Feather className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold">BlogEase AI</span>
          </Link>
          <h1 className="text-4xl font-bold leading-tight">
            Welcome back to BlogEase AI
          </h1>
          <p className="text-xl text-muted-foreground">
            Your words. Our intelligence.
          </p>
          <div className="rounded-2xl border bg-card/50 p-8 backdrop-blur">
            <blockquote className="italic">
              "BlogEase AI transformed how I create content. What used to take hours now takes minutes."
            </blockquote>
            <p className="mt-4 font-semibold">— Sarah Johnson, Content Creator</p>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2">
              <Feather className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">BlogEase AI</span>
            </Link>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome back</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password"
                      required
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Sign In
                  </Button>
                  <div className="text-center">
                    <Button variant="link" size="sm">
                      Forgot password?
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>
                    Get started with BlogEase AI for free
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input 
                      id="signup-name" 
                      type="text" 
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input 
                      id="signup-email" 
                      type="email" 
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password" 
                      type="password"
                      required
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Create Account
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center text-sm text-muted-foreground">
            © 2025 BlogEase AI. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
