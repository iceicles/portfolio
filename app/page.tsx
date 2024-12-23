'use client';
import { usePathname } from 'next/navigation';
import HeroSection from '../containers/home-page/hero-section';
import { useEffect } from 'react';

export default function Home() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // scroll to top after all resources are loaded
      window.scrollTo(0, 0);
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
