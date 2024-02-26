import Image from "next/image";
import Link from "next/link";

export default function PaymentSec() {
  return (
    <div className="my-28 max-w-6xl mx-auto px-2">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl text-center font-bold my-2">
          Transform Your Lives
        </h2>
        <p className="w-full md:w-2/3 text-md text-center my-2">
          Become a Part at Skill Craft Academy. Do check the Pricing Page once
          and read all the Instructions. The price charged Below is a token
          Money for Help you and us!
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Box
          top="Power BI Assured With Skill Craft"
          desp=""
          price={199}
          arrTick={[
            "Bonuses upto ₹3000",
            "Free Power BI Master Guides",
            "Job Assitance to a BI Analyst",
            "Power BI Templates to Lucky Winners",
            "10 Days to a Power BI Expert",
          ]}
          arrMinus={[]}
          arrPlus={[]}
        />
        {/* <Box
          top="Pro"
          desp="Nunc arcu et eget tellus nunc quis gravida est ullamcorper orci scelerisque."
          price={30000}
          arrTick={[
            "Proin gravida nibh vel velit auctor",
            "Bibendum auctor nisi elit consequat",
            "Ipsum nec sagittis sem nibh elit",
            "Sollicitudin lorem quis id",
            "Duis sed odio sit amet",
            "Orci sit gravida vestibulum",
            "Pretium nibh lobortis egestas",
            "Dolor purus tincidunt",
          ]}
          arrMinus={[]}
          arrPlus={[]}
        />
        <Box
          top="Team"
          desp="Nunc arcu et eget tellus nunc quis gravida est ullamcorper orci scelerisque."
          price={50000}
          arrTick={[
            "Proin gravida nibh vel velit auctor",
            "Bibendum auctor nisi elit consequat",
            "Ipsum nec sagittis sem nibh elit",
            "Sollicitudin lorem quis id",
            "Duis sed odio sit amet",
            "Orci sit gravida vestibulum",
            "Pretium nibh lobortis egestas",
            "Dolor purus tincidunt",
          ]}
          arrMinus={[]}
          arrPlus={["Sem cursus proin", "Condimentum morbi"]}
        /> */}
      </div>
    </div>
  );
}

function Box({
  top,
  desp,
  price,
  arrTick,
  arrMinus,
  arrPlus,
}: {
  top: string;
  desp: string;
  price: number;
  arrTick: string[];
  arrMinus: string[];
  arrPlus: string[];
}) {
  const tickTemp: any[] = arrTick.map((item, ind) => (
    <div key={ind} className="flex flex-row my-2">
      <Image src="/Icons/tick-circle.svg" height="20" width="20" alt="Icon" />
      <p className="text-slate-500 ml-2 ">{item}</p>
    </div>
  ));
  const minusTemp: any[] = arrMinus.map((item, ind) => (
    <div key={ind} className="flex flex-row my-2">
      <Image src="/Icons/minus-circle.svg" height="20" width="20" alt="Icon" />
      <p className="text-slate-300 ml-2 ">{item}</p>
    </div>
  ));
  const plusTemp: any[] = arrPlus.map((item, ind) => (
    <div key={ind} className="flex flex-row my-2">
      <Image src="/Icons/plus-circle.svg" height="20" width="20" alt="Icon" />
      <p className="text-slate-500 ml-2 font-bold">{item}</p>
    </div>
  ));
  return (
    <div className="w-[45%] mt-10 rounded-2xl overflow-hidden shadow-lg relative pb-24 z-0">
      <div className="bg-[#3091a4] p-6">
        <h1 className="font-bold text-bold text-2xl break-words">{top}</h1>
        <h3 className="my-4 text-slate-300">{desp}</h3>
        <h3 className="text-4xl font-bold">
          <span className="text-3xl line-through text-gray-500">
            &#8377; 500
          </span>{" "}
          &#8377; {price}
        </h3>
      </div>
      <div className="px-4 py-8">
        {tickTemp}
        {minusTemp}
        {plusTemp}
      </div>
      <div className="my-6 absolute left-4 bottom-4 group">
        <Link
          href="/"
          className="py-2 px-4 rounded-full border-2 border-black pr-6 group-hover:pr-4 duration-300"
        >
          Start Learning{" "}
          <span className="pl-2 group-hover:pl-4 duration-300">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

//
