import styled from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

export const MediaGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  margin: 20px auto;
  padding: 0 50px;
  max-width: 1300px;
`;

export const Media = styled(FadeInAnimation)`
  height: 220px;
  width: 100%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  cursor: pointer;
  position: relative;

  video,
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.3s linear;
  }
`;

export const PopupMedia = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;

  video,
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    max-width: 95%;
    max-height: 95%;
    object-fit: contain;
    border: 3px solid #fff;
  }
  span {
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 50px;
    font-weight: bolder;
    z-index: 100;
    cursor: pointer;
    color: #fff;
    user-select: none;
  }
`;

export const TextOnHover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 15px;
  &:hover {
    opacity: 1;
  }

  .bold {
    font-weight: 600;
  }
`;

export const LoadMoreCTA = styled(FadeInAnimation)`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #ed1c24;
  white-space: nowrap;
  padding: 10px 20px;
  color: #f6f7f8;
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 0 auto;
  max-width: 120px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7f8fa;
    color: #151515;
  }
`;
