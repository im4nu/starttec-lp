import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant: "outlined" | "contained";
  children: React.ReactNode;
}

export default function Button({ size, variant, children }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center  rounded-[36px] text-white px-8 py-4 hover:opacity-75 hover:cursor-pointer ease-in-out duration-500 ${
        size === "small" ? "text-xs" : ""
      } ${size === "medium" ? "text-sm" : ""} ${
        size === "large" ? "text-base" : ""
      } ${
        variant === "outlined"
          ? "bg-[#080D29] border border-[#282D45]"
          : " bg-main"
      }`}
    >
      {children}
    </button>
  );
}
