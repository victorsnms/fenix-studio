import Breadcrumb from "../Breadcrumb";
import { TitleSection, TitleInner, TitleHeading } from "./PageTitleElements";

const PageTitle = ({
  title = "",
  bgImage = "/images/pagetitlebg.png",
  breadcrumbs = [],
}) => (
  <TitleSection bgImage={bgImage}>
    <TitleInner>
      <TitleHeading>{title}</TitleHeading>
      {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
    </TitleInner>
  </TitleSection>
);

export default PageTitle;
