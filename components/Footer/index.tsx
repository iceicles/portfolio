'use client';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { FooterNavs } from './constant';
import { InitialsLogo } from '../Logo/InitialsLogo';
import { isActive } from '../../utils/isActive';
import { usePathname } from 'next/navigation';

const Footer: FC<{}> = ({}) => {
  const date = new Date();
  const [dateYear, setDateYear] = useState(date.getFullYear());

  const pathname = usePathname();

  useEffect(() => {
    setDateYear(date.getFullYear());
  }, [date]);

  return (
    <>
      <footer>
        <div className='w-full p-4 md:py-8'>
          <hr className='my-6 sm:mx-auto lg:my-8' />
          <div className='flex lg:items-center justify-between'>
            <ul className='sm:flex md:flex-row sm:flex-wrap sm:items-center flex flex-col gap-1'>
              {FooterNavs.map((footer) => (
                <li key={footer.id} className='self-start lg:self-auto p-2'>
                  <Link
                    href={footer.href}
                    prefetch={true}
                    className={
                      isActive(footer.href, pathname)
                        ? 'max-lg:link max-lg:font-bold'
                        : 'hover:hover-link'
                    }
                  >
                    {footer.value}
                  </Link>
                </li>
              ))}
            </ul>
            <InitialsLogo />
          </div>

          <div className='block text-sm lg:text-center mt-4 ml-2 lg:ml-0'>
            © {dateYear} Crafted by {}
            <Link
              href='https://github.com/iceicles'
              target='_blank'
              className='hover:underline hover:decoration-gray-800 active:decoration-blue-500/40 hover:decoration-4 relative group animate-pulse'
            >
              iceicles{' '}
              <span className='absolute left-[3rem] group-hover:no-underline'>
                <span className='text-red-800'>❤️</span>
              </span>
              <span className='absolute hidden group-hover:block bg-gray-800 rounded-md px-2 py-1 top-0 left-[145%] w-max'>
                My Github
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
