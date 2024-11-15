import React, { FC } from 'react';
import Link from 'next/link';

interface HeaderNavProps {
  value: string;
  href: string;
  styles?: string;
}

export const HeaderNav: FC<HeaderNavProps> = ({ value, href, styles }) => {
  return (
    <li className={styles}>
      <Link href={href} className='block w-full'>
        {value}
      </Link>
    </li>
  );
};
