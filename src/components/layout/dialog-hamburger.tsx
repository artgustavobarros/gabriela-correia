"use client";
import Hamburger from "hamburger-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import Link from "next/link";

interface DialogHamburgerProps {
  links: {
    text: string;
    href: string;
  }[];
}

export function DialogHamburger({ links }: DialogHamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog modal={false} open={isOpen}>
      <DialogTrigger asChild className="text-red-500">
        <Hamburger
          color="white"
          rounded
          size={32}
          direction="right"
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </DialogTrigger>
      <DialogContent
        hideCloseButton
        resetPosition
        className="top-20 right-0 h-full rounded-none border-none p-0 min-w-full w-full grid grid-cols-12 grid-rows-1 gap-0"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Menu de navegação</DialogTitle>
          <DialogDescription>Menu de navegação</DialogDescription>
        </DialogHeader>
        <div className="bg-black/40 col-span-7"></div>
        <nav className="col-span-5 bg-neutral-950 h-full">
          <ul className="p-10 flex flex-col gap-6 ">
            {links.map((item) => {
              return item.href === "#contact" ? (
                <li key={item.href}>
                  <Link
                    href={
                      "https://wa.me/5582999819612?text=Acabei%20de%20acessar%20teu%20projeto%2C%20achei%20massa"
                    }
                    className="text-brand-300 border rounded-lg py-2 px-4 font-poppins text-xl hover:text-white-50 duration-500 ease-in-out transition-all hover:bg-brand-500 hover:border-brand-500 fixed bottom-8 right-18"
                  >
                    {item.text}
                  </Link>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-800 font-poppins text-xl hover:text-white-50 duration-500 ease-in-out transition-all"
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </DialogContent>
    </Dialog>
  );
}
