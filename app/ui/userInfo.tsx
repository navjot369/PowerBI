

export default function UserInfo({ isLogin} : {isLogin: String}) {
    return (<div className="flex items-center fixed z-[14] mx-[30px] my-[15px] right-0 top-0">
    {isLogin === ""?
        (<div>
            <button className="bg-[color:var(--primary-color)] text-[white] border-[color:var(--primary-color)] rounded text-[1.3rem] transition-[0.3s] duration-[0.3s] px-2.5 py-1 border-2 border-solid hover:shadow-[3px_3px] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:text-[#eee]">Log In</button>
        </div>):
        (<div className="flex items-center">
            <div>
                <img src={"/Images/Simran_profile.jpeg"} className="w-10 rounded-[50%]"alt="Profile"/>
            </div>
            <div className="text-2xl text-[rgb(27,27,27)] opacity-[90%] mx-2.5 my-0">
                {isLogin}
            </div>
        </div>)}
    </div>);
}