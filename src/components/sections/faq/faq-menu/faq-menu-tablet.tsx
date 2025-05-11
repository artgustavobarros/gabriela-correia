"use client";
import { Button } from "@/components/ui/button";
import { FAQ_QUESTIONS, FAQ_THEMES } from "@/constants/faq";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Fragment, useState } from "react";
import { motion } from "motion/react";

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
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
  opacity: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  },
};

export function FAQMenuTablet() {
  const [selectedFaq, setSelectedFaq] =
    useState<keyof typeof FAQ_QUESTIONS>("acoes");
  return (
    <>
      <motion.div
        className="hidden sm:block lg:hidden absolute max-w-screen"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={items.right}>
          <Swiper slidesPerView={2.3} spaceBetween={16}>
            {FAQ_THEMES.map((item) => (
              <SwiperSlide key={item.slug}>
                <Button
                  className={cn(
                    "flex gap-4 font-martel text-sm rounded-md text-white-50 border border-brand-500 p-4 items-center h-14 cursor-pointer w-full justify-start hover:bg-brand-500 duration-500 ease-in-out whitespace-normal text-left",
                    selectedFaq === item.slug ? "bg-brand-500" : "bg-brand-800"
                  )}
                  onClick={() => setSelectedFaq(item.slug)}
                >
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={24}
                    height={24}
                  />
                  <span>{item.text}</span>
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-24 hidden sm:block lg:hidden"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible>
          {FAQ_QUESTIONS[selectedFaq].map((item, index) => {
            const isFirst = index === 0;
            return (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-brand-900"
              >
                <motion.div variants={items.down}>
                  <AccordionTrigger
                    duration={500}
                    className={cn(
                      "data-[state=open]:text-brand-300 data-[state=open]:font-bold font-martel text-xl hover:no-underline text-white-50 hover:text-brand-300 [&>svg]:text-brand-500 [&>svg]:size-8 [&[data-state=open]>svg]:text-white [&[data-state=open]>svg]:bg-brand-500 [&[data-state=open]>svg]:rounded-full [&>svg]:p-1 cursor-pointer",
                      isFirst ? "pt-0" : ""
                    )}
                  >
                    {item.question}
                  </AccordionTrigger>
                </motion.div>
                <AccordionContent className="text-neutral-200 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </motion.div>
    </>
  );
}
