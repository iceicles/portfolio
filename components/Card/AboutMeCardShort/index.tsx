import React, { FC } from 'react';

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
        <h1>{title}</h1>
        <p>{workplace}</p>
      </button>
    </>
  );
};

//ml-2.5 sm:ml-0 first:ml-0
export default AboutMeCardShort;
