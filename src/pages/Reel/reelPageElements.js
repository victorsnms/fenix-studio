import styled from "styled-components";

export const ReelPageContainer = styled.div`
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

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding: 50px 25px;
`;
