import styled from "styled-components";
import { Link } from "react-router-dom";

export const BannerSection = styled.section`
  width: 100%;
`;

export const BannerInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 320px;
  margin-bottom: 120px;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

/* ── Left: image ──────────────────────────────────────────────────────────── */

export const BannerImageWrap = styled.div`
  flex: 0 0 50%;
  position: relative;
  overflow: hidden;
  min-height: 300px;
  margin: 0;

  @media (max-width: 1024px) {
    flex: 0 0 45%;
  }

  @media (max-width: 768px) {
    flex: unset;
    width: 100%;
    min-height: 0px;
    margin: 0;
  }
`;

export const BannerImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

/* ── Right: text ──────────────────────────────────────────────────────────── */

export const BannerContent = styled.div`
  flex: 1;
  background: var(--color-primary);
  padding: 56px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: relative;

  @media (max-width: 1024px) {
    padding: 40px 32px;
  }

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

/* Decorative squares */
export const BannerDecor = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -9px;
    left: 9px;
    width: 14px;
    height: 14px;
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const BannerTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(24px, 3vw, 42px);
  line-height: 1.05;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const BannerSubtitle = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 15px;
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
`;

export const BannerCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  background: transparent;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px 28px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-primary);
  }
`;
