import Sec1 from "../ui/contact/section1";
import NavMenu from "../ui/home/navbar";
import TopSec from "../ui/contact/topSec";
import Footer from "../ui/footer";

export default function Page() {
    return(<div className="p-0 m-0">
        <NavMenu login="Simran"/>
        <TopSec />
        <Sec1 />
        <Footer />
    </div>);
}