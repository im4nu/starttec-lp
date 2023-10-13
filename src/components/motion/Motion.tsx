"use client";

import { RightToLeft, BotToTop } from "@/utils/animations";
import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  identifier: number;
  direction: "top" | "left";
  className?: string;
}

export default function Motion({
  children,
  className,
  identifier,
  direction,
}: Props) {
  const scrollRef = useRef(null);
  return (
    <motion.div
      variants={direction === "left" ? RightToLeft : BotToTop}
      key={identifier}
      ref={scrollRef}
      className={className ? className : ""}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      {children}
    </motion.div>
  );
}
