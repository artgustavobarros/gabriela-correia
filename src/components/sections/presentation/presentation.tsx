import { TitleWithTag } from "@/components/title-with-tag";
import { Container } from "../../layout/container";
import { Video } from "./video";
import * as motion from "motion/react-client";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const variants = {
  down: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
};

export function Presentation() {
  return (
    <section id="presentation" className="py-10 md:py-20">
      <Container className="flex flex-col items-center">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            className="lg:col-start-2 lg:col-span-6 md:col-span-4 col-span-6"
            variants={variants.left}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.75 }}
          >
            <Video />
          </motion.div>
          <motion.div
            className="col-span-6 flex flex-col gap-4 md:col-span-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 1 }}
          >
            <TitleWithTag
              orientation="vertical"
              textColor="text-gray-950"
              tagBgColor="bg-brand-500"
              tagVariants={variants.right}
              textVariants={variants.down}
            >
              Defenda seus interesses, garanta seus direitos.
            </TitleWithTag>
            <motion.p className="text-gray-900" variants={variants.down}>
              No complexo, e muitas vezes injusto sistema de saúde, contar com
              um suporte jurídico especializado pode fazer toda a diferença.
              Estamos aqui para garantir que seus direitos sejam não apenas
              defendidos, mas efetivados.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
