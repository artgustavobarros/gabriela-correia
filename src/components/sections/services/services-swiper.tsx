"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { SERVICES } from "@/constants/services";
import { ServiceItem } from "./service-item";

export function ServicesSwiper() {
  const sanitizeServices = [
    [...SERVICES.slice(0, 2)],
    [...SERVICES.slice(2, 4)],
  ];
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
      {sanitizeServices.map((cards, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col gap-8">
            {cards.map((item) => (
              <ServiceItem item={item} key={item.title} />
            ))}
          </div>
        </SwiperSlide>
      ))}
      <div className="works-pagination mt-4 h-14 sm:hidden" />
    </Swiper>
  );
}
