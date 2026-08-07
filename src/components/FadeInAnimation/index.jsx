import React from "react";
import { useInView } from "react-intersection-observer";
import { FadeInAnimationContainer } from "./FadeInAnimationElements";

/**
 * An IntersectionObserver threshold is the fraction of the element that must be
 * on screen at once. A threshold of 1 therefore can never be met by an element
 * taller than the viewport — inView stays false, `is-visible` is never added,
 * and the element is stuck at opacity 0 permanently. That is what blanked the
 * filmography marquee on mobile: it fit on a desktop screen but not a phone.
 *
 * Capping it keeps reveal animations from ever hiding content outright.
 */
const MAX_THRESHOLD = 0.5;

const FadeInAnimation = ({ children, threshold, transitionDelay, className, customTag="div", ...props }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: Math.min(threshold ?? 0, MAX_THRESHOLD),
    });

    return (
        <FadeInAnimationContainer
            as={customTag}
            ref={ref}
            className={`${className || ''} fade-in ${inView ? "is-visible" : ""}`}
            transitionDelay={transitionDelay}
            {...props}
        >
            {children}
        </FadeInAnimationContainer>
    );
};

export default FadeInAnimation;
