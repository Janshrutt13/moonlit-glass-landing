import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center glass-panel p-8 rounded-lg">
        <h1 className="text-6xl font-playfair gradient-text mb-4">404</h1>
        <p className="text-xl text-secondary mb-6">Oops! This path leads nowhere</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
        >
          Return to Portal
        </a>
      </div>
    </div>
  );
};

export default NotFound;
