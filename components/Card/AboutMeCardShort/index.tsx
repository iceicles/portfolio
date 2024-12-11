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
        className='p-2 rounded-xl shadow-2xl shadow-gray-500/50 hover:border-button hover:animate-pulse2'
      >
        <h1 className='text-xl'>{title}</h1>
        <span className='flex gap-1 justify-center items-center'>
          <CTCLogo /> <p>{workplace}</p>{' '}
        </span>
      </button>
    </>
  );
};

//ml-2.5 sm:ml-0 first:ml-0
export default AboutMeCardShort;
