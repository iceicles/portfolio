'use client'
import { useState, useEffect } from "react"
import { BREAKPOINTS } from "../global_constants/config"

/*
* Hook to check the current window width against the mobile max width (767)
* @return {boolean} true | false
*/

export const useIsMobile = () => {

    const breakpoint: number = BREAKPOINTS.mobileMaxWidth
    const [windowWidth, setWindowInnerWidth] = useState<number>(breakpoint)

    const resizeWindow = () => {
        setWindowInnerWidth(window.innerWidth)
    }

    useEffect(() => {
        resizeWindow()
        window.addEventListener('resize', resizeWindow)

        return () => window.removeEventListener('resize', resizeWindow)
       
    }, [])

    return windowWidth <= breakpoint
}