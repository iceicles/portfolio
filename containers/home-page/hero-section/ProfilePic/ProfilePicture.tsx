import React, { FC } from 'react';
import Image from 'next/image';

interface ProfilePicProps {
  additionalClass?: string;
}

export const ProfilePicture: FC<ProfilePicProps> = ({ additionalClass }) => {
  return (
    <div>
      <Image
        className={`p-4 rounded-[50%] border-dotted border-2 border-gray-800 ${additionalClass}`}
        src='/profilepic.png'
        alt='Moses Umogbai'
        width={350}
        height={350}
      />
    </div>
  );
};
