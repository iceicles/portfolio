import React, { FC } from 'react';
import { HeaderNavs } from './constants';
import { HeaderNav } from '../Navigation/HeaderNav';

const Header: FC<{}> = ({}) => {
  return (
    <>
      <div className='flex align-element justify-center py-4 sm:gap-x-16 sm:items-center sm:py-8 relative'>
        {HeaderNavs.map((el, _i) => (
          <HeaderNav key={_i} value={el.value} href={el.href} />
        ))}
      </div>
    </>
  );
};

export default Header;
