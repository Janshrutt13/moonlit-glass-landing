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
        minHeight: '100vh',
      }}
    >
      {/* Dark overlay for better glass effect */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;