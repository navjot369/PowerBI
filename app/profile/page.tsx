import NavMenu from "../ui/home/navbar";
import WelSec from "../ui/profile/wel_sec";
import MyCourse from "../ui/profile/myCourses";
import Footer from "../ui/footer";

export default function Page() {
    const login = "Simrandeep Singh";
    return(<div>
        <NavMenu login=""/>
        {login === "" ? 
        (<div className="w-full h-screen flex items-center justify-center">User not found</div>) :
        (
            <div>
                <WelSec name={login}/>
                <MyCourse />
            </div>
        )
    }
        <Footer />
    </div>);
}