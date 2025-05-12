"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { WORKS } from "@/constants/works";
import { CheckCircle2 } from "lucide-react";
import { Pagination } from "swiper/modules";
import { motion } from "motion/react";

const sortedWorks = WORKS.sort((a, b) => a.mobileOrder - b.mobileOrder);
const sanitizeWorks = [
  [...sortedWorks.slice(0, 3)],
  [...sortedWorks.slice(3, 6)],
  [...sortedWorks.slice(6, 7)],
];

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

export function WorkSwiper() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      initialSlide={1}
    >
      {sanitizeWorks.map((cards, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="flex flex-col gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {cards.map((item) => (
              <motion.div
                key={item.text}
                className="flex gap-5"
                variants={items.down}
              >
                <CheckCircle2 className="size-7 icon shrink-0 text-brand-500" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </SwiperSlide>
      ))}
      <div className="works-pagination mt-4 h-14 sm:hidden" />
    </Swiper>
  );
}
