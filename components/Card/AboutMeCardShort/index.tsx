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
        className='border-white border-2 p-2 rounded-xl ml-2.5 sm:ml-0 first:ml-0'
      >
        <h1>{title}</h1>
        <p>{workplace}</p>
      </button>
    </>
  );
};

export default AboutMeCardShort;
