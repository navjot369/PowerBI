import Image from 'next/image';

export default function Container({ source, desig, name, desp, right } : {
    source : string,
    desig: string,
    name: string,
    desp: string,
    right: boolean
}) {
    return(<div className="my-2 md:-my-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className={"relative " + (right? "md:col-start-2 md:col-end-3" : "md:col-start-1 md:col-end-2")}>
        <div className="p-4 w-full absolute top-0 right-0 flex justify-center">
            <Image src={source} className="rounded-full bg-white aspect-sqaure mx-auto w-36 h-36 md:w-56 md:h-56 shadow-xl" width="500" height="500" alt="Speaker" />
        </div>
        <div className="flex flex-col items-center mt-20 md:mt-32 pt-20 md:pt-32 mx-auto pb-11 shadow-[0_0_50px_-10px_var(--pc)] rounded-lg justify-center px-4 md:px-11 w-full bg-white">
            <div className="text-3xl font-bold my-2 mb-0 text-center md:text-left">{name}</div>
            <div className="text-lg text-center font-bold text-[--pc]">{desig}</div>
            <div className="text-lg my-2 md:my-4 text-center">{desp}</div>
        </div>
        </div>
    </div>);
}