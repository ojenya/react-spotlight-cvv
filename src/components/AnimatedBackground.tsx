import styled, { keyframes } from "styled-components";

const float1 = keyframes`
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  25% { transform: translate(10%, -15%) scale(1.1); }
  50% { transform: translate(-5%, 10%) scale(0.95); }
  75% { transform: translate(-15%, -5%) scale(1.05); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  25% { transform: translate(-12%, 8%) scale(1.08); }
  50% { transform: translate(8%, -12%) scale(0.92); }
  75% { transform: translate(5%, 15%) scale(1.02); }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  33% { transform: translate(15%, 10%) scale(1.12); }
  66% { transform: translate(-10%, -8%) scale(0.9); }
`;

const BgWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Blob = styled.div<{
  $color: string;
  $size: number;
  $top: string;
  $left: string;
  $animation: ReturnType<typeof keyframes>;
  $duration: string;
  $delay: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  filter: blur(100px);
  opacity: 0.3;
  animation: ${({ $animation }) => $animation} ${({ $duration }) => $duration} ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  will-change: transform;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px
  );
  background-size: 32px 32px;
`;

const NoiseOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
`;

const VignetteOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;

const AnimatedBackground = () => (
  <BgWrapper>
    <Blob
      $color="#3b82f6"
      $size={500}
      $top="-10%"
      $left="60%"
      $animation={float1}
      $duration="20s"
      $delay="0s"
    />
    <Blob
      $color="#8b5cf6"
      $size={450}
      $top="50%"
      $left="-10%"
      $animation={float2}
      $duration="25s"
      $delay="-5s"
    />
    <Blob
      $color="#06b6d4"
      $size={400}
      $top="70%"
      $left="70%"
      $animation={float3}
      $duration="22s"
      $delay="-10s"
    />
    <GridOverlay />
    <NoiseOverlay />
    <VignetteOverlay />
  </BgWrapper>
);

export default AnimatedBackground;
