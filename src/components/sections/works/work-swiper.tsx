"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { WORKS } from "@/constants/works";
import { CheckCircle2 } from "lucide-react";
import { Pagination } from "swiper/modules";

export function WorkSwiper() {
  const sortedWorks = WORKS.sort((a, b) => a.mobileOrder - b.mobileOrder);
  const sanitizeWorks = [
    [...sortedWorks.slice(0, 3)],
    [...sortedWorks.slice(3, 6)],
    [...sortedWorks.slice(6, 7)],
  ];
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      initialSlide={1}
    >
      {sanitizeWorks.map((cards, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col gap-8">
            {cards.map((item) => (
              <div key={item.text} className="flex gap-5">
                <CheckCircle2 className="size-7 icon shrink-0 text-brand-500" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
      <div className="works-pagination mt-4 h-14 sm:hidden" />
    </Swiper>
  );
}
