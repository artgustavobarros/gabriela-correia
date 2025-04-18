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
        "max-w-7xl mx-auto flex-1",
        className,
        grid ? "grid grid-cols-12" : ""
      )}
    >
      {children}
    </Component>
  );
}
