import { useContext } from "react";
import { CommonContext } from "../../providers/CommonContext";
import {
  NeedHelpWrapper,
  NeedHelpTop,
  NeedHelpTitle,
  NeedHelpSubtitle,
  NeedHelpDivider,
  NeedHelpInfoList,
  NeedHelpInfoItem,
  NeedHelpInfoIconWrap,
  NeedHelpInfoText,
  NeedHelpInfoLabel,
  NeedHelpInfoValue,
  NeedHelpImageWrap,
  NeedHelpImage,
} from "./NeedHelpCardElements";

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" fill="currentColor"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor"/>
  </svg>
);

const NeedHelpCard = () => {
  const { t } = useContext(CommonContext);

  return (
    <NeedHelpWrapper>
      <NeedHelpTop>
        <NeedHelpTitle>{t("contactPage.needHelpTitle")}</NeedHelpTitle>
        <NeedHelpSubtitle>{t("contactPage.needHelpSubtitle")}</NeedHelpSubtitle>
        <NeedHelpDivider />
        <NeedHelpInfoList>
          <NeedHelpInfoItem>
            <NeedHelpInfoIconWrap><PhoneIcon /></NeedHelpInfoIconWrap>
            <NeedHelpInfoText>
              <NeedHelpInfoLabel>{t("contactForm.phone")}</NeedHelpInfoLabel>
              <NeedHelpInfoValue>{t("contactPage.phone")}</NeedHelpInfoValue>
            </NeedHelpInfoText>
          </NeedHelpInfoItem>
          <NeedHelpInfoItem>
            <NeedHelpInfoIconWrap><EmailIcon /></NeedHelpInfoIconWrap>
            <NeedHelpInfoText>
              <NeedHelpInfoLabel>{t("contactForm.email")}</NeedHelpInfoLabel>
              <NeedHelpInfoValue>{t("contactPage.contactEmail")}</NeedHelpInfoValue>
            </NeedHelpInfoText>
          </NeedHelpInfoItem>
          <NeedHelpInfoItem>
            <NeedHelpInfoIconWrap><LocationIcon /></NeedHelpInfoIconWrap>
            <NeedHelpInfoText>
              <NeedHelpInfoLabel>{t("contactPage.locationLabel")}</NeedHelpInfoLabel>
              <NeedHelpInfoValue>{t("contactPage.location")}</NeedHelpInfoValue>
            </NeedHelpInfoText>
          </NeedHelpInfoItem>
        </NeedHelpInfoList>
      </NeedHelpTop>
      <NeedHelpImageWrap>
        <NeedHelpImage src="/images/contact-needhelp.png" alt="Need help" loading="lazy" />
      </NeedHelpImageWrap>
    </NeedHelpWrapper>
  );
};

export default NeedHelpCard;
