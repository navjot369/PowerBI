import Link from 'next/link';

export default function InfoSec() {
    return(
        <><Course1
          title="Placement Assured Programs"
          feat={[
            "Industry Proven Curricullum",
            "Real-Life Projects",
            "Live 1-on-1 classess",
            "Flexible learning",
          ]}
          linkTo="/program"
          buttCont="Explore Course"
          image="/Images/Simran_profile.jpeg"
        />
        <Course1
          title="Meet your Speaker"
          feat={[
            "Top Kaggle Expert",
            "Years of Experience in Data Science",
            "Worked at MNC's of ZS,Tatras Data & More",
          ]}
          linkTo="/speaker"
          buttCont="Meet the Speaker"
          image="/Images/Simran_profile.jpeg"
        />
        </>);
}

function Course1({title, feat, linkTo, buttCont, image} : {
    title: string,
    feat:string[],
    linkTo: string,
    buttCont: string,
    image: string
}) {
    const listFeat = feat.map((item, ind) => <li key={ind} className="bg-[#f1eaea] my-2 px-2 border-l-8 border-[--primary-color] rounded-r-md">{item}</li>);
    return (
      <div className="mx-5 my-[100px]">
        <div className="text-5xl text-[rgb(12,141,180)] text-center mb-10">{title}</div>
        <div className="grid grid-cols-[1fr_1fr]">
          <div className="px-[20%] py-2.5">
            <div className="text-[2rem]">
              <ul>
                {listFeat}
              </ul>
            </div>
            <div className="w-full flex justify-center px-0 py-[100px]">
              <button className="bg-[color:--primary-color] text-2xl border-[color:var(--primary-color)] transition-[0.5s] px-5 py-2.5 rounded-[7px] border-[3px] border-solid hover:opacity-75 hover:rounded-[10px]">
                <Link href={linkTo} className="text-[white] no-underline">
                  {buttCont}
                </Link>
              </button>
            </div>
          </div>
          <div>
            <img src={image} alt="Course Display" className="w-[90%] h-[400px] rounded-[10px] shadow-2xl" />
          </div>
        </div>
      </div>
    );
  }
  