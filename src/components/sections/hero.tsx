import Link from "next/link";
import { Container } from "../layout/container";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { TitleWithTag } from "../title-with-tag";

export function Hero() {
  return (
    <div
      className="relative pt-20 bg-brand-950 min-h-[580px] overflow-hidden"
      id="hero"
    >
      <div className="bg-black/40 w-full h-full absolute inset-0" />
      <Image
        src="/hero/hero-footer.png"
        width={1440}
        height={70}
        alt="footer fx"
        className="absolute bottom-0 z-[10]"
      />
      <Link
        href={"#presentation"}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 size-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:scale-115 transition-all duration-500 ease-in-out z-[5]"
      >
        <ArrowDown className="text-white" />
      </Link>
      <Image
        src="/hero/hero-responsive.png"
        width={266}
        height={315}
        alt="Gabriel Cansação"
        className="absolute bottom-0 w-full left-[30%] sm:hidden"
        priority
      />
      <Container className="flex pt-10 relative z-[5] flex-col">
        <div className="flex flex-col gap-4 text-white sm:flex-row">
          <div className="block sm:hidden">
            <TitleWithTag
              orientation="vertical"
              textColor="text-white"
              tagBgColor="bg-brand-500"
            >
              Garantindo seus direitos, protegendo sua integridade
            </TitleWithTag>
          </div>
          <span className="bg-brand-500 w-8 h-[2px] hidden sm:block mt-2" />
          <div className="flex flex-col gap-8">
            <h2 className="font-martel font-bold text-2xl hidden sm:block">
              Garantindo seus direitos, protegendo sua integridade
            </h2>
            <p className="text-sm">Especialista em Direito Médico e da Saúde</p>
            <Link
              href={
                "https://wa.me/5582999819612?text=Acabei%20de%20acessar%20teu%20projeto%2C%20achei%20massa"
              }
              className="cursor-pointer hover:bg-brand-400 duration-500 max-h-12 bg-brand-500 rounded-full py-3 px-6 ease-in-out w-2/3 max-w-[200px] text-center"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
