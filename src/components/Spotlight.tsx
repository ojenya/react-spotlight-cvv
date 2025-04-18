import React, { useEffect } from 'react';
import styled from 'styled-components';

const SpotlightContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(19, 31, 58);
  z-index: 9999;
  --clip-position: 0px 0px;
  mask: radial-gradient(circle 325px at var(--clip-position), transparent 0%, black 100%);
  -webkit-mask: radial-gradient(circle 325px at var(--clip-position), transparent 0%, black 100%);
  pointer-events: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 9998;
`;

const SpotlightEffect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const container = document.querySelector('.spotlight-container') as HTMLElement;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      container.style.setProperty('--clip-position', `${e.pageX}px ${e.pageY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <ContentWrapper>{children}</ContentWrapper>
      <SpotlightContainer className="spotlight-container" />
    </>
  );
};

export default SpotlightEffect; 