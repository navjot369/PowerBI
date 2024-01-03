import Link from "next/link";
import Image from "next/image";

export default function HeroSec() {
    return(<div className="w-full rounded-br-[140px] bg-hero-bg-image bg-fixed bg-[center_right] overflow-hidden bg-no-repeat bg-cover">
    <div className="w-full min-h-[600px] bg-[#007991] bg-opacity-80">
      <div className="max-w-[1200px] h-[600px] flex items-center p-2 min-[820px]:p-11 min-[936px]:p-28">
        <div className="flex flex-col text-white">
          <div className="text-4xl min-[720px]:text-6xl font-bold my-2">Data Science Placement Program</div>
          <div className="text-xl my-2">Learn Data Science Backed with Assured Placement. Show your potential and excel in the most trending technology of 20th Century</div>
          <div className="my-6"><Link href="/program" className="bg-[#ff9635] text-white text-md sm:text-2xl py-2 px-11 rounded-3xl hover:text-[#aaa]">Explore</Link></div>
        </div>
      </div>
    </div>
  </div>);
}