import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const StudySection = styled.section`
  width: 100%;
  padding: 100px 0 120px;
`;

export const StudyInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const StudyHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StudyHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StudyBigTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(32px, 4vw, 58px);
  line-height: 1.05;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
  max-width: 640px;
`;

export const StudyExploreCTA = styled(LinkR)`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  background: transparent;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px 24px;
  white-space: nowrap;
  margin-top: 8px;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-background);
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

/* ── Grid ─────────────────────────────────────────────────────────────────── */

export const StudyGrid = styled.div`
  display: flex;
  gap: 12px;
  align-items: stretch;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StudyRightColumn = styled.div`
  flex: 0.9;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1024px) {
    flex: none;
  }
`;

/* ── Cards ────────────────────────────────────────────────────────────────── */

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-background);
  overflow: hidden;
`;

export const StudyFeaturedCard = styled(BaseCard)`
  flex: 1.1;

  @media (max-width: 1024px) {
    flex: none;
  }
`;

export const StudySmallCard = styled(BaseCard)`
  flex: 1;
`;

/* ── Card Image ───────────────────────────────────────────────────────────── */

export const StudyCardImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  ${StudyFeaturedCard} & {
    flex: 1;
    min-height: 280px;
  }

  ${StudySmallCard} & {
    height: 200px;
    flex-shrink: 0;
  }
`;

export const StudyCardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;

  ${StudyFeaturedCard}:hover &,
  ${StudySmallCard}:hover & {
    transform: scale(1.03);
  }
`;

/* Decorative squares — bottom-left corner of each image */
export const StudyCardDecor = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: 32px;
  height: 32px;
  background: var(--color-primary);
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 10px;
    width: 16px;
    height: 16px;
    background: var(--color-white);
  }
`;

/* ── Card Content ─────────────────────────────────────────────────────────── */

export const StudyCardContent = styled.div`
  padding: 16px 0 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StudyCardCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: var(--ds-font-brand);
  font-size: 11px;
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9d9d9d;
`;

export const StudyCategoryDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: var(--color-primary);
  flex-shrink: 0;
`;

export const StudyCardTitle = styled.h3`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: clamp(14px, 1.4vw, 18px);
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
  line-height: 1.3;
`;

export const StudyCardCTA = styled(LinkR)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  background: transparent;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 9px 18px;
  width: fit-content;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-background);
  }
`;
