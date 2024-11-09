'use client';
import React, { FC } from 'react';
import { HeaderNavs } from './constants';
import { HeaderNav } from '../Navigation/HeaderNav';
import Link from 'next/link';
import { useIsMobile } from '../../hooks/useIsMobile';
import { MobileHamburgerNav } from '../Navigation/HeaderNav/MobileHamburgerNav';

const Header: FC<{}> = ({}) => {
  const isMobile = useIsMobile();

  console.log('isMobile - ', isMobile);
  return (
    <>
      {isMobile ? (
        <div className='flex align-element justify-end p-4 mb-[10vh] relative'>
          <MobileHamburgerNav />
        </div>
      ) : (
        <div className='flex align-element justify-center py-4 sm:gap-x-16 sm:items-center sm:py-8 relative mb-[10vh]'>
          <nav>
            <ul className='flex gap-10'>
              <>
                {HeaderNavs.map((el, _i) => (
                  <HeaderNav key={_i} value={el.value} href={el.href} />
                ))}
                <li className='absolute right-[15%]'>
                  <Link href='/'>MU</Link>
                </li>
              </>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
