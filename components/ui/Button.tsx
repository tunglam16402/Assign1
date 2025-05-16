// components/ui/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  variant: "primary" | "primary_no_hover" | "primary_oppsite_hover";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
}) => {
  const baseStyles = "w-full px-4 py-3 rounded border cursor-pointer";
  const variants = {
    primary:
      "border border-[#FF9900] hover:bg-[#FF9900] text-[#FF9900] bg-white hover:text-white transition-all hover:duration-300",
    primary_no_hover: " bg-[#ff5e00] text-[white] hover:opacity-90",
    primary_oppsite_hover:
      " bg-[#ff5e00] text-[white] hover:opacity-90 hover:border hover:boder-border-[#FF9900] hover:bg-white hover:text-[#FF9900]",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
