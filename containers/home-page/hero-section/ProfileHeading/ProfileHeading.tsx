import React, { FC } from 'react';
import InfoSection from '../../info-section';

const ProfileHeading: FC<{}> = ({}) => {
  return (
    <div className='m-auto w-[95%] sm:w-[85%] lg:w-[75%] desktop-lg:w-[50%] '>
      <h1 className='text-[clamp(1.8rem,1rem+3vw,3.5rem)] mb-[calc(1.25rem*2)]'>
        <strong className=''>
          Hi,{' '}
          <span className='text-primaryColor bg-gray-800 rounded p-2 '>
            I'm Moses
          </span>
        </strong>
        .
      </h1>
      <h2 className='text-[clamp(1.5rem,0.7rem+3vw,3.2rem)]'>
        I'm a software engineer, hobbyist game developer, and an enthusiast of
        music and fitness
      </h2>
      <hr className='m-4 p-4 border-gray-800' />
      <p className='text-[clamp(1rem,.6rem+2vw,1.6rem)] mb-[calc(1.5rem*2)]'>
        <i>
          I currently live in Toronto, Ontario, and work for {}
          <a
            href='https://www.canadiantire.ca/en.html'
            target='_blank'
            className='underline decoration-4 md:decoration-8 decoration-blue-500/40'
          >
            Canadian Tire
          </a>
          {} as a front end engineer
        </i>
      </p>
      <InfoSection />
    </div>
  );
};

export default ProfileHeading;
