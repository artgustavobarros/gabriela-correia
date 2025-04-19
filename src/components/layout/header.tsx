import Image from "next/image";
import { Container } from "./container";
import Link from "next/link";
import { DialogHamburger } from "./dialog-hamburger";

const INTERNAL_LINKS = [
  {
    text: "Início",
    href: "#home",
  },
  {
    text: "Sobre",
    href: "#about",
  },
  {
    text: "Serviços",
    href: "#services",
  },
  {
    text: "Dúvidas",
    href: "#faq",
  },
  {
    text: "Entre em contato",
    href: "#contact",
  },
];

export function Header() {
  return (
    <header className="bg-black h-20 flex items-center justify-center fixed w-full z-50">
      <Container className="flex justify-between items-center">
        <Link href="#hero">
          <h1>
            <span className="sr-only">
              Gabriel Cansação Advocacia e Consultoria Jurídica
            </span>
            <Image
              src="/logo.png"
              alt="Gabriel Cansação Advocacia e Consultoria Jurídica"
              width={217}
              height={56}
            />
          </h1>
        </Link>
        <nav className="hidden lg:block">
          <ul className="text-white flex gap-1 h-20 items-center">
            {INTERNAL_LINKS.map((item) => {
              return item.href === "#contact" ? (
                <li key={item.href} className="">
                  <Link
                    href={
                      "https://wa.me/5582999819612?text=Acabei%20de%20acessar%20teu%20projeto%2C%20achei%20massa"
                    }
                    className="cursor-pointer hover:bg-brand-400 duration-500 ml-4 max-h-12 flex justify-center flex-col bg-brand-500 rounded-full py-3 px-6 ease-in-out"
                  >
                    {item.text}
                  </Link>
                </li>
              ) : (
                <li
                  key={item.href}
                  className="h-full flex justify-center flex-col relative group"
                >
                  <Link href={item.href} className="px-2 py-1">
                    {item.text}
                  </Link>
                  <span className="bg-white-50 w-full h-[3px] scale-0 absolute bottom-0 group-hover:scale-100 duration-500 " />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="lg:hidden block">
          <DialogHamburger links={INTERNAL_LINKS} />
        </div>
      </Container>
    </header>
  );
}
