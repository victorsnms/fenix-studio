import { useContext } from "react";
import { CommonContext } from "../../providers/CommonContext";
import {
  BannerSection,
  BannerInner,
  BannerImageWrap,
  BannerImage,
  BannerContent,
  BannerDecor,
  BannerTitle,
  BannerSubtitle,
  BannerCTA,
} from "./ServiceContactBannerElements";

const ServiceContactBanner = () => {
  const { t } = useContext(CommonContext);

  return (
    <BannerSection>
      <BannerInner>
        <BannerImageWrap>
          <BannerImage src="/images/contactbanner.png" alt={t("servicesPage.bannerTitle")} loading="lazy" />
        </BannerImageWrap>
        <BannerContent>
          <BannerTitle>{t("servicesPage.bannerTitle")}</BannerTitle>
          <BannerSubtitle>{t("servicesPage.bannerSubtitle")}</BannerSubtitle>
          <BannerCTA to="/contact">{t("servicesPage.bannerCta")}</BannerCTA>
          <BannerDecor />
        </BannerContent>
      </BannerInner>
    </BannerSection>
  );
};

export default ServiceContactBanner;
