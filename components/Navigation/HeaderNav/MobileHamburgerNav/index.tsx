'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { HeaderNav } from '../../HeaderNav';
import { InitialsLogo } from '../../../Logo/InitialsLogo';
import { usePathname } from 'next/navigation';
import { MobileHamburgerNavs } from './constants';
import { isActive } from '../../../../utils/isActive';

export const MobileHamburgerNav: FC<{}> = ({}) => {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  // useEffect to handle closing modal when anywhere outside modal is clicked
  useEffect(() => {
    // function to handle closing the modal
    const handleClickOutside = (event: Event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    // attach event listeners
    document.addEventListener('click', handleClickOutside);

    // cleanup listeners on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showModal]);

  useEffect(() => {
    setShowModal(false);
  }, [pathname]);

  return (
    <>
      <div className='flex justify-between items center w-full'>
        <InitialsLogo styles='self-center' />
        <div onClick={() => setShowModal(true)}>
          <label className='hamburger z-10'>
            {/* TODO: work on clicking the hamburger to open and close modal
             while also clicking outside modal to close it */}
            {/* <input type='checkbox' ref={burgerInputRef} /> */}

            {/* TODO: look into why Hamburger svg can't be used here.. has something to do with styles perhaps --
           <Hamburger className='line line-top-bottom text-5xl' />
          */}
            <svg viewBox='0 0 32 32'>
              <path
                className='line line-top-bottom'
                d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
              ></path>
              <path className='line' d='M7 16 27 16'></path>
            </svg>
          </label>
        </div>
      </div>

      {showModal && (
        <>
          <div className='fixed top-0 h-screen overflow-y-auto overflow-x-hidden z-2 inset-0 h-[calc(100%-1rem)] transition-all'>
            <div
              className='relative p-4 w-[50vw] h-full max-w-[50%] bg-black opacity-75'
              ref={modalRef}
            >
              <nav>
                <ul className='flex flex-col gap-10 mt-[10vh]'>
                  {MobileHamburgerNavs.map((el, _i) => {
                    return (
                      <HeaderNav
                        key={_i}
                        value={el.value}
                        href={el.href}
                        styles={
                          isActive(el.href, pathname) ? 'active-link' : ''
                        }
                      />
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};
