'use client';
import React, { FC } from 'react';
import { HeaderNavs } from './constants';
import { HeaderNav } from '../Navigation/HeaderNav';
import { useIsMobile } from '../../hooks/useIsMobile';
import { MobileHamburgerNav } from '../Navigation/HeaderNav/MobileHamburgerNav';
import { InitialsLogo } from '../Logo/InitialsLogo';
import { isActive } from '../../utils/isActive';
import { usePathname } from 'next/navigation';

const Header: FC<{}> = ({}) => {
  const isMobile = useIsMobile();

  const pathname = usePathname();

  return (
    <>
      {isMobile ? (
        <div className='flex justify-end p-4 mb-[10vh] relative'>
          <MobileHamburgerNav />
        </div>
      ) : (
        <div className='flex justify-center items-center py-4 sm:gap-x-16 sm:py-8 relative mb-[8vh] desktop-lg:mb-[15vh]'>
          <nav>
            <ul className='flex gap-10'>
              <>
                {HeaderNavs.map((el, _i) => (
                  <HeaderNav
                    key={_i}
                    value={el.value}
                    href={el.href}
                    styles={
                      isActive(el.href, pathname)
                        ? 'active-link font-bold'
                        : 'hover:hover-link'
                    }
                  />
                ))}
                <li className='absolute left-[2%]'>
                  <InitialsLogo />
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
