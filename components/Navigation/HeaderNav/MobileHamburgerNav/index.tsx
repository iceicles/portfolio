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

  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const [showLogo, setShowLogo] = useState<boolean>(true);
  const [hideNav, setHideNav] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prev) => {
        return {
          y: window.scrollY,
          lastY: prev.y,
        };
      });
      setHideNav(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollData.lastY === scrollData.y) return;

    // scrollData.y - scrollData.lastY > 0 - scrolling up

    // past 88 y pos and not scrolling up
    if (scrollData.y > 88 && scrollData.y - scrollData.lastY > 0) {
      setHideNav(true);
      setShowModal(false);
    } else {
      setHideNav(false);
      setShowModal(false);
    }

    if (scrollData.y <= 88) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  }, [scrollData]);

  return (
    <>
      <div
        className={`${hideNav ? 'hide-header-nav' : 'header-nav'} p-4 mb-[8vh]`}
      >
        <div className='flex justify-between items-center w-full'>
          <InitialsLogo
            styles={`${showLogo ? 'block' : 'hidden'} self-center`}
          />
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
      </div>

      <div className={`side-nav ${showModal ? 'open' : ''}`}>
        <div className='relative p-4 w-[50vw] h-full' ref={modalRef}>
          <nav>
            <ul className='flex flex-col gap-10 mt-[10vh]'>
              {MobileHamburgerNavs.map((el, _i) => {
                return (
                  <HeaderNav
                    key={_i}
                    value={el.value}
                    href={el.href}
                    styles={
                      isActive(el.href, pathname)
                        ? 'no-underline font-bold bg-gray-800 p-1 rounded'
                        : ''
                    }
                  />
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
