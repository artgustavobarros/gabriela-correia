import Image from "next/image";
import { Container } from "../layout/container";
import { TitleWithTag } from "../title-with-tag";

export function About() {
  return (
    <section className="bg-brand-950 aspect-video" id="about">
      <Container className="pt-10 md:pt-20 lg:pt-40 flex flex-col gap-10 items-center">
        <header>
          <div className="hidden sm:block">
            <TitleWithTag
              orientation="vertical"
              textColor="text-white"
              tagBgColor="bg-brand-500"
              className="items-center w-[580px] text-center"
            >
              Conheça mais quem irá defender seus interesses e garantir seus
              direitos.
            </TitleWithTag>
          </div>
          <div className="sm:hidden">
            <TitleWithTag
              orientation="vertical"
              textColor="text-white"
              tagBgColor="bg-brand-500"
            >
              Conheça mais quem irá defender seus interesses e garantir seus
              direitos.
            </TitleWithTag>
          </div>
        </header>
        <div className="relative h-[300px] sm:h-[512px] lg:h-[612px] w-full">
          <span className="font-martel text-sm md:text-lg text-white/52 absolute top-[10%] left-[30%] sm:left-[20%] sm:top-[20%] md:top-[10%] w-[200px] text-center -translate-x-1/2 hidden sm:block">
            Conhecedor dos atalhos da justiça
          </span>
          <span className="font-martel text-sm md:text-lg text-white/52 absolute top-[30%] left-[25%] sm:left-[30%] sm:top-[40%] w-[260px] text-center -translate-x-1/2 hidden sm:block">
            Senso de justiça
          </span>
          <span className="font-martel sm:text-sm md:text-lg text-white/52 absolute top-[50%] left-[25%] sm:left-[15%] sm:top-[60%] w-[200px] sm:w-[260px] text-center -translate-x-1/2 hidden sm:block">
            Conhecedor do sistema suplementar de saúde
          </span>
          <span className="font-martel text-sm md:text-lg text-white/52 absolute right-[20%] top-[20%] md:top-[10%] w-[260px] text-center translate-x-1/2 hidden sm:block">
            Sempre em busca de soluções inovadoras
          </span>
          <span className="font-martel text-sm md:text-lg text-white/52 absolute top-[40%] sm:right-[30%] sm:top-[45%] w-[260px] text-center translate-x-1/2 hidden sm:block">
            Empático
          </span>
          <span className="font-martel text-sm md:text-lg text-white/52 absolute right-[15%] top-[60%] w-[260px] text-center translate-x-1/2 hidden sm:block">
            Comunicativo
          </span>
          <Image
            src="/about/about.png"
            alt="Gabriela Correia Advocacia e Consultoria Jurídica"
            width={849}
            height={532}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2]"
          />
        </div>
      </Container>
    </section>
  );
}
