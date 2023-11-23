import styled from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

export const TestimonyColumnsContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px 0;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const TestimonyColumn = styled(FadeInAnimation)`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media (min-width: 768px) {
    align-items: center;
  }
  @media (min-width: 1024px) {
    width: 33%;
    align-items: start;
  }
`;

export const TestimonyAuthorName = styled.span`
  text-align: start;
  color: #f7f8fa;
  font-weight: 700;
  margin-bottom: 5px;
  font-style: italic;
`;

export const TestimonyAuthorOccupation = styled.span`
  text-align: start;
  color: #f7f8fa;
  font-weight: 700;
  margin-bottom: 15px;
  font-style: italic;
`;

export const TestimonyText = styled.span`
  text-align: start;
  color: #f7f8fa;
`;
