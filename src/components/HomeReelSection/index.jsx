import React, { useState, useEffect, useContext, useCallback } from "react";
import { createPortal } from "react-dom";
import { CommonContext } from "../../providers/CommonContext";
import SectionTopTitle from "../SectionTopTitle";
import { IconClose } from "../../icons";
import {
  ReelSection,
  ReelTitle,
  ReelThumbnailWrap,
  ReelThumbnailImg,
  ReelThumbnailOverlay,
  PlayBtn,
  ModalOverlay,
  ModalBox,
  ModalHeader,
  ModalTitle,
  ModalCloseBtn,
  ModalIframeWrap,
} from "./HomeReelElements";

const YOUTUBE_EMBED = "https://www.youtube.com/embed/YTh4OuZ1nfA";
const THUMBNAIL    = "/reel-thumbnail.jpg";

const ReelModal = ({ onClose, title }) => {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <ModalOverlay onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseBtn onClick={onClose} aria-label="Fechar">
            <IconClose size={20} aria-hidden="true" />
          </ModalCloseBtn>
        </ModalHeader>
        <ModalIframeWrap>
          <iframe
            src={`${YOUTUBE_EMBED}?autoplay=1&rel=0`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title={title}
          />
        </ModalIframeWrap>
      </ModalBox>
    </ModalOverlay>,
    document.body
  );
};

const HomeReelSection = () => {
  const { t } = useContext(CommonContext);
  const [isOpen, setIsOpen] = useState(false);

  const open  = useCallback(() => setIsOpen(true),  []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <ReelSection>
        <SectionTopTitle center>{t("homePage.reelLabel")}</SectionTopTitle>
        <ReelTitle>{t("homePage.reelTitle")}</ReelTitle>

        <ReelThumbnailWrap
          onClick={open}
          aria-label={`${t("homePage.reelModalTitle")} — assistir vídeo`}
        >
          <ReelThumbnailImg src={THUMBNAIL} alt={t("homePage.reelTitle")} />
          <ReelThumbnailOverlay />
          <PlayBtn>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </PlayBtn>
        </ReelThumbnailWrap>
      </ReelSection>

      {isOpen && <ReelModal onClose={close} title={t("homePage.reelModalTitle")} />}
    </>
  );
};

export default HomeReelSection;
