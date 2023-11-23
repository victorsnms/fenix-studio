import styled from "styled-components";
import FadeInAnimation from "../../components/FadeInAnimation";
import { Link as LinkR } from "react-router-dom";

export const HomePageContainer = styled.div`
  width: 100%;
  background: #151515;
  background-size: 400% 400%;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const PaddingWrapper = styled.div`
  padding-top: ${({ paddingY }) => (paddingY ? paddingY : "0")};
  padding-bottom: ${({ paddingY }) => (paddingY ? paddingY : "0")};
  padding-left: ${({ paddingX }) => (paddingX ? paddingX : "0")};
  padding-right: ${({ paddingX }) => (paddingX ? paddingX : "0")};
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding: 50px 25px;
`;

export const PlatformsSectionWrapper = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;

export const PlatformSection = styled(FadeInAnimation)`
  margin-left: auto;
  margin-right: auto;
  padding: 50px 24px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-column-gap: 50px;
  grid-row-gap: 75px;
  @media screen and (max-width: 767px) {
    padding: 40px 24px;
  }
`;

export const PlatformTextContainer = styled.div`
  max-width: 700px;
  color: #f7f8fa;
  @media screen and (min-width: 1343px) {
    order: ${({ inverted }) => (inverted ? 1 : 0)};
  }
`;

export const PlatformTitle = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const PlatformText = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 400;
  line-height: 135%;
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const PlatformImage = styled.img`
  @media screen and (max-width: 767px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }

  @media screen and (max-width: 480px) {
    height: calc(2 / 3 * ${({ mobileHeight }) => mobileHeight});
  }
`;

export const PlatformImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 530px;
  max-width: 700px;
  flex: 1;
  position: relative;

  @media screen and (max-width: 1160px) {
    max-width: 530px;
  }

  @media screen and (max-width: 600px) {
    min-width: auto;
  }
`;

export const CourseCTA = styled(LinkR)`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #ed1c24;
  white-space: nowrap;
  padding: 10px 20px;
  color: #f6f7f8;
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  text-decoration: none;
  max-width: 120px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7f8fa;
    color: #151515;
  }
`;
