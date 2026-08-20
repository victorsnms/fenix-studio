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

/* Edge fade. Two compatibility notes, both of which could blank the whole
   marquee on mobile if got wrong:
   - -webkit- prefix is required by Safari before 15.4; without it the
     unprefixed property is the only one seen and older iOS ignores it.
   - rgba() instead of the CSS Color 4 `hsl(0 0% 0% / 0)` space-separated
     syntax. If a browser supports masking but can't parse the gradient, the
     mask resolves to nothing and masks the element out entirely — i.e. the
     posters vanish while still occupying layout space. */
const edgeFade =
  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)";

export const MarqueeContainer = styled(FadeInAnimation)`
  display: flex;
  column-gap: 24px;
  -webkit-mask-image: ${edgeFade};
  mask-image: ${edgeFade};
  user-select: none;
  /* Must match EmblaCarousel's own max-width (LogoListElements), not
     MarqueeWrapper's 1300px. The mask is applied to this box, so if it's
     wider than the actual carousel inside it, the child sits flush-left
     (flex default) and the right-side fade lands on empty space instead of
     the carousel's real edge — a hard cut on the right instead of a fade.
     The visible width doesn't change here; EmblaCarousel was already the
     binding constraint. This just aligns the mask to match it. */
  width: 100%;
  max-width: 1300px;
  /* Without this, MarqueeWrapper's column-flex layout refuses to shrink this
     item below its content's intrinsic width (the flex default min-width is
     auto, not 0). On narrow viewports that pins the container at its full
     744/930px even though the screen is only ~390px wide, and the overflow
     — including the entire right-edge fade zone — gets silently clipped by
     MarqueeWrapper's overflow:hidden. Confirmed via a real headless-browser
     measurement: at 390px viewport this box rendered 744px wide before the
     fix. min-width:0 lets it actually shrink to fit. */
  min-width: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    max-width: 744px;
  }
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
