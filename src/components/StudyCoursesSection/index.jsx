import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { CommonContext } from "../../providers/CommonContext";
import { IconSearch, IconFilter, IconClose } from "../../icons";
import SectionTopTitle from "../SectionTopTitle";
import {
  StudyCoursesSectionWrapper,
  StudyCoursesHeader,
  StudyCoursesTitle,
  FilterBar,
  FilterDivider,
  FilterBtn,
  CategoryFilterWrap,
  MobileFilterRow,
  SearchInputWrap,
  SearchInput,
  SearchIcon,
  FilterToggleBtn,
  FilterToggleLabel,
  FilterToggleIcon,
  FilterModalOverlay,
  FilterModalBox,
  FilterModalHeader,
  FilterModalCloseBtn,
  UnderlineHeading,
  FilterModalCategoryRow,
  FacetGrid,
  FacetGroup,
  FacetGroupTitle,
  FacetList,
  FacetItem,
  FacetItemLeft,
  FacetCheckbox,
  FacetCount,
  ApplyBtn,
  StudyCoursesContainer,
  CourseCard,
  CourseCardImageWrap,
  CourseCardImage,
  CourseCardContent,
  CourseCardCategory,
  CourseCategoryIcon,
  CourseCategoryIconSquare,
  CourseCardTitle,
  CourseCardDescription,
  CourseCardCTA,
} from "./StudyCoursesElements";

const StudyCoursesSection = () => {
  const { t } = useContext(CommonContext);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [facetSelections, setFacetSelections] = useState({});
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const categories = t("studyPage.categories", { returnObjects: true });
  const facetGroups = t("studyPage.facetGroups", { returnObjects: true });

  // Courses are nested under categories in the data, so flatten them and tag
  // each course with its parent category title for filtering/display.
  const allCourses = categories.flatMap((category) =>
    category.courses.map((course) => ({ ...course, categoryTitle: category.categorTitle }))
  );

  // Build each facet group's checkbox options + counts directly from the
  // course data, so they always stay in sync with whatever courses exist.
  const facetGroupsWithOptions = facetGroups.map((group) => {
    const values = [...new Set(allCourses.map((course) => course[group.key]))];
    return {
      ...group,
      options: values.map((value) => ({
        value,
        count: allCourses.filter((course) => course[group.key] === value).length,
      })),
    };
  });

  const toggleFacetValue = (key, value) => {
    setFacetSelections((prev) => {
      const current = new Set(prev[key] || []);
      if (current.has(value)) {
        current.delete(value);
      } else {
        current.add(value);
      }
      const next = { ...prev };
      if (current.size === 0) {
        delete next[key];
      } else {
        next[key] = current;
      }
      return next;
    });
  };

  const courses = allCourses.filter((course) => {
    if (activeFilter !== "all" && course.categoryTitle !== activeFilter) return false;

    if (searchQuery.trim() && !course.courseTitle.toLowerCase().includes(searchQuery.trim().toLowerCase())) {
      return false;
    }

    for (const group of facetGroups) {
      const selected = facetSelections[group.key];
      if (selected && selected.size > 0 && !selected.has(course[group.key])) return false;
    }

    return true;
  });

  const categoryFilterPills = (
    <>
      <FilterBtn $active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
        {t("studyPage.filterAll")}
      </FilterBtn>
      {categories.map((category) => (
        <FilterBtn
          key={category.categorTitle}
          $active={activeFilter === category.categorTitle}
          onClick={() => setActiveFilter(category.categorTitle)}
        >
          {category.categorTitle}
        </FilterBtn>
      ))}
    </>
  );

  return (
    <StudyCoursesSectionWrapper>
      <StudyCoursesHeader>
        <SectionTopTitle center>{t("studyPage.coursesSectionLabel")}</SectionTopTitle>
        <StudyCoursesTitle>{t("studyPage.coursesSectionTitle")}</StudyCoursesTitle>

        {/* Category pill bar — shown at every breakpoint */}
        <CategoryFilterWrap>
          <FilterBar>
            <FilterDivider $side="left" />
            {categoryFilterPills}
            <FilterDivider $side="right" />
          </FilterBar>
        </CategoryFilterWrap>

        {/* Tablet / mobile: search input + filter modal toggle */}
        <MobileFilterRow>
          <SearchInputWrap>
            <SearchInput
              type="text"
              placeholder={t("studyPage.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon>
              <IconSearch />
            </SearchIcon>
          </SearchInputWrap>
          <FilterToggleBtn onClick={() => setIsFilterModalOpen(true)}>
            <FilterToggleLabel>{t("studyPage.filterToggleLabel")}</FilterToggleLabel>
            <FilterToggleIcon>
              <IconFilter />
            </FilterToggleIcon>
          </FilterToggleBtn>
        </MobileFilterRow>
      </StudyCoursesHeader>

      {/* Only 7 mocked courses total — no "Load More" pagination needed here. */}
      <StudyCoursesContainer>
        {courses.map((course, i) => (
          <CourseCard key={`${activeFilter}-${i}`} threshold={0.1} transitionDelay={(1 + i) * 0.1}>
            <CourseCardImageWrap>
              <CourseCardImage src={`/${course.imagePath}`} alt={course.courseTitle} loading="lazy" />
            </CourseCardImageWrap>
            <CourseCardContent>
              <CourseCardCategory>
                <CourseCategoryIcon>
                  <CourseCategoryIconSquare />
                  <CourseCategoryIconSquare />
                  <CourseCategoryIconSquare />
                  <CourseCategoryIconSquare />
                </CourseCategoryIcon>
                {course.categoryTitle}
              </CourseCardCategory>
              <CourseCardTitle>{course.courseTitle}</CourseCardTitle>
              <CourseCardDescription>{course.courseDescription}</CourseCardDescription>
              <CourseCardCTA href={course.buttonUrl} target="_blank" rel="noopener noreferrer">
                {course.buttonLabel}
              </CourseCardCTA>
            </CourseCardContent>
          </CourseCard>
        ))}
      </StudyCoursesContainer>

      {isFilterModalOpen &&
        createPortal(
          <FilterModalOverlay onClick={() => setIsFilterModalOpen(false)}>
            <FilterModalBox onClick={(e) => e.stopPropagation()}>
              <FilterModalHeader>
                <UnderlineHeading>{t("studyPage.filterModalTitle")}</UnderlineHeading>
                <FilterModalCloseBtn onClick={() => setIsFilterModalOpen(false)} aria-label="Close">
                  <IconClose />
                </FilterModalCloseBtn>
              </FilterModalHeader>

              <FilterModalCategoryRow>{categoryFilterPills}</FilterModalCategoryRow>

              <FacetGrid>
                {facetGroupsWithOptions.map((group) => {
                  const selected = facetSelections[group.key];
                  const isAllChecked = !selected || selected.size === 0;

                  return (
                    <FacetGroup key={group.key}>
                      <FacetGroupTitle>{group.label}</FacetGroupTitle>
                      <FacetList>
                        <FacetItem>
                          <FacetItemLeft>
                            <FacetCheckbox
                              type="checkbox"
                              checked={isAllChecked}
                              onChange={() =>
                                setFacetSelections((prev) => {
                                  const next = { ...prev };
                                  delete next[group.key];
                                  return next;
                                })
                              }
                            />
                            {t("studyPage.filterAllOption")}
                          </FacetItemLeft>
                          <FacetCount>[{allCourses.length}]</FacetCount>
                        </FacetItem>
                        {group.options.map(({ value, count }) => (
                          <FacetItem key={value}>
                            <FacetItemLeft>
                              <FacetCheckbox
                                type="checkbox"
                                checked={Boolean(selected?.has(value))}
                                onChange={() => toggleFacetValue(group.key, value)}
                              />
                              {value}
                            </FacetItemLeft>
                            <FacetCount>[{count}]</FacetCount>
                          </FacetItem>
                        ))}
                      </FacetList>
                    </FacetGroup>
                  );
                })}
              </FacetGrid>

              <ApplyBtn onClick={() => setIsFilterModalOpen(false)}>
                {t("studyPage.applyLabel")}
              </ApplyBtn>
            </FilterModalBox>
          </FilterModalOverlay>,
          document.body
        )}
    </StudyCoursesSectionWrapper>
  );
};

export default StudyCoursesSection;
