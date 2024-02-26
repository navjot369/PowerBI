import Image from "next/image";
import { open_sans } from "../fonts";

export default function Section5() {
  return (
    <div className="w-full grid grid-cols-[1fr] md:grid-cols-[2fr_3fr] max-w-6xl my-24 mx-auto">
      <div className="py-4 pl-2">
        <div className="text-5xl font-bold mt-[15%]">Why Skillcraft?</div>
      </div>
      <div className="px-2">
        <SingleTitle
          title="100 % Assured PL-300"
          desp="Power BI Course Backed with 100% assured Microsoft Pl-300 Certification"
          source="/Icons/king.svg"
        />
        <SingleTitle
          title="100% Money Back Guarantee"
          desp="No questions asked 100% Money Back guarantee if you are not certified After completing the course"
          source="/Icons/best-choice.svg"
        />
        <SingleTitle
          title="15 Days to top 1% BI"
          desp="Become a Certified Microsoft BI Expert within 15 days and become the top 1% Power BI experts"
          source="/Icons/clock.svg"
        />
      </div>
    </div>
  );
}

function SingleTitle({
  title,
  desp,
  source,
}: {
  title: string;
  desp: string;
  source: string;
}) {
  return (
    <div className="flex my-4 mx-1 flex-row items-start">
      <div className="w-[40px] h-[40px] rounded-full bg-[#ff9635] p-2 flex flex-shrink-0 justify-center items-center">
        <Image src={source} width="50" height="50" alt="icons" />
      </div>
      <div className="px-4">
        <div className="text-2xl font-bold">{title}</div>
        <div className={open_sans.className + "font-light text-[#999] text-md"}>
          {desp}
        </div>
      </div>
    </div>
  );
}
