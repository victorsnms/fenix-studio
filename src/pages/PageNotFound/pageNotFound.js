import styled from "styled-components";

export const PageNotFoundContainer = styled.div`
  max-width: 930px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 110px;
  padding-bottom: 110px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LogoAndTextContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const MainTextContainer = styled.div`
  color: #f6f7f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PageNotFoundNumberText = styled.div`
  text-align: center;
  font-size: 120px;
`;

export const PageNotFoundMessageText = styled.div`
  font-size: 32px;
  text-align: center;
`;

export const PageNotFoundDescriptionText = styled.div`
  text-align: center;
  font-size: 18px;
  color: #f6f7f8;
  padding-left: 25px;
  padding-right: 25px;
`;

export const PageNotFoundLogo = styled.img`
  max-width: 300px;
  max-height: 300px;
  filter: brightness(0) invert(1);
`;
