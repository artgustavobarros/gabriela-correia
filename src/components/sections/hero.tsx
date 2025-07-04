import Link from "next/link";
import { Container } from "../layout/container";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { TitleWithTag } from "../title-with-tag";
import * as motion from "motion/react-client";
import {
  staggerChildrens,
  staggerContainer,
} from "@/constants/animations/animations";

export function Hero() {
  return (
    <motion.div
      className="relative pt-20 bg-brand-950 overflow-hidden h-[600px] md:h-[745px]"
      id="hero"
      variants={staggerContainer}
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
        variants={staggerChildrens.toTop}
      >
        <Link
          href={"#presentation"}
          className="size-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:scale-115 transition-all duration-500 ease-in-out cursor-pointer group"
        >
          <ArrowDown className="text-white group-hover:text-brand-500 duration-500 transition-all" />
        </Link>
      </motion.div>
      <motion.figure
        className="absolute bottom-0 left-[30%] md:hidden w-full"
        variants={staggerChildrens.fromOpacity}
      >
        <Image
          src="/hero/hero-mobile.png"
          width={266}
          height={315}
          quality={100}
          alt="Gabriela Correia"
          className="w-full"
          priority
        />
      </motion.figure>
      <Container className="relative h-full w-full">
        <div className="flex flex-col gap-4 text-white md:flex-row pt-10 md:pt-20 lg:pt-40 absolute max-w-[430px] z-10">
          <div className="block md:hidden">
            <TitleWithTag
              orientation="vertical"
              textColor="text-white"
              tagBgColor="bg-brand-500"
              className="max-w-[340px]"
              tagVariants={staggerChildrens.fromLeft}
              textVariants={staggerChildrens.toDown}
            >
              Garantindo seus direitos, protegendo sua integridade
            </TitleWithTag>
          </div>
          <motion.span
            className="bg-brand-500 w-20 h-[2px] hidden md:block mt-3"
            variants={staggerChildrens.fromLeft}
          />
          <div className="flex flex-col gap-8">
            <motion.h2
              className="font-martel font-bold text-2xl lg:text-4xl hidden md:block"
              variants={staggerChildrens.toDown}
            >
              Garantindo seus direitos, protegendo sua integridade
            </motion.h2>
            <motion.p className="text-lg" variants={staggerChildrens.toDown}>
              Especialista em Direito Médico e da Saúde
            </motion.p>
            <motion.div variants={staggerChildrens.toDown}>
              <Link
                href={
                  "https://wa.me/5582999819612?text=Acabei%20de%20acessar%20teu%20projeto%2C%20achei%20massa"
                }
                className="cursor-pointer hover:bg-brand-400 duration-500 max-h-12 bg-brand-500 rounded-full py-3 px-6 ease-in-out w-2/3 max-w-[200px] text-center"
              >
                Entre em Contato
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.figure
          className="ml-auto w-full hidden md:block h-full"
          variants={staggerChildrens.fromOpacity}
        >
          <Image
            src="/hero/hero.png"
            fill
            quality={100}
            alt="Gabriela Correia"
            priority
            className="absolute z-[2] w-full h-auto object-cover"
          />
        </motion.figure>
      </Container>
    </motion.div>
  );
}
