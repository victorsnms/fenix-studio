import styled from "styled-components";

export const ReelPageContainer = styled.div`
  width: 100%;
  background: #151515;
  background-size: 400% 400%;
  padding-bottom: 40px;

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

export const ReelPageTitle = styled.div`
  display: flex;
  justify-content: start;
  font-size: 28px;
  color: white;
  margin: 20px auto;
  padding: 0 50px;
  max-width: 1300px;
  margin-top: 80px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
