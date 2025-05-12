import { WORKS } from "@/constants/works";
import { Container } from "../../layout/container";
import { TitleWithTag } from "../../title-with-tag";
import { WorkList } from "./work-list";
import { CheckCircle2 } from "lucide-react";
import { WorkSwiper } from "./work-swiper";
import * as motion from "motion/react-client";

const sortedWorks = WORKS.sort((a, b) => a.tabletOrder - b.tabletOrder);

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
  top: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  left: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  opacity: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  },
};
export function Work() {
  return (
    <section>
      <motion.div
        className="hidden lg:block"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Container grid className="py-40">
          <header className="col-start-2 col-span-3">
            <TitleWithTag
              orientation="vertical"
              textColor="text-gray-950"
              tagBgColor="bg-brand-500"
              className="sticky top-28"
              tagVariants={items.left}
              textVariants={items.down}
            >
              Como funciona o nosso trabalho
            </TitleWithTag>
          </header>
          <div className="col-start-6 col-span-6">
            <WorkList />
          </div>
        </Container>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Container className="lg:hidden py-20 flex flex-col gap-10">
          <header>
            <div className="hidden md:block">
              <TitleWithTag
                orientation="vertical"
                className="items-center"
                textColor="text-gray-950"
                tagBgColor="bg-brand-500"
                tagVariants={items.left}
                textVariants={items.down}
              >
                Como funciona o nosso trabalho
              </TitleWithTag>
            </div>
            <div className="md:hidden">
              <TitleWithTag
                orientation="vertical"
                className=""
                textColor="text-gray-950"
                tagBgColor="bg-brand-500"
                tagVariants={items.left}
                textVariants={items.down}
              >
                Como funciona o nosso trabalho
              </TitleWithTag>
            </div>
          </header>
          <motion.ul
            className="grid-cols-2 gap-16 hidden sm:grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {sortedWorks.map((item) => (
              <motion.li
                key={item.text}
                className="flex gap-5"
                variants={items.down}
              >
                <CheckCircle2 className="size-7 icon shrink-0 text-brand-500" />
                <span>{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
          <div className="block sm:hidden">
            <WorkSwiper />
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
