import { FC, useState } from 'react';
import Link from 'next/link';
import { HeaderNavs } from '../../../Header/constants';
import { HeaderNav } from '../../HeaderNav';
import { InitialsLogo } from '../../../Logo/InitialsLogo';

export const MobileHamburgerNav: FC<{}> = ({}) => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <div className='flex justify-between items center w-full'>
        <InitialsLogo styles='self-center' />
        <label className='hamburger z-10'>
          <input type='checkbox' onClick={() => setToggleModal(!toggleModal)} />
          <svg viewBox='0 0 32 32'>
            <path
              className='line line-top-bottom'
              d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
            ></path>
            <path className='line' d='M7 16 27 16'></path>
          </svg>
        </label>
      </div>

      {toggleModal && (
        <>
          <div className='fixed top-0 h-screen overflow-y-auto overflow-x-hidden z-2 inset-0 h-[calc(100%-1rem)] transition-all'>
            <div className='relative p-4 w-[50vw] h-full max-w-[50%] bg-black opacity-75'>
              <nav>
                <ul className='flex flex-col gap-10 mt-[15%]'>
                  <>
                    {HeaderNavs.map((el, _i) => (
                      <HeaderNav key={_i} value={el.value} href={el.href} />
                    ))}
                    <li>
                      <Link href='/'>Home</Link>
                    </li>
                  </>
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};
