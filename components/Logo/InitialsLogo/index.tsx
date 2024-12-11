import { FC } from 'react';
import { InitialsLogo as Logo } from '../../SVG';
import Link from 'next/link';

interface initialsLogo {
  styles?: string;
}

export const InitialsLogo: FC<initialsLogo> = ({ styles }) => {
  return (
    <Link href='/'>
      <div
        className={`${
          !!styles ? styles : ''
        } hover:animate-logo-spin text-2xl mt-[0.6rem] mr-[0.5vw]`}
      >
        <Logo className='text-6xl h-6' />
      </div>
    </Link>
  );
};
