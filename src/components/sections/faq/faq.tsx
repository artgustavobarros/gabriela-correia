import { Container } from "../../layout/container";
import { FAQMenuDesktop } from "./faq-menu/faq-menu-desktop";
import { FAQMenuMobile } from "./faq-menu/faq-menu-mobile";
import { FAQMenuTablet } from "./faq-menu/faq-menu-tablet";

export function FAQ() {
  return (
    <section className="bg-brand-950 text-white" id="faq">
      <Container grid className="py-14 lg:py-40 gap-10 sm:pt-14 sm:pb-24">
        <header className="lg:col-start-2 col-span-full">
          <h2 className="font-martel font-bold text-xl lg:text-3xl">
            Dúvidas frequentes
          </h2>
        </header>
        <div className="lg:col-start-2 col-span-full relative">
          <FAQMenuMobile />
          <FAQMenuTablet />
          <FAQMenuDesktop />
        </div>
      </Container>
    </section>
  );
}
