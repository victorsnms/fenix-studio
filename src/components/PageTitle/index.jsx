import React from "react";
import { Heading1, SubTitle, TitleContainer } from "./PageTitleElements";

const PageTitle = ({ title = "", lightText = false, subtitle, subtitle2 }) => {
  return (
    <>
      <TitleContainer>
        <Heading1 lightText={lightText}>{title}</Heading1>
        {subtitle && <SubTitle lightText={lightText}>{subtitle}</SubTitle>}
        {subtitle2 && <SubTitle lightText={lightText}>{subtitle2}</SubTitle>}
      </TitleContainer>
    </>
  );
};

export default PageTitle;
