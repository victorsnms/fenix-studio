import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageNotFoundContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 40px 20px;
  text-align: center;
`;

export const NotFoundImage = styled.img`
  width: 100%;
  max-width: 480px;

  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

export const NotFoundText = styled.p`
  font-family: var(--ds-font-brand);
  font-size: clamp(14px, 1.5vw, 18px);
  font-weight: var(--ds-font-weight-regular);
  color: rgba(255, 255, 255, 0.75);
  max-width: 480px;
  line-height: 1.7;
  margin: 0;
`;

export const NotFoundCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: var(--color-white);
  background: var(--color-primary);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px 32px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #c00;
  }
`;
