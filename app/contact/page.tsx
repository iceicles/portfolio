'use client';
import React, { FC, useEffect } from 'react';
import MainSection from '../../containers/contact-page/main-section';
import { usePathname } from 'next/navigation';

const Contact: FC<{}> = ({}) => {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // scroll to top after all resources are loaded
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className='md:animate-transitionIn'>
      <MainSection />
    </div>
  );
};

export default Contact;
