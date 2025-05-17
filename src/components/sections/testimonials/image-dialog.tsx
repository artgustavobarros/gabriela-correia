import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";

export function ImageDialog({ index }: { index: number }) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <div className="relative max-h-[400px] group rounded-lg">
          <Image
            src={`/testimonials/depoimentos-${index + 1}.jpg`}
            alt={`Depoimento número ${index + 1}`}
            width={300}
            height={400}
            className="rounded-lg object-cover group-hover:scale-125 duration-500 ease-in-out"
          />
          <div className="bg-white rounded-full text-brand-500 absolute left-1/2 -translate-x-1/2 bottom-2 py-2 px-6 z-[1] font-martel font-bold group-hover:bg-brand-500 group-hover:text-white duration-500 ease-in-out transition-all">
            Visualizar
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        hideCloseButton
        className="bg-transparent border-none flex items-center justify-center"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{`Depoimento número ${index + 1}`}</DialogTitle>
          <DialogDescription>{`Depoimento número ${
            index + 1
          }`}</DialogDescription>
        </DialogHeader>
        <Image
          src={`/testimonials/depoimentos-${index + 1}.jpg`}
          alt={`Depoimento número ${index + 1}`}
          width={300}
          height={400}
          className="rounded-lg"
        />
        <DialogClose className="absolute rounded-full bg-white/10 backdrop-blur-md size-9 flex items-center justify-center -top-8 right-12 cursor-pointer hover:scale-125 duration-500 ease-in-out group">
          <X className="size-4 text-white group-hover:text-brand-300 duration-500 ease-in-out" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
