'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper';
import Image from 'next/image';
import controls from '../../public/controls.png'
import electrical from '../../public/Electrical.png'
import instrumentation from '../../public/Instrumentation.png'

const Carousel = () => {
  return (
    <div className="sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80%] mx-auto mt-20 text-center">
      <h1 className="font-bold text-2xl mb-8">Swipe to see some of our disciplines</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="w-[100%] py-[50px]"
      >
        <SwiperSlide>
          {/* <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-3xl sm:bottom-10 bottom-2 left-10">
            Instrumentation
          </h1> */}
          <Image
            src={instrumentation}
            alt="instrumentation"
            className="block w-[100%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-3xl sm:bottom-10 bottom-2 left-10">
            Electrical
          </h1> */}
          <Image
            src={electrical}
            alt="electrical"
            className="block w-[100%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-3xl sm:bottom-10 bottom-2 left-10">
            Controls
          </h1> */}
          <Image
            src={controls}
            alt="controls"
            className="block w-[100%]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
