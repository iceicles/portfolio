import React, { FC } from 'react';
import Image from 'next/image';
import { Arrow } from '../../../../components/Icons';

interface ProfilePicProps {
  additionalClass?: string;
}

export const ProfilePicture: FC<ProfilePicProps> = ({ additionalClass }) => {
  return (
    <div>
      <a download href='/Resume.pdf' className='relative'>
        <Image
          className={`p-4 rounded-[50%] border-dotted border-2 hover:animate-bounce2 border-gray-800 ${additionalClass}`}
          src='/profilepic.png'
          alt='Moses Umogbai'
          width={350}
          height={350}
        />
        <pre className='absolute -rotate-[57deg] w-[160px] h-[120px] md:h-[163px] lg:w-[250px] lg:h-[160px] text-gray-500'>
          <span className='absolute rotate-90 top-[5px] left-[-20px]'>
            <Arrow />
          </span>
          <span className='bg-gray-800 p-0.5 rounded-md'>Download CV</span>
        </pre>
      </a>
    </div>
  );
};
