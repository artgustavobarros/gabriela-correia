import Image from "next/image";
import { Container } from "./container";
import Link from "next/link";

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
    text: "Fale Conosco",
    href: "#contact",
  },
];

export function Header() {
  return (
    <header className="bg-black h-20 flex items-center justify-center">
      <Container className="flex justify-between items-center">
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
        <nav>
          <ul className="text-white flex gap-1">
            {INTERNAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="px-2 py-1">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
