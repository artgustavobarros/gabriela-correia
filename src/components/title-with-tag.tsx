import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TitleWithTagProps {
  children: ReactNode;
  orientation: "vertical" | "horizontal";
  textColor?: string;
  tagBgColor?: string;
  className?: string;
}

export function TitleWithTag({
  children,
  orientation,
  className = "",
  tagBgColor = "",
  textColor = "",
}: TitleWithTagProps) {
  return (
    <div
      className={cn(
        "flex gap-4",
        orientation === "vertical" ? "flex-col" : "items-center",
        className
      )}
    >
      <span className={cn("h-[2px] w-10 block", tagBgColor)} />
      <h2 className={cn("text-2xl font-martel font-bold", textColor)}>
        {children}
      </h2>
    </div>
  );
}
