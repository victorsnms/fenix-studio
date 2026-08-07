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

    /* Honour the OS "reduce motion" setting: show content immediately with no
       fade and no stagger delay. Kept as opacity:1 (rather than just removing
       the transition) so content is never left invisible. */
    @media (prefers-reduced-motion: reduce) {
        &.fade-in,
        &.fade-in.is-visible {
            opacity: 1;
            transition: none;
            transition-delay: 0s;
        }
    }
`