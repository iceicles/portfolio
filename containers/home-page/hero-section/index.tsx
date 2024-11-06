import React, { FC } from 'react';
import ProfileHeading from './ProfileHeading/ProfileHeading';
import { ProfilePicture } from './ProfilePic/ProfilePicture';

interface HeroSectionProps {}
const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className='flex gap-[80px]'>
      {/* <ProfilePicture /> */}
      <ProfileHeading />
    </div>
  );
};

export default HeroSection;
