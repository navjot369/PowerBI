'use client';

import Link from 'next/link';
import Image from 'next/image';

function ZeroSection() {
    return (
      <div className="w-full rounded-br-[140px] bg-hero-bg-image bg-fixed bg-[center_right] overflow-hidden bg-no-repeat bg-cover">
        <div className="w-full min-h-[700px] bg-[#007991] bg-opacity-80">
          <div className="max-w-[1200px] h-[700px] flex items-center p-2 min-[820px]:p-11 min-[936px]:p-28">
            <div className="flex flex-col text-white">
              <div className="text-5xl min-[630px]:text-6xl font-bold my-2">Empowering Careers</div>
              <div className="text-5xl min-[630px]:text-6xl font-bold my-2">with Certified Expertise</div>
              <div className="text-xl min-[630px]:text-2xl my-4">100% Assured PL-300 Certification</div>
              <div className="my-2"><Link href="/program" className="bg-[#ff9635] text-white text-md sm:text-2xl py-2 px-11 rounded-3xl hover:text-[#ccc8c8] hover:bg-[#f1943c] duration-300">Explore</Link></div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default function HeroSection() {
  return(<div className="w-full pt-32 pb-20 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-5xl font-bold my-2">Empowering Careers</h1>
        <h1 className="text-5xl font-bold my-2">with Certified Expertise</h1>
        <p className="text-2xl my-2 text-[#234061]">100% Assured PL-300 Certification</p>
        <div className="my-8"><Link href="/program" className="bg-[#D1554B] text-white text-md sm:text-2xl py-2 px-11 rounded-full border-2 border-[#D1554B] hover:bg-[white] hover:text-[#D1554B] duration-300">Explore</Link></div>
      </div>
      <div className="w-fill flex justify-center">
        <Image className="w-full" src="/Images/heroSecGroup.png" width="600" height="400" alt="Hero Section" />
      </div>
    </div>
  </div>);
}