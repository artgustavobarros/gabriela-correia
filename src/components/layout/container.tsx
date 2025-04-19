import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  grid?: boolean;
  className?: string;
  as?: ElementType;
}

export function Container({
  as: Component = "div",
  grid = false,
  className = "",
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-11/12 mx-auto",
        className,
        grid ? "grid grid-cols-12" : ""
      )}
    >
      {children}
    </Component>
  );
}
