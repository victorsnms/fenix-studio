import React from "react";
import { TestimonyAuthorName, TestimonyAuthorOccupation, TestimonyColumn, TestimonyColumnsContainer, TestimonyText } from "./TestimonyColumns";

const TestimonyColumns = ({ testimonyList }) => {
  return (
    <>
      <TestimonyColumnsContainer>
        {testimonyList.map((testemony, i) => (
          <TestimonyColumn key={i} threshold={0.1} transitionDelay={(1 + i) * 0.2}>
            <TestimonyAuthorName>{testemony.author}</TestimonyAuthorName>
            <TestimonyAuthorOccupation>{testemony.occupation}</TestimonyAuthorOccupation>
            <TestimonyText>{testemony.text}</TestimonyText>
          </TestimonyColumn>
        ))}
      </TestimonyColumnsContainer>
    </>
  );
};

export default TestimonyColumns;
