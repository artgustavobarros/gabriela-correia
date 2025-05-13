"use client";
import Image from "next/image";
import { Container } from "../../layout/container";
import { TitleWithTag } from "../../title-with-tag";
import { motion, useScroll, useTransform } from "motion/react";
import { FloatingSpan } from "./floating-span";
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const items = {
  down: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  top: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  left: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  right: {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  opacity: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  },
};

const spans = [
  {
    text: "Conhecedor dos atalhos da justiça",
    className:
      "top-[10%] left-[30%] sm:left-[20%] sm:top-[20%] md:top-[10%] w-[200px] -translate-x-1/2",
  },
  {
    text: "Senso de justiça",
    className:
      "top-[30%] left-[25%] sm:left-[30%] sm:top-[40%] w-[260px] -translate-x-1/2",
  },
  {
    text: "Conhecedor do sistema suplementar de saúde",
    className:
      "top-[50%] left-[25%] sm:left-[15%] sm:top-[60%] w-[200px] sm:w-[260px] -translate-x-1/2",
  },
  {
    text: "Sempre em busca de soluções inovadoras",
    className: "right-[20%] top-[20%] md:top-[10%] w-[260px] translate-x-1/2",
  },
  {
    text: "Empático",
    className:
      "top-[40%] sm:right-[30%] sm:top-[45%] w-[260px] translate-x-1/2",
  },
  {
    text: "Comunicativo",
    className: "right-[15%] top-[60%] w-[260px] translate-x-1/2",
  },
];

export function About() {
  const ref = useRef(null);
  const MotionImage = motion(Image);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  return (
    <motion.section
      className="bg-brand-950 overflow-hidden"
      id="about"
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true, amount: 0.6 }}
      ref={ref}
    >
      <Container className="pt-10 lg:pt-20 flex flex-col gap-10 items-center">
        <header>
          <div className="hidden sm:block">
            <TitleWithTag
              orientation="vertical"
              textColor="text-white"
              tagBgColor="bg-brand-500"
              className="items-center w-[580px] text-center"
              tagVariants={items.left}
              textVariants={items.down}
            >
              Conheça mais quem irá defender seus interesses e garantir seus
              direitos.
            </TitleWithTag>
          </div>
          <div className="sm:hidden">
            <TitleWithTag
              orientation="vertical"
              textColor="text-white"
              tagBgColor="bg-brand-500"
              tagVariants={items.left}
              textVariants={items.down}
            >
              Conheça mais quem irá defender seus interesses e garantir seus
              direitos.
            </TitleWithTag>
          </div>
        </header>
        <div className="relative h-[300px] sm:h-[512px] lg:h-[612px] w-full">
          {spans.map((item, index) => {
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <FloatingSpan
                key={item.text}
                text={item.text}
                className={item.className}
                variants={direction === "left" ? items.left : items.right}
              />
            );
          })}
          <MotionImage
            style={{ scale }}
            src="/about/about.png"
            alt="Gabriela Correia Advocacia e Consultoria Jurídica"
            width={849}
            height={532}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2]"
          />
        </div>
      </Container>
    </motion.section>
  );
}
