import styled from "styled-components";

export const NeedHelpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const NeedHelpTop = styled.div`
  background-image: url("/images/needhelpbg.png");
  background-size: cover;
  background-position: center;
  padding: 32px 28px 36px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const NeedHelpTitle = styled.h3`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(18px, 2vw, 24px);
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0;
`;

export const NeedHelpSubtitle = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 12px;
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
`;

export const NeedHelpDivider = styled.hr`
  border: none;
  height: 1px;
  background: #878787;
  margin: 30px 0;
`;

export const NeedHelpInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const NeedHelpInfoIconWrap = styled.div`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border: 1px solid #E20613;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E20613;
`;

export const NeedHelpInfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const NeedHelpInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const NeedHelpInfoLabel = styled.span`
  font-family: var(--ds-font-brand);
  font-size: 10px;
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;

export const NeedHelpInfoValue = styled.span`
  font-family: var(--ds-font-brand);
  font-size: 13px;
  font-weight: var(--ds-font-weight-semibold);
  color: var(--color-white);
  line-height: 1.5;
`;

export const NeedHelpImageWrap = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 160px;
  }
`;

export const NeedHelpImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
