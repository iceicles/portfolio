import React, { FC } from 'react';
import InfoSection from '../../info-section';

const ProfileHeading: FC<{}> = ({}) => {
  return (
    <div className='m-auto w-[95%] sm:w-[85%] lg:w-[75%] desktop-lg:w-[50%] '>
      <h2 className='text-[clamp(1.8rem,1rem+3vw,3.5rem)] mb-[calc(1.25rem*2)]'>
        <strong>
          Hi, <span className='bg-gray-800 rounded p-2'>I'm Moses</span>.
        </strong>
      </h2>
      <h3 className='text-[clamp(1.5rem,0.7rem+3vw,3.2rem)]'>
        I'm a front-end web and mobile developer, hobbyist game developer, and
        an enthusiast of music and fitness
      </h3>
      <hr className='m-4 p-4 border-gray-800' />
      <p className='text-[clamp(1rem,.6rem+2vw,1.6rem)] mb-[calc(1.5rem*2)]'>
        <i>
          I currently live in Toronto, Ontario, and work for {}
          <a
            href='https://www.canadiantire.ca/en.html'
            target='_blank'
            className='underline decoration-4 md:decoration-8 decoration-gray-800'
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
