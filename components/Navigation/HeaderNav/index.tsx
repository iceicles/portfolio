import React, { FC } from 'react';
import Link from 'next/link';

interface HeaderNavProps {
  value: string;
  href: string;
  linkItemStyle?: string;
  anchorStyle?: string;
}

export const HeaderNav: FC<HeaderNavProps> = ({
  value,
  href,
  linkItemStyle,
  anchorStyle,
}) => {
  return (
    <li className={linkItemStyle}>
      <Link href={href} className={`block w-full ${anchorStyle}`}>
        {value}
      </Link>
    </li>
  );
};
