import Image from 'next/image';

export default function Layout({children} : {
    children : React.ReactNode
}) {
    return(<div className="w-screen h-screen bg-cover bg-login-wall bg-no-repeat flex justify-center items-center">
        <div className="grid w-full lg:w-[1000px] h-[80vh] grid-cols-2 grid-rows-1 bg-slate-500 bg-opacity-80 shadow-[0_0_20px_#666] rounded-xl overflow-hidden">
            <div className="overflow-hidden flex items-center justify-center bg-slate-300 m-1 rounded-lg">
            <Image className="w-4/5 mb-11" src="/logo.png" width="500" height="1000" alt="Wallpaper" />
            </div>
            <div className="flex justify-center items-center h-full w-full">{children}</div>
        </div>
    </div>);
}