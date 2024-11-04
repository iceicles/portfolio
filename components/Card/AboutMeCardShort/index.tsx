import React, { FC } from 'react';

interface AboutMeCardShort {
  title: string;
  workplace: string;
  onClick: () => void;
}

const AboutMeCardShort: FC<AboutMeCardShort> = ({
  title,
  workplace,
  onClick,
}) => {
  return (
    <>
      <button onClick={onClick} className='border-white border-2'>
        <h1>{title}</h1>
        <p>{workplace}</p>
      </button>
    </>
  );
};

export default AboutMeCardShort;
