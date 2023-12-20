import Link from 'next/link';
import Image from 'next/image';

export default function AppLogo() {
    return (<div className="bg-white"><Link href="/" className="fixed top-4 left-4 w-40 min-[990px]:w-52 z-50 bg-white min-[990px]:bg-transparent"><Image src="/logo.png" width={200} height={100} className="w-60" alt="Placed logo"/></Link></div>); 
}