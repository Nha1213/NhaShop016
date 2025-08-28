import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [showScroll, setShowScroll] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        setShowScroll(true);
    }, [pathname]);
    return null;
}

export default ScrollToTop