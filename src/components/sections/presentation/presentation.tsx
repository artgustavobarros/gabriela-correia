import { TitleWitTag } from "@/components/title-with-tag";
import { Container } from "../../layout/container";
import { Video } from "./video";

export function Presentation() {
  return (
    <section id="presentation" className="py-10 md:py-20">
      <Container className="flex flex-col items-center">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-start-2 lg:col-span-6 md:col-span-4 col-span-6">
            <Video />
          </div>

          <div className="col-span-6 flex flex-col gap-4 md:col-span-4">
            <TitleWitTag orientation="vertical">
              Defenda seus interesses, garanta seus direitos.
            </TitleWitTag>
            <p className="text-gray-900">
              No complexo, e muitas vezes injusto sistema de saúde, contar com
              um suporte jurídico especializado pode fazer toda a diferença.
              Estamos aqui para garantir que seus direitos sejam não apenas
              defendidos, mas efetivados.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
