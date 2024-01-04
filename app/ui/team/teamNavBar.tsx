'use client';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import clsx from 'clsx';

const arrLinks = [{name: "Hiring Partners", href: "/team/hiring_partners"}, 
{name: "Instructors", href: "/team/instructors"}, {name: "The Executors", href: "/team/the_executors"}];

export default function TeamNavBar() {
    const path = usePathname();
    return(<div className="fixed top-0 left-0 w-full pt-14 sm:pt-18 bg-[white] shadow-inner">
        <div className="flex flex-row max-w-5xl mx-auto w-fit sm:gap-11">
            {arrLinks.map((item, ind) => (
                <Link key={ind} href={item.href} className={clsx("font-bold text-md sm:text-xl pb-1 px-2 border-b-4 text-center flex items-center", {"border-[#007f7f]" : item.href === path}, {"border-transparent" : item.href != path})}>{item.name}</Link>
            ))}
        </div>
    </div>)
}
