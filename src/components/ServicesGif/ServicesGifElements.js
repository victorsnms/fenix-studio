import styled from "styled-components";

export const ServicesGifContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ServicesGifImage = styled.img`
  max-width: 80%;
`;
