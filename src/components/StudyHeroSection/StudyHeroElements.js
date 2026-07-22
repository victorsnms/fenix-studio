import styled from "styled-components";

export const StudyHeroSectionWrapper = styled.section`
  width: 100%;
  padding: 100px 0 120px;
`;

export const StudyHeroInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 64px;

  @media (max-width: 1024px) {
    gap: 48px;
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 0 20px;
  }
`;

/* ── Left: image ──────────────────────────────────────────────────────────── */

export const StudyHeroImageWrap = styled.div`
  flex: 1;
  position: relative;
  overflow: visible;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StudyHeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

/* ── Right: text content ──────────────────────────────────────────────────── */

export const StudyHeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StudyHeroTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(32px, 4.5vw, 64px);
  line-height: 1.05;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const StudyHeroBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-family: var(--ds-font-brand);
    font-size: 15px;
    font-weight: var(--ds-font-weight-regular);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }
`;

export const StudyHeroCTA = styled.button`
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
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-background);
  }
`;
