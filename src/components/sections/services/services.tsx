import Image from "next/image";
import { TitleWithTag } from "../../title-with-tag";
import { Container } from "../../layout/container";
import { ServiceItem } from "./service-item";
import { SERVICES } from "@/constants/services";
import { ServicesSwiper } from "./services-swiper";

export function Services() {
  return (
    <section className="relative pb-20" id="services">
      <Image
        src="/services/services.png"
        alt="Gabriel Cansação"
        width={285}
        height={387}
        className="rounded-lg absolute top-[20%] hidden sm:block md:hidden w-1/3"
      />
      <div className="bg-brand-500 max-w-1/4 md:max-w-1/3 rounded-tr-lg min-h-full hidden sm:block absolute z-[-1]">
        <Image
          src="/services/services-background.png"
          alt="background-fx"
          width={530}
          height={906}
          className=""
        />
      </div>
      <Container className="pt-10 lg:pt-20 flex flex-col gap-14">
        <header className="sm:mx-auto">
          <div className="hidden sm:block">
            <TitleWithTag
              orientation="horizontal"
              textColor="text-gray-950"
              tagBgColor="bg-brand-500"
            >
              Nossos Serviços
            </TitleWithTag>
          </div>
          <div className="sm:hidden">
            <TitleWithTag
              orientation="vertical"
              textColor="text-gray-950"
              tagBgColor="bg-brand-500"
            >
              Nossos Serviços
            </TitleWithTag>
          </div>
        </header>
        <div className="grid grid-cols-12 h-full">
          <figure className="col-start-2 col-span-5 hidden md:block">
            <Image
              src="/services/services.png"
              alt="Gabriel Cansação"
              width={384}
              height={520}
              className="rounded-lg w-2/3"
            />
          </figure>
          <ul className="hidden col-span-full sm:col-start-6 sm:col-span-7 md:col-start-7 md:col-span-5 sm:flex flex-col gap-8 h-max">
            {SERVICES.map((item) => (
              <li key={item.title}>
                <ServiceItem item={item} />
              </li>
            ))}
          </ul>
          <div className="sm:hidden col-span-full">
            <ServicesSwiper />
          </div>
        </div>
      </Container>
    </section>
  );
}
