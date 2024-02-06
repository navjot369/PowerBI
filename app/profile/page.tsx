import NavMenu from "../ui/home/navbar";
import WelSec from "../ui/profile/wel_sec";
import Footer from "../ui/footer";

export default function Page() {
    const login = "Simrandeep Singh";
    return(<div>
        <NavMenu login="Simran"/>
        {login.length === 0 ? 
        (<div className="w-full h-screen flex items-center justify-center">User not found</div>) :
        (
            <div>
                <WelSec name={login}/>
            </div>
        )
    }
        <Footer />
    </div>);
}