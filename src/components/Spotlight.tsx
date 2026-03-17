import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AnimatedBackground from "./AnimatedBackground";

const spotlightCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 512 512' style='transform: scaleX(-1);'%3E%3Cpath d='M457.8,55.1c23.5,23.5,39.6,48.1,48.3,73.8c8.7,25.7,7.8,43.1-2.8,52.2l-76.1,76.1c-6.1,6.1-17.8,11-35.2,14.8 c-17.4,3.8-35.6,4.5-54.5,2.3L105.9,505.9c-6.8,6.8-17.6,7.9-32.4,3.4c-14.8-4.5-29-14-42.6-28.4c-13.6-13.6-22.9-27.6-27.8-42 s-4-25,2.8-31.8l231.6-231.6c-2.3-18.9-1.5-37.1,2.3-54.5s8.7-29.1,14.8-35.2l77.2-77.2C340.9-2,358.3-2.8,384,6.3 C409.8,15.4,434.4,31.6,457.8,55.1 M203.5,286.7c12.1,12.1,27.2,9.5,45.4-7.9c17.4-17.4,20.1-32.9,7.9-46.6 c-5.3-5.3-12.5-7.2-21.6-5.7c-9.1,1.5-17.4,6.1-25,13.6s-11.9,15.7-13.1,24.4S198.2,280.7,203.5,286.7 M394.3,117.6 c11.4,11.4,24.2,20.8,38.6,28.4c14.4,7.6,26.1,12.3,35.2,14.2s14.4,2.1,15.9,0.6c0.8-1.5,0-6.6-2.3-15.3 c-2.3-8.7-7.2-20.1-14.8-34.1s-17-26.7-28.4-38s-23.8-20.8-37.5-28.4c-13.6-7.6-24.8-12.5-33.5-14.8s-13.8-2.6-15.3-1.1 c-1.5,1.5-1.3,6.8,0.6,15.9c1.9,9.1,6.6,20.8,14.2,35.2S383.7,107,394.3,117.6' fill='white'/%3E%3C/svg%3E") 20 20, auto`;

const SpotlightContainer = styled.div<{ isSpotlight?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-primary, #0a0f1a);
  z-index: 9999;
  --clip-position: 0px 0px;
  mask: conic-gradient(
    from -45deg at var(--clip-position),
    transparent 0deg,
    black 30deg,
    black 330deg,
    transparent 360deg
  );
  -webkit-mask: conic-gradient(
    from -45deg at var(--clip-position),
    transparent 0deg,
    black 30deg,
    black 330deg,
    transparent 360deg
  );
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.3s ease;
  cursor: ${({ isSpotlight }) => (isSpotlight ? "auto" : spotlightCursor)};

  &.disabled {
    opacity: 0;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ToggleBtn = styled.button<{ $active: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10000;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  pointer-events: auto;
  color: #fff;

  &:hover {
    border-color: rgba(255, 255, 255, 0.16);
    background: rgba(255, 255, 255, 0.08);
    color: #b0b390;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 4px rgba(250, 204, 21, 0.4));
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const TorchIcon = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" style={{ transform: "scaleX(-1)" }}>
    <path d="M457.8,55.1c23.5,23.5,39.6,48.1,48.3,73.8c8.7,25.7,7.8,43.1-2.8,52.2l-76.1,76.1c-6.1,6.1-17.8,11-35.2,14.8 c-17.4,3.8-35.6,4.5-54.5,2.3L105.9,505.9c-6.8,6.8-17.6,7.9-32.4,3.4c-14.8-4.5-29-14-42.6-28.4c-13.6-13.6-22.9-27.6-27.8-42 s-4-25,2.8-31.8l231.6-231.6c-2.3-18.9-1.5-37.1,2.3-54.5s8.7-29.1,14.8-35.2l77.2-77.2C340.9-2,358.3-2.8,384,6.3 C409.8,15.4,434.4,31.6,457.8,55.1 M203.5,286.7c12.1,12.1,27.2,9.5,45.4-7.9c17.4-17.4,20.1-32.9,7.9-46.6 c-5.3-5.3-12.5-7.2-21.6-5.7c-9.1,1.5-17.4,6.1-25,13.6s-11.9,15.7-13.1,24.4S198.2,280.7,203.5,286.7 M394.3,117.6 c11.4,11.4,24.2,20.8,38.6,28.4c14.4,7.6,26.1,12.3,35.2,14.2s14.4,2.1,15.9,0.6c0.8-1.5,0-6.6-2.3-15.3 c-2.3-8.7-7.2-20.1-14.8-34.1s-17-26.7-28.4-38s-23.8-20.8-37.5-28.4c-13.6-7.6-24.8-12.5-33.5-14.8s-13.8-2.6-15.3-1.1 c-1.5,1.5-1.3,6.8,0.6,15.9c1.9,9.1,6.6,20.8,14.2,35.2S383.7,107,394.3,117.6" />
  </svg>
);

const LightbulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
  </svg>
);

const ContentWrapper = styled.div<{ isSpotlight?: boolean }>`
  height: 100dvh;
  position: relative;
  z-index: 9998;
  background: #141f38;
  overflow: hidden;

  cursor: ${({ isSpotlight }) => (isSpotlight ? "auto" : spotlightCursor)};
`;

const SpotlightEffect: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const container = document.querySelector(
      ".spotlight-container"
    ) as HTMLElement;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isEnabled) {
        container.style.setProperty(
          "--clip-position",
          `${e.pageX}px ${e.pageY}px`
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isEnabled]);

  const toggleSpotlight = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <>
      <ContentWrapper isSpotlight={!isEnabled}>
        <AnimatedBackground />
        {children}
      </ContentWrapper>
      <SpotlightContainer
        className={`spotlight-container ${!isEnabled ? "disabled" : ""}`}
        isSpotlight={!isEnabled}
      />
      <ToggleBtn $active={isEnabled} onClick={toggleSpotlight} aria-label="Переключить фонарик">
        {isEnabled ? <LightbulbIcon /> : <TorchIcon />}
      </ToggleBtn>
    </>
  );
};

export default SpotlightEffect;
