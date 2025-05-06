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
        "w-full mx-auto container max-w-[1216px] px-6 md:px-10 lg:px-5 xl:px-0",
        className,
        grid ? "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12" : ""
      )}
    >
      {children}
    </Component>
  );
}
