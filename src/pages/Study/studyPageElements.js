import styled from "styled-components";

export const StudyPageContainer = styled.div`
  width: 100%;
  background: var(--color-background);
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
