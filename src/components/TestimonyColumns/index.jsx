import React from "react";
import { TestimonyAuthorName, TestimonyAuthorOccupation, TestimonyColumn, TestimonyColumnsContainer, TestimonyText, TestimonyTextContainer, TestimonyTextWrapper } from "./TestimonyColumns";

const TestimonyColumns = ({ testimonyList, main = false }) => {
  return (
    <>
      <TestimonyColumnsContainer>
        {testimonyList.map((testemony, i) => (
          <TestimonyColumn key={i} threshold={0.3} transitionDelay={(1 + i) * 0.2} className={main && "main"}>
            <div className="image-container">
              <img src={testemony.imagePath} alt={testemony.imageAlt} />
            </div>
            <TestimonyTextWrapper>
              <div className="join">
                <TestimonyAuthorName>{testemony.author}</TestimonyAuthorName>
                <TestimonyAuthorOccupation>{testemony.occupation}</TestimonyAuthorOccupation>
              </div>
              <TestimonyTextContainer>
                {testemony.text1 && <TestimonyText>{testemony.text1}</TestimonyText>}
                {testemony.text2 && <TestimonyText>{testemony.text2}</TestimonyText>}
                {testemony.text3 && <TestimonyText>{testemony.text3}</TestimonyText>}
              </TestimonyTextContainer>
            </TestimonyTextWrapper>
          </TestimonyColumn>
        ))}
      </TestimonyColumnsContainer>
    </>
  );
};

export default TestimonyColumns;
