import React from "react";
import { Heading1, SubTitle, TitleContainer } from "./PageTitleElements";

const PageTitle = ({ title = "", lightText = false, subtitle }) => {
  return (
    <>
      <TitleContainer>
        <Heading1 lightText={lightText}>{title}</Heading1>
        {subtitle && <SubTitle lightText={lightText}>{subtitle}</SubTitle>}
      </TitleContainer>
    </>
  );
};

export default PageTitle;
