import styled from "styled-components";
export const VideoContainer = styled.div`
  width: 100%;
  height: 85vh;
  margin-bottom: 200px;
  position: relative;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.55);
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;
