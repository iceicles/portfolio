import React, { FC } from 'react';
import Link from 'next/link';

interface HeaderNavProps {
  value: string;
  href: string;
}

export const HeaderNav: FC<HeaderNavProps> = ({ value, href }) => {
  return (
    <li>
      <Link href={href}>{value}</Link>
    </li>
  );
};
