import styled from "styled-components"
import FadeInAnimation from "../FadeInAnimation"

export const MarqueeWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    padding-top: 50px;
    padding-bottom: 50px;
    background: ${({noBackground}) => noBackground ? 'transparent' : '#222633'};
    display: flex;
    flex-direction: column;
    grid-row-gap: 25px;
    @media screen and (max-width: 767px) {
        padding-top: 25px;
        padding-bottom: 25px;
    }
`

export const MarqueeContainer = styled(FadeInAnimation)`
    display: flex;
    grid-column-gap: 24px;

    @keyframes marquee {
        0% {
            transform: translateX(-10%);
        }
        100% {
            transform: translateX(-30%);
        }
    }

    &.marquee.is-visible {
        animation: marquee ease-out 5s forwards ${({direction}) => direction};
    }
`

export const MarqueeImageContainer = styled.div`
    display: flex;
    align-items: center;
`

export const MarqueeImage = styled.img`
    width: 28vw;
    max-width: none;
    min-width: 200px;
    border-radius: 8px;
    box-shadow: 0 2px 30px rgba(0, 0, 0, .3);
`