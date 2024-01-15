import Link from "next/link";

export default function Section1() {
  return (
    <div className="justify-center my-11 mx-auto">
      <div className="flex flex-col sm:flex-row w-full mx-auto max-w-6xl items-stretch">
        <div className="px-11">
          <div className="text-5xl font-bold">
            Assured Placement Courses
          </div>
        </div>
        <div className="bg-[#ff9635] shrink-0 w-1"></div>
        <div className="flex flex-col justify-between lg:flex-row px-11 ">
          <div className="text-xl flex items-center text-[#828181] my-6 sm:my-0">
          100% Assured Placement Course with No questions asked 100% Money Back guarantee in Data Science. Learn from the best in the society and pay only when you are Placed!
          </div>
        </div>
      </div>
    </div>
  );
}
