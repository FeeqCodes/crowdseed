'use client'
import { useEffect } from 'react';
import CenterText from './CenterText';
import Cards from './components/Cards';
import FirstSection from './components/FirstSection';
import Hero from './components/Hero';
import SecondSection from './components/SecondSection';
import Faq from './components/Faq';
import CenterCard from './components/CenterCard';










export default function Home() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);




  return (
    <>
      <div
        style={{
          backgroundImage:
            "radial-gradient(at 20% 100%, rgb(0,80,255) 0, transparent 60%),radial-gradient(at 80% 100%, rgb(185,35,255) 0, transparent 55%)",
        }}
      >
        <Hero />
      </div>

      {/* Main Content w-[95vw] */}
      <div className="mt-[15rem] mb-[20rem]">
        <FirstSection />
      </div>

      <div
        style={{
          backgroundImage:
            "radial-gradient(at 20% 100%, rgb(0,80,255) 0, transparent 100%),radial-gradient(at 80% 100%, rgb(185,35,255) 0, transparent 100%)",
        }}
        className=" h-[100vh] flex gap-10 justify-center items-center"
      >
        <Cards src="/3d-render-man-with-huge-lamp-creative-solution-removebg-preview.png" />
        <Cards src="/3d-render-hands-clapping-with-sound-effect-removebg-preview.png" />
        <Cards src="/3d_cartoon_style_document_with_green_tick_icon-removebg-preview.png" />
      </div>

      <div className="h-auto my-[20rem]">
        <SecondSection />
      </div>

      <div
        style={{
          backgroundImage:
            "radial-gradient(at 80% 100%, rgb(0,80,255) 0, transparent 100%),radial-gradient(at 20% 100%, rgb(185,35,255) 0, transparent 100%)",
        }}
        className="h-auto"
      >
        <Faq />
      </div>

      <CenterCard content="At CrowdSeed, we believe in the profound journey of life, where each heartbeat represents an opportunity to make a difference. Our platform is not just about contributions; it's about the emotions, the stories, and the shared humanity that bind us together. Here, we come together to support dreams, heal wounds, and uplift spirits. We celebrate the strength of the human spirit, the power of collective empathy, and the beauty of turning dreams into reality. Join us on this incredible journey, where your contributions are not just transactions, but threads of hope, compassion, and love that weave the tapestry of a better world." />
    </>
  );
}
