import NavMenu from "../ui/home/navbar";
import WelSec from "../ui/profile/wel_sec";
import Footer from "../ui/footer";

export default function Page() {
    return(<div>
        <NavMenu login="Simran"/>
        <WelSec />
        <Footer />
    </div>);
}