import React from "react";
import {
  CategoryContent,
  CategoryTitle,
  CategoryWrapper,
  CourseCTA,
  CourseContent,
  CourseDescription,
  CourseImage,
  CourseInfoWrapper,
  CourseTitle,
  StudyCoursesContainer,
} from "./StudyCoursesElements";

const StudyCourses = ({ categoriesList = [] }) => {
  return (
    <>
      <StudyCoursesContainer>
        {categoriesList.map((category, i) => (
          <CategoryWrapper key={i}>
            <CategoryTitle>{category.categorTitle}</CategoryTitle>
            <CategoryContent>
              {category.courses.map((course, i) => (
                <CourseContent key={i} threshold={0.1} transitionDelay={(1 + i) * 0.2}>
                  <CourseImage src={course.imagePath}></CourseImage>
                  <CourseInfoWrapper>
                    <CourseTitle>{course.courseTitle}</CourseTitle>
                    <CourseDescription>{course.courseDescription}</CourseDescription>
                    <CourseCTA href={course.buttonUrl}>{course.buttonLabel}</CourseCTA>
                  </CourseInfoWrapper>
                </CourseContent>
              ))}
            </CategoryContent>
          </CategoryWrapper>
        ))}
      </StudyCoursesContainer>
    </>
  );
};

export default StudyCourses;
