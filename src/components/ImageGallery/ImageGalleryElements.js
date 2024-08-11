import styled from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

export const GalleryWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 50px;
  background: ${({ noBackground }) => (noBackground ? "transparent" : "#222633")};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export const GalleryContainer = styled(FadeInAnimation)`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GallerySlide = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;

  /* Text Overlay */
  /* &::after {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 10px;
  } */

  /* Show text on hover */
  /* &:hover::after {
    opacity: 1;
  } */
`;

export const TextOnHover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 15px;
  &:hover {
    opacity: 1;
  }

  .bold {
    font-weight: 600;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  transition: transform 0.3s ease;
  object-fit: cover;
`;
