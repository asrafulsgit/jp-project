"use client";
import { useRef } from "react";

import Image from "next/image";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import next from "../assets/next.png";
import prev from "../assets/prev.png";



import styls from './Hero.module.css';

// slider css
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

export default function Hero() {
  const swiperRef = useRef(null);

  const heroData = [
    {
      image: hero2,
      title: "JF Australian Trellis",
      subTitle: "Where Aesthetics Meet Durability",
    },
    {
      image: hero1,
      title: "JF Privezy Grass Wall",
      subTitle: "The Perfect Blend of Greenery",
    },
    {
      image: hero3,
      title: "JF Polyhex Mesh",
      subTitle: "Secure your Farm, Save Your Budget",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="relative overflow-visible px-5 mx-auto">
        {/* Navigation Buttons (left/right of center slide) */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex items-center justify-center absolute z-10 
          left-3 lg:left-[8%] xl:left-[19%] top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-200 hover:bg-gray-300 
          rounded-full shadow cursor-pointer"
        >
           <Image
                    src={prev}
                    alt="Hero product"
                    className="object-contain"
                  />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex items-center justify-center absolute z-10 
          right-3 lg:right-[8%] xl:right-[19%] top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-200 hover:bg-gray-300 
          rounded-full shadow  cursor-pointer"
        >
            <Image
                    src={next}
                    alt="Hero product"
                    className="object-contain"
                  />
        </button>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          initialSlide={1}
          spaceBetween={10}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1.2,
            },
            1280: {
              slidesPerView: 1.6,
            },
          }}
          // freeMode={true}
          // modules={[FreeMode]}
          className={`overflow-visible`}
        >
          {heroData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-[100%] xl:w-[60%] transition-all duration-300"
            >
              <div
                className="flex flex-col sm:flex-row items-center gap-5 md:gap-10 bg-[#F2F4F6] 
                rounded-[24px] 
                p-4 md:p-6"
              >
                <div
                  className={`!w-[230px] !h-[230px]  md:!w-[320px] md:!h-[320px] 
                  flex justify-center items-center
                  rounded-[14px] ${styls.heroItemBg}`}
                >
                  <Image
                    src={item.image}
                    alt="Hero product"
                    className="object-cover w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
                  />
                </div>
                <div className="sm:text-left text-center">
                  <h1 className="text-[28px] md:text-3xl font-semibold">{item.title}</h1>
                  <p className="md:mt-2 text-gray-600">{item.subTitle}</p>
                  <button className="mt-3 cursor-pointer md:mt-4 px-6 py-2 rounded-full bg-[#B0DD1D] text-white font-medium">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
