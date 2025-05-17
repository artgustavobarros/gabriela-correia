import Image from "next/image";
import { Container } from "./container";
import Link from "next/link";
import { DialogHamburger } from "./dialog-hamburger";
import * as motion from "motion/react-client";
import {
  staggerChildrens,
  staggerContainer,
} from "@/constants/animations/animations";

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Header() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.header
        className="bg-black h-20 flex items-center justify-center fixed w-full z-50"
        variants={staggerChildrens.toTop}
      >
        <Container className="flex justify-between items-center">
          <motion.div variants={staggerChildrens.toTop}>
            <Link href="#hero">
              <h1>
                <span className="sr-only">
                  Gabriela Correia Advocacia e Consultoria Jurídica
                </span>
                <div className="w-[187px] h-12 md:w-full md:h-auto">
                  <Image
                    src="/logo.png"
                    alt="Gabriela Correia Advocacia e Consultoria Jurídica"
                    width={217}
                    height={56}
                  />
                </div>
              </h1>
            </Link>
          </motion.div>
          <nav className="hidden lg:block">
            <ul className="text-white flex gap-1 h-20 items-center">
              {INTERNAL_LINKS.map((item, index) => {
                return item.href === "#contact" ? (
                  <motion.li
                    key={item.href}
                    className=""
                    variants={staggerChildrens.toTop}
                  >
                    <Link
                      href={
                        "https://wa.me/5582999819612?text=Acabei%20de%20acessar%20teu%20projeto%2C%20achei%20massa"
                      }
                      className="cursor-pointer hover:bg-brand-400 duration-500 ml-4 max-h-12 flex justify-center flex-col bg-brand-500 rounded-full py-3 px-6 ease-in-out"
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ) : (
                  <motion.li
                    key={item.href}
                    className="h-full flex justify-center flex-col relative group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.5,
                    }}
                  >
                    <Link href={item.href} className="px-2 py-1">
                      {item.text}
                    </Link>
                    <span className="bg-white-50 w-full h-[3px] scale-0 absolute bottom-0 group-hover:scale-100 duration-500 " />
                  </motion.li>
                );
              })}
            </ul>
          </nav>
          <motion.div
            className="lg:hidden block"
            variants={staggerChildrens.toTop}
          >
            <DialogHamburger links={INTERNAL_LINKS} />
          </motion.div>
        </Container>
      </motion.header>
    </motion.div>
  );
}
