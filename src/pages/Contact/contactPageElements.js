import styled from "styled-components";

export const ContactPageContainer = styled.div`
  width: 100%;
  background: #151515;
  background-size: 400% 400%;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const ContactInfoWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;
