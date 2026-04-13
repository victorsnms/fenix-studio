import {
  BreadcrumbNav,
  BreadcrumbLink,
  BreadcrumbCurrent,
  BreadcrumbSeparator,
  BreadcrumbHomeIcon,
} from "./BreadcrumbElements";

const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

/**
 * items: Array<{ label: string, to?: string }>
 * First item is always "Home" — the home icon is prepended automatically.
 */
const Breadcrumb = ({ items = [] }) => (
  <BreadcrumbNav aria-label="breadcrumb">
    {items.map((item, index) => (
      <span key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {index > 0 && <BreadcrumbSeparator aria-hidden="true">›</BreadcrumbSeparator>}
        {item.to ? (
          <BreadcrumbLink to={item.to}>
            {index === 0 && <BreadcrumbHomeIcon><HomeIcon /></BreadcrumbHomeIcon>}
            {item.label}
          </BreadcrumbLink>
        ) : (
          <BreadcrumbCurrent aria-current="page">
            {index === 0 && <BreadcrumbHomeIcon><HomeIcon /></BreadcrumbHomeIcon>}
            {item.label}
          </BreadcrumbCurrent>
        )}
      </span>
    ))}
  </BreadcrumbNav>
);

export default Breadcrumb;
