"use client";
import { Container } from "@/components/layout/container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TitleWitTag } from "@/components/title-with-tag";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { ImageDialog } from "./image-dialog";

export function Testimonials() {
  return (
    <section className="">
      <Container className="">
        <header className="flex items-end justify-between mb-10">
          <TitleWitTag orientation="vertical">
            Histórias reais. <br />
            Motivação para cumprir minha missão.
          </TitleWitTag>
          <div className="flex gap-2">
            <Button className="swiper-button-prev size-8 rounded-full bg-brand-100 cursor-pointer">
              <ChevronLeft className="text-brand-500" />
            </Button>
            <Button className="swiper-button-next size-8 rounded-full bg-brand-100 cursor-pointer">
              <ChevronRight className="text-brand-500" />
            </Button>
          </div>
        </header>
        <Swiper
          slidesPerView={4}
          spaceBetween={32}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
        </Swiper>
      </Container>
    </section>
  );
}
