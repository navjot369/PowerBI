import NavMenu from "../ui/home/navbar";
import HeroSec from "../ui/program/heroSec";
import StatSec from "../ui/program/statSec";
import CurriculumSec from "../ui/program/curriSec";
import VideoSec from "../ui/program/videoSec";
import SpeakerSec from "../ui/program/SpeakerSec";

export default function Page() {
    return(<div>
        <NavMenu />
        <HeroSec />
        <StatSec />
        <CurriculumSec />
        <VideoSec />
        <SpeakerSec />
    </div>);
}