import { Container } from "../../layout/container";
import { FAQMenu } from "./faq-menu";

export function FAQ() {
  return (
    <section className="bg-brand-950 text-white" id="faq">
      <Container grid className="py-40 gap-10">
        <header className="col-start-2 col-span-full">
          <h2 className="font-martel font-bold text-3xl">Dúvidas frequentes</h2>
        </header>
        <div className="col-start-2 col-span-full">
          <FAQMenu />
        </div>
      </Container>
    </section>
  );
}
