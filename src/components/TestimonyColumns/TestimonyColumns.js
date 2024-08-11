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
  row-gap: 40px;
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
  column-gap: 35px;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    width: 50%;
    align-items: start;
  }

  // used on only 1 testemony
  &.main {
    @media (min-width: 1024px) {
      width: 60%;
    }

    @media (min-width: 1250px) {
      width: 50%;
    }
  }

  .image-container {
    padding-bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (min-width: 479px) {
      width: auto;
      justify-content: start;
    }
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 999px;
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

export const TestimonyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const TestimonyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  .join {
    display: flex;
    flex-direction: column;
  }
`;
