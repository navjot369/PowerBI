'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import clsx from 'clsx';


export default function NavMenu() {
    let [cName, setName] = useState("");
    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY > 50) {
                setName("navTemp")
            }
            else {
                setName("");
            }
        })
    });
    return (
    <div className={clsx("sticky w-full border-b-[color:var(--primary-color)] backdrop-blur-[0.8] bg-[rgba(255,255,255,0.85)] z-[12] p-2.5 pl-auto border-b-[3px] border-solid left-0 top-0 outer",
    {"pt-10 pl-auto min-[990px]:pt-2.5 min-[990px]:pl-64" : cName === "navTemp"})}>
        <div className={clsx("w-full flex flex-row justify-evenly items-center", 
        {"justify-evenly min-[990px]:justify-start": cName === "navTemp"})}>
        <Link href='/program' className="text-[black] text-center text-[1.5rem] font-bold z-[13] no-underline transition-[0.3s] mx-[3px] my-0 px-2.5 py-1 hover:text-[grey]">Programs</Link>
        <Link href='/resources' className="text-[black] text-center text-[1.5rem] font-bold z-[13] no-underline transition-[0.3s] mx-[3px] my-0 px-2.5 py-1 hover:text-[grey]">Resources</Link>
        <Link href='/speaker' className="text-[black] text-center text-[1.5rem] font-bold z-[13] no-underline transition-[0.3s] mx-[3px] my-0 px-2.5 py-1 hover:text-[grey]">Speakers</Link>
        </div>
    </div>);
}