"use client";
import { Conditional } from "@/components/conditional";
import { WORKS } from "@/constants/works";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function WorkList() {
  const ref = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const groups = gsap.utils.toArray<HTMLElement>(".list-group");

      groups.forEach((group) => {
        const iconAndText = group.querySelectorAll(".icon, .text");
        const bar = group.querySelector(".bar");

        gsap.set(iconAndText, { color: "#e7e7e7" });
        gsap.set(bar, { height: 0, backgroundColor: "#0f172a" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            end: "bottom center",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        });

        tl.to(iconAndText, {
          color: "#0f172a",
          duration: 0.5,
          ease: "power2.out",
        }).to(bar, {
          height: "100%",
          ease: "power2.out",
        });
      });
    },
    { dependencies: [ref], revertOnUpdate: true, scope: ref }
  );

  const sortedWorks = WORKS.sort((a, b) => a.desktopOrder - b.desktopOrder);

  return (
    <ul className="flex flex-col gap-10 relative pl-8" ref={ref}>
      {sortedWorks.map((item, index) => {
        const isLast = index === WORKS.length - 1;
        return (
          <li key={item.text} className="relative list-group">
            <section className="flex gap-4 font-poppins items-start">
              <CheckCircle2 className="size-7 icon shrink-0 text-neutral-100" />
              <span className="flex-1 text text-neutral-100">{item.text}</span>
            </section>
            <Conditional condition={!isLast}>
              <span
                className="bar bg-brand-500 h-full w-[2px] absolute top-8 left-3 translate-x-1/2"
                role="presentation"
              />
            </Conditional>
          </li>
        );
      })}
    </ul>
  );
}
