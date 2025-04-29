import Image from "next/image";
import { Container } from "../layout/container";
import { TitleWithTag } from "../title-with-tag";

export function About() {
  return (
    <section className="bg-brand-950 aspect-video" id="about">
      <Container className="pt-10 md:pt-20 lg:pt-40 flex flex-col gap-10 items-center">
        <TitleWithTag
          orientation="vertical"
          textColor="text-white"
          tagBgColor="bg-brand-500"
          className="items-center w-[580px] text-center"
        >
          Conheça mais quem irá defender seus interesses e garantir seus
          direitos.
        </TitleWithTag>
        <div className="relative h-[512px] lg:h-[612px] w-full">
          <span className="font-martel text-sm md:text-lg text-white/52 absolute left-[20%] top-[20%] md:top-[10%] w-[200px] text-center -translate-x-1/2">
            Conhecedor dos atalhos da justiça
          </span>
          <span className="font-martel text-sm md:text-lg text-white/52 absolute left-[30%] top-[40%] w-[260px] text-center -translate-x-1/2">
            Senso de justiça
          </span>
          <span className="font-martel text-sm md:text-lg text-white/52 absolute left-[15%] top-[60%] w-[260px] text-center -translate-x-1/2">
            Conhecedor do sistema suplementar de saúde
          </span>
          <span className="font-martel text-sm md:text-lg text-white/52 absolute right-[20%] top-[20%] md:top-[10%] w-[260px] text-center translate-x-1/2">
            Sempre em busca de soluções inovadoras
          </span>
          <span className="font-martel text-sm md:text-lg text-white/52 absolute right-[30%] top-[45%] w-[260px] text-center translate-x-1/2">
            Empático
          </span>
          <span className="font-martel text-sm md:text-lg text-white/52 absolute right-[15%] top-[60%] w-[260px] text-center translate-x-1/2">
            Comunicativo
          </span>
          <Image
            src="/about/about.png"
            alt="Gabriel Cansação Advocacia e Consultoria Jurídica"
            width={849}
            height={532}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2]"
          />
        </div>
      </Container>
    </section>
  );
}
