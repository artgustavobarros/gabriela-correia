import Image from "next/image";
import { Container } from "../layout/container";
import { TitleWitTag } from "../title-with-tag";

export function About() {
  return (
    <section className="bg-brand-950">
      <Container className="pt-40 flex flex-col gap-10 items-center">
        <TitleWitTag
          text="Conheça mais quem irá defender seus interesses e garantir seus direitos."
          orientation="vertical"
          color="inverted"
          className="items-center w-[580px] text-center"
        />
        <div className="relative h-[618px] w-full">
          <span className="font-martel text-lg text-white/52 absolute left-40 w-[200px] text-center">
            Conhecedor dos atalhos da justiça
          </span>
          <span className="font-martel text-lg text-white/52 absolute left-80 top-40 w-[260px] text-center">
            Senso de justiça
          </span>
          <span className="font-martel text-lg text-white/52 absolute left-30 top-1/2 w-[260px] text-center">
            Conhecedor do sistema suplementar de saúde
          </span>
          <span className="font-martel text-lg text-white/52 absolute right-40 w-[260px] text-center">
            Sempre em busca de soluções inovadoras
          </span>
          <span className="font-martel text-lg text-white/52 absolute right-80 top-45 w-[260px] text-center">
            Empático
          </span>
          <span className="font-martel text-lg text-white/52 absolute right-30 top-1/2 w-[260px] text-center">
            Comunicativo
          </span>
          <Image
            src="/about/about.png"
            alt="Gabriel Cansação Advocacia e Consultoria Jurídica"
            width={849}
            height={532}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>
      </Container>
    </section>
  );
}
