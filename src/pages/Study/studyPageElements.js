import styled from "styled-components";

export const StudyPageContainer = styled.div`
  width: 100%;
  background: var(--color-background);
`;

export const StudyBody = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 100px 32px 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;

  @media (max-width: 1024px) {
    gap: 56px;
    padding: 80px 24px 100px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 64px 20px 80px;
  }
`;

export const StudyContentSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StudyTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.05;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const StudyBody2 = styled.div`
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

export const StudyFormCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px 36px;

  @media (max-width: 480px) {
    padding: 32px 20px;
  }
`;

export const StudyFormText = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 15px;
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 24px;
`;
