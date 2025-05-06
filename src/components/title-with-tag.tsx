import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { Variants } from "motion/react";

interface TitleWithTagProps {
  children: ReactNode;
  orientation: "vertical" | "horizontal";
  textColor?: string;
  tagBgColor?: string;
  className?: string;
  tagVariants?: Variants;
  textVariants?: Variants;
}

export function TitleWithTag({
  children,
  orientation,
  className = "",
  tagBgColor = "",
  textColor = "",
  tagVariants = {},
  textVariants = {},
}: TitleWithTagProps) {
  return (
    <div
      className={cn(
        "flex gap-4",
        orientation === "vertical" ? "flex-col" : "items-center",
        className
      )}
    >
      <motion.span
        className={cn("h-[3px] w-10 block", tagBgColor)}
        variants={tagVariants}
      />
      <motion.h2
        className={cn("text-3xl font-martel font-bold", textColor)}
        variants={textVariants}
      >
        {children}
      </motion.h2>
    </div>
  );
}
