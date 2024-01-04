import NavMenu from "../ui/home/navbar";
import HeroSec from "../ui/program/heroSec";
import StatSec from "../ui/program/statSec";
import CurriculumSec from "../ui/program/curriSec";
import VideoSec from "../ui/program/videoSec";
import SpeakerSec from "../ui/program/SpeakerSec";
import FeatureSec from "../ui/program/featSec";
import PaymentSec from "../ui/program/paymentSec";
import Footer from "../ui/footer";

export default function Page() {
    return(<div>
        <NavMenu />
        <HeroSec />
        <StatSec />
        <CurriculumSec />
        <VideoSec />
        <SpeakerSec />
        <FeatureSec />
        <PaymentSec />
        <Footer />
    </div>);
}