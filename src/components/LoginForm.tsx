import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password, rememberMe });
  };

  return (
    <Card className="glass-panel w-full max-w-sm border border-white/20 shadow-2xl backdrop-blur-lg bg-white/5">
      <CardHeader className="text-center space-y-2 pb-4">
        <CardTitle className="text-2xl font-poppins font-semibold text-white">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-white/90 font-inter text-sm font-medium">
              Enter your email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-input pl-10 h-11 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-1 focus:ring-white/30"
                placeholder=""
                required
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="password" className="text-white/90 font-inter text-sm font-medium">
              Enter your password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-input pl-10 pr-10 h-11 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-1 focus:ring-white/30"
                placeholder=""
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
                className="border-white/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label 
                htmlFor="remember" 
                className="text-white/80 font-inter text-sm font-normal cursor-pointer"
              >
                Remember me
              </Label>
            </div>
            <button 
              type="button"
              className="text-primary hover:text-primary/80 font-inter text-sm font-normal transition-colors"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-inter font-medium text-base transition-all duration-300 mt-6"
          >
            Login
          </Button>
        </form>

        <div className="text-center pt-4">
          <p className="text-white/70 font-inter text-sm">
            Don't have an account?{" "}
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              Sign up
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;