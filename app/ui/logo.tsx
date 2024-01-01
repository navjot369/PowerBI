import Link from 'next/link';
import Image from 'next/image';

export default function AppLogo() {
    return (<div className="shrink-0"><Link href="/"><Image src="/logo.png" width={200} height={200} className="w-32 sm:w-40 shrink-0" alt="Placed logo"/></Link></div>); 
}