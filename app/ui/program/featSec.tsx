import Image from 'next/image';

export default function FeatureSec() {
    return(<div className="mt-32 w-full max-w-6xl mx-auto">
        <div className="mx-auto">
            <h2 className="text-center text-4xl font-bold my-4">Industry Ready Job Scientist</h2>
            <p className="w-full md:w-2/3 mx-auto text-center my-2">Become an Industry Ready Professional Data scientist within an year. Get Industry Ready Skills, work on Real-life Projects and Get taught by the Best in Class.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-stretch my-11">
            <Box title="100% Assured Placement" desp="Data Science Courses Backed with 100% Assured placement for you!" iconSrc="/Icons/king.svg" />
            <div className="hidden md:block w-0.5 bg-slate-700 rounded-full"></div>
            <Box title="Data Scientist Within an Year" desp="Become a Data Scientist within an Year and Become Completely Industry Ready for Job Hikes" iconSrc="/Icons/clock.svg" />
            <div className="hidden md:block w-0.5 bg-slate-700 rounded-full"></div>
            <Box title="Learn From The Best" desp="The Course would be Taught by Professional and Experienced data scientists Working in the Domain from years." iconSrc="/Icons/best-choice.svg" />
        </div>
    </div>)
}

function Box({ title, desp, iconSrc} : {
    title: string,
    desp: string,
    iconSrc: string
}) {
    return(<div className="flex flex-col items-center w-full md:w-1/4 my-2 h-full justify-evenly ">
        <div className="w-[40px] h-[40px] rounded-full bg-[#ff9635] p-2 flex flex-shrink-0 justify-center items-center"><Image src={iconSrc} width="50" height="50" alt="icons" /></div>
        <div className="text-xl text-center font-bold my-2">{title}</div>
        <div className="text-sm text-center">{desp}</div>
    </div>)
}