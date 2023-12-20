import Image from 'next/image';

function InnerStats({value, desp}: {value: String, desp: String}) {
    return (
      <div className="bg-[#1d195e] flex flex-col justify-center items-center w-3/12 min-h-[260px] rounded text-[white] shadow-[3px_3px_3px_1px_rgb(231,224,224)] m-2.5 px-5 py-[30px]">
        <div className="text-[2.8rem] text-[rgb(249,233,7)] mx-0 my-2.5">{value}</div> 
        <div className="text-[1.4rem] text-center font-bold">{desp}</div>
      </div>
    );
  }
  
export default function StatSection() {
    return (
      <div  className="relative min-h-[500px] bg-[rgba(255,255,255,0.5)] mt-[3px] mb-[150px] mx-0">
        <Image className="absolute w-full h-full z-[-1] left-0 top-0" src="/Images/stats-bacground.jpg" width="100" height="100" alt="Stats Background" />
        <div className="h-full bg-[linear-gradient(180deg,white,transparent,white)] p-2.5">
          <div className="text-[black] text-[4rem] font-bold text-center mx-0 my-[100px]">
            Are you going to be placed<span> ?</span>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <InnerStats
              value="49.3%"
              desp="of youth are “Unemployable” as of 2023"
            />
            <InnerStats
              value="42.3%"
              desp="of educated youth are “Unemployed” as of 2023"
            />
            <InnerStats
              value="58%"
              desp="of youth fails to secure a Campus Placement"
            />
          </div>
        </div>
      </div>
    );
  }