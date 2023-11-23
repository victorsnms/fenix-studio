import React from "react";
import { Heading1, SubTitle } from "./PageDescriptionElements";

const PageDescription = ({ text = "" }) => {
  return (
    <>
      <SubTitle>{text}</SubTitle>
    </>
  );
};

export default PageDescription;
