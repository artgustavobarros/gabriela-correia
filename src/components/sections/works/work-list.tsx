"use client";
import { Conditional } from "@/components/conditional";
import { WORKS } from "@/constants/works";
import { CheckCircle2 } from "lucide-react";

const sortedWorks = WORKS.sort((a, b) => a.desktopOrder - b.desktopOrder);

export function WorkList() {
  return (
    <ul className="flex flex-col gap-10 relative pl-8">
      {sortedWorks.map((item, index) => {
        const isLast = index === WORKS.length - 1;
        return (
          <li key={item.text} className="relative">
            <section className="flex gap-4 font-poppins items-start">
              <CheckCircle2 className="size-7 shrink-0 text-brand-500" />
              <span className="flex-1 text text-neutral-900">{item.text}</span>
            </section>
            <Conditional condition={!isLast}>
              <span
                className="bg-brand-500 h-full w-[2px] absolute top-8 left-3 translate-x-1/2"
                role="presentation"
              />
            </Conditional>
          </li>
        );
      })}
    </ul>
  );
}
