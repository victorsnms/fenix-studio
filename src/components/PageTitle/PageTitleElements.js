import styled from "styled-components";

export const TitleSection = styled.div`
  width: 100%;
  position: relative;
  background-image: ${({ bgImage }) => bgImage ? `url('${bgImage}')` : "none"};
  background-size: cover;
  background-position: center;
  background-color: #1a0808;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.58);
    pointer-events: none;
  }
`;

export const TitleInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 160px 32px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 140px 24px 56px;
  }

  @media (max-width: 768px) {
    padding: 120px 20px 48px;
  }
`;

export const TitleHeading = styled.h1`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(40px, 6vw, 80px);
  line-height: 1.05;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0 0 20px;
`;
