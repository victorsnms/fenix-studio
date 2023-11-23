import styled from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

export const ContactInfoSection = styled(FadeInAnimation)`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f7f8fa;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  padding: 20px;
`;
export const TextLabel = styled.span`
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;
export const TextContent = styled.span`
  text-align: center;
  margin-bottom: 5px;
`;
