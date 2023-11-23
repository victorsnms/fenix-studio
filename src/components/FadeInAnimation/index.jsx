import React from "react";
import { useInView } from "react-intersection-observer";
import { FadeInAnimationContainer } from "./FadeInAnimationElements";

const FadeInAnimation = ({ children, threshold, transitionDelay, className, customTag="div", ...props }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold,
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
