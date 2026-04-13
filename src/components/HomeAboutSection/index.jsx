import React, { useContext } from "react";
import { CommonContext } from "../../providers/CommonContext";
import SectionTopTitle from "../SectionTopTitle";
import {
  AboutSection,
  AboutGrid,
  AboutImageCol,
  AboutImage,
  AboutContentCol,
  AboutTitle,
  AboutBody,
  AboutCardsWrapper,
  AboutCard,
  AboutCardHeader,
  AboutCardIcon,
  AboutCardTitle,
  AboutCardBody,
} from "./HomeAboutElements";

// ─── Card icons (from Figma, fill #FF0808) ───────────────────────────────────
const PostProductionIcon = () => (
  <svg width="28" height="33" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M34.7318 12.8375L22.8266 0.932076C22.2255 0.330974 21.4269 0 20.5765 0H3.18199C1.42698 0 0 1.42759 0 3.18239V38.6339C0 40.3884 1.42698 41.8158 3.18199 41.8158H32.4823C34.2365 41.8158 35.6641 40.3884 35.6641 38.6339V15.0874C35.6639 14.2379 35.3329 13.4384 34.7318 12.8375ZM33.2361 38.6339C33.2361 39.0495 32.8984 39.3882 32.4825 39.3882H3.18199C2.76613 39.3882 2.42825 39.0495 2.42825 38.6339V3.18218C2.42825 2.76653 2.76613 2.42845 3.18199 2.42845H19.7848C20.2393 2.42845 20.6077 2.79686 20.6077 3.25139V12.2286C20.6077 13.7444 21.8364 14.973 23.3514 14.973H32.4133C32.6318 14.973 32.8409 15.0598 32.9952 15.2141C33.1495 15.3684 33.2363 15.5776 33.2363 15.7959L33.2361 38.6339Z" fill="#FF0808"/>
    <path d="M7.78703 7.4557C7.78703 7.89372 7.43201 8.24853 6.9942 8.24853H5.27558C4.83756 8.24853 4.48275 7.89351 4.48275 7.4557V5.73708C4.48275 5.29906 4.83756 4.94424 5.27558 4.94424H6.9942C7.43222 4.94424 7.78703 5.29927 7.78703 5.73708V7.4557Z" fill="#FF0808"/>
    <path d="M7.78703 13.2793C7.78703 13.7173 7.43201 14.0725 6.9942 14.0725H5.27558C4.83756 14.0725 4.48275 13.7173 4.48275 13.2793V11.5611C4.48275 11.1231 4.83756 10.768 5.27558 10.768H6.9942C7.43222 10.768 7.78703 11.1231 7.78703 11.5611V13.2793Z" fill="#FF0808"/>
    <path d="M7.78703 19.0971C7.78703 19.5351 7.43201 19.8901 6.9942 19.8901H5.27558C4.83756 19.8901 4.48275 19.5351 4.48275 19.0971V17.3784C4.48275 16.9404 4.83756 16.5856 5.27558 16.5856H6.9942C7.43222 16.5856 7.78703 16.9404 7.78703 17.3784V19.0971Z" fill="#FF0808"/>
    <path d="M7.78703 24.9209C7.78703 25.3589 7.43201 25.7141 6.9942 25.7141H5.27558C4.83756 25.7141 4.48275 25.3589 4.48275 24.9209V23.2025C4.48275 22.7642 4.83756 22.4094 5.27558 22.4094H6.9942C7.43222 22.4094 7.78703 22.7642 7.78703 23.2025V24.9209Z" fill="#FF0808"/>
    <path d="M7.78703 30.7449C7.78703 31.1831 7.43201 31.5379 6.9942 31.5379H5.27558C4.83756 31.5379 4.48275 31.1831 4.48275 30.7449V29.0265C4.48275 28.5882 4.83756 28.2332 5.27558 28.2332H6.9942C7.43222 28.2332 7.78703 28.5882 7.78703 29.0265V30.7449Z" fill="#FF0808"/>
    <path d="M7.78703 36.5621C7.78703 37.0002 7.43201 37.3554 6.9942 37.3554H5.27558C4.83756 37.3554 4.48275 37.0002 4.48275 36.5621V34.8437C4.48275 34.4055 4.83756 34.0507 5.27558 34.0507H6.9942C7.43222 34.0507 7.78703 34.4055 7.78703 34.8437V36.5621Z" fill="#FF0808"/>
    <path d="M31.1769 19.0971C31.1769 19.5351 30.8221 19.8901 30.3839 19.8901H28.6653C28.2272 19.8901 27.8722 19.5351 27.8722 19.0971V17.3784C27.8722 16.9404 28.2272 16.5856 28.6653 16.5856H30.3839C30.8221 16.5856 31.1769 16.9404 31.1769 17.3784V19.0971Z" fill="#FF0808"/>
    <path d="M31.1769 24.9209C31.1769 25.3589 30.8221 25.7141 30.3839 25.7141H28.6653C28.2272 25.7141 27.8722 25.3589 27.8722 24.9209V23.2025C27.8722 22.7642 28.2272 22.4094 28.6653 22.4094H30.3839C30.8221 22.4094 31.1769 22.7642 31.1769 23.2025V24.9209Z" fill="#FF0808"/>
    <path d="M31.1769 30.7449C31.1769 31.1831 30.8221 31.5379 30.3839 31.5379H28.6653C28.2272 31.5379 27.8722 31.1831 27.8722 30.7449V29.0265C27.8722 28.5882 28.2272 28.2332 28.6653 28.2332H30.3839C30.8221 28.2332 31.1769 28.5882 31.1769 29.0265V30.7449Z" fill="#FF0808"/>
    <path d="M31.1769 36.5621C31.1769 37.0002 30.8221 37.3554 30.3839 37.3554H28.6653C28.2272 37.3554 27.8722 37.0002 27.8722 36.5621V34.8437C27.8722 34.4055 28.2272 34.0507 28.6653 34.0507H30.3839C30.8221 34.0507 31.1769 34.4055 31.1769 34.8437V36.5621Z" fill="#FF0808"/>
    <path d="M11.6984 32.7043C11.6984 33.2573 11.9934 33.7681 12.4722 34.0445C12.951 34.3209 13.541 34.3209 14.0198 34.0445L23.9836 28.2917C24.4626 28.0153 24.7574 27.5043 24.7574 26.9515C24.7574 26.3987 24.4626 25.8877 23.9836 25.6113L14.0198 19.8587C13.541 19.5823 12.951 19.5823 12.4722 19.8587C11.9934 20.1351 11.6984 20.6461 11.6984 21.1989V32.7043Z" fill="#FF0808"/>
  </svg>
);

const VFXIcon = () => (
  <svg width="28" height="22" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3.5 28C2.5375 28 1.70625 27.6646 1.00625 26.9937C0.335417 26.2938 0 25.4625 0 24.5V3.5C0 2.5375 0.335417 1.72083 1.00625 1.05C1.70625 0.35 2.5375 0 3.5 0H24.5C25.4625 0 26.2792 0.35 26.95 1.05C27.65 1.72083 28 2.5375 28 3.5V11.375L35 4.375V23.625L28 16.625V24.5C28 25.4625 27.65 26.2938 26.95 26.9937C26.2792 27.6646 25.4625 28 24.5 28H3.5ZM3.5 24.5H24.5V3.5H3.5V24.5Z" fill="#FF0808"/>
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
const HomeAboutSection = () => {
  const { t } = useContext(CommonContext);

  return (
    <AboutSection>
      <AboutGrid>
        {/* Left — image */}
        <AboutImageCol>
          <AboutImage
            src="/images/about-hero.png "
            alt={t("homePage.aboutTitle")}
          />
        </AboutImageCol>

        {/* Right — content */}
        <AboutContentCol>
          <SectionTopTitle>{t("homePage.aboutLabel")}</SectionTopTitle>

          <AboutTitle>{t("homePage.aboutTitle")}</AboutTitle>

          <AboutBody>
            {t("homePage.aboutBodyPre")}{" "}
            <strong>{t("homePage.aboutBodyBold")}</strong>{" "}
            {t("homePage.aboutBodyPost")}
          </AboutBody>

          <AboutCardsWrapper>
            {/* Card 1 — Post-Production */}
            <AboutCard>
              <AboutCardHeader>
                <AboutCardIcon>
                  <PostProductionIcon />
                </AboutCardIcon>
                <AboutCardTitle>{t("homePage.aboutCard1Title")}</AboutCardTitle>
              </AboutCardHeader>
              <AboutCardBody>
                <p>{t("homePage.aboutCard1Body1")}</p>
                <p>{t("homePage.aboutCard1Body2")}</p>
              </AboutCardBody>
            </AboutCard>

            {/* Card 2 — VFX */}
            <AboutCard>
              <AboutCardHeader>
                <AboutCardIcon>
                  <VFXIcon />
                </AboutCardIcon>
                <AboutCardTitle>{t("homePage.aboutCard2Title")}</AboutCardTitle>
              </AboutCardHeader>
              <AboutCardBody>
                <p>{t("homePage.aboutCard2Body1")}</p>
                <p>{t("homePage.aboutCard2Body2")}</p>
              </AboutCardBody>
            </AboutCard>
          </AboutCardsWrapper>
        </AboutContentCol>
      </AboutGrid>
    </AboutSection>
  );
};

export default HomeAboutSection;
