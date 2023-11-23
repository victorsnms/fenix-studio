import styled from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

export const StudyCoursesContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CategoryWrapper = styled(FadeInAnimation)`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
export const CategoryTitle = styled.span`
  color: #f7f8fa;
  font-size: 38px;
  margin-bottom: 20px;
`;

export const CategoryContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
`;

export const CourseContent = styled(FadeInAnimation)`
  display: flex;
  flex-direction: row;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const CourseImage = styled.img`
  max-width: 245px;
  aspect-ratio: 9/16;
  @media (max-width: 1024px) {
    max-width: 145px;
  }
`;
export const CourseInfoWrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const CourseTitle = styled.span`
  color: #f7f8fa;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 10px;
`;
export const CourseDescription = styled.span`
  color: #f7f8fa;
  margin-bottom: 20px;
`;
export const CourseCTA = styled.a`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #ed1c24;
  white-space: nowrap;
  padding: 10px 20px;
  color: #f6f7f8;
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7f8fa;
    color: #151515;
  }
`;
