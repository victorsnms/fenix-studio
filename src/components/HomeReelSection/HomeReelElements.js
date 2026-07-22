import styled, { keyframes } from "styled-components";

// ─── Section wrapper ───────────────────────────────────────────────────────────
export const ReelSection = styled.section`
  width: 100%;
  padding: 100px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    padding: 80px 0 100px;
    gap: 24px;
  }
`;

export const ReelTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(28px, 4vw, 56px);
  line-height: 1.05;
  text-transform: uppercase;
  color: var(--color-white);
  text-align: center;
  margin: 0;
`;

// ─── Thumbnail / click target ──────────────────────────────────────────────────
export const ReelThumbnailWrap = styled.button`
  position: relative;
  display: block;
  width: 90%;
  max-width: 1100px;
  aspect-ratio: 16 / 9;
  cursor: pointer;
  border: none;
  padding: 0;
  background: #000;
  overflow: hidden;

  &:hover img { transform: scale(1.03); }
  &:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 4px; }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ReelThumbnailImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const ReelThumbnailOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
`;

// ─── Play button ───────────────────────────────────────────────────────────────
const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(226, 6, 19, 0.5); }
  70%  { box-shadow: 0 0 0 18px rgba(226, 6, 19, 0); }
  100% { box-shadow: 0 0 0 0 rgba(226, 6, 19, 0); }
`;

export const PlayBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2.2s ease-out infinite;
  pointer-events: none;
  transition: background 0.2s ease;

  ${ReelThumbnailWrap}:hover & {
    background: var(--color-primary-hover);
  }

  svg {
    margin-left: 5px; /* optical center for play triangle */
  }

  @media (max-width: 480px) {
    width: 64px;
    height: 64px;
    svg { width: 22px; height: 22px; margin-left: 4px; }
  }
`;

// ─── Modal overlay ─────────────────────────────────────────────────────────────
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

export const ModalBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  background: #111;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const ModalTitle = styled.span`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-white);
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-white);
  font-size: 22px;
  padding: 4px;
  line-height: 1;
  transition: color 0.2s ease;

  &:hover { color: var(--color-primary); }
  &:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
`;

export const ModalIframeWrap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;

  iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
