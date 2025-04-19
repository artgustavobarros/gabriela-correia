import Image from "next/image";
import { Container } from "./container";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Copyright } from "./copyright";

export function Footer() {
  return (
    <footer className="pt-20 pb-10">
      <Container className="flex flex-col gap-10">
        <div className="flex justify-between">
          <Image
            src="/logo-inverted-color.png"
            alt="Gabriel Cansação Advocacia e Consultoria Jurídica"
            width={217}
            height={56}
          />
          <Link
            href={
              "https://wa.me/5582999819612?text=Acabei%20de%20acessar%20teu%20projeto%2C%20achei%20massa"
            }
            className="text-brand-500 border border-brand-500 rounded-full px-6 py-3 font-bold hover:bg-brand-500 hover:text-white duration-500 ease-in-out"
          >
            Entre em contato
          </Link>
        </div>
        <Separator className="bg-neutral-200" />
        <div>
          <Copyright />
        </div>
      </Container>
    </footer>
  );
}
