"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_QUESTIONS, FAQ_THEMES } from "@/constants/faq";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
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
};

export function FAQMenuDesktop() {
  const [selectedFaq, setSelectedFaq] =
    useState<keyof typeof FAQ_QUESTIONS>("acoes");

  function changeFaqList(value: keyof typeof FAQ_QUESTIONS) {
    setSelectedFaq(value);
  }

  return (
    <div className="grid-cols-10 hidden lg:grid">
      <ul className="flex flex-col gap-4 col-span-4">
        {FAQ_THEMES.map((item) => (
          <li key={item.text}>
            <Button
              className={cn(
                "flex gap-4 font-martel text-sm rounded-md text-white-50 border border-brand-500 p-4 items-center h-14 cursor-pointer w-full justify-start hover:bg-brand-500 duration-500 ease-in-out whitespace-normal text-left",
                selectedFaq === item.slug ? "bg-brand-500" : "bg-brand-800"
              )}
              onClick={() => changeFaqList(item.slug)}
            >
              <Image src={item.icon} alt={item.text} width={24} height={24} />
              <span>{item.text}</span>
            </Button>
          </li>
        ))}
      </ul>
      <motion.div
        className="col-start-6 col-span-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
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
    </div>
  );
}
