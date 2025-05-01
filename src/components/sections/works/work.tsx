import { WORKS } from "@/constants/works";
import { Container } from "../../layout/container";
import { TitleWithTag } from "../../title-with-tag";
import { WorkList } from "./work-list";
import { CheckCircle2 } from "lucide-react";
import { WorkSwiper } from "./work-swiper";

export function Work() {
  const sortedWorks = WORKS.sort((a, b) => a.tabletOrder - b.tabletOrder);
  return (
    <section>
      <div className="hidden lg:block">
        <Container grid className="py-40">
          <header className="col-start-2 col-span-3">
            <TitleWithTag
              orientation="vertical"
              textColor="text-gray-950"
              tagBgColor="bg-brand-500"
            >
              Como funciona o nosso trabalho
            </TitleWithTag>
          </header>
          <div className="col-start-6 col-span-6">
            <WorkList />
          </div>
        </Container>
      </div>
      <Container className="lg:hidden py-20 flex flex-col gap-10">
        <header>
          <div className="hidden md:block">
            <TitleWithTag
              orientation="vertical"
              className="items-center"
              textColor="text-gray-950"
              tagBgColor="bg-brand-500"
            >
              Como funciona o nosso trabalho
            </TitleWithTag>
          </div>
          <div className="md:hidden">
            <TitleWithTag
              orientation="vertical"
              className=""
              textColor="text-gray-950"
              tagBgColor="bg-brand-500"
            >
              Como funciona o nosso trabalho
            </TitleWithTag>
          </div>
        </header>
        <ul className="grid-cols-2 gap-16 hidden sm:grid">
          {sortedWorks.map((item) => (
            <li key={item.text} className="flex gap-5">
              <CheckCircle2 className="size-7 icon shrink-0 text-brand-500" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="block sm:hidden">
          <WorkSwiper />
        </div>
      </Container>
    </section>
  );
}
