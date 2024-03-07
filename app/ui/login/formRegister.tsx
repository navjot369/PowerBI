'use client'

import {useState, useRef, useEffect} from 'react';
import { apiLink } from '@/app/api';
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";

export default function FormRegister() {
    const [formData, setFormData] = useState({
        "username": "",
        "name" : "",
        "email" : "",
        "password" : ""
    });
    const [resMessage, setResMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const [confirmPass, setConfirmPass] = useState("");
    const [validShow, setValidShow] = useState(false);
    const [confShow, setConfShow] = useState(false);
    const userRef: any = useRef(null);
    const passRef: any = useRef(null);
    const nameRef: any = useRef(null);
    const pass2Ref: any = useRef(null);
    const handleChange = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const validPass = (e:any) => {
        handleChange(e);
        let pass = 0;
    }
    const handleConfirm = (e: any) => {
        setConfirmPass(e.target.value);
    }
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        if(!isValid(formData.password)) {
            passRef.current.focus();
            return;
        }
        if(!isSame(formData.password, confirmPass)) {
            pass2Ref.current.focus();
            return;
        }
        setLoading(true);
        setResMessage("");
        userRef.current.toggleAttribute("disabled", true);
        passRef.current.toggleAttribute("disabled", true);
        nameRef.current.toggleAttribute("disabled", true);
        pass2Ref.current.toggleAttribute("disabled", true);
        
        try {
            const res = await axios.post(apiLink + "/auth/register", formData);
            localStorage.setItem("user", formData.username);
            // window.location.href="/";
            setLoading(false);
        }
        catch (error: any) {
            setResMessage(error.response.data.message);
            userRef.current.toggleAttribute("disabled", false);
            passRef.current.toggleAttribute("disabled", false);
            nameRef.current.toggleAttribute("disabled", false);
            pass2Ref.current.toggleAttribute("disabled", false);
            setLoading(false);
            console.log(error);
        }
    }
    return(<form className="w-full flex flex-col justify-center items-center mt-11" onSubmit={handleSubmit}>
        <div className="text-md text-red-700 font-bold">{resMessage}</div>
        <div className="bg-white h-11 p-2 my-2 rounded-xl grid grid-cols-[1fr] grid-rows-1 items-center relative">
            <div className="pt-2">
                <input className="outline-none auth-input w-72 placeholder:text-white disabled:bg-white disabled:text-slate-500" ref={userRef} 
                value={formData.username} type="text" name="username" onChange={handleChange} id="username" placeholder="." disabled={false} required></input>
                <label className="absolute left-2 top-0 duration-300" htmlFor="username">Name</label>
            </div>
        </div>
        <div className="bg-white h-11 p-2 my-2 rounded-xl grid grid-cols-[1fr] grid-rows-1 items-center relative">
            <div className="pt-2">
                <input className="outline-none auth-input w-72 placeholder:text-white disabled:bg-white disabled:text-slate-500" ref={nameRef} 
                value={formData.name} type="text" name="name" onChange={handleChange} id="name" placeholder="." disabled={false} required></input>
                <label className="absolute left-2 top-0 duration-300" htmlFor="name">E-mail</label>
            </div>
        </div>
        <div className="bg-white h-11 p-2 my-2 rounded-xl grid grid-cols-[1fr] grid-rows-1 items-center relative">
            <div className="pt-2">
                <input className="outline-none auth-input w-72 placeholder:text-white disabled:bg-white disabled:text-slate-500" ref={passRef} 
                value={formData.password} name="password" type={showPass1?"text":"password"} onChange={handleChange} onFocus={() => setValidShow(true)} onBlur={() => setValidShow(false)} id="pass" placeholder="." disabled={false} required></input>
                <label className="absolute left-2 top-0 duration-300" htmlFor="pass">New Password</label>
                <p className="absolute text-sm h-full rounded-2xl top-0 right-0 bg-white p-2 flex items-center text-black font-bold cursor-default" onClick={() => setShowPass1(!showPass1)}>{showPass1?"Hide":"Show"}</p>
            </div>
            {validShow && <ValidPass ele = {formData.password} />}
        </div>
        <div className="bg-white h-11 p-2 my-2 rounded-xl grid grid-cols-[1fr] grid-rows-1 items-center relative">
            <div className="pt-2">
                <input className="outline-none auth-input w-72 placeholder:text-white disabled:bg-white disabled:text-slate-500" ref={pass2Ref} 
                value={confirmPass} name="passConfirm" onFocus={() => setConfShow(true)} onBlur={() => setConfShow(false)} type={showPass2?"text":"password"} onChange={handleConfirm} id="pass2" placeholder="." disabled={false} required></input>
                <label className="absolute left-2 top-0 duration-300" htmlFor="pass2">Confirm Password</label>
                <p className="absolute text-sm h-full rounded-2xl top-0 right-0 bg-white p-2 flex items-center text-black font-bold cursor-default" onClick={() => setShowPass2(!showPass2)}>{showPass2?"Hide":"Show"}</p>
            </div>
            {confShow && <ConfirmShow pass1 = {formData.password} pass2 = {confirmPass} />}
        </div>
        <div className="w-full">{ isLoading? 
        <div className="w-full p-3 flex h-11 justify-center items-center rounded-xl my-2 bg-[#289492]"><BeatLoader color="white" loading= {true} size={10} aria-label="Loading Spinner" data-testid="loader"/></div>
        :<button className="w-full p-2 text-xl text-white flex h-11 justify-center items-center my-2 rounded-xl bg-[#1e4847] hover:brightness-150 font-bold duration-200" type="submit">Continue</button>
        }</div>
    </form>);
}

function ValidPass({ele} : {
    ele: any
}) {
    return(<div className="absolute top-1/2 right-full flex justify-center items-center -translate-y-1/2">
        <div className="bg-black bg-opacity-80 rounded-xl p-4">
            <ValidLine right={ele.length > 7} line="Password should be 8 characters long" />
            <ValidLine right={/\d/.test(ele)} line="Password should have digits" />
            <ValidLine right={/[a-z]/.test(ele)} line="Password should have lowercase letters" />
            <ValidLine right={/[A-Z]/.test(ele)} line="Password should have uppercase letters" />
            <ValidLine right={/[!@#$%&]/.test(ele)} line="Password should have special symbols" />
        </div>
        <div className="w-0 h-0 border-y-8 border-l-8 border-l-black border-y-transparent opacity-80"></div>
    </div>);
}

function ValidLine({right, line} : {
    right: boolean, 
    line: String
}) {
    if(right) {
        return(<p className="text-green-600 truncate font-bold"><span className="px-2">&#x2713;</span>{line}</p>);
    }
    else{
        return(<p className="text-red-700 truncate font-bold"><span className="px-2">&#x274C;</span>{line}</p>)
    }
}

function ConfirmShow({pass1, pass2} : {
    pass1: String,
    pass2: String
}){
    return(<div className="absolute top-1/2 right-full flex justify-center items-center -translate-y-1/2">
    <div className="bg-black bg-opacity-80 rounded-xl p-4">
        {pass1 === pass2 && pass1 !== ""?
        <p className="text-green-600 truncate font-bold"><span className="px-2">&#x2713;</span>Both the passwords should be same</p>:
        <p className="text-red-700 truncate font-bold"><span className="px-2">&#x274C;</span>Both the passwords should be same</p>}
    </div>
    <div className="w-0 h-0 border-y-8 border-l-8 border-l-black border-y-transparent opacity-80"></div>
</div>);
}

function isValid(pass1: string): boolean {
    if(pass1.length < 8) {return false;}
    if(!/\d/.test(pass1)) {return false;}
    if(!/[a-z]/.test(pass1)) {return false;}
    if(!/[A-Z]/.test(pass1)) {return false;}
    if(!/[!@#$%&]/.test(pass1)) {return false;}
    return true;
}

function isSame(pass1: string, pass2: string): boolean {
    if(pass1 === pass2) {
        return true;
    }else{
        return false;
    }
}