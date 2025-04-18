import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
  50% { opacity: 0.2; }
`;

const cloud = keyframes`
  0% { transform: translate(0%, -50%); }
  50% { transform: translate(-50%, -50%); }
  100% { transform: translate(0%, -50%); }
`;

const spotlightCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 512 512' style='transform: scaleX(-1);'%3E%3Cpath d='M457.8,55.1c23.5,23.5,39.6,48.1,48.3,73.8c8.7,25.7,7.8,43.1-2.8,52.2l-76.1,76.1c-6.1,6.1-17.8,11-35.2,14.8 c-17.4,3.8-35.6,4.5-54.5,2.3L105.9,505.9c-6.8,6.8-17.6,7.9-32.4,3.4c-14.8-4.5-29-14-42.6-28.4c-13.6-13.6-22.9-27.6-27.8-42 s-4-25,2.8-31.8l231.6-231.6c-2.3-18.9-1.5-37.1,2.3-54.5s8.7-29.1,14.8-35.2l77.2-77.2C340.9-2,358.3-2.8,384,6.3 C409.8,15.4,434.4,31.6,457.8,55.1 M203.5,286.7c12.1,12.1,27.2,9.5,45.4-7.9c17.4-17.4,20.1-32.9,7.9-46.6 c-5.3-5.3-12.5-7.2-21.6-5.7c-9.1,1.5-17.4,6.1-25,13.6s-11.9,15.7-13.1,24.4S198.2,280.7,203.5,286.7 M394.3,117.6 c11.4,11.4,24.2,20.8,38.6,28.4c14.4,7.6,26.1,12.3,35.2,14.2s14.4,2.1,15.9,0.6c0.8-1.5,0-6.6-2.3-15.3 c-2.3-8.7-7.2-20.1-14.8-34.1s-17-26.7-28.4-38s-23.8-20.8-37.5-28.4c-13.6-7.6-24.8-12.5-33.5-14.8s-13.8-2.6-15.3-1.1 c-1.5,1.5-1.3,6.8,0.6,15.9c1.9,9.1,6.6,20.8,14.2,35.2S383.7,107,394.3,117.6' fill='white'/%3E%3C/svg%3E") 20 20, auto`;

const SpotlightContainer = styled.div<{ isSpotlight?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(19, 31, 58);
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

const ToggleWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10000;
  padding: 8px 16px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Switch = styled.div`
  display: inline-block;
  position: relative;
`;

const SwitchInput = styled.input`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: #2b2b2b;
  border: 2.5px solid #5b5b5b;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);

  ${SwitchInput}:checked + & {
    background-color: #8fb5f5;
    border-color: #347cf8;
  }
`;

const SwitchIndicator = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(-72%);
  display: block;
  width: 20px;
  height: 20px;
  background-color: #7b7b7b;
  border-radius: 9999px;
  box-shadow: 5px 0px 0 0 rgba(0, 0, 0, 0.2) inset;
  transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    background-color: #ffffff;
    border-radius: 9999px;
    transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }

  &::before {
    top: 3.5px;
    left: 3.5px;
    width: 4.5px;
    height: 4.5px;
    opacity: 0.6;
  }

  &::after {
    bottom: 4px;
    right: 3px;
    width: 7px;
    height: 7px;
    opacity: 0.8;
  }

  ${SwitchInput}:checked + ${SwitchLabel} & {
    background-color: #ecd21f;
    box-shadow: none;
    transform: translate(-50%, -50%) translateX(72%);

    &::before,
    &::after {
      display: none;
    }
  }
`;

const SwitchDecoration = styled.span`
  position: absolute;
  top: 65%;
  left: 50%;
  display: block;
  width: 2.5px;
  height: 2.5px;
  background-color: #ffffff;
  border-radius: 9999px;
  animation: ${twinkle} 0.8s infinite -0.6s;
  transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &::before,
  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 2.5px;
    height: 2.5px;
    background-color: #ffffff;
    border-radius: 9999px;
  }

  &::before {
    top: -10px;
    left: 5px;
    opacity: 1;
    animation: ${twinkle} 0.6s infinite;
  }

  &::after {
    top: -3.5px;
    left: 15px;
    animation: ${twinkle} 0.6s infinite -0.2s;
  }

  ${SwitchInput}:checked + ${SwitchLabel} & {
    top: 50%;
    transform: translate(0%, -50%);
    animation: ${cloud} 8s linear infinite;

    width: 10px;
    height: 10px;

    &::before {
      width: 5px;
      height: 5px;
      top: auto;
      bottom: 0;
      left: -4px;
      animation: none;
    }

    &::after {
      width: 7.5px;
      height: 7.5px;
      top: auto;
      bottom: 0;
      left: 8px;
      animation: none;
    }

    &,
    &::before,
    &::after {
      border-radius: 9999px 9999px 0 0;
    }

    &::after {
      border-bottom-right-radius: 9999px;
    }
  }
`;

const ContentWrapper = styled.div<{ isSpotlight?: boolean }>`
  height: 100dvh;
  position: relative;
  z-index: 9998;
  background: #335181;

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
      <ContentWrapper isSpotlight={!isEnabled}>{children}</ContentWrapper>
      <SpotlightContainer
        className={`spotlight-container ${!isEnabled ? "disabled" : ""}`}
        isSpotlight={!isEnabled}
      />
      <ToggleWrapper>
        <Switch>
          <SwitchInput
            type="checkbox"
            id="Switch"
            checked={!isEnabled}
            onChange={toggleSpotlight}
          />
          <SwitchLabel htmlFor="Switch">
            <SwitchIndicator />
            <SwitchDecoration />
          </SwitchLabel>
        </Switch>
      </ToggleWrapper>
    </>
  );
};

export default SpotlightEffect;
