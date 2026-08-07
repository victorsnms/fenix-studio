import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlockSection = styled.section`
  width: 100%;
  padding: 100px 0 120px;
`;

export const BlockInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: ${({ $imageLeft }) => $imageLeft ? "row" : "row-reverse"};
  align-items: center;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 48px;
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 40px;
    padding: 0 20px;
  }
`;

/* ── Image side ───────────────────────────────────────────────────────────── */

export const BlockImageWrap = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BlockImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BlockVideo = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

/* ── Text side ────────────────────────────────────────────────────────────── */

export const BlockContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BlockTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(28px, 3.5vw, 52px);
  line-height: 1.05;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const BlockBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-family: var(--ds-font-brand);
    font-size: 15px;
    font-weight: var(--ds-font-weight-regular);
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }
`;

export const BlockCTA = styled(Link)`
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
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-background);
  }
`;
