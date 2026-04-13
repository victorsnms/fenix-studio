import styled, { keyframes } from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

export const MediaGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  margin: 20px auto;
  padding: 0 50px;
  max-width: 1300px;
  gap: 30px;
`;

export const Media = styled(FadeInAnimation)`
  height: 220px;
  width: 100%;
  box-shadow: 0px 5px 15px var(--color-overlay-70);
  overflow: hidden;
  cursor: pointer;
  position: relative;

  video,
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.3s linear;
  }
`;

export const PopupMedia = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: var(--color-overlay-80);
  width: 100%;
  height: 100%;

  video,
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    max-width: 95%;
    max-height: 95%;
    object-fit: contain;
    border: 3px solid var(--color-white);
  }
  span {
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 50px;
    font-weight: bolder;
    z-index: 100;
    cursor: pointer;
    color: var(--color-white);
    user-select: none;
  }
`;

export const TextOnHover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  height: 100%;
  width: 100%;
  background-color: var(--color-overlay-50);
  color: var(--color-white);
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 15px;
  &:hover {
    opacity: 1;
  }

  .bold {
    font-weight: 600;
  }
`;

/* ── Gallery header ───────────────────────────────────────────────────────── */

export const GalleryHeader = styled.div`
  max-width: 1300px;
  margin: 0 auto 48px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    padding: 0 20px;
    margin-bottom: 32px;
  }
`;

export const GalleryTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(36px, 5vw, 72px);
  line-height: 1.0;
  text-transform: uppercase;
  color: var(--color-white);
  text-align: center;
  margin: 0 0 32px;
`;

export const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

export const FilterDivider = styled.div`
  flex: 1;
  max-width: 189px;
  height: 1px;
  background: ${({ $side }) =>
    $side === "left"
      ? "linear-gradient(to right, #121212, #FF0808)"
      : "linear-gradient(to right, #FF0808, #121212)"};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FilterBtn = styled.button`
  font-family: var(--ds-font-brand);
  font-size: 12px;
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 8px 20px;
  cursor: pointer;
  border: ${({ $active }) => $active ? "1px solid transparent" : "1px solid #fff"};
  background: ${({ $active }) => $active ? "var(--color-primary)" : "transparent"};
  color: var(--color-white);
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ $active }) => $active ? "var(--color-primary)" : "rgba(255,255,255,0.08)"};
  }
`;

/* ── Video card overlays ──────────────────────────────────────────────────── */

export const VideoGradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #181818 0%, #18181800 100%);
  pointer-events: none;
`;

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(226, 6, 19, 0.5); }
  70%  { box-shadow: 0 0 0 14px rgba(226, 6, 19, 0); }
  100% { box-shadow: 0 0 0 0 rgba(226, 6, 19, 0); }
`;

export const VideoPlayBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2s infinite;
  pointer-events: none;

  svg {
    margin-left: 4px;
  }
`;

export const VideoCardTitle = styled.div`
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-white);
  pointer-events: none;
`;

export const LoadMoreCTA = styled(FadeInAnimation)`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: var(--color-primary);
  white-space: nowrap;
  padding: 10px 20px;
  color: var(--color-text);
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 0 auto;
  max-width: 120px;
  margin-bottom: 40px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--color-text);
    color: var(--color-background);
  }
`;
