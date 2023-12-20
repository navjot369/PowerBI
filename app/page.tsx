import Image from 'next/image'
import SearchBar from './ui/home/searchbar';
import NavMenu from './ui/home/navbar';
import HeroSection from './ui/home/heroSec';
import StatSection from './ui/home/statsSec';
import UspSection from './ui/home/UspSections';
import InfoSec from './ui/home/infoSec';

export default function Home() {
  return (<div>
    <SearchBar />
    <div>
      <NavMenu />
      <HeroSection />
      <StatSection />
      <UspSection />
      <InfoSec />
    </div>
  </div>);
}