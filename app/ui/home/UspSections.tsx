import Link from 'next/link';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

function Usp({ title, desp, iconList, imgSrc , color1, color2, centerDesp}: {
    title: string,
    desp: string,
    iconList: string[],
    imgSrc: string,
    color1: string,
    color2: string
    centerDesp: string
}) {
  return (
    <div className="grid w-full grid-cols-[1fr_1fr] p-0">
      <div className={`flex flex-col justify-evenly items-start py-[30%] pl-[5%] ${color1}`}>
        <div className="text-5xl font-bold text-[white] mx-0 my-2.5">{title}</div>
        <div className="text-[1.2rem] italic font-bold w-[70%] mx-0 my-5">{desp}</div>
        <div className="flex mb-1">
          {iconList.map((item, ind) => (
            <Image key={ind} src={item} width="100" height="50" className="mx-2 h-50 w-auto" alt="Right Panel" />
          ))}
        </div>
        <div className="text-lg">&amp;more</div>
        <div className="uspButton">
          <Link className={color2 + " border text-[white] text-[1.2rem] duration-[0.6s] no-underline mx-0 my-2.5 px-5 py-2.5 rounded-[5px] border-solid hover:rounded-[10px] hover:border-[white]"} href="/program">
            Explore Programs
          </Link>
        </div>
      </div>
      <div className="relative h-screen min-h-[800px]">
        <Image src={imgSrc} className="w-full h-screen min-h-[800px]" width="100" height="100" alt="Coding Background" />
        <div className={color2 + " text-[white] text-[2rem] flex justify-center items-center text-center w-[300px] h-[300px] absolute -translate-x-2/4 -translate-y-2/4 p-[30px] rounded-[50%] top-2/4"}>
          &quot;{centerDesp}&quot;
        </div>
      </div>
    </div>
  );
}

export default function UspSection() {
  return (
    <div>
      <Usp
        title="100% Assured Placement"
        desp="The Course will be completed only when you'll be placed over 4LPA"
        centerDesp = "Guarantee assurance of Placements"
        imgSrc="/Images/USP_wallpaper.jpg"
        iconList={["/Icons/amazon-logo.png", "/Icons/google-logo.png", "/Icons/microsoft-logo.png"]}
        color1="bg-[#9c8170]"
        color2="bg-[#3f2410]"
      />
      <Usp
        title="Pay When Placed"
        desp="The Entire course fee would be paid only When you'll be placed above 4LPa"
        centerDesp = "Payment after Placement"
        imgSrc="/Images/USP_wallpaper2.jpg"
        iconList={["/Icons/logo-usp2-1.png", "/Icons/logo-usp2-2.png"]}
        color1="bg-[#687480]"
        color2="bg-[#2b2d2c]"
      />
      <Usp
        title="Learning With Projects"
        desp="Hands on learning experience, with Industrial and Real Life Projects "
        centerDesp = "Real-life Projects"
        imgSrc="/Images/USP_wallpaper3.jpg"
        iconList={["/Icons/logo-usp3-1.png", "/Icons/logo-usp3-2.png"]}
        color1="bg-[#3d435d]"
        color2="bg-[#0a1a37]"
      />
    </div>
  );
}
