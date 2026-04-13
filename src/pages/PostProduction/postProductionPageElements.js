import styled from "styled-components";

export const PostProductionPageContainer = styled.div`
  width: 100%;
  background: var(--color-background);
`;

/* ── Intro Section ─────────────────────────────────────────────────────────── */

export const PostProductionIntroSection = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 32px 0;

  @media (max-width: 1024px) {
    padding: 48px 24px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 0;
  }
`;

export const PostProductionHeroImage = styled.img`
  display: block;
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  object-position: center;
`;

export const PostProductionIntroCopy = styled.div`
  padding: 32px 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-family: var(--ds-font-brand);
    font-size: 15px;
    font-weight: var(--ds-font-weight-regular);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }
`;

/* ── Timeline Section ──────────────────────────────────────────────────────── */

export const TimelineSection = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 64px 32px 80px;

  @media (max-width: 1024px) {
    padding: 56px 24px 72px;
  }

  @media (max-width: 768px) {
    padding: 48px 20px 64px;
  }
`;

export const TimelineHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const TimelineTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 16px;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const TimelineLine = styled.div`
  height: 2px;
  align-self: stretch;
  background: linear-gradient(90deg, #ff0808 0%, #121212 100%);
`;

export const TimelineDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #414141;
  margin-bottom: 0;
`;

export const TimelineSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TimelineStep = styled.div`
  flex: 1 1 0;
  min-width: 0;
  padding: 20px 16px 0;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  @media (max-width: 768px) {
    flex: 0 0 50%;
    padding: 20px 12px 24px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    &:nth-child(odd) {
      padding-left: 0;
    }

    &:nth-child(even) {
      padding-right: 0;
    }
  }

  @media (max-width: 480px) {
    flex: 0 0 100%;
    padding: 20px 0 24px;
  }
`;

export const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #1c1d20;
  font-family: var(--ds-font-brand);
  font-size: 17px;
  font-weight: var(--ds-font-weight-bold);
  font-style: normal;
  line-height: 29.12px;
  text-transform: uppercase;
  color: var(--color-white);
  text-align: center;
  flex-shrink: 0;
  margin-bottom: 16px;
`;

export const StepTitle = styled.p`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-white);
  line-height: 1.5;
  margin: 0;
`;

/* ── Form + NeedHelp Section ───────────────────────────────────────────────── */

export const PostProductionBody = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 32px 100px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 48px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 300px;
    gap: 32px;
    padding: 64px 24px 80px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 48px 20px 64px;
    gap: 48px;
  }
`;
