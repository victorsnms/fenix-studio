import styled, { keyframes, css } from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

export const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 50px;
  background: ${({ noBackground }) => (noBackground ? "transparent" : "#151515")};
  display: flex;
  flex-direction: column;
  grid-row-gap: 25px;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 767px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export const MarqueeContainer = styled(FadeInAnimation)`
  display: flex;
  column-gap: 24px;
  mask-image: linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0));
  user-select: none;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;

export const EmblaFilmContainer = styled.div`
  display: flex;
`;

export const EmblaFilmSlide = styled.div`
  flex: 0 0 25%;
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

export const FilmCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 12px;
  border: 1px solid transparent;
  transition: border-color 0.2s ease;
  padding: 8px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: #ff0808;
  }
`;

export const FilmCardImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 25px;
`;

export const FilmMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 2px;
`;

export const FilmRating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const FilmRatingText = styled.span`
  font-family: var(--ds-font-brand);
  font-size: 13px;
  font-weight: var(--ds-font-weight-regular);
  color: #ffffff;
  line-height: 1;
`;

export const FilmTitle = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 13px;
  font-weight: var(--ds-font-weight-semibold);
  color: var(--color-white);
  margin: 0;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  white-space: normal;
`;

export const MarqueeImageContainer = styled(FadeInAnimation)`
  display: flex;
  align-items: center;
`;

export const MarqueeFilmImage = styled.img`
  border-radius: 8px;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  transition: transform 0.5s ease-in;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 767px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MarqueeImage = styled.img`
  width: 20vw;
  max-width: none;
  min-width: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);
  transition-duration: 1s;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 767px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 30px;
  white-space: nowrap;
  width: 100%;
  /* animation: ${scrollX} 30s linear infinite; */
`;

export const MarqueeGroup = styled.div`
  ${common}
`;
