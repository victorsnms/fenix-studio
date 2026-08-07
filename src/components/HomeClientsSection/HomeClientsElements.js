import styled from "styled-components";

export const ClientsSection = styled.section`
  width: 100%;
  padding: 60px 0 100px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

/* Prefixed + rgba() for the same reason as the filmography marquee: without
   the -webkit- prefix older iOS ignores the mask, and an unparseable gradient
   can mask the carousel out entirely, leaving blank space. */
const edgeFade =
  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 1) 92%, rgba(0, 0, 0, 0) 100%)";

export const ClientsCarouselWrap = styled.div`
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: ${edgeFade};
  mask-image: ${edgeFade};
`;

export const ClientsEmblaContainer = styled.div`
  display: flex;
`;

export const ClientsEmblaSlide = styled.div`
  flex: 0 0 20%;
  min-width: 0;
  padding: 0 8px;
  background: #464646;

  @media screen and (max-width: 1024px) {
    flex: 0 0 25%;
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 33%;
  }

  @media screen and (max-width: 480px) {
    flex: 0 0 50%;
  }
`;

export const FilmStripCard = styled.div`
  position: relative;
  background: #464646;
  height: 160px;
  border-radius: 2px;
  overflow: hidden;

  /* Top sprocket holes — SVG data URI for rounded corners */
  &::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 0;
    right: 0;
    height: 18px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='18'%3E%3Crect x='7' y='2' width='23' height='14' rx='4' ry='4' fill='%23121212'/%3E%3C/svg%3E");
    background-size: 44px 18px;
    background-repeat: repeat-x;
    z-index: 1;
    border-radius: 8px;
  }

  /* Bottom sprocket holes */
  &::after {
    content: '';
    position: absolute;
    bottom: 7px;
    left: 0;
    right: 0;
    height: 18px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='18'%3E%3Crect x='7' y='2' width='23' height='14' rx='4' ry='4' fill='%23121212'/%3E%3C/svg%3E");
    background-size: 44px 18px;
    background-repeat: repeat-x;
    z-index: 1;
    border-radius: 8px;
  }
`;

export const FilmStripLogoWrap = styled.div`
  position: absolute;
  top: 32px;
  bottom: 32px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  background: var(--color-background);
  border-radius: 8px;

  img {
    max-height: 50px;
    max-width: 80%;
    object-fit: contain;
    filter: brightness(0.9) grayscale(20%);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(1.1) grayscale(0%);
  }
`;
