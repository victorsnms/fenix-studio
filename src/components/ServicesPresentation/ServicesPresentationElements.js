import styled from "styled-components";

export const ServicesPresentationSection = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

/* ── Desktop: accordion cards ─────────────────────────────────────────────── */

export const DesktopCards = styled.div`
  display: flex;
  height: 860px;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ServiceCard = styled.div`
  flex: ${({ $expanded }) => ($expanded ? "0 0 620px" : "1")};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: flex 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ $expanded }) =>
    $expanded
      ? "linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.68) 100%)"
      : "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.72) 100%)"};
  transition: background 0.4s ease;
`;

/* Inner layout: title on left, content on right */
export const CardInner = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 28px 24px;
  gap: 24px;
  padding-left: 60px;
  padding-bottom: 120px;
`;

export const CardLeft = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
`;

/* Vertical title — always visible, stays on left in both states */
export const CardTitleVertical = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: var(--ds-font-brand);
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  text-transform: uppercase;
  color: var(--color-white);
  max-height: 550px;
  overflow-wrap: break-word;
  word-break: break-word;
  user-select: none;
`;

/* Right column: body + button, revealed on expand */
export const CardRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.25s ease ${({ $visible }) => ($visible ? "0.2s" : "0s")};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  padding-left: 50px;
`;

export const CardBody = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 auto;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  max-width: 286px;
`;

export const CardCTA = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  margin-top: 40px;
  border: 1px solid var(--color-white);
  background: transparent;
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px 20px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  max-width: 286px;

  &:hover {
    background: var(--color-white);
    color: var(--color-background);
  }
`;

/* ── Tablet / Mobile: Embla carousel ──────────────────────────────────────── */

export const CarouselOuter = styled.div`
  display: none;
  position: relative;
  padding: 0 48px;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 480px) {
    padding: 0 32px;
  }
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  display: flex;
  touch-action: pan-y;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 50%;
  min-width: 0;
  padding: 0 6px;

  @media (max-width: 480px) {
    flex: 0 0 85%;
  }
`;

export const MobileCard = styled.div`
  position: relative;
  height: 500px;
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 440px;
  }
`;

export const MobileCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.62) 60%, rgba(0, 0, 0, 0.5) 100%);
`;

export const MobileCardContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 28px 20px 24px;
`;

/* Mobile title — horizontal, at top of card */
export const MobileCardTitle = styled.h3`
  font-family: var(--ds-font-brand);
  font-weight: 700;
  font-size: clamp(22px, 5vw, 32px);
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0 0 16px;
  line-height: 1.1;
`;

export const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === "left" ? "left: 0;" : "right: 0;")}
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-bg-darker);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--color-white);
  cursor: pointer;
  transition: border-color 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: var(--color-white);
  }
`;
