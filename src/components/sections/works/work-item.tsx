"use client";
import { Conditional } from "@/components/conditional";
import { WORKS } from "@/constants/works";
import { CheckCircle2 } from "lucide-react";
import { motion, MotionValue, useTransform } from "motion/react";

interface WorkItemProps {
  index: number;
  totalItems: number;
  isLast: boolean;
  work: (typeof WORKS)[number];
  scrollYProgress: MotionValue<number>;
}

export function WorkItem({
  index,
  totalItems,
  isLast,
  work,
  scrollYProgress,
}: WorkItemProps) {
  const start = index / totalItems;
  const end = (index + 1) / totalItems;
  const localProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(localProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const height = useTransform(localProgress, [0, 1], ["0%", "100%"]);

  return (
    <li key={work.text} className="relative">
      <motion.div
        className="flex gap-4 font-poppins items-start"
        style={{ opacity }}
      >
        <CheckCircle2 className="size-7 shrink-0 text-brand-500" />
        <p className="flex-1 text text-neutral-900">{work.text}</p>
      </motion.div>
      <Conditional condition={!isLast}>
        <motion.span
          style={{ height }}
          className="bg-brand-500 h-full w-[2px] absolute top-8 left-3 translate-x-1/2"
          role="presentation"
        />
      </Conditional>
    </li>
  );
}
