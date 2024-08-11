import { useState } from "react";
import { LoadMoreCTA, Media, MediaGalleryContainer, PopupMedia, TextOnHover } from "./MediaGalleryElements";
import { useTranslation } from "react-i18next";

export const MediaGallery = ({ imageSection = "reelsMediaGallery" }) => {
  const [t] = useTranslation(["images"]);
  const images = t(`${imageSection}`, { returnObjects: true });
  const [file, setFile] = useState(null);
  const [visibleImages, setVisibleImages] = useState(9); // Number of images initially visible

  const handleLoadMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 9); // Load 9 more images
  };

  return (
    <>
      <MediaGalleryContainer className="media-container">
        {images.slice(0, visibleImages).map((file, index) => {
          return (
            <Media key={index} threshold={0.1} transitionDelay={visibleImages === 9 ? (1 + index) * 0.2 : (1 + index - visibleImages + 9) * 0.2} onClick={() => setFile(file)}>
              {file.type === "image" ? <img src={file.url} alt="" /> : <img src={file.thumbnail} alt="" />}
              <TextOnHover>
                <div className="bold">{file.title}</div>
                <div>{file.text}</div>
              </TextOnHover>
            </Media>
          );
        })}
      </MediaGalleryContainer>
      {visibleImages < images.length && (
        <LoadMoreCTA transitionDelay={0.5} onClick={handleLoadMore}>
          Load More
        </LoadMoreCTA>
      )}
      <PopupMedia className="popup-media" style={{ display: file ? "block" : "none" }} onClick={() => setFile(null)}>
        <span onClick={() => setFile(null)}>&times;</span>
        {file?.type === "video" ? <video src={file?.url} alt="" muted autoPlay controls /> : <img src={file?.url} alt="" />}
      </PopupMedia>
    </>
  );
};
