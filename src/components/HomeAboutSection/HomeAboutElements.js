import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const AboutVideo = styled.video`
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
  font-size: clamp(32px, 4vw, 60px);
  line-height: 1.0;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 20px 0 24px;
`;

export const AboutBody = styled.p`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-regular);
  font-size: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 25px;

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
  gap: 20px;
`;

export const AboutCard = styled(Link)`
  display: flex;
  align-items: flex-start;
  gap: 25px;
  border: 1px solid #414141;
  padding: 20px;
  text-decoration: none;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
  }
`;

export const AboutCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  background: #1C1D20;

  svg {
    display: block;
  }
`;

export const AboutCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AboutCardTitle = styled.h3`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 26px;
  line-height: 29.1px;
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
  font-size: 16px;
  line-height: 18px;
  color: #7A7A7A;
  display: flex;
  flex-direction: column;
  gap: 12px;

  p { margin: 0; }
`;
