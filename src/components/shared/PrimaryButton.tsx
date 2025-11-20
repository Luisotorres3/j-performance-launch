import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  to: string;
  children: ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary";
  className?: string;
  onClick?: () => void;
}

const PrimaryButton = ({ 
  to, 
  children, 
  size = "lg", 
  variant = "default",
  className = "",
  onClick 
}: PrimaryButtonProps) => {
  return (
    <Button 
      asChild 
      size={size}
      variant={variant}
      className={`shadow-lg hover:shadow-xl transition-shadow ${className}`}
      onClick={onClick}
    >
      <Link to={to}>{children}</Link>
    </Button>
  );
};

export default PrimaryButton;
