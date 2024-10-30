'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ProgressBarContainer>
      <ProgressBarFill $progress={scrollProgress} />
    </ProgressBarContainer>
  );
};

export default ScrollProgressBar;

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.1563rem;
  background-color: transparent;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`
const ProgressBarFill = styled.div<{ $progress: number }>`
  width: ${props => props.$progress}%;
  height: 100%;
  background-color: #8764ff;
  transition: width 50ms;
`