import { Container } from "../../layout/container";
import { FAQMenuDesktop } from "./faq-menu/faq-menu-desktop";
import { FAQMenuMobile } from "./faq-menu/faq-menu-mobile";
import { FAQMenuTablet } from "./faq-menu/faq-menu-tablet";
import * as motion from "motion/react-client";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const items = {
  down: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
};

export function FAQ() {
  return (
    <motion.section
      className="bg-brand-950 text-white"
      id="faq"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Container grid className="py-14 lg:py-40 gap-10 sm:pt-14 sm:pb-24">
        <header className="lg:col-start-2 col-span-full">
          <motion.h2
            className="font-martel font-bold text-xl lg:text-3xl"
            variants={items.down}
          >
            Dúvidas frequentes
          </motion.h2>
        </header>
        <div className="lg:col-start-2 col-span-full relative">
          <FAQMenuMobile />
          <FAQMenuTablet />
          <FAQMenuDesktop />
        </div>
      </Container>
    </motion.section>
  );
}
