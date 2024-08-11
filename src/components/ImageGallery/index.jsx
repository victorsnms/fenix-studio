import { useTranslation } from "react-i18next";
import { GalleryContainer, GalleryImage, GallerySlide, GalleryWrapper, TextOnHover } from "./ImageGalleryElements";

const ImageGallery = ({ imageSection = "ServicesGalleryImages" }) => {
  const [t] = useTranslation(["images"]);
  const images = t(`${imageSection}`, { returnObjects: true });
  return (
    <GalleryWrapper noBackground>
      <GalleryContainer>
        {images.map((image, index) => (
          <GallerySlide key={index}>
            <GalleryImage src={image.path} alt={image.alt} />
            <TextOnHover className="text-on-hover">
              <div className="bold">{image.title}</div>
              <div>{image.text}</div>
            </TextOnHover>
          </GallerySlide>
        ))}
      </GalleryContainer>
    </GalleryWrapper>
  );
};

export default ImageGallery;
