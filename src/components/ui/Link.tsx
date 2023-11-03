import Link from "next/link";
import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant: "outlined" | "contained";
  children: React.ReactNode;
  className?: string;
  link?: any;
}

export default function LinkDemo({
  size,
  variant,
  children,
  className,
  link,
  ...rest
}: ButtonProps) {
  return (
    <Link
      {...rest}
      href={link}
      className={`flex items-center justify-center rounded-[36px] text-white px-8 py-4 hover:scale-105 hover:cursor-pointer ease-linear duration-300 ${
        size === "small" ? "text-xs" : ""
      } ${size === "medium" ? "text-sm" : ""} ${
        size === "large" ? "text-base" : ""
      } ${
        variant === "outlined"
          ? "bg-[#080D29] border border-[#282D45]"
          : " bg-main"
      }
      ${className ? className : ""}
      `}
    >
      {children}
    </Link>
  );
}
