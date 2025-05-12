"use client";
import { WORKS } from "@/constants/works";
import { WorkItem } from "./work-item";
import { useRef } from "react";
import { useScroll } from "motion/react";

const sortedWorks = WORKS.sort((a, b) => a.desktopOrder - b.desktopOrder);

export function WorkList() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const totalItems = sortedWorks.length;
  return (
    <ul className="flex flex-col gap-10 relative pl-8" ref={ref}>
      {sortedWorks.map((work, index) => {
        const isLast = index === WORKS.length - 1;
        return (
          <WorkItem
            key={work.text}
            work={work}
            isLast={isLast}
            index={index}
            totalItems={totalItems}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </ul>
  );
}
