import { cn } from "@/lib/utils";
import { Variants } from "motion/react";
import * as motion from "motion/react-client";

interface FloatingSpanProps {
  text: string;
  className?: string;
  variants?: Variants;
}

export function FloatingSpan({
  text,
  className = "",
  variants = {},
}: FloatingSpanProps) {
  return (
    <motion.span
      className={cn(
        "font-martel text-sm md:text-lg text-white/52 text-center hidden sm:block absolute z-[5]",
        className
      )}
      variants={variants}
      whileHover={{ color: "#f2e6d8" }}
      transition={{
        duration: 0.5,
      }}
    >
      {text}
    </motion.span>
  );
}
