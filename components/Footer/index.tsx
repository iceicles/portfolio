import Link from 'next/link';
import React, { FC } from 'react';
import { FooterNavs } from './constant';

const Footer: FC<{}> = ({}) => {
  return (
    <>
      <div className='overflow-hidden max-w-[100vw]'>
        <footer>
          <div className='w-full p-4 md:py-8'>
            <div className='sm:flex sm:items-center sm:justify-between'>
              <span>MU (logo)</span>
              <ul className='flex flex-wrap items-center'>
                {FooterNavs.map((footer) => (
                  <li>
                    <Link
                      href={footer.href}
                      className='hover:underline me-4 md:me-6'
                    >
                      {footer.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <hr className='my-6 sm:mx-auto lg:my-8' />
            <div className='block text-sm sm:text-center'>
              © 2024 ❤ Hand made by {}
              <Link
                href='https://github.com/iceicles'
                target='_blank'
                className='hover:underline relative group'
              >
                Iceicles
                <span className='absolute hidden group-hover:block bg-gray-800 rounded-md px-2 py-1 top-0 left-[105%] w-max'>
                  My Github
                </span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
