import { Container } from "../../layout/container";
import { Video } from "./video";

export function About() {
  return (
    <section>
      <Container grid className="py-40 items-center">
        <div className="col-span-6 col-start-2">
          <Video />
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <span className="bg-brand-500 h-[2px] w-10 block" />
            <h2 className="text-neutral-900 text-2xl font-martel font-bold">
              Defenda seus interesses, garanta seus direitos.
            </h2>
          </div>
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
