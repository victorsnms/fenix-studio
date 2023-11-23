import styled from "styled-components";

export const FadeInAnimationContainer = styled.div`
    display: unset;
    &.fade-in {
        opacity: 0;
        transition: opacity 1s;
        transition-delay: ${({transitionDelay}) => transitionDelay || 0}s;
    }

    &.fade-in.is-visible {
        opacity: 1;
    }
`