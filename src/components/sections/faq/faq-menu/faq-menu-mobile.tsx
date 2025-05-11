"use client";
import { Button } from "@/components/ui/button";
import { FAQ_QUESTIONS, FAQ_THEMES } from "@/constants/faq";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FAQDialog } from "./faq-dialog";
import { useEffect, useState } from "react";
import { Conditional } from "@/components/conditional";
import { useScreen } from "@/hooks/use-screen";
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
    hidden: { opacity: 0, x: 220 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  opacity: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  },
};

export function FAQMenuMobile() {
  const [selectedFaq, setSelectedFaq] = useState<
    keyof typeof FAQ_QUESTIONS | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isMobile } = useScreen();

  function handleSelectFaqList(slug: keyof typeof FAQ_QUESTIONS) {
    setSelectedFaq(slug);
    setIsDialogOpen(true);
  }

  useEffect(() => {
    if (isMobile) setIsDialogOpen(false);
  }, [isMobile]);

  return (
    <>
      <div className="block sm:hidden">
        <motion.ul
          className="flex flex-col gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {FAQ_THEMES.map((item, index) => {
            const direction = index % 2 === 0 ? "right" : "left";
            return (
              <motion.li
                key={item.text}
                className="w-full"
                variants={direction === "right" ? items.left : items.right}
              >
                <Button
                  className={cn(
                    "flex gap-4 font-martel text-sm rounded-md text-white-50 border border-brand-500 items-center h-14 cursor-pointer w-full justify-start text-left hover:bg-brand-500 duration-500 ease-in-out max-w-full whitespace-normal",
                    selectedFaq === item.slug ? "bg-brand-500" : "bg-brand-800"
                  )}
                  onClick={() => handleSelectFaqList(item.slug)}
                >
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={24}
                    height={24}
                  />
                  <p className="">{item.text}</p>
                </Button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
      <Conditional condition={selectedFaq !== null}>
        <FAQDialog
          header={FAQ_THEMES.filter((item) => item.slug === selectedFaq)[0]}
          isDialogOpen={isDialogOpen}
          handleDialog={() => setIsDialogOpen(false)}
          faq={FAQ_QUESTIONS[selectedFaq!]}
        />
      </Conditional>
    </>
  );
}
