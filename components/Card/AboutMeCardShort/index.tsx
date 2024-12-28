import React, { FC } from 'react';
import { CTCLogo } from '../../SVG';

interface AboutMeCardShort {
  id: number;
  title: string;
  workplace: string;
  onClick(id: number): void;
}

const AboutMeCardShort: FC<AboutMeCardShort> = ({
  id,
  title,
  workplace,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={() => onClick(id)}
        className='max-lg:border-button p-[14px] md:p-4 rounded-xl shadow-2xl shadow-blue-500/30 md:hover:border-button hover:animate-pulse2 border border-solid lg:border-none'
      >
        <h1 className='text-xl'>{title}</h1>
        {/* <span className='flex gap-1 justify-center items-center'>
          <CTCLogo /> <p>{workplace}</p>{' '}
        </span> */}
      </button>
    </>
  );
};

//ml-2.5 sm:ml-0 first:ml-0
export default AboutMeCardShort;
