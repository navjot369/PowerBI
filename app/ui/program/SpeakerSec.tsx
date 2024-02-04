import Image from 'next/image';
import Link from 'next/link';

export default function SpeakerSec() {
    return(<div className="my-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="p-4">
            <Image src="/Images/Sahib_img.jpg" className="rounded-full w-2/3 mx-auto md:w-full" width="500" height="500" alt="Speaker" />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center px-11">
            <div className="text-5xl font-bold my-2 text-center md:text-left">Mr. Shishir Dhangar</div>
            <div className="text-md my-4 text-center md:text-left">Mr. Shishir is a distinguished Business Intelligence consultant specializing in Power BI and Tableau. With a proven track record in fraud detection and customer segmentation for clients like ICICI Bank and Nestle, he excels in transforming data into actionable insights. Renowned for his dynamic dashboards, he also conducts tailored corporate training sessions for industry leaders such as Nestle and Michelin Tyres. His approach integrates data analytics, business process automation, and strategic management concepts to drive growth strategies, enhancing decision-making and operational efficiency.</div>
            <div><Link href="/team/instructors" className="font-bold hover:text-slate-400 duration-500">Meet your Speaker &rarr;</Link></div>
        </div>
    </div>);
}