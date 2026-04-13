import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;
  padding: 100px 0 120px;

  @media (max-width: 1024px) {
    padding: 80px 0 100px;
  }

  @media (max-width: 480px) {
    padding: 60px 0 80px;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 30px;
  gap: 64px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    gap: 32px;
    padding: 0 15px;
  }
`;

// ─── Image column ─────────────────────────────────────────────────────────────
export const AboutImageCol = styled.div`
  width: 100%;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-height: 480px;
  }

  @media (max-width: 480px) {
    max-height: 360px;
  }
`;

export const AboutImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

// ─── Content column ───────────────────────────────────────────────────────────
export const AboutContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const AboutTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(32px, 4vw, 64px);
  line-height: 1.0;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 20px 0 24px;
`;

export const AboutBody = styled.p`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-regular);
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 40px;

  strong {
    font-weight: var(--ds-font-weight-bold);
    font-style: italic;
    color: var(--color-white);
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 28px;
  }
`;

// ─── Cards ────────────────────────────────────────────────────────────────────
export const AboutCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AboutCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const AboutCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AboutCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(255, 8, 8, 0.3);
  background: rgba(255, 8, 8, 0.06);

  svg {
    display: block;
  }
`;

export const AboutCardTitle = styled.h3`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AboutCardBody = styled.div`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-regular);
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  gap: 12px;

  p { margin: 0; }
`;
