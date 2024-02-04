import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
      <div className="bg-white w-full shadow-inner">
      <div className="grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-[3fr_1fr_1fr] gap-11 max-w-6xl mx-auto px-6 py-11">
        <div className="flex flex-col items-center lg:items-start justify-between sm:col-start-1 sm:col-end-3 lg:col-end-2">
          <Image src="/logo.png" width="200" height="200" alt="logo" className=" w-64" />
          <div className="text-[#555] sm:px-11 lg:px-0 text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
          <div className="flex flex-row">
            <Image src="/Icons/facebook.png" width="50" height="50" className="w-8 h-8 mr-2" alt="Social media Logo"/>
            <Image src="/Icons/instagram.png" width="50" height="50" className="w-8 h-8 mr-2" alt="Social media Logo"/>
            <Image src="/Icons/twitter.png" width="50" height="50" className="w-8 h-8 mr-2" alt="Social media Logo"/>
            <Image src="/Icons/youtube.png" width="50" height="50" className="w-8 h-8 mr-2" alt="Social media Logo"/>
          </div>
        </div>
        <div className="px-2 flex flex-col items-center lg:items-start">
          <div className="text-2xl mb-6">Popular Courses</div>
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/program" className="text-[#666] hover:text-[#ff9635] block">LMS Interactive Content</Link>
            <Link href="/program" className="text-[#666] hover:text-[#ff9635] block">Become a PHP Master</Link>
            <Link href="/program" className="text-[#666] hover:text-[#ff9635] block">HTML5/CSS3 Essentials</Link>
            <Link href="/program" className="text-[#666] hover:text-[#ff9635] block">JavaScript Development</Link>
            <Link href="/program" className="text-[#666] hover:text-[#ff9635] block">WordPress Basic Tutorial</Link>
            <Link href="/program" className="text-[#666] hover:text-[#ff9635] block">Introduction to Coding</Link>
          </div>
        </div>
        <div className=" flex flex-col items-center lg:items-start">
          <div className="text-2xl mb-6">Contact Info</div>
          <div className=" flex flex-col items-center lg:items-start">
            <div className="font-bold">Address</div>
            <div className="text-[#666]">123 Fifth Avenue, New York, NY 10160</div>
            <div className="font-bold">Phone</div>
            <div className="text-[#666]">929-242-6868</div>
            <div className="font-bold">E-mail</div>
            <div className="text-[#666]">contact@info.com</div>
          </div>
        </div>
      </div>
      <div className="bg-[#999] w-full h-0.5"></div>
      <div className="flex flex-col justify-between py-8 px-16 items-center sm:flex-row msx-w-6xl">
        <div className="text-[#555]">Copyright &copy; 2024 Placed</div>
        <div className="text-[#555]">Powered By Placed</div>
      </div>
      </div>
    );
  }