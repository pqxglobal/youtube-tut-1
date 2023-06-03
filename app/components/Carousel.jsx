// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import controls from '../../public/controls.png';
import electrical from '../../public/Electrical.png';
import instrumentation from '../../public/Instrumentation.png';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

export default () => {
  return (
    <>
      <div className="sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80%] mx-auto mt-20 text-center cursor-pointer">
        <h1 className="font-bold text-2xl mb-8">Swipe to see some of our disciplines</h1>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src={controls}
              alt="controls"
              className="block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={instrumentation}
              alt="instrumentation"
              className="block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={electrical}
              alt="electrical"
              className="block"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
