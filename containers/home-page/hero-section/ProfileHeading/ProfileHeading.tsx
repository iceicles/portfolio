'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import InfoSection from '../../info-section';
import { TypeAnimation } from 'react-type-animation';

const ProfileHeading: FC<{}> = ({}) => {
  return (
    <div className='m-auto w-[75%]'>
      <h2 className='text-[clamp(1.8rem,1rem+3vw,3.5rem)] mb-[calc(1.25rem*2)]'>
        <strong>
          Hi, <span className='bg-gray-800 rounded p-2'>I'm Moses</span>.{' '}
        </strong>
      </h2>
      <div className='h-[15rem] sm:h-[6rem]'>
        <TypeAnimation
          sequence={[
            "I'm a fullstack web developer",
            2000,
            "I'm a mobile developer",
            2000,
            "I'm a game developer",
            2000,
          ]}
          repeat={Infinity}
          speed={30}
          deletionSpeed={40}
          style={{ fontSize: 'clamp(2.8rem, 2rem + 2vw, 2.5rem)' }}
        />
      </div>
      <p className='mt-[1vh] text-[clamp(1.2rem,.6rem+2vw,1.8rem)] mb-[calc(1.5rem*2)]'>
        <i>
          I currently live in Toronto, Ontario, and work for {}
          <Link
            href='https://www.canadiantire.ca/en.html'
            target='_blank'
            className='underline'
          >
            Canadian Tire
          </Link>
          {} as a frontend engineer
        </i>
      </p>
      <InfoSection />
    </div>
  );
};

export default ProfileHeading;
/* 
old - 

    <div className='w-[80%] mt-[10%]'>
      <h2 className='text-[clamp(1.8rem,1rem+3vw,3.5rem)] mb-[calc(1.25rem*2)]'>
        <strong>Hi, I'm Moses. </strong>
        I'm a fullstack web, mobile, and game developer, drummer, and wannabe
        writer
      </h2>
      <div className='mt-[calc(1.25rem*2)]'>
        <p className='text-[clamp(1.2rem,.6rem+2vw,1.8rem)] mb-[calc(1.5rem*2)]'>
          I currently live in Toronto, Ontario, and work for {}
          <Link
            href='https://www.canadiantire.ca/en.html'
            target='_blank'
            className='underline'
          >
            Canadian Tire
          </Link>
          {} as a frontend engineer
        </p>
        <InfoSection />
      </div>
    </div>

*/
