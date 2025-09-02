import LoginForm from "@/components/LoginForm";
import mysticalBackground from "@/assets/mystical-background.jpg";

const Login = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${mysticalBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-primary/35 rounded-full animate-pulse delay-3000" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-playfair gradient-text mb-4">
            Mystical Portal
          </h1>
          <p className="text-secondary text-lg font-inter">
            Enter the realm of endless possibilities
          </p>
        </div>
        
        <LoginForm />
      </div>
      
      {/* Decorative glow effects */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/8 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default Login;