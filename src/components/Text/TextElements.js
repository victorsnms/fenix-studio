import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  padding: ${({ containerPadding }) => containerPadding};
  font-size: 12px;
  color: ${({ color }) => (color ? color : "#f7f8fa")};
  background-color: ${({ lightBg, noBackground }) => (noBackground ? "transparent" : lightBg ? "#f9f9f9" : "#151515")};

  @media (min-width: 768px) {
    font-size: 14px;
  }

  p {
    width: 100%;
    text-align: ${({ textAlign }) => textAlign};
    font-size: ${({ fontSize }) => fontSize};
    margin: ${({ textMargin }) => textMargin};
    max-width: ${({ textMaxWidth }) => textMaxWidth};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  }
`;
