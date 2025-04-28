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
        "w-full mx-auto max-w-11/12",
        className,
        grid ? "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12" : ""
      )}
    >
      {children}
    </Component>
  );
}
