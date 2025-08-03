import { motion } from "framer-motion";
import { Button } from "./button";
import { buttonVariants } from "@/lib/motion";
import { ButtonProps } from "./button";

interface MotionButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionButton = ({ children, className = "", ...props }: MotionButtonProps) => {
  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}; 