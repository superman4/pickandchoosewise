
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = ({ 
  children, 
  className, 
  variant = 'default', 
  size = 'md', 
  fullWidth = false,
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary"
  };
  
  const sizeStyles = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8"
  };
  
  const widthStyle = fullWidth ? "w-full" : "";
  
  return (
    <button 
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyle,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
