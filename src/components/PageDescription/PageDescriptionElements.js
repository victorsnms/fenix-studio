import styled from "styled-components";

export const Heading1 = styled.h1`
  padding-top: 16vh;
  padding-bottom: 16vh;
  text-align: center;
  font-size: 13vw;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#222633")};

  @media (min-width: 768px) {
    padding-top: 20vh;
    padding-bottom: 20vh;
    font-size: 80px;
  }

  @media (min-width: 1024px) {
    font-size: 104px;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-size: 5vw;
  line-height: 135%;
  font-weight: 400;
  color: #f7f8fa;
  padding: 15px 50px;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 479px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
