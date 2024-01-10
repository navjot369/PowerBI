import NavMenu from "../ui/home/navbar";
import TeamNavBar from "../ui/team/teamNavBar";
import Footer from "../ui/footer";

export default function Layout({ children } : {
    children : React.ReactNode
}) {
    return (<div>
        <NavMenu login="Simran"/>
        <TeamNavBar />
        <div className="w-full pt-24"></div>
        { children }
        <Footer />
    </div>);
}