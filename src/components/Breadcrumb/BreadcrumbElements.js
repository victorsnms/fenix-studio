import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const BreadcrumbNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BreadcrumbLink = styled(LinkR)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--ds-font-brand);
  font-size: 13px;
  font-weight: var(--ds-font-weight-regular);
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

export const BreadcrumbCurrent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--ds-font-brand);
  font-size: 13px;
  font-weight: var(--ds-font-weight-regular);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const BreadcrumbSeparator = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1;
  user-select: none;
`;

export const BreadcrumbHomeIcon = styled.span`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
`;
