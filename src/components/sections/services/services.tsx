import Image from "next/image";
import { TitleWitTag } from "../../title-with-tag";
import { Container } from "../../layout/container";
import { ServiceItem } from "./service-item";

const SERVICES_MAP = [
  {
    title: "Ações contra planos de saúde",
    description:
      "Garanta seus direitos quando os planos de saúde se negam a cumprir o seu dever. Batalhamos pelo fiel cumprimento da lei e do seu contrato;",
    icon: "/services/icons/icon-1.svg",
  },
  {
    title: "Atendimento",
    description:
      "Garantia da utilização da melhor estratégia para assegurar o tratamento adequado a pessoas com TEA e outras necessidades especiais;",
    icon: "/services/icons/icon-2.svg",
  },
  {
    title:
      "Defesa e consultoria preventiva para médicos e profissionais da saúde",
    description:
      "Utilização da melhor estratégia de Defesa em Sindicâncias, Processos Ético-Disciplinares perante os conselhos de classe, PADs, Ações Indenizatórias e Criminais;",
    icon: "/services/icons/icon-3.svg",
  },
  {
    title: "Consultoria preventiva para profissionais da saúde",
    description:
      "Suporte preventivo com a elaboração de documentos personalizados, direcionamento para uma publicidade ética nas redes sociais, orientações gerais para a boa manutenção da relação médico-paciente, com o objetivo de diminuir ao máximo a chance de processos.",
    icon: "/services/icons/icon-4.svg",
  },
];

export function Services() {
  return (
    <section className="relative" id="services">
      <div className="bg-brand-500 max-w-1/3 rounded-tr-lg">
        <Image
          src="/services/services-background.png"
          alt="background-fx"
          width={530}
          height={906}
        />
      </div>
      <Container className="absolute inset-0 pt-20 flex flex-col gap-14">
        <header className="mx-auto">
          <TitleWitTag orientation="horizontal">Nossos Serviços</TitleWitTag>
        </header>
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-4">
            <Image
              src="/services/services.png"
              alt="Gabriel Cansação"
              width={390}
              height={520}
              className="rounded-lg"
            />
          </div>
          <ul className="col-start-7 col-span-5 flex flex-col gap-8">
            {SERVICES_MAP.map((item) => (
              <li key={item.title}>
                <ServiceItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
