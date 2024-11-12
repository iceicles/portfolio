import { FC } from 'react';
import Link from 'next/link';
import { InitialsLogo as Logo } from '../../Icons';

interface initialsLogo {
  styles?: string;
  value?: string;
}

export const InitialsLogo: FC<initialsLogo> = ({ styles, value = 'MU' }) => {
  return (
    <>
      <strong className={styles}>
        <Link href='/'>
          <div className='hover:animate-logo-spin text-2xl'>
            <Logo className='text-6xl h-6' />
          </div>
        </Link>
      </strong>
    </>
  );
};
