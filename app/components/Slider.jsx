

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import controls from '../../public/controls.png'
import electrical from '../../public/Electrical.png'
import instrumentation from '../../public/Instrumentation.png'

const Slider = () => {
  return (
    <div className="sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80%] mx-auto mt-20 text-center">
      <h1 className="font-bold text-2xl mb-8">Swipe to see some of our disciplines</h1>
      <Carousel autoPlay>
        <div>
          <Image
            src={controls}
            alt="controls"
            className="block w-[100%]"
          />
        </div>
        <div>
          <Image
            src={instrumentation}
            alt="instrumentation"
            className="block w-[100%]"
          />
        </div>
        <div>
          <Image
            src={electrical}
            alt="electrical"
            className="block w-[100%]"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default Slider;
