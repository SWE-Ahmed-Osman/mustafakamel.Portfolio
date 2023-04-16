import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { ArrowUpIcon } from '../../../UI/Icons';

import './scrollTopBtn.css';

const ScrollTopBtn = () => {

  const [visable, setVisable] = useState(false);

  const toggleVisable = () => {
    if(window.scrollY > 300) {
      setVisable(true);
    }else {
      setVisable(false);
    };
  };

  const scrollTpTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll',toggleVisable)
    
    return () => {
      window.removeEventListener('scroll',toggleVisable)
    }

  }, [])

  return (
    <button className={`scroll-top-btn ${visable ? 'visable' : ''}`} onClick={scrollTpTop}>
      <ArrowUpIcon />
    </button>
  )
}

export default ScrollTopBtn