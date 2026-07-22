import { useContext, useState, useCallback, useEffect, Fragment } from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import { CommonContext } from "../../providers/CommonContext";
import SectionTopTitle from "../SectionTopTitle";
import {
  OurTeamSectionWrapper,
  OurTeamInner,
  OurTeamContent,
  OurTeamTitle,
  OurTeamBody,
  OurTeamCTA,
  OurTeamCardsArea,
  OurTeamGrid,
  OurTeamCarouselWrap,
  OurTeamEmblaViewport,
  OurTeamEmblaContainer,
  OurTeamEmblaSlide,
  CarouselNavBtn,
  TeamCard,
  TeamCardImage,
  TeamCardInfo,
  TeamCardName,
  TeamCardRole,
  TeamCardBioBtn,
  ModalOverlay,
  ModalBox,
  ModalCloseBtn,
  ModalInner,
  ModalImageWrap,
  ModalImage,
  ModalContent,
  ModalMemberName,
  ModalMemberRole,
  ModalBody,
  ModalActions,
  ModalActionBtn,
} from "./OurTeamElements";

const ArrowLeft = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MemberCard = ({ member, bioLabel, onBioClick }) => (
  <TeamCard>
    <TeamCardImage
      src={member.imagePath}
      alt={member.author}
      loading="lazy"
    />
    <TeamCardInfo>
      <TeamCardName>{member.author}</TeamCardName>
      <TeamCardRole>{member.occupation}</TeamCardRole>
      <TeamCardBioBtn onClick={() => onBioClick(member)}>
        {bioLabel}
      </TeamCardBioBtn>
    </TeamCardInfo>
  </TeamCard>
);

const OurTeamSection = () => {
  const { t } = useContext(CommonContext);
  const [modalMember, setModalMember] = useState(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const members = t("testimonyList", { returnObjects: true });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateScrollState();
    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);
    return () => {
      emblaApi.off("select", updateScrollState);
      emblaApi.off("reInit", updateScrollState);
    };
  }, [emblaApi, updateScrollState]);

  // The carousel viewport lives in a sibling that's toggled via CSS
  // (display: none/block) rather than mounted/unmounted, so Embla can measure
  // it before layout has settled. Force a re-measure once mount has committed
  // and again on every resize so slide widths stay in sync with the CSS breakpoints.
  useEffect(() => {
    if (!emblaApi) return;
    const reInit = () => emblaApi.reInit();
    const raf = requestAnimationFrame(reInit);
    window.addEventListener("resize", reInit);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", reInit);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const bioLabel = t("aboutPage.verBio");

  return (
    <>
      <OurTeamSectionWrapper id="our-team">
        <OurTeamInner>
          {/* Left column */}
          <OurTeamContent>
            <SectionTopTitle>{t("aboutPage.teamSectionLabel")}</SectionTopTitle>
            <OurTeamTitle>{t("aboutPage.teamTitle")}</OurTeamTitle>
            <OurTeamBody>{t("aboutPage.teamBody")}</OurTeamBody>
            <OurTeamCTA href="/contact">{t("aboutPage.teamContactCta")}</OurTeamCTA>
          </OurTeamContent>

          {/* Right column */}
          <OurTeamCardsArea>
            {/* Desktop grid */}
            <OurTeamGrid>
              {members.map((member, i) => (
                <Fragment key={i}>
                  <MemberCard
                    member={member}
                    bioLabel={bioLabel}
                    onBioClick={setModalMember}
                  />
                  {i === 0 && <div key="spacer" />}
                </Fragment>
              ))}
            </OurTeamGrid>

            {/* Tablet + mobile carousel */}
            <OurTeamCarouselWrap>
              <OurTeamEmblaViewport ref={emblaRef}>
                <OurTeamEmblaContainer>
                  {members.map((member, i) => (
                    <OurTeamEmblaSlide key={i}>
                      <MemberCard
                        member={member}
                        bioLabel={bioLabel}
                        onBioClick={setModalMember}
                      />
                    </OurTeamEmblaSlide>
                  ))}
                </OurTeamEmblaContainer>
              </OurTeamEmblaViewport>

              <CarouselNavBtn
                onClick={scrollPrev}
                aria-label="Previous"
                $hidden={!canScrollPrev}
                $side="left"
                marginLeft="8px"
              >
                <ArrowLeft />
              </CarouselNavBtn>
              <CarouselNavBtn
                onClick={scrollNext}
                aria-label="Next"
                $hidden={!canScrollNext}
                $side="right"
              >
                <ArrowRight />
              </CarouselNavBtn>
            </OurTeamCarouselWrap>
          </OurTeamCardsArea>
        </OurTeamInner>
      </OurTeamSectionWrapper>

      {/* Modal */}
      {modalMember &&
        createPortal(
          <ModalOverlay onClick={() => setModalMember(null)}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
              <ModalCloseBtn onClick={() => setModalMember(null)} aria-label="Close">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </ModalCloseBtn>
              <ModalInner>
                <ModalImageWrap>
                  <ModalImage
                    src={modalMember.imagePath}
                    alt={modalMember.author}
                  />
                </ModalImageWrap>
                <ModalContent>
                  <ModalMemberName>{modalMember.author}</ModalMemberName>
                  <ModalMemberRole>{modalMember.occupation}</ModalMemberRole>
                  <ModalBody>
                    {modalMember.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </ModalBody>
                  {(modalMember.imdbUrl || modalMember.linkedinUrl) && (
                    <ModalActions>
                      {modalMember.imdbUrl && (
                        <ModalActionBtn
                          href={modalMember.imdbUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("aboutPage.bioImdb")}
                        </ModalActionBtn>
                      )}
                      {modalMember.linkedinUrl && (
                        <ModalActionBtn
                          href={modalMember.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("aboutPage.bioLinkedin")}
                        </ModalActionBtn>
                      )}
                    </ModalActions>
                  )}
                </ModalContent>
              </ModalInner>
            </ModalBox>
          </ModalOverlay>,
          document.body
        )}
    </>
  );
};

export default OurTeamSection;
