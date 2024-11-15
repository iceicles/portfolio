'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import DOMPurify from 'dompurify';

interface InfoSectionNavProps {
  value: string;
  href: string;
}

// file currently not in use

export const InfoSectionNav: FC<InfoSectionNavProps> = ({ value, href }) => {
  // note: added 'use client' here bc we're using dangerouslySetInnerHTML
  const sanitizedValue = DOMPurify.sanitize(value);
  return (
    <Link
      href={href}
      dangerouslySetInnerHTML={{ __html: sanitizedValue }}
    ></Link>
  );
};
