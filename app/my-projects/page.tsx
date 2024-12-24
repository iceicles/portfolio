'use client';
import { usePathname } from 'next/navigation';
import React, { FC, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MainSection from '../../containers/projects-page/main-section';

const Projects: FC<{}> = ({}) => {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // scroll to top after all resources are loaded
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className='flex flex-col items-center justify-center gap-9'>
      <TypeAnimation
        sequence={[
          'Working on it...',
          2000,
          'In progress...',
          2000,
          'Coming soon...',
          4000,
        ]}
        repeat={Infinity}
        speed={30}
        deletionSpeed={10}
        style={{ fontSize: '1.25rem' }}
      />
      <MainSection />
    </div>
  );
};

export default Projects;
