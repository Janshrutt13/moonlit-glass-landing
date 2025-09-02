import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <Card className="glass-panel w-full max-w-md border-none shadow-none">
      <CardHeader className="text-center space-y-4">
        <CardTitle className="text-3xl font-playfair gradient-text">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-secondary text-lg font-inter">
          Sign in to your mystical portal
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-input pl-10 h-12 text-foreground placeholder:text-secondary border-none focus:border-none focus:ring-2 focus:ring-primary/40"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-input pl-10 pr-10 h-12 text-foreground placeholder:text-secondary border-none focus:border-none focus:ring-2 focus:ring-primary/40"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            variant="default"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Sign In
          </Button>
        </form>

        <div className="text-center">
          <button className="text-secondary hover:text-primary transition-colors text-sm font-medium">
            Forgot your password?
          </button>
        </div>

        <div className="text-center pt-4 border-t border-primary/20">
          <p className="text-secondary text-sm">
            Don't have an account?{" "}
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              Create one
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;