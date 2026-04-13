import styled from "styled-components";

export const ContactPageContainer = styled.div`
  width: 100%;
  background: var(--color-background);
`;

export const ContactBody = styled.div`
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

export const MapWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  height: 400px;
  margin-bottom: 120px;

  iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(100%) contrast(1.15) brightness(0.9);
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`;
