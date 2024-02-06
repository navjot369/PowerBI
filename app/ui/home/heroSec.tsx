'use client';

import Link from 'next/link';
import Image from 'next/image';


export default function HeroSection() {
  return(<div className="w-full pt-32 pb-20 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-11">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-5xl font-bold my-2">Empowering Careers</h1>
        <h1 className="text-5xl font-bold my-2">with Certified Expertise</h1>
        <p className="text-2xl my-2 text-[#234061]">100% Assured PL-300 Certification</p>
        <div className="my-8"><Link href="/program" className="bg-[#00807E] text-white text-md sm:text-2xl py-2 px-11 rounded-full border-2 border-[#00807E] hover:bg-[white] hover:text-[#00807E] duration-300">Explore</Link></div>
      </div>
      <div className="w-fill flex justify-center">
        <Image className="w-full" src="/Images/heroSecGroup.svg" width="600" height="400" alt="Hero Section" />
      </div>
    </div>
  </div>);
}