import React from "react";
import { TextContainer } from "./TextElements";
import { useTranslation } from "react-i18next";
import FadeInAnimation from "../FadeInAnimation";

const Text = ({
  children = "",
  lightBg = false,
  lightText = true,
  textAlign = "center",
  fontSize = "1rem",
  textMargin = "auto",
  textMaxWidth = "100%",
  containerPadding = 0,
  noBackground = false,
  color = "#f7f8fa",
  fontWeight = "400",
}) => {
  const [t] = useTranslation();

  return (
    <TextContainer
      lightBg={lightBg}
      lightText={lightText}
      textAlign={textAlign}
      fontSize={fontSize}
      textMargin={textMargin}
      textMaxWidth={textMaxWidth}
      containerPadding={containerPadding}
      noBackground={noBackground}
      color={color}
      fontWeight={fontWeight}
    >
      <FadeInAnimation threshold={0.5}>
        <p>{t(children)}</p>
      </FadeInAnimation>
    </TextContainer>
  );
};

export default Text;
