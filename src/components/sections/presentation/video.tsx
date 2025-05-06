import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play, X } from "lucide-react";
import Image from "next/image";

export function Video() {
  return (
    <div className="min-w-full">
      <Dialog>
        <DialogTrigger className="cursor-pointer min-w-full flex items-center justify-center overflow-hidden rounded-lg">
          <div className="rounded-md overflow-hidden relative group hover:scale-110 duration-500 ease-in-out">
            <Image
              src="/video-background.png"
              alt="Video Background"
              width={595}
              height={388}
              className="aspect-video object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="bg-white/10 backdrop-blur-md size-[72px] rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-[11] text-white group-hover:text-brand-500 duration-300 transition-all">
              <Play />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent
          hideCloseButton
          className="bg-white border-none scale-150 flex items-center justify-center "
        >
          <DialogHeader className="sr-only">
            <DialogTitle>
              Gabriel Cansação Advocacia e Consultoria Jurídica vídeo de
              exibição
            </DialogTitle>
            <DialogDescription>
              Gabriel Cansação Advocacia e Consultoria Jurídica vídeo de
              exibição
            </DialogDescription>
          </DialogHeader>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Q2jwQPfOLoE?si=_RkaQcbd_pbKgd3X"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-md"
          />
          <DialogClose className="absolute rounded-full bg-white/10 backdrop-blur-md size-9 flex items-center justify-center -top-12 -right-12 cursor-pointer hover:scale-125 duration-500 ease-in-out group">
            <X className="size-3 text-white group-hover:text-brand-300 duration-500 ease-in-out" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
