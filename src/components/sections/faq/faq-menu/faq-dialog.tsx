import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";

interface FAQDialogProps {
  header: {
    text: string;
    icon: string;
  };
  isDialogOpen: boolean;
  handleDialog: () => void;
  faq: {
    question: string;
    answer: string;
  }[];
}

export function FAQDialog({
  header,
  isDialogOpen,
  handleDialog,
  faq,
}: FAQDialogProps) {
  return (
    <Dialog open={isDialogOpen}>
      <DialogContent
        className="bg-brand-950 h-screen p-0 max-w-full border-0 rounded-none sm:max-w-full"
        hideCloseButton
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{header.text}</DialogTitle>
          <DialogDescription>{header.text}</DialogDescription>
        </DialogHeader>
        <header className="bg-brand-500 py-4 px-6 flex justify-between items-center max-h-20">
          <div className="flex items-center gap-2 flex-1">
            <Image src={header.icon} alt={header.text} width={24} height={24} />
            <p className="font-martel font-bold text-sm text-white-50">
              {header.text}
            </p>
          </div>
          <DialogClose
            className="size-6 text-white cursor-pointer hover:text-brand-950 duration-500 transition-all ease-in-out"
            onClick={handleDialog}
          >
            <X />
          </DialogClose>
        </header>
        <ul className="py-8 px-6 flex gap-6 flex-col overflow-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-brand-400 scrollbar-thumb-rounded-full">
          {faq.map((item) => (
            <li key={item.question} className="flex flex-col gap-2">
              <h4 className="text-brand-300 font-martel font-bold">
                {item.question}
              </h4>
              <p className="text-neutral-200 text-sm">{item.answer}</p>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
