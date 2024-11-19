'use client';
import React, { FC, useEffect } from 'react';
import MainSection from '../../containers/contact-page/main-section';
import { usePathname } from 'next/navigation';

const Contact: FC<{}> = ({}) => {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0); // Scroll to top after all resources are loaded
    }
  }, [pathname]);

  return <MainSection />;
};

export default Contact;
