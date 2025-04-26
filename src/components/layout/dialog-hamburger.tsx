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
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useScreen } from "@/hooks/use-screen";

interface DialogHamburgerProps {
  links: {
    text: string;
    href: string;
  }[];
}

export function DialogHamburger({ links }: DialogHamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const { isMobile, isDesktop } = useScreen();

  function handleClickOnNavLink() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickNavOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        isOpen &&
        !navRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      )
        setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickNavOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickNavOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  return (
    <Dialog modal={false} open={isOpen}>
      <DialogTrigger asChild>
        <div ref={buttonRef}>
          <Hamburger
            color="white"
            rounded
            size={isMobile ? 24 : 32}
            direction="right"
            toggled={isOpen}
            toggle={setIsOpen}
            label="Abrir menu"
          />
        </div>
      </DialogTrigger>
      <DialogContent
        hideCloseButton
        resetPosition
        className="top-20 right-0 h-full rounded-none border-none p-0 min-w-full w-full gap-0 group data-[state=open]:animate-in data-[state=closed]:animate-out duration-500 flex"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Menu de navegação</DialogTitle>
          <DialogDescription>Menu de navegação</DialogDescription>
        </DialogHeader>
        <div className="bg-black/40 w-1/4 md:w-2/3 group-data-[state=open]:animate-in group-data-[state=closed]:animate-out group-data-[state=open]:fade-in group-data-[state=closed]:fade-out duration-500 ease-in-out"></div>
        <nav
          className="w-3/4 md:w-1/3 bg-neutral-950 h-full duration-500 ease-in-out group-data-[state=open]:animate-in group-data-[state=closed]:animate-out group-data-[state=open]:slide-in-from-right group-data-[state=closed]:slide-out-to-right"
          ref={navRef}
        >
          <ul className="p-10 flex flex-col gap-6 relative h-full">
            {links.map((item) => {
              return item.href === "#contact" ? (
                <li key={item.href}>
                  <Link
                    href={
                      "https://wa.me/5582999819612?text=Acabei%20de%20acessar%20teu%20projeto%2C%20achei%20massa"
                    }
                    className="text-brand-300 border rounded-lg py-2 px-4 font-poppins md:text-xl hover:text-white-50 duration-500 ease-in-out transition-all hover:bg-brand-500 hover:border-brand-500 absolute bottom-28 left-1/2 -translate-x-1/2 text-base truncate"
                    onClick={handleClickOnNavLink}
                  >
                    {item.text}
                  </Link>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-800 font-poppins text-xl hover:text-white-50 duration-500 ease-in-out transition-all"
                    onClick={handleClickOnNavLink}
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
