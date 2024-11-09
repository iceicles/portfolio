'use client';
import React, { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Projects: FC<{}> = ({}) => {
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
