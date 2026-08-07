import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const BlurredImage = ({ pathSmall, ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // The image is held at opacity 0 until it loads. A cached image can finish
  // loading before React attaches onLoad, so that event never fires and the
  // image would stay invisible forever — check `complete` on mount to cover it.
  useEffect(() => {
    if (imgRef.current?.complete) setImageLoaded(true);
  }, [props.src]);

  // Forcing load small image first
  const img = useMemo(() => (new Image().src = pathSmall), [pathSmall]);

  return (
    <CustomImageContainer id="customImageContainer" imageLoaded={imageLoaded} pathSmall={pathSmall}>
      <CustomImage
        {...props}
        ref={imgRef}
        imageLoaded={imageLoaded}
        onLoad={handleImageLoad}
        // Never leave a permanently invisible element if the src fails.
        onError={handleImageLoad}
        loading="lazy"
      />
    </CustomImageContainer>
  );
};

export default BlurredImage;

const pulseAnimation = keyframes`
  0% {
    background-color:  rgba(255, 255, 255, 0);
  }

  50% {
    background-color:  rgba(255, 255, 255, 0.1);
  }

  100% {
    background-color:  rgba(255, 255, 255, 0);
  }
`;

const CustomImageContainer = styled.div`
  background-image: ${({ pathSmall }) => `url(${pathSmall})`};
  background-size: cover;
  background-position: center;
  width: 90%;
  max-width: 90%;
  position: relative;
  &::before {
    content: ${({ imageLoaded }) => (imageLoaded ? "none" : "''")};
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 1);
    animation: ${pulseAnimation} linear 1.5s infinite;
  }
`;

const CustomImage = styled.img`
  width: 100%;
  height: 100%;
  transition: "opacity 200ms ease-in-out";
  opacity: ${({ imageLoaded }) => (imageLoaded ? 1 : 0)};
  object-fit: cover;
  object-position: center;
`;
