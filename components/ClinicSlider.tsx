"use client"

import { clinicImages } from "@/utils/clinicImages"
import Image from "next/image"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const ClinicSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        1280: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }}
      className="max-w-[381px] xl:max-w-[800px]"
    >
      {clinicImages.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="pb-12 px-[2px]">
              <Image
                src={item.image}
                alt={item.alt}
                width={381}
                height={315}
                className="z-40 shadow-lg rounded-[0.5rem]"
              />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ClinicSlider