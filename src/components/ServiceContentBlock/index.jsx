import SectionTopTitle from "../SectionTopTitle";
import {
  BlockSection,
  BlockInner,
  BlockImageWrap,
  BlockImage,
  BlockContent,
  BlockTitle,
  BlockBody,
  BlockCTA,
} from "./ServiceContentBlockElements";

const ServiceContentBlock = ({ imageLeft = true, image, topLabel, title, paragraphs, ctaLabel, ctaUrl }) => (
  <BlockSection>
    <BlockInner $imageLeft={imageLeft}>
      <BlockImageWrap>
        <BlockImage src={image} alt={title} loading="lazy" />
      </BlockImageWrap>
      <BlockContent>
        <SectionTopTitle>{topLabel}</SectionTopTitle>
        <BlockTitle>{title}</BlockTitle>
        <BlockBody>
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </BlockBody>
        <BlockCTA href={ctaUrl}>{ctaLabel}</BlockCTA>
      </BlockContent>
    </BlockInner>
  </BlockSection>
);

export default ServiceContentBlock;
