import styled from "styled-components";

// Inline-flex column so the line inherits the text width exactly
export const SectionTopTitleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-self: ${({ center }) => (center ? "center" : "flex-start")};
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  gap: 12px;
`;

export const SectionTopTitleText = styled.span`
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--ds-font-weight-semibold);
  line-height: 16px;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

// 1px gradient line — same width as the text (stretches to fill the inline container)
export const SectionTopTitleLine = styled.div`
  height: 2px;
  align-self: stretch;
  background: linear-gradient(90deg, #ff0808 0%, #121212 100%);
`;
