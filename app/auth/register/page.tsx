

import FormRegister from '@/app/ui/login/formRegister'; 
import Link from 'next/link';

export default function Page() {
    return(<div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white font-extrabold ">Register</h1>
        <FormRegister />
        <div className="text-white font-bold">Already have an account?<Link href="/auth/login" className="font-bold text-blue-300 hover:text-blue-900"> Log In</Link></div>
    </div>);
}