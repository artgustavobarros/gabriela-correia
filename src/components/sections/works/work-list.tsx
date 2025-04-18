"use client";
import { Conditional } from "@/components/conditional";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const WORKS = [
  "Contato inicial para análise perfunctória da viabilidade do processo/demanda",
  "Reunião comercial, onde também já são solicitados todos os documentos necessários para a prestação do serviço, bem como definidas as condições contratuais (honorários)",
  "Reunidos todos os documentos, o processo é protocolado na justiça, e eu sempre faço questão de ir despachar pessoalmente com o juiz",
  "Durante todo o trâmite do processo, o cliente tem livre acesso ao whatsapp do escritório para tirar dúvidas",
  "Toda movimentação relevante que ocorre nos processos, informo prontamente aos clientes",
  "Em casos onde seja necessária marcação de audiência, sempre marco uma reunião com o cliente para alinhar a estratégia a ser usada",
  "Máxima agilidade na execução dos julgados, para que o que foi decidido pelo juíz se concretize rapidamente no mundo dos fatos",
];

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
        gsap.set(bar, { backgroundColor: "#e7e7e7" });

        gsap.to(iconAndText, {
          color: "#0f172a",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(bar, {
          backgroundColor: "#0f172a",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { dependencies: [ref], revertOnUpdate: true, scope: ref }
  );

  return (
    <ul className="flex flex-col gap-10 relative pl-8" ref={ref}>
      {WORKS.map((item, index) => {
        const isLast = index === WORKS.length - 1;
        return (
          <li key={item} className="relative list-group">
            <section className="flex gap-4 font-poppins items-start">
              <CheckCircle2 className="size-7 icon shrink-0 text-neutral-100" />
              <span className="flex-1 text text-neutral-100">{item}</span>
            </section>
            <Conditional condition={!isLast}>
              <span
                className="bar bg-neutral-100 h-full w-[2px] absolute top-8 left-3 translate-x-1/2"
                role="presentation"
              />
            </Conditional>
          </li>
        );
      })}
    </ul>
  );
}
