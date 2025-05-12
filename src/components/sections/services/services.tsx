import Image from "next/image";
import { TitleWithTag } from "../../title-with-tag";
import { Container } from "../../layout/container";
import { ServiceItem } from "./service-item";
import { SERVICES } from "@/constants/services";
import { ServicesSwiper } from "./services-swiper";
import * as motion from "motion/react-client";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const variants = {
  down: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.5 } },
  },
  downWithoutDelay: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  top: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 2 } },
  },
  opacity: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  },
};

export function Services() {
  return (
    <section className="relative pb-20" id="services">
      <Image
        src="/services/services.png"
        alt="Gabriela Correia"
        width={285}
        height={387}
        className="rounded-lg absolute top-[20%] hidden sm:block md:hidden w-1/3"
      />
      <motion.figure
        className="bg-brand-500 max-w-1/4 md:max-w-1/3 rounded-tr-lg min-h-full hidden sm:block absolute z-[-1]"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src="/services/services-background.png"
          alt="background-fx"
          width={530}
          height={906}
          className=""
        />
      </motion.figure>
      <Container className="pt-10 lg:pt-20 flex flex-col gap-14">
        <motion.header
          className="sm:mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="hidden sm:block">
            <TitleWithTag
              orientation="horizontal"
              textColor="text-gray-950"
              tagBgColor="bg-brand-500"
              tagVariants={variants.left}
              textVariants={variants.down}
            >
              Nossos Serviços
            </TitleWithTag>
          </div>
          <div className="sm:hidden">
            <TitleWithTag
              orientation="vertical"
              textColor="text-gray-950"
              tagBgColor="bg-brand-500"
              tagVariants={variants.left}
              textVariants={variants.down}
            >
              Nossos Serviços
            </TitleWithTag>
          </div>
        </motion.header>
        <div className="grid grid-cols-12 h-full">
          <motion.figure
            className="col-start-2 col-span-5 hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src="/services/services.png"
              alt="Gabriela Correia"
              width={384}
              height={520}
              className="rounded-lg w-2/3"
            />
          </motion.figure>
          <motion.ul
            className="hidden col-span-full sm:col-start-6 sm:col-span-7 md:col-start-7 md:col-span-5 sm:flex flex-col gap-8 h-max"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {SERVICES.map((item) => (
              <motion.li key={item.title} variants={variants.downWithoutDelay}>
                <ServiceItem item={item} />
              </motion.li>
            ))}
          </motion.ul>
          <div className="sm:hidden col-span-full">
            <ServicesSwiper />
          </div>
        </div>
      </Container>
    </section>
  );
}
