import { Navigation } from '../components/Navigation/Navigation';
import HeroSection from '../containers/home-page/hero-section';
import InfoSection from '../containers/home-page/info-section';

export default function Home() {
  return (
    <>
      <main className='m-auto w-[75%] mt-[10vh]'>
        <HeroSection />
      </main>
    </>
  );
}
