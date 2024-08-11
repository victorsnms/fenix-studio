import styled from "styled-components";

export const LogoSection = styled.div`
  background-color: ${({ noBackground }) => (noBackground ? "transparent" : "#222633")};
`;

export const LogoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const ImageLogo = styled.img`
  height: 65px;
  transition: all 0.7s;
  &:hover {
    transform: scale(1.4);
    filter: brightness(2);
  }
  @media screen and (max-width: 767px) {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const LogosMaster = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: ${({ qty }) => (qty * 186 > 930 ? 930 : qty * 186)}px;
  padding: 15px 20px;
  @media screen and (max-width: 767px) {
    grid-column-gap: 50px;
    grid-row-gap: 25px;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 50px;
    max-width: 100%;
  }
`;

export const EmblaCarousel = styled.div`
  overflow: hidden;
  padding: 15px 0;
  width: 100%;
  max-width: 930px;

  @media screen and (max-width: 1024px) {
    max-width: 744px;
  }
`;

export const EmblaContainer = styled.div`
  display: flex;
`;
export const EmblaSlide = styled.div`
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  min-width: 0;

  @media screen and (max-width: 1024px) {
    flex: 0 0 33%;
  }

  @media screen and (max-width: 480px) {
    flex: 0 0 50%;
  }
`;

export const CarouselButtonLeft = styled.button`
  margin-left: 20px;
  background: transparent;
  height: 30px;
  width: 30px;
  border: none;
  &:hover {
    filter: brightness(2);
  }
`;

export const CarouselButtonRight = styled.button`
  margin-right: 20px;
  background: transparent;
  height: 30px;
  width: 30px;
  border: none;
  &:hover {
    filter: brightness(2);
  }
`;
