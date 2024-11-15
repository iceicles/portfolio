'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import DOMPurify from 'dompurify';

interface InfoSectionNavProps {
  value: string;
  href: string;
}

// file currently not in use (but take note of the note below...)

export const InfoSectionNav: FC<InfoSectionNavProps> = ({ value, href }) => {
  /* note: 
  - added 'use client' here bc we're using dangerouslySetInnerHTML\
  - should use useState and useEffect as DOMPurify relies on browser-specific APIs and calling DOMPurify.santize() on the server causes issues as it needs to only run on the client */

  const sanitizedValue = DOMPurify.sanitize(value);
  return (
    <Link
      href={href}
      dangerouslySetInnerHTML={{ __html: sanitizedValue }}
    ></Link>
  );
};
