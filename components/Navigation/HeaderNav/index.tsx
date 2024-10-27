import React, { FC } from 'react';
import Link from 'next/link';

interface HeaderNavProps {
  value: string;
  href: string;
}

export const HeaderNav: FC<HeaderNavProps> = ({ value, href }) => {
  return (
    <>
      <nav className='flex gap-3'>
        <Link href={href}>{value}</Link>
      </nav>
      <h1 className='absolute right-[15%]'>
        <Link href='/'>MU</Link>
      </h1>
    </>
  );
};
