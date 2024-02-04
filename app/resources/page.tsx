import NavMenu from "../ui/home/navbar";
import HeadingSec from "../ui/resources/headingSec";
import ContBig from "../ui/resources/bigCont";
import ContSmall from "../ui/resources/smallCont";
import Footer from "../ui/footer";

export default function Page() {
    return(<div>
        <NavMenu login="simran" />
        <HeadingSec />
        <ContBig vid_src = "https://www.youtube.com/embed/3hTmOlzacrg?si=IfjCSsd-_IGWpGuh"/>
        <ContBig vid_src = "https://www.youtube.com/embed/HFr4h7WD6Hc?si=jTRar_cHGQ30uix8"/>
        <ContSmall />
        <Footer />
    </div>);
}


