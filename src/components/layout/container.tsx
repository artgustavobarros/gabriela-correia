import { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({
  as: Component = "div",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Component className={`max-w-7xl mx-auto flex-1 ${className}`}>
      {children}
    </Component>
  );
}
