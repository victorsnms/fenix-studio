import styled from "styled-components";

export const OurTeamSectionWrapper = styled.section`
  width: 100%;
  padding: 100px 0 120px;
  overflow: hidden;
`;

export const OurTeamInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 80px;

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

/* ── Left: text content ───────────────────────────────────────────────────── */

export const OurTeamContent = styled.div`
  flex: 0 0 360px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    flex: 0 0 300px;
  }

  @media (max-width: 1024px) {
    flex: unset;
    width: 100%;
  }
`;

export const OurTeamTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(28px, 3.5vw, 52px);
  line-height: 1.05;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const OurTeamBody = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 15px;
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
`;

export const OurTeamCTA = styled.a`
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

/* ── Right: cards area ────────────────────────────────────────────────────── */

export const OurTeamCardsArea = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 100%;
`;

/* Desktop grid */
export const OurTeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

/* Carousel container (tablet + mobile) */
export const OurTeamCarouselWrap = styled.div`
  display: none;
  position: relative;
  padding: 0 28px;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const OurTeamEmblaViewport = styled.div`
  overflow: hidden;
`;

export const OurTeamEmblaContainer = styled.div`
  display: flex;
  user-select: none;
`;

export const OurTeamEmblaSlide = styled.div`
  flex: 0 0 50%;
  min-width: 0;
  padding: 0 10px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

/* Nav buttons — absolutely positioned on left/right, vertically centered */
export const CarouselNavBtn = styled.button`
  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => $side === "left" ? "left: -20px;" : "right: -20px;"}
  ${({ $side }) => $side === "left" ? "margin-left: 8px;" : "margin-right: 8px;"}
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

/* ── Team card ────────────────────────────────────────────────────────────── */

export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-background);
  overflow: hidden;
`;

export const TeamCardImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: contain;
  /* object-position: center top; */

  @media (max-width: 1024px) {
    aspect-ratio: unset;
    height: 351px;
  }

  @media (max-width: 768px) {
    height: 291px;
  }
`;

export const TeamCardInfo = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TeamCardName = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 16px;
  font-weight: var(--ds-font-weight-semibold);
  color: var(--color-white);
  margin: 0;
`;

export const TeamCardRole = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 13px;
  font-weight: var(--ds-font-weight-regular);
  color: var(--color-primary);
  margin: 0;
`;

export const TeamCardBioBtn = styled.button`
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 10px 20px;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: var(--color-white);
    background: rgba(255, 255, 255, 0.08);
  }
`;

/* ── Modal ────────────────────────────────────────────────────────────────── */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

export const ModalBox = styled.div`
  background: #141414;
  width: min(960px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  line-height: 1;
  z-index: 1;
  padding: 4px;

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`;

export const ModalInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ModalImageWrap = styled.div`
  flex: 0 0 42%;
  min-height: 480px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex: 0 0 38%;
    min-height: 360px;
  }

  @media (max-width: 768px) {
    flex: unset;
    width: 100%;
    min-height: 280px;
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const ModalImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;

  @media (max-width: 768px) {
    width: auto;
    height: 280px;
    max-width: 260px;
  }

  @media (max-width: 480px) {
    max-width: 220px;
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 1024px) {
    padding: 40px 32px;
  }

  @media (max-width: 768px) {
    padding: 32px 28px 40px;
  }
`;

export const ModalMemberName = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(28px, 3.5vw, 44px);
  line-height: 1.0;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0 0 10px;
`;

export const ModalMemberRole = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 12px;
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin: 0 0 28px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;

  p {
    font-family: var(--ds-font-brand);
    font-size: 14px;
    font-weight: var(--ds-font-weight-regular);
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ModalActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  background: transparent;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 12px 24px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-background);
  }
`;
