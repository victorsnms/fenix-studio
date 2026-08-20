import styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const VideoContainer = styled.div`
  width: 100%;
  height: 85vh;
  min-height: 560px;
  margin-bottom: 100px;
  position: relative;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    background-color: var(--color-overlay-55);
    position: absolute;
    inset: 0;
  }

  /* Bottom fade — blends the video into the page background so it doesn't cut
     off on a hard edge, mirroring the edge fade on the filmography posters.
     Ends on --color-background (the same token body/HomePageContainer use) so
     the seam stays invisible if that colour ever changes.
     No z-index: HeroContent sits at z-index 1 and stays above this. */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      var(--color-background) 100%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    &::after {
      height: 120px;
    }
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(10px);
    opacity: 1;
  }
`;

/* Sits above the bottom fade (z-index:1, same as HeroContent — the fade's
   ::after has no z-index so it would otherwise stack above both). */
export const ScrollDownIndicator = styled.button`
  position: absolute;
  left: 50%;
  bottom: 28px;
  z-index: 1;
  transform: translateX(-50%);
  display: flex;
  padding: 8px;
  background: none;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  animation: ${bounce} 1.8s ease-in-out infinite;

  svg {
    width: 22px;
    height: 22px;
  }

  &:focus-visible {
    outline: 2px solid var(--color-white);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 480px) {
    bottom: 16px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 242px;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 768px) {
    top: 160px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    top: 120px;
    padding: 0 15px;
  }
`;

export const HeroLabel = styled.span`
  display: block;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-regular);
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(36px, 5.5vw, 80px);
  line-height: 1.05;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0 0 24px;
  max-width: 1005px;

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-regular);
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 1.6;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 36px;
  max-width: 540px;

  @media (max-width: 480px) {
    margin-bottom: 28px;
  }
`;

export const HeroCta = styled(LinkR)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 14px 36px;
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover,
  &:focus-visible {
    background: var(--color-primary-hover);
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 12px 28px;
    font-size: 14px;
  }
`;
