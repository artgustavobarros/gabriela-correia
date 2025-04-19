import Link from "next/link";
import { Container } from "../layout/container";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-[675px] pt-20" id="hero">
      <section className="bg-brand-950 text-white flex items-center overflow-hidden h-full">
        <Container grid>
          <div className="col-span-4 flex gap-3 justify-center">
            <span className="block bg-brand-500 min-w-10 h-1 mt-2" />
            <div>
              <h2 className="font-martel font-bold text-4xl">
                Garantindo seus direitos, protegendo sua integridade.
              </h2>
              <p className="text-lg mt-6 mb-10">
                Especialista em Direito Médico e da Saúde
              </p>
              <Link
                href={
                  "https://wa.me/5582999819612?text=Acabei%20de%20acessar%20teu%20projeto%2C%20achei%20massa"
                }
                className="bg-brand-500 rounded-full py-3 px-6 hover:bg-brand-400 duration-300 ease-in-out"
              >
                Entre em contato
              </Link>
            </div>
          </div>
          <div className="col-start-8 col-span-full relative">
            <Image
              src="/hero/hero-bg-left.png"
              alt="Hero background left fx"
              width={461}
              height={588}
              className="absolute -left-60 -top-full translate-y-25 z-[1] opacity-50"
            />
            <Image
              src="/hero/hero-bg-center.png"
              alt="Hero background center fx"
              width={261}
              height={745}
              className="absolute left-1/2 -translate-x-1/2 -top-full z-0"
            />
            <Image
              src="/hero/hero-bg-right.png"
              alt="Hero background right fx"
              width={461}
              height={588}
              className="absolute left-1/2 -top-full z-[1] opacity-50"
            />
            <Image
              src="/hero/hero.png"
              alt="Gabriel Cansação Advocacia e Consultoria Jurídica"
              width={541}
              height={625}
              className="absolute left-1/2 -translate-x-1/2 -top-full translate-y-20 z-[2]"
            />
          </div>
        </Container>
      </section>
      <Image
        src="/hero/hero-footer.png"
        alt="Hero footer fx"
        width={1440}
        height={70}
        className="absolute bottom-0 left-0 w-full z-[2]"
      />
      <Link
        href="#presentation"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full size-12 bg-white/10 flex items-center justify-center cursor-pointer z-[5] hover:scale-125 duration-500 ease-in-out group"
      >
        <ArrowDown className="text-white size-4 group-hover:text-brand-300 duration-500 ease-in-out" />
      </Link>
    </div>
  );
}
