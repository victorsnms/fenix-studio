import styled from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

export const StudyCoursesSectionWrapper = styled.section`
  width: 100%;
  padding: 100px 0 120px;
`;

/* ── Header + filter bar ──────────────────────────────────────────────────── */

export const StudyCoursesHeader = styled.div`
  max-width: 1300px;
  margin: 0 auto 48px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    margin-bottom: 32px;
  }
`;

export const StudyCoursesTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(36px, 5vw, 72px);
  line-height: 1.0;
  text-transform: uppercase;
  color: var(--color-white);
  text-align: center;
  margin: 0 0 32px;
`;

export const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const FilterDivider = styled.div`
  flex: 1;
  max-width: 189px;
  height: 1px;
  background: ${({ $side }) =>
    $side === "left"
      ? "linear-gradient(to right, #121212, #FF0808)"
      : "linear-gradient(to right, #FF0808, #121212)"};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FilterBtn = styled.button`
  font-family: var(--ds-font-brand);
  font-size: 12px;
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 8px 20px;
  cursor: pointer;
  border: ${({ $active }) => $active ? "1px solid transparent" : "1px solid #fff"};
  background: ${({ $active }) => $active ? "var(--color-primary)" : "transparent"};
  color: var(--color-white);
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ $active }) => $active ? "var(--color-primary)" : "rgba(255,255,255,0.08)"};
  }
`;

/* Wraps the category pill bar — shown at every breakpoint, stacked above the
   Busca/Filtro row on tablet and mobile */
export const CategoryFilterWrap = styled.div`
  width: 100%;
`;

/* ── Tablet / mobile: search + filter toggle row ──────────────────────────── */

export const MobileFilterRow = styled.div`
  display: none;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const SearchInputWrap = styled.div`
  position: relative;
  width: 50%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-size: 13px;
  padding: 0 56px 0 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-white);
  pointer-events: none;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const FilterToggleBtn = styled.button`
  position: relative;
  width: 50%;
  height: 48px;
  display: flex;
  align-items: center;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0;
  cursor: pointer;
  text-align: left;
`;

export const FilterToggleLabel = styled.span`
  flex: 1;
  padding: 0 56px 0 16px;
  color: rgba(255, 255, 255, 0.45);
  font-family: var(--ds-font-brand);
  font-size: 13px;
`;

export const FilterToggleIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-white);
  transition: background 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  ${FilterToggleBtn}:hover & {
    background: #c00606;
  }
`;

/* ── Filter modal ──────────────────────────────────────────────────────────── */

export const FilterModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const FilterModalBox = styled.div`
  background: #1a1a1a;
  width: min(620px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px;
  position: relative;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

export const FilterModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const FilterModalCloseBtn = styled.button`
  background: transparent;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  padding: 4px;
  line-height: 1;

  svg {
    display: block;
    width: 18px;
    height: 18px;
  }
`;

/* Bold heading with a short red underline — reused for the modal title and each facet group title */
export const UnderlineHeading = styled.h3`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: 22px;
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;

  &::after {
    content: '';
    height: 2px;
    align-self: stretch;
    background: linear-gradient(90deg, #ff0808 0%, #121212 100%);
  }
`;

export const FilterModalCategoryRow = styled(FilterBar)`
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
`;

export const FacetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FacetGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FacetGroupTitle = styled(UnderlineHeading)`
  font-size: 14px;
  margin-bottom: 14px;
`;

export const FacetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FacetItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  font-family: var(--ds-font-brand);
  font-size: 12px;
  font-weight: var(--ds-font-weight-regular);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
`;

export const FacetItemLeft = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FacetCheckbox = styled.input`
  width: 14px;
  height: 14px;
  accent-color: var(--color-primary);
  cursor: pointer;
`;

export const FacetCount = styled.span`
  color: rgba(255, 255, 255, 0.45);
`;

export const ApplyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  border: none;
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px 32px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #c00606;
  }
`;

/* ── Grid ──────────────────────────────────────────────────────────────────── */

export const StudyCoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px auto;
  padding: 0 50px;
  max-width: 1124px;
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

/* ── Course card ───────────────────────────────────────────────────────────── */

export const CourseCard = styled(FadeInAnimation)`
  display: flex;
  flex-direction: column;
  height: 574px;
  padding: 25px;
  background: #1A1A1A;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 512px;
  }

  @media (max-width: 768px) {
    height: 492px;
  }
`;

export const CourseCardImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 243px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 147px;
  }
`;

export const CourseCardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;

  ${CourseCard}:hover & {
    transform: scale(1.03);
  }
`;

export const CourseCardContent = styled.div`
  padding-top: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CourseCardCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: var(--ds-font-brand);
  font-size: 11px;
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9d9d9d;
`;

export const CourseCategoryIcon = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2px;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
`;

export const CourseCategoryIconSquare = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background: var(--color-primary);
`;

export const CourseCardTitle = styled.h3`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: clamp(14px, 1.4vw, 18px);
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
  line-height: 1.3;
`;

export const CourseCardDescription = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 14px;
  font-weight: var(--ds-font-weight-regular);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CourseCardCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  background: transparent;
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  width: 185px;
  height: 64px;
  cursor: pointer;
  margin-top: auto;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-background);
  }
`;
