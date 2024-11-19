'use client';
import { usePathname } from 'next/navigation';
import HeroSection from '../containers/home-page/hero-section';
import { useEffect } from 'react';

export default function Home() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0); // Scroll to top after all resources are loaded
    }
  }, [pathname]);

  return (
    <>
      <main className='m-auto w-[85%] md:w-[75%]'>
        <HeroSection />
      </main>
    </>
  );
}
