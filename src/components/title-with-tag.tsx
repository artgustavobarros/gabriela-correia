import { cn } from "@/lib/utils";

interface TitleWitTagProps {
  text: string;
  orientation: "vertical" | "horizontal";
  color?: "default" | "inverted";
  className?: string;
}

export function TitleWitTag({
  text,
  orientation,
  className = "",
  color = "default",
}: TitleWitTagProps) {
  return (
    <div
      className={cn(
        "flex gap-4",
        orientation === "vertical" ? "flex-col" : "items-center",
        className
      )}
    >
      <span
        className={cn(
          " h-[2px] w-10 block",
          color === "default" ? "bg-brand-500" : "bg-brand-400"
        )}
      />
      <h2
        className={cn(
          " text-2xl font-martel font-bold",
          color === "default" ? "text-neutral-900" : "text-white"
        )}
      >
        {text}
      </h2>
    </div>
  );
}
