"use client";

import { RightToLeft, BotToTop } from "@/utils/animations";
import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  key: number;
  direction: "top" | "left";
}

export default function Motion({ children, key, direction }: Props) {
  const scrollRef = useRef(null);
  return (
    <motion.div
      variants={direction === "left" ? RightToLeft : BotToTop}
      key={key}
      ref={scrollRef}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      {children}
    </motion.div>
  );
}
