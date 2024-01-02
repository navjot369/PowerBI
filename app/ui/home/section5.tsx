import Image from 'next/image';

export default function Section5() {
    return(<div className="flex w-full flex-col md:flex-row justify-stretch max-w-7xl m-auto">
        <div className="px-14 flex-grow">
            <div className="text-6xl my-6 font-bold">Why Placed?</div>
        </div>
        <div className="px-14 flex-grow">
            <SingleTitle title="100 % Assured Placement" desp="Data Science Courses Backed with 100% Assured placement for you!" source="/Icons/king.svg"/>
            <SingleTitle title="Data Scientist Within an Year" desp="Become a Data Scientist within an Year and Become Completely Industry Ready for Job Hikes" source="/Icons/clock.svg"/>
            <SingleTitle title="Learn From The Best" desp="The Course would be Taught by Professional and Experienced data scientists Working in the Domain from years." source="/Icons/best-choice.svg"/>
        </div>
    </div>)
}

function SingleTitle({title, desp, source} : {
    title: string,
    desp: string,
    source: string
}) {
    return(<div className="flex my-4 flex-row items-start">
        <div className="w-[40px] h-[40px] rounded-full bg-[#ff9635] p-2 flex flex-shrink-0 justify-center items-center"><Image src={source} width="50" height="50" alt="icons" /></div>
        <div className="px-4">
            <div className="text-2xl font-bold">{title}</div>
            <div className="font-light text-[#999] text-xl">{desp}</div>
        </div>
    </div>)
}