import Image from 'next/image';

export const ProfilePicture = () => {
  return (
    <div className='float-left'>
      <Image
        className='rounded-[50%]'
        src='/profilepic.png'
        alt='Moses Umogbai'
        width={350}
        height={350}
      />
    </div>
  );
};
