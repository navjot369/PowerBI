'use client';

import { useRef } from 'react';

export default function SearchBar() {
    const inputText = useRef();
    const clickit = () => {
        inputText.current.focus();
    }
    return (
        <div className="w-full flex justify-center bg-[white] p-3 z-2">
            <button className="max-w-[100%] min-[990px]:max-w-[50%] w-screen mt-9 min-[990px]:mt-0 bg-[white] flex items-center z-10 px-2.5 py-[5px] rounded-md border-2 border-solid border-[rgb(208,204,204)]" onClick={clickit}>
                <img src='/Icons/loupe.png' className="w-[25px]" alt="Search Symbol"/>
                <input type="text" name="query" className="w-full bg-inherit text-[1.2rem] ml-2.5 border-[none] outline-none" placeholder="Search our resources" ref={inputText}/>
            </button>
        </div>
    );
}