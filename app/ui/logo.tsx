import Link from 'next/link';
import Image from 'next/image';

export default function AppLogo() {
    return (<div className=""><Link href="/"><Image src="/logo.png" width={200} height={200} className="w-40" alt="Placed logo"/></Link></div>); 
}