import Image from "next/image";
import { TitleWitTag } from "../../title-with-tag";
import { Container } from "../../layout/container";
import { ServiceItem } from "./service-item";
import { SERVICES } from "@/constants/services";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section
      className="relative sm:h-[684px] md:min-h-[864px] h-[900px]"
      id="services"
    >
      <Image
        src="/services/services.png"
        alt="Gabriel Cansação"
        width={285}
        height={387}
        className="rounded-lg absolute top-[20%] z-[2] hidden sm:block md:hidden w-1/3"
      />
      <div className="bg-brand-500 max-w-1/4 md:max-w-1/3 rounded-tr-lg min-h-full hidden sm:block">
        <Image
          src="/services/services-background.png"
          alt="background-fx"
          width={530}
          height={906}
          className="md:min-h-[864px] h-[684px]"
        />
      </div>
      <Container className="absolute inset-0 pt-10 lg:pt-20 flex flex-col gap-14">
        <header className="sm:mx-auto">
          <TitleWitTag orientation="horizontal">Nossos Serviços</TitleWitTag>
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
          <ul className="col-span-full sm:col-start-6 sm:col-span-7 md:col-start-7 md:col-span-5 flex flex-col gap-8">
            {SERVICES.map((item, index) => {
              const isLast = SERVICES.length - index === 1;
              return (
                <li
                  key={item.title}
                  className={cn(isLast ? "block sm:hidden lg:block" : "")}
                >
                  <ServiceItem item={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
