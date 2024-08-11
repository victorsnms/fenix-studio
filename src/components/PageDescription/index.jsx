import React from "react";
import { SubTitle } from "./PageDescriptionElements";

const PageDescription = ({ text = "" }) => {
  return (
    <>
      <SubTitle>{text}</SubTitle>
    </>
  );
};

export default PageDescription;
