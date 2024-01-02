import Image from 'next/image';

export default function Section3() {
    return (<div className="grid grid-cols-[1fr] md:grid-cols-[2fr_3fr] px-4 mx-auto max-w-6xl my-20">
        <div className="text-3xl sm:text-5xl font-bold tracking-wider text-center px-2">Tech Stack you will Build</div>
        <div className="flex flex-nowrap justify-center items-stretch py-2 h-auto lg:h-28 w-full">
            <Image src="/Images/unnamed.png"   className="mx-1 w-1/6" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-2.png" className="mx-1 w-1/6" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-3.png" className="mx-1 w-1/6" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-4.png" className="mx-1 w-1/6" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-5.png" className="mx-1 w-1/6" width="100" height="100" alt="Tech Stack"/>
        </div>
    </div>);
}