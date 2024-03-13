import Image from 'next/image';

export default function Layout({children} : {
    children : React.ReactNode
}) {
    return(<div className="w-screen h-screen bg-cover overflow-hidden bg-login-wall bg-no-repeat flex justify-center items-center">
        <div className="grid w-full m-0 md:mx-8 lg:w-[1000px] h-screen md:h-[80vh] grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 bg-slate-500 bg-opacity-80 shadow-[0_0_20px_#666] rounded-xl overflow-hidden">
            <div className="hidden md:flex overflow-hidden items-center justify-center bg-slate-300 m-1 rounded-lg">
            <Image className="w-4/5 mb-11" src="/colour_logo.png" width="500" height="1000" alt="Wallpaper" />
            </div>
            <div className="flex justify-center items-center h-full w-full pb-24 md:pb-0">{children}</div>
        </div>
    </div>);
}