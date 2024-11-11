import { FC } from 'react';
import Link from 'next/link';

interface initialsLogo {
  styles?: string;
  value?: string;
}

export const InitialsLogo: FC<initialsLogo> = ({ styles, value = 'MU' }) => {
  return (
    <>
      <strong className={styles}>
        <Link href='/'>
          <div className='hover:animate-logo-spin text-2xl'>{value}</div>
        </Link>
      </strong>
    </>
  );
};
