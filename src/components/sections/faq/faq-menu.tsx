"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const FAQ_THEMES = [
  {
    text: "Ações contra Planos de Saúde",
    icon: "/services/icons/icon-1.svg",
    slug: "acoes",
  },
  {
    text: "Direito das Pessoas com TEA e Tratamentos Especiais",
    icon: "/services/icons/icon-2.svg",
    slug: "direitos-tea",
  },
  {
    text: "Defesas de Médicos e Profissionais da Saúde",
    icon: "/services/icons/icon-3.svg",
    slug: "defesa-medica",
  },
] as const;

const ACCORDION_MAP = {
  acoes: [
    {
      question:
        "O que devo fazer se meu plano de saúde negar um exame ou cirurgia?",
      answer:
        "Se o seu plano de saúde negar um exame, cirurgia ou tratamento, entre em contato conosco imediatamente. Avaliaremos o seu caso e, se necessário, tomaremos medidas legais para garantir que você receba o tratamento que precisa, e possíveis indenizações.",
    },
    {
      question:
        "Se o plano de saúde cancelar meu contrato, como sei se esse cancelamento é devido?",
      answer:
        "Com o documento que comprove o motivo da rescisão contratual, entre em contato com nosso escritório, para que seja feita imediatamente a análise de viabilidade de ingressar com uma demanda judicial para requerer o restabelecimento do contrato de forma imediata, e uma indenização por danos morais pelos transtornos causados”",
    },
    {
      question:
        "Como saber se o reajuste na parcela do meu plano de saúde foi feito nos moldes legais?",
      answer:
        "Apenas um profissional especializado em direito da saúde está apto a auferir se os reajustes impostos pelo planos de saúde estão dentro dos parâmetros. Caso tenham sido feitos de forma indevida, a depender do caso, além do requerimento para diminuir a parcela, o cliente pode receber uma significativa indenização pelos valores pagos a maior, bem como reparação pelos danos morais” ",
    },
    {
      question: "Posso processar o plano de saúde por danos morais?",
      answer:
        "Sim, se a negativa de tratamento ou qualquer outra conduta do plano de saúde lhe causou sofrimento emocional significativo, podemos incluir um pedido de indenização por danos morais na ação.",
    },
  ],
  "direitos-tea": [
    {
      question:
        "O plano de saúde pode negar tratamento para uma pessoa com TEA?",
      answer:
        "Não, o plano de saúde é obrigado a fornecer os tratamentos necessários para pessoas com TEA, na forma em que foram prescritos pelo médico que acompanha o caso. Se isso for negado, podemos entrar com uma ação judicial para garantir que o tratamento seja fornecido.",
    },
    {
      question:
        "Quais tipos de tratamento são garantidos para pessoas com TEA?",
      answer:
        "Os planos de saúde devem cobrir uma ampla gama de terapias para pessoas com TEA, incluindo fonoaudiologia, psicologia, terapia ocupacional e outras terapias multidisciplinares.",
    },
    {
      question:
        "Como posso garantir que meu filho com TEA receba o tratamento necessário?",
      answer:
        "Se o plano de saúde não está fornecendo o tratamento necessário, entre em contato conosco. Podemos ajudar a garantir que todos os direitos do seu filho sejam respeitados e que ele receba o cuidado de que precisa, além das indenizações cabíveis.",
    },
    {
      question:
        "Posso pedir reembolso pelos tratamentos negados pelo plano de saúde?",
      answer:
        "Sim, se você tiver que pagar por tratamentos que deveriam ser cobertos pelo plano de saúde, podemos buscar o reembolso através de uma ação judicial.",
    },
  ],
  "defesa-medica": [
    {
      question:
        "Como o escritório pode me ajudar a proteger minha reputação como médico?",
      answer:
        "Oferecemos suporte jurídico completo para médicos e profissionais da saúde, incluindo a elaboração de documentos médicos como termos de consentimento individualizados para cada tipo de procedimento, contrato de prestação de serviços médicos, assessoria preventiva para adequação da publicidade médica às normas do CFM, dentre outros serviços preventivos que visam diminuir drasticamente a chance de processos, sejam judiciais ou administrativos",
    },
    {
      question:
        "Quais são as principais situações em que um médico pode precisar de defesa jurídica?",
      answer:
        "Médicos podem precisar de defesa jurídica em casos de alegações de erro médico, descumprimento de normas éticas, ou falhas na prestação do serviço médico de qualquer natureza. O escritório GC Advocacia está apto a defender médicos e outros profissionais de saúde de processos cíveis, criminais e administrativos. ",
    },
    {
      question:
        "Como funciona o processo de consultoria jurídica para médicos?",
      answer:
        "Durante a consultoria, avaliamos sua prática e identificamos áreas de risco. Oferecemos orientação para garantir que você esteja protegido legalmente e que sua prática esteja em conformidade com todas as normas.",
    },
    {
      question:
        "Quais são os benefícios de ter um advogado especializado em direito médico?",
      answer:
        "Um advogado especializado em direito médico entende as nuances da profissão e pode oferecer uma defesa mais eficaz, além de ajudar a prevenir problemas legais antes que eles aconteçam.",
    },
  ],
};

export function FAQMenu() {
  const [selectedFaq, setSelectedFaq] =
    useState<keyof typeof ACCORDION_MAP>("acoes");

  function changeFaqList(value: keyof typeof ACCORDION_MAP) {
    setSelectedFaq(value);
  }

  return (
    <div className="grid grid-cols-10">
      <ul className="flex flex-col gap-4 col-span-4">
        {FAQ_THEMES.map((item) => (
          <li key={item.text}>
            <Button
              className={cn(
                "flex gap-4 font-martel text-sm rounded-md text-white-50 border border-brand-500 p-4 items-center h-14 cursor-pointer w-full justify-start hover:bg-brand-500 duration-500 ease-in-out",
                selectedFaq === item.slug ? "bg-brand-500" : "bg-brand-800"
              )}
              onClick={() => changeFaqList(item.slug)}
            >
              <Image src={item.icon} alt={item.text} width={24} height={24} />
              <span>{item.text}</span>
            </Button>
          </li>
        ))}
      </ul>
      <div className="col-start-6 col-span-4">
        <Accordion type="single" collapsible>
          {ACCORDION_MAP[selectedFaq].map((item, index) => {
            const isFirst = index === 0;
            return (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-brand-900"
              >
                <AccordionTrigger
                  className={cn(
                    "data-[state=open]:text-brand-300 data-[state=open]:font-bold font-martel text-xl hover:no-underline text-white-50 hover:text-brand-300 [&>svg]:text-brand-500 [&>svg]:size-8 [&[data-state=open]>svg]:text-white [&[data-state=open]>svg]:bg-brand-500 [&[data-state=open]>svg]:rounded-full [&>svg]:p-1",
                    isFirst ? "pt-0" : ""
                  )}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-200 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
