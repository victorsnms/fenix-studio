import styled from "styled-components";

export const NewsletterSection = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 120px;
  background-image: url('/images/newsletter-bg.png');
  background-size: cover;
  background-position: center;
  position: relative;

  /* &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.62);
    pointer-events: none;
  } */
`;

export const NewsletterInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 64px 32px;
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 1024px) {
    gap: 32px;
    padding: 56px 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 48px 20px;
  }
`;

export const NewsletterTitle = styled.h2`
  flex: 1;
  font-family: var(--ds-font-brand);
  font-weight: 700;
  font-size: 24px;
  font-style: normal;
  line-height: 36px;
  text-transform: uppercase;
  color: #fff;
  margin: 0;

  @media (max-width: 1024px) {
    line-height: 34px;
  }

  @media (max-width: 768px) {
    line-height: 34px;
  }
`;

/* Column so a status message can sit directly under the input/button */
export const NewsletterFormColumn = styled.div`
  flex-shrink: 0;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1024px) {
    width: 360px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NewsletterFormWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;
  background: #ffffff;

  @media (max-width: 480px) {
    padding: 0px;
    background: transparent;
    flex-direction: column;
    gap: 15px;
  }
`;

/* Always rendered (even with empty text) and given a reserved min-height so
   the column's height stays constant whether a message is showing or not —
   otherwise the form jumps/shifts every time a message appears or clears. */
export const NewsletterMessage = styled.p`
  margin: 0;
  min-height: 20px;
  font-family: var(--ds-font-brand);
  font-size: 13px;
  line-height: 1.5;
  color: ${({ $type }) => ($type === "error" ? "#ff6b6b" : "#7CFC9B")};
`;

export const NewsletterInput = styled.input`
  flex: 1;
  min-width: 0;
  background: #ffffff;
  border: none;
  outline: none;
  padding: 16px 20px;
  font-family: var(--ds-font-brand);
  font-size: 14px;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`;

export const NewsletterButton = styled.button`
  flex-shrink: 0;
  background: var(--color-primary);
  border: none;
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-bold);
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 16px 28px;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: var(--color-primary-hover, #c00);
  }

  @media (max-width: 480px) {
    padding: 18px;
    width: 100%;
  }
`;
