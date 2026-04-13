import { SectionTopTitleWrapper, SectionTopTitleText, SectionTopTitleLine } from "./SectionTopTitleElements";

/**
 * SectionTopTitle — reusable eyebrow label with a red-to-transparent gradient line.
 *
 * Layout:
 *   [TEXT]
 *   ──────   ← 12px gap, then a 1px gradient line the same width as the text
 *
 * Usage:
 *   <SectionTopTitle>Audiovisual e Tecnologia</SectionTopTitle>
 */
const SectionTopTitle = ({ children, className, center }) => (
  <SectionTopTitleWrapper className={className} center={center}>
    <SectionTopTitleText>{children}</SectionTopTitleText>
    <SectionTopTitleLine />
  </SectionTopTitleWrapper>
);

export default SectionTopTitle;
