import Image from 'next/image';
import Link from 'next/link';

export default function SpeakerSec() {
    return(<div className="my-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="p-4">
            <Image src="/Images/Speaker_img.jpg" className="rounded-full w-2/3 mx-auto md:w-full" width="500" height="500" alt="Speaker" />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center px-11">
            <div className="text-5xl font-bold my-2 text-center md:text-left">Sahibpreet Singh</div>
            <div className="text-md my-4 text-center md:text-left">Mr. Singh is an Experienced Data Scientist with a focus on NLP, Conversational AI, and Generative AI. He has been Recognized as a top mentor on Kaggle, positioned in the uppermost 0.01% percentile. Adept at both collaborative teamwork and leadership, possessing outstanding communication proficiency. Mr. Singh is Devoted to providing advanced solutions that unveil concealed value within textual data and has been Demonstrating robust analytical skills and an enthusiastic drive for producing meaningful outcomes.</div>
            <div><Link href="/team/instructors" className="font-bold hover:text-slate-400 duration-500">Meet your Speaker &rarr;</Link></div>
        </div>
    </div>);
}