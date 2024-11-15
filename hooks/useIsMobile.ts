'use client';
import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../global_constants/config';

/*
 * Hook to check the current window width against the mobile max width (767)
 * @return {boolean} true | false
 */

// hook to detect mobile viewport size
export const useIsMobile = () => {
  const breakpoint = BREAKPOINTS.mobileMaxWidth;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // function to check if the viewport width is below the breakpoint
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // initial check on mount
    checkIsMobile();

    // event listener for window resize to update the state
    window.addEventListener('resize', checkIsMobile);

    // clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]); // only re-run effect if breakpoint changes

  return isMobile;
};

export default useIsMobile;
