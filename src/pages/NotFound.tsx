import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10 px-4"
      >
        <div className="text-9xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
