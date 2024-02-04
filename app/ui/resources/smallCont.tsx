import Link from "next/link";
import Image from "next/image";

export default function ContSmall() {
    return(<div className="w-full max-w-6xl mx-auto my-8">
        <div className="flex justify-between w-full">
            <h1 className="text-2xl font-bold">Documents</h1>
            <Link href="/resources" className="font-bold group text-slate-700">View More<span className="group-hover:px-2 duration-200"></span> &gt;<span className="px-6 group-hover:px-4 duration-200"></span></Link>
        </div>
        <div className="flex overflow-scroll no-scrollbar py-4">
            <Box img_src="/Images/data-science.jpg" title="Title" desp="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " link="/resources" />
            <Box img_src="/Images/data-science.jpg" title="Title" desp="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " link="/resources" />
            <Box img_src="/Images/data-science.jpg" title="Title" desp="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " link="/resources" />
            <Box img_src="/Images/data-science.jpg" title="Title" desp="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " link="/resources" />
            <Box img_src="/Images/data-science.jpg" title="Title" desp="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " link="/resources" />
        </div>
    </div>);
}

function Box({img_src ,title, desp, link} : {
    img_src : string, 
    title: string,
    desp: string,
    link: string}) {
        return(<div className="min-w-[300px] rounded-xl mr-4 overflow-hidden shadow-lg">
            <Link href={link} className="block">
                <div>
                    <Image src={img_src} width="400" height="300" alt="Document Banner"/>
                    <h3 className="text-xl font-bold p-4">{title}</h3>
                    <p className="text-md p-4 w-full">{desp}</p>
                </div>
            </Link>
        </div>);
}