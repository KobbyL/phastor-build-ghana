import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import {
  fadeInUp,
  scaleIn,
  pulse
} from "@/lib/motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.div 
        className="text-center max-w-md mx-auto p-8"
        variants={scaleIn}
      >
        <motion.h1 
          className="text-8xl font-bold mb-4 text-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          404
        </motion.h1>
        <motion.p 
          className="text-2xl text-muted-foreground mb-6"
          variants={fadeInUp}
        >
          Oops! Page not found
        </motion.p>
        <motion.p 
          className="text-muted-foreground mb-8"
          variants={fadeInUp}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Return to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
