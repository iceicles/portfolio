import React, { FC } from 'react';
import Link from 'next/link';

interface HeaderNavProps {
  value: string;
  href: string;
  styles?: string;
}

export const HeaderNav: FC<HeaderNavProps> = ({ value, href, styles }) => {
  return (
    <li>
      <Link href={href} className={styles}>
        {value}
      </Link>
    </li>
  );
};
