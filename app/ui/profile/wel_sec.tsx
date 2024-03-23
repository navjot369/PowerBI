'use client'
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { apiLink } from '@/app/api';
import { BeatLoader } from "react-spinners";

export default function WelSec() {
    const [user, setUser] = useState({name: "", email: "", username: ""});
    useEffect(() => {
        let str = localStorage.getItem("user");
        if(str != null && str.length > 0) {
            try {
                const getData = async () => {
                    const response = await axios.get(apiLink+"/user/"+str);
                    setUser(response.data.user);
                }
                getData();
            } catch {
                console.log("No user with this record exists");
            }
        }
    }, []);
    if(user.username.length === 0){
        return(<div className="top-0 left-0 right-0 bottom-0 text-4xl h-screen w-screen mx-auto flex justify-center items-center">
            <BeatLoader loading={true} color="#008080" size={40} />
        </div>)
    }
    return(<div className="relative w-full mx-auto mt-11 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 w-full h-full">
            <Image src="/Images/profile_background.svg" className="w-full h-full top-0 left-0 right-0 hidden md:block" width="1000" height="1000" alt="Backround-graphics" />
        </div>
        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#14BAB7] shadow-[0_0_100px_100px_#14BAB7]"></div>
        <div className="relative pt-52 px-4 sm:px-16 md:px-32 max-w-6xl mx-auto">
            <div className="w-full grid grid-cols-1 md:grid-cols-[6fr_5fr] gap-4">
                <div className="relative h-full">
                    <div className="absolute top-4 left-4 rounded-full bg-[#00807E] w-11 h-11 shadow-[0_0_100px_100px_#00807E]"></div>
                    <div className="relative h-full px-6 py-11 rounded-lg bg-[#F1F1F1] flex flex-col items-center">
                        <Image src="/Images/profile_photo.png" className="rounded-full w-32 h-32" width="100" height="100" alt="Profile pic" />
                        <h1 className="my-4 text-3xl font-bold text-center">{user.name}</h1>
                        <div className="text-xl">
                            <p><span className="font-bold">Email:</span> {user.email}</p>
                            <p><span className="font-bold">Username:</span> {user.username}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-center md:pl-11 h-full gap-4">
                    <Link className="flex h-full bg-[#00807E] rounded-lg py-4 flex-col items-center justify-center hover:scale-95 duration-300" href="/profile">
                        <Image src="/Images/profile_course1.svg" className="w-16 h-16 my-4" width="100" height="100" alt="Icon" />
                        <h3 className="text-white font-bold text-xl">Enrolled Courses</h3>
                    </Link>
                    <Link className="flex h-full bg-[#00807E] rounded-lg py-4 flex-col items-center justify-center hover:scale-95 duration-300" href="/profile">
                        <Image src="/Images/profile_course2.svg" className="w-16 h-16 my-4" width="100" height="100" alt="Icon" />
                        <h3 className="text-white font-bold text-xl">Course Available</h3>
                    </Link>
                </div>
            </div>
            <div className="w-full mt-24 pb-11">
                <Image src="/Images/profile_stats.svg" className="block mx-auto" width="500" height="500" alt="Stats" />
            </div>
        </div>
    </div>);
}