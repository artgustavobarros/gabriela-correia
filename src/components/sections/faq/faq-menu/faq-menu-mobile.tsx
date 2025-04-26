"use client";
import { Button } from "@/components/ui/button";
import { FAQ_QUESTIONS, FAQ_THEMES } from "@/constants/faq";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FAQDialog } from "./faq-dialog";
import { useEffect, useState } from "react";
import { Conditional } from "@/components/conditional";
import { useScreen } from "@/hooks/use-screen";

export function FAQMenuMobile() {
  const [selectedFaq, setSelectedFaq] = useState<
    keyof typeof FAQ_QUESTIONS | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isTablet } = useScreen();

  function handleSelectFaqList(slug: keyof typeof FAQ_QUESTIONS) {
    setSelectedFaq(slug);
    setIsDialogOpen(true);
  }

  useEffect(() => {
    if (isTablet) setIsDialogOpen(false);
  }, [isTablet]);

  return (
    <>
      <div className="block md:hidden">
        <ul className="flex flex-col gap-4">
          {FAQ_THEMES.map((item) => (
            <li key={item.text} className="w-full">
              <Button
                className={cn(
                  "flex gap-4 font-martel text-sm rounded-md text-white-50 border border-brand-500 items-center h-14 cursor-pointer w-full justify-start text-left hover:bg-brand-500 duration-500 ease-in-out max-w-full whitespace-normal",
                  selectedFaq === item.slug ? "bg-brand-500" : "bg-brand-800"
                )}
                onClick={() => handleSelectFaqList(item.slug)}
              >
                <Image src={item.icon} alt={item.text} width={24} height={24} />
                <p className="">{item.text}</p>
              </Button>
            </li>
          ))}
        </ul>
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
