import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="w-full shadow-inner bg-[#078181] pt-11 z-10 relative"
      style={{ backgroundColor: "#078181" }}
    >
      <div className="flex justify-around flex-wrap md:gap-4 w-[80%] ml-[10%] items-center ">
        <div className="flex flex-col items-center lg:items-between h-full justify-between sm:col-start-1 sm:col-end-3 lg:col-end-2">
          <Image
            src="/logo_white.png"
            width="200"
            height="150"
            alt="logo"
            className="mx-auto pb-11 w-auto"
          />
          {/* <div className="text-[#555] sm:px-11 lg:px-0 text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div> */}
          <div className="flex flex-row align-center justify-center w-full">
            <Link href="https://www.linkedin.com/company/coursesforcareers-dot-tech/">
              <Image
                src="/Icons/linkedin.svg"
                width="50"
                height="50"
                className="w-8 h-8 mr-2"
                alt="Social media Logo"
              />
            </Link>
            <Link href="https://www.instagram.com/coursesforcareers.tech?igsh=a2VoYmlrdXdsMHRr">
              <Image
                src="/Icons/instagram.png"
                width="50"
                height="50"
                className="w-8 h-8 mr-2"
                alt="Social media Logo"
              />
            </Link>
          </div>
        </div>
        <div className="px-2 flex flex-col items-center lg:items-start">
          <div className="text-2xl mb-6">Navigation</div>
          <div className="flex flex-col items-center gap-4  lg:items-start">
            <Link
              href="/"
              className="text-white z-100 hover:text-[#ff9635] block cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/program"
              className="text-white hover:text-[#ff9635] block"
            >
              Programs
            </Link>
            <Link
              href="/team"
              className="text-white hover:text-[#ff9635] block"
            >
              Meet The Team
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#ff9635] block"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className=" flex flex-col items-center lg:items-start">
          <div className="text-2xl mb-6">Contact Info</div>
          <div className=" flex flex-col items-center lg:items-start">
            <div className="font-bold">Phone</div>
            <div className="text-white">+91 9815260084</div>

            <div className="font-bold">E-mail</div>
            <div className="text-white">
              <a href="mailto:coursesforcareers.tech@gmail.com">
                coursesforcareers.tech@gmail.com
              </a>
            </div>
            <div className="font-bold">Address</div>
            <div className="text-white">Patiala, Punjab - 147001</div>
          </div>
        </div>
      </div>
      <div className="bg-[#999] w-full h-0.5 mt-11"></div>
      <div className="flex flex-col justify-between py-8 px-16 items-center sm:flex-row msx-w-6xl">
        <div className="text-white">
          Copyright &copy; 2024 Courses for Careers
        </div>
        <div className="text-white">Powered By Courses for Careers</div>
      </div>
    </div>
  );
}
