import { Container } from "../../layout/container";
import { TitleWitTag } from "../../title-with-tag";
import { WorkList } from "./work-list";

export function Work() {
  return (
    <section>
      <Container grid className="py-40">
        <div className="col-start-2 col-span-3">
          <TitleWitTag
            text="Como funciona o nosso trabalho"
            orientation="vertical"
          />
        </div>
        <div className="col-start-6 col-span-6 ">
          <WorkList />
        </div>
      </Container>
    </section>
  );
}
