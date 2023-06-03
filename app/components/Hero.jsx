'use client';

import Image from 'next/image';
import blur from '../../public/blur.png';
import Typed from 'react-typed';
import Link from 'next/link';
import Carousel from './Carousel';

const Hero = () => {
  return (
    <div className="h-screen w-full bg-[#ecf0f3] relative">
      <Image
        src={blur}
        alt="blur"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="absolute animate-pulse"
      />
      {/* Main Text */}
      <div className="flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-48">
        <h1 className="text-5xl sm:text-8xl font-bold tracking-tight z-20">PQX Global</h1>
        <h1 className="text-5xl sm:text-8xl font-bold tracking-tight z-20">
          <span className="bg-gradient-to-r from-[#105271] to-[#66bc45] text-transparent bg-clip-text">
            engineering
          </span>
        </h1>
        <h1 className="text-5xl sm:text-8xl font-bold z-20">with a twist</h1>
        <h2 className="text-2xl sm:text-4xl mt-4">
          {' '}
          <Typed
            strings={[
              'Web Applications',
              'Mobile Applications',
              'Desktop Applications',
              'UI/UX Design',
              'Databases',
              'Industrial Automation',
              'Instrumentation',
              'Electrical Systems',
              'IT/OT/ET',
              'MQTT',
              'IIoT',
              'OPC',
              'MES',
              'ERP',
              'MRP',
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />{' '}
        </h2>
        <div className="items-center mx-auto justify-center text-center pt-16 z-20">
          <Link href="/">
            <button className="bg-[#105271] text-white text-2xl px-10 py-5 rounded-lg shadow-xl shadow-black/40 hover:bg-[#66bc45]/70 hover:text-black cursor-pointer">
              See plans
            </button>
          </Link>
          <p className="pt-6 font-bold text-lg">Technical applications for industrial companies</p>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Hero;
