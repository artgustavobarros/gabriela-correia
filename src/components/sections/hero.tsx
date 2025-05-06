import Link from "next/link";
import { Container } from "../layout/container";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { TitleWithTag } from "../title-with-tag";
import * as motion from "motion/react-client";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const variants = {
  down: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  top: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  left: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  opacity: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  },
};

export function Hero() {
  return (
    <motion.div
      className="relative pt-20 bg-brand-950 overflow-hidden"
      id="hero"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="bg-black/40 w-full h-full absolute inset-0" />
      <motion.figure
        className="absolute bottom-0 z-[4] w-full"
        initial={{ opacity: 0.9, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/hero/hero-footer.png"
          width={1440}
          height={70}
          alt="footer fx"
          priority
          className="w-full"
        />
      </motion.figure>
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[5]"
        variants={variants.top}
      >
        <Link
          href={"#presentation"}
          className="size-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:scale-115 transition-all duration-500 ease-in-out cursor-pointer"
        >
          <ArrowDown className="text-white" />
        </Link>
      </motion.div>
      <Image
        src="/hero/hero-mobile.png"
        width={266}
        height={315}
        quality={100}
        alt="Gabriel Cansação"
        className="absolute bottom-0 w-full left-[30%] md:hidden"
        priority
      />

      <Container className="flex relative flex-col md:grid grid-cols-8 lg:grid-cols-12 min-h-[580px] ">
        <div className="flex flex-col gap-4 text-white md:flex-row col-span-4 pt-10 md:pt-20 lg:col-span-6 lg:pt-40">
          <div className="block md:hidden">
            <TitleWithTag
              orientation="vertical"
              textColor="text-white"
              tagBgColor="bg-brand-500"
              className="max-w-[340px]"
            >
              Garantindo seus direitos, protegendo sua integridade
            </TitleWithTag>
          </div>
          <motion.span
            className="bg-brand-500 w-8 h-[2px] hidden md:block mt-2"
            variants={variants.left}
          />
          <motion.div
            className="flex flex-col gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-martel font-bold text-2xl lg:text-4xl hidden md:block"
              variants={variants.down}
            >
              Garantindo seus direitos, protegendo sua integridade
            </motion.h2>
            <motion.p className="text-lg" variants={variants.down}>
              Especialista em Direito Médico e da Saúde
            </motion.p>
            <motion.div variants={variants.down}>
              <Link
                href={
                  "https://wa.me/5582999819612?text=Acabei%20de%20acessar%20teu%20projeto%2C%20achei%20massa"
                }
                className="cursor-pointer hover:bg-brand-400 duration-500 max-h-12 bg-brand-500 rounded-full py-3 px-6 ease-in-out w-2/3 max-w-[200px] text-center"
              >
                Entre em Contato
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="col-span-4 w-full hidden md:block relative lg:col-span-6 max-w-[400px]"
          variants={variants.opacity}
        >
          <figure className="absolute top-0 left-[20%] w-[400px] flex items-center justify-center">
            <Image
              src="/hero/hero-bg-center.png"
              width={150}
              height={400}
              quality={100}
              alt="Efeito visual de fundo"
              role="presentation"
              priority
            />
          </figure>
          <Image
            src="/hero/hero.png"
            width={400}
            height={400}
            quality={100}
            alt="Gabriel Cansação"
            priority
            className="absolute bottom-0 left-[20%] z-[2]"
          />

          <Image
            src="/hero/hero-bg-left.png"
            width={300}
            height={400}
            quality={100}
            alt="Gabriel Cansação imagem opaca à esquerda"
            priority
            className="absolute bottom-[0%] left-[-20%]"
          />
          <Image
            src="/hero/hero-bg-right.png"
            width={240}
            height={400}
            quality={100}
            alt="Gabriel Cansação imagem opaca à direita"
            priority
            className="absolute bottom-[-5%] left-[80%]"
          />
        </motion.div>
      </Container>
    </motion.div>
  );
}
