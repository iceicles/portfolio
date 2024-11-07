import React, { FC } from 'react';
import Image from 'next/image';

interface ProfilePicProps {
  additionalClass?: string;
}

export const ProfilePicture: FC<ProfilePicProps> = ({ additionalClass }) => {
  return (
    <div>
      <Image
        className={`p-4 rounded-[50%] aspect-w-[1] aspect-h-[1] ${additionalClass}`}
        src='/profilepic.png'
        alt='Moses Umogbai'
        width={350}
        height={350}
      />
    </div>
  );
};
