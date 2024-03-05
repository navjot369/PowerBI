import Image from 'next/image';
import FormLogin from '@/app/ui/login/formInner';
import Link from 'next/link';

export default function Page() {
    return(<div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white font-extrabold ">Login</h1>
        <FormLogin />
        <div className="text-white font-bold">Don't have an account?<Link href="/auth/register" className="font-bold text-blue-300 hover:text-blue-900"> Sign up</Link></div>
    </div>);
}