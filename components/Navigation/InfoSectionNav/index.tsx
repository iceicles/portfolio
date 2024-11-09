import React, { FC } from 'react';
import Link from 'next/link';

interface InfoSectionNavProps {
  value: string;
  href: string;
}

export const InfoSectionNav: FC<InfoSectionNavProps> = ({ value, href }) => {
  return <Link href={href} dangerouslySetInnerHTML={{ __html: value }}></Link>;
};
