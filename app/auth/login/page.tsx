
import FormLogin from '@/app/ui/login/formInner';
import Link from 'next/link';

export default function Page() {
    return(<div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-black font-extrabold ">Login</h1>
        <FormLogin />
        <Link href="#" className="text-[--pc] font-bold text-lg hover:text-green-950">Forget Password?</Link>
        <div className="text-black font-bold text-lg">Don't have an account?<Link href="/auth/register" className="font-bold text-[--pc] hover:text-green-950"> Sign up</Link></div>
    </div>);
}