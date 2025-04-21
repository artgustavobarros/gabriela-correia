import { TitleWitTag } from "@/components/title-with-tag";
import { Container } from "../../layout/container";
import { Video } from "./video";

export function Presentation() {
  return (
    <section id="presentation" className="py-20">
      <Container grid className="items-center">
        <div className="col-span-6 col-start-2">
          <Video />
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <TitleWitTag orientation="vertical">
            Defenda seus interesses, garanta seus direitos.
          </TitleWitTag>
          <p className="text-gray-900">
            No complexo, e muitas vezes injusto sistema de saúde, contar com um
            suporte jurídico especializado pode fazer toda a diferença. Estamos
            aqui para garantir que seus direitos sejam não apenas defendidos,
            mas efetivados.
          </p>
        </div>
      </Container>
    </section>
  );
}
