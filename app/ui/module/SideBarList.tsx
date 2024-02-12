import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function SideBar({modules}: {
    modules: []
}) {
    const path:any = usePathname();
    const modNum = parseInt(path.at(-1));
    return(<div className="w-full">
        {modules && <h1 className="text-xl font-bold my-4 ">Course Material</h1>}
        <div className="flex flex-col justify-center">
        {modules && modules.map((item: any, ind) => {
            return(<Link key={ind} className={clsx("m-1 py-1 px-4 border-l-4 border-transparent rounded-md text-lg transition-all duration-200 flex justify-start items-center hover:brightness-50", 
            {"bg-slate-200 bg-opacity-30 border-l-white hover:brightness-100" : (ind+1) == modNum})} href={"./" + (ind+1)}>
            <div className="w-6 h-6 mx-4 bg-white rounded-full"></div>
                {item.title}
            </Link>)
        })}
        </div>
    </div>)
}