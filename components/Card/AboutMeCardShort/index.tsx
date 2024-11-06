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
      <button onClick={() => onClick(id)} className='border-white border-2'>
        <h1>{title}</h1>
        <p>{workplace}</p>
      </button>
    </>
  );
};

export default AboutMeCardShort;