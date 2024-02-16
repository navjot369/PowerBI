import Link from 'next/link';
import Image from 'next/image';

export default function AppLogo() {
    return (<div className="shrink-0"><Link href="/"><Image src="/logo_hor.png" width={200} height={200} className="w-auto h-16 py-1 shrink-0" alt="Placed logo"/></Link></div>); 
}