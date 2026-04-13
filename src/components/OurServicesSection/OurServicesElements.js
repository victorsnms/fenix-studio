import styled from "styled-components";

export const OurServicesSectionWrapper = styled.section`
  width: 100%;
  padding: 100px 0 120px;
  overflow: hidden;
`;

export const OurServicesInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 80px;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 48px;
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 40px;
  }
`;

/* ── Left: text + CTA ─────────────────────────────────────────────────────── */

export const OurServicesContent = styled.div`
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    flex: 0 0 280px;
  }

  @media (max-width: 1024px) {
    flex: unset;
    width: 100%;
  }
`;

export const OurServicesTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.0;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const OurServicesExploreCta = styled.a`
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
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-background);
  }
`;

/* ── Right: carousel ──────────────────────────────────────────────────────── */

export const OurServicesCarouselArea = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;
  padding: 0 28px;
`;

export const OurServicesEmblaViewport = styled.div`
  overflow: hidden;
`;

export const OurServicesEmblaContainer = styled.div`
  display: flex;
  user-select: none;
`;

export const OurServicesEmblaSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  padding: 0 10px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

/* Nav buttons */
export const ServiceNavBtn = styled.button`
  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => $side === "left" ? "left: -20px;" : "right: -20px;"}
  z-index: 2;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: var(--color-background);
  color: var(--color-white);
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: var(--color-white);
    background: rgba(255, 255, 255, 0.08);
  }
`;

/* ── Service card ─────────────────────────────────────────────────────────── */

export const ServiceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 420px;
  overflow: hidden;
  background-image: ${({ $img }) => $img ? `url(${$img})` : "none"};
  background-size: cover;
  background-position: center;
  max-width: 1200px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.88) 0%,
      rgba(0, 0, 0, 0.45) 50%,
      rgba(0, 0, 0, 0.15) 100%
    );
  }

  @media (max-width: 1024px) {
    min-height: 360px;
  }

  @media (max-width: 768px) {
    min-height: 320px;
  }
`;

export const ServiceCardBody = styled.div`
  position: relative;
  z-index: 1;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ServiceCardTitle = styled.h3`
  margin: 0;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(22px, 3vw, 32px);
  line-height: 1.0;
  text-transform: uppercase;
  color: var(--color-white);
`;

export const ServiceCardDescription = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 14px;
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
`;

export const ServiceCardCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: var(--color-white);
  background: transparent;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 12px 24px;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: var(--color-white);
    background: rgba(255, 255, 255, 0.1);
  }
`;
