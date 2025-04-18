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
      <DialogTrigger>
        <div className="relative max-h-[400px]">
          <Image
            src={`/testimonials/depoimento-${index + 1}.png`}
            alt={`Depoimento número ${index + 1}`}
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div className="bg-white rounded-full text-brand-500 absolute left-1/2 -translate-x-1/2 bottom-2 py-2 px-6 z-[1] font-martel font-bold">
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
          src={`/testimonials/depoimento-${index + 1}.png`}
          alt={`Depoimento número ${index + 1}`}
          width={300}
          height={400}
          className="rounded-lg"
        />
        <DialogClose className="absolute rounded-full bg-white/10 backdrop-blur-md size-9 flex items-center justify-center -top-8 right-12 cursor-pointer">
          <X className="size-3 text-white" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
