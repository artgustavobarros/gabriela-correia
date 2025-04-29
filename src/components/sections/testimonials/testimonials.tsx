"use client";
import { Container } from "@/components/layout/container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TitleWithTag } from "@/components/title-with-tag";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { ImageDialog } from "./image-dialog";

export function Testimonials() {
  return (
    <section className="pb-20">
      <Container className="">
        <header className="flex items-end justify-between mb-10">
          <TitleWithTag
            orientation="vertical"
            textColor="text-gray-950"
            tagBgColor="bg-brand-500"
          >
            Histórias reais. <br />
            Motivação para cumprir minha missão.
          </TitleWithTag>
          <div className="hidden md:flex gap-2">
            <Button className="swiper-button-prev size-8 rounded-full bg-brand-100 cursor-pointer">
              <ChevronLeft className="text-brand-500" />
            </Button>
            <Button className="swiper-button-next size-8 rounded-full bg-brand-100 cursor-pointer">
              <ChevronRight className="text-brand-500" />
            </Button>
          </div>
        </header>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={16}
          breakpoints={{
            520: {
              slidesPerView: 1.8,
            },
            640: { slidesPerView: 2 },
            720: { slidesPerView: 2.3 },
            768: { slidesPerView: 2.8 },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          className="mb-4"
        >
          {Array.from({ length: 7 }).map((_, index) => (
            <SwiperSlide
              key={index}
              className="max-h-[400px] rounded-lg overflow-hidden"
            >
              <ImageDialog index={index} />
            </SwiperSlide>
          ))}
          <div className="testimonials-pagination mt-4 h-14 md:hidden" />
        </Swiper>
      </Container>
    </section>
  );
}
