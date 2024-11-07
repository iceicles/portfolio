import React, { FC } from 'react';
import { HeaderNavs } from './constants';
import { HeaderNav } from '../Navigation/HeaderNav';
import Link from 'next/link';

const Header: FC<{}> = ({}) => {
  return (
    <>
      <div className='flex align-element justify-center py-4 sm:gap-x-16 sm:items-center sm:py-8 relative mb-[10vh]'>
        <nav>
          <ul className='flex gap-10'>
            {HeaderNavs.map((el, _i) => (
              <HeaderNav key={_i} value={el.value} href={el.href} />
            ))}
          </ul>
          <h1 className='absolute right-[15%]'>
            <Link href='/'>MU</Link>
          </h1>
        </nav>
      </div>
    </>
  );
};

export default Header;
