import { useTranslation } from "react-i18next";
import { ServicesGifContainer, ServicesGifImage } from "./ServicesGifElements";

export const ServicesGif = ({ imageSection = "servicesGif" }) => {
  const [t] = useTranslation(["images"]);
  const images = t(`${imageSection}`, { returnObjects: true });

  return (
    <ServicesGifContainer>
      {images.map((image, index) => (
        <ServicesGifImage key={index} src={image.path} alt={image.alt} />
      ))}
    </ServicesGifContainer>
  );
};
