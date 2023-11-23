import styled from "styled-components";

export const TitleContainer = styled.div`
  padding-top: 16vh;
  padding-bottom: 16vh;
  @media (min-width: 768px) {
    padding-top: 20vh;
    padding-bottom: 20vh;
  }
`;

export const Heading1 = styled.h1`
  text-align: center;
  font-size: 13vw;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#222633")};

  @media (min-width: 768px) {
    font-size: 80px;
  }

  @media (min-width: 1024px) {
    font-size: 104px;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-size: 5vw;
  line-height: 135%;
  font-weight: 400;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#222633")};
  padding: 15px 30px;

  @media (min-width: 479px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
