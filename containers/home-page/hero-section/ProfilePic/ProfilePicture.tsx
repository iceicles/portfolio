import React, { FC } from 'react';
import Image from 'next/image';
import { Arrow } from '../../../../components/SVG';

interface ProfilePicProps {
  additionalClass?: string;
}

export const ProfilePicture: FC<ProfilePicProps> = ({ additionalClass }) => {
  return (
    <div className='relative'>
      <a download href='/Resume.pdf'>
        <Image
          className={`p-4 rounded-[50%] border-dotted border-2 hover:animate-bounce2 border-gray-800 ${additionalClass}`}
          src='/profile-pic.jpg'
          alt='Moses'
          width={250}
          height={250}
        />
        <pre className='absolute h-fit -rotate-[57deg] top-[44px] left-[-19px] sm:top-[60px] sm:left-[-12px] md:top-[75px] md:left-[-15px] lg:top-[70px] lg:left-[-8px] text-gray-500'>
          <span className='absolute rotate-90 top-[5px] left-[-20px]'>
            <Arrow />
          </span>
          <span className='bg-gray-950 p-0.5 rounded-md'>Download CV</span>
        </pre>
      </a>
    </div>
  );
};

// this works -
// absolute h-fit -rotate-[57deg] top-[35px] left-[10px] sm:top-[45px] sm:left-[35px] md:top-[50px] md:left-[50px] lg:top-[90px] lg:left-[unset] text-gray-500

// absolute -rotate-[57deg] top-[2vh] bottom-[-15vh] md:top-[6vh] lg:top-[8vh] text-gray-500
