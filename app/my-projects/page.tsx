'use client';
import { usePathname } from 'next/navigation';
import React, { FC, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Projects: FC<{}> = ({}) => {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0); // Scroll to top after all resources are loaded
    }
  }, [pathname]);

  return (
    <div className='flex items-center justify-center'>
      <TypeAnimation
        sequence={[
          'In progress...',
          2000,
          'Currently cooking...',
          2000,
          'Working on it...',
          4000,
        ]}
        repeat={Infinity}
        speed={30}
        deletionSpeed={10}
        style={{ fontSize: 'clamp(2.8rem, 2rem + 2vw, 2.5rem)' }}
      />
    </div>
  );
};

export default Projects;
