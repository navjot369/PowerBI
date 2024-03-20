import Image from "next/image";

export default function FeatureSec() {
  return (
    <div className="mt-20 w-full max-w-6xl mx-auto">
      <div className="mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold my-4">
          Industry Ready BI Analyst
        </h2>
        <p className="w-full md:w-2/3 mx-auto text-center my-2 px-2">
          Become a Power BI pro in a year with Courses for Carrer. Gain industry
          skills, work on real projects, learn from the best and Become
          Microsoft Certified analyst.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-stretch my-4 md:my-11 px-2">
        <Box
          title="100 % Assured PL-300"
          desp="Join our Power BI course for a guaranteed Microsoft PL-300 certification - your pathway to success starts here!"
          iconSrc="/Icons/king.svg"
        />
        <div className="hidden md:block w-0.5 bg-slate-700 rounded-full"></div>
        <Box
          title="100% Money Back Guarantee"
          desp="Experience peace of mind with our exclusive 100% Money Back Guarantee - if you're not certified after completing the course, we'll refund you, no questions asked"
          iconSrc="/Icons/best-choice.svg"
        />
        <div className="hidden md:block w-0.5 bg-slate-700 rounded-full"></div>
        <Box
          title="10 Days to top 1% BI"
          desp="Unlock your potential as a Certified Microsoft BI Expert in just 10 days and join the ranks of the top 1% of Power BI professionals."
          iconSrc="/Icons/clock.svg"
        />
      </div>
    </div>
  );
}

function Box({
  title,
  desp,
  iconSrc,
}: {
  title: string;
  desp: string;
  iconSrc: string;
}) {
  return (
    <div className="flex flex-col items-center w-full md:w-1/4 my-2 h-full justify-evenly ">
      <div className="w-[40px] h-[40px] rounded-full bg-[#ff9635] p-2 flex flex-shrink-0 justify-center items-center">
        <Image src={iconSrc} width="50" height="50" alt="icons" />
      </div>
      <div className="text-xl text-center font-bold my-1 md:my-2">{title}</div>
      <div className="text-sm text-center">{desp}</div>
    </div>
  );
}
