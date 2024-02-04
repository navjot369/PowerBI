'use client';

// import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from 'next/link';

export default function HeroSection() {
    // const [text] = useTypewriter({
    //   words: ['100 % Assured Placement', 'Data Scientist Within an Year', 'Learn From The Best'],
    //   loop: false
    //   });
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
