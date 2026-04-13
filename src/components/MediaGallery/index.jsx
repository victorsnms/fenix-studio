import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { CommonContext } from "../../providers/CommonContext";
import SectionTopTitle from "../SectionTopTitle";
import {
  GalleryHeader,
  GalleryTitle,
  FilterBar,
  FilterDivider,
  FilterBtn,
  MediaGalleryContainer,
  Media,
  TextOnHover,
  VideoGradientOverlay,
  VideoPlayBtn,
  VideoCardTitle,
  PopupMedia,
  LoadMoreCTA,
} from "./MediaGalleryElements";

const FILTERS = [
  { key: "all",        labelKey: "reelPage.filterAll" },
  { key: "breakdowns", labelKey: "reelPage.filterBreakdowns" },
  { key: "films",      labelKey: "reelPage.filterFilms" },
  { key: "series",     labelKey: "reelPage.filterSeries" },
];

export const MediaGallery = ({ imageSection = "reelsMediaGallery" }) => {
  const [t] = useTranslation(["images"]);
  const { t: tc } = useContext(CommonContext);
  const allImages = t(`${imageSection}`, { returnObjects: true });

  const [activeFilter, setActiveFilter] = useState("all");
  const [file, setFile] = useState(null);
  const [visibleImages, setVisibleImages] = useState(9);

  const images = activeFilter === "all"
    ? allImages
    : allImages.filter((item) => item.category === activeFilter);

  const handleLoadMore = () => setVisibleImages((prev) => prev + 9);

  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setVisibleImages(9);
  };

  return (
    <>
      <GalleryHeader>
        <SectionTopTitle center>{tc("reelPage.sectionLabel")}</SectionTopTitle>
        <GalleryTitle>{tc("reelPage.sectionTitle")}</GalleryTitle>
        <FilterBar>
          <FilterDivider $side="left" />
          {FILTERS.map(({ key, labelKey }) => (
            <FilterBtn
              key={key}
              $active={activeFilter === key}
              onClick={() => handleFilterChange(key)}
            >
              {tc(labelKey)}
            </FilterBtn>
          ))}
          <FilterDivider $side="right" />
        </FilterBar>
      </GalleryHeader>

      <MediaGalleryContainer className="media-container">
        {images.slice(0, visibleImages).map((item, index) => (
          <Media
            key={`${activeFilter}-${index}`}
            threshold={0.1}
            transitionDelay={visibleImages === 9 ? (1 + index) * 0.2 : (1 + index - visibleImages + 9) * 0.2}
            onClick={() => setFile(item)}
          >
            {item.type === "image"
              ? <img src={item.url} alt="" />
              : <img src={item.thumbnail} alt="" />
            }

            {item.type === "video" ? (
              <>
                <VideoGradientOverlay />
                <VideoPlayBtn>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </VideoPlayBtn>
                <VideoCardTitle>{item.title} {file?.type}</VideoCardTitle>
              </>
            ) : (
              <TextOnHover>
                <div className="bold">{item.title}</div>
                <div>{item.text}</div>
              </TextOnHover>
            )}
          </Media>
        ))}
      </MediaGalleryContainer>

      {visibleImages < images.length && (
        <LoadMoreCTA transitionDelay={0.5} onClick={handleLoadMore}>
          Load More
        </LoadMoreCTA>
      )}

      <PopupMedia
        className="popup-media"
        style={{ display: file ? "block" : "none" }}
        onClick={() => setFile(null)}
      >
        <span onClick={() => setFile(null)}>&times;</span>
        {file?.type === "video"
          ? <video src={file?.url?.startsWith("/") || file?.url?.startsWith("http") ? file?.url : `/${file?.url}`} muted autoPlay controls />
          : <img src={file?.url} alt="" />
        }
      </PopupMedia>
    </>
  );
};
