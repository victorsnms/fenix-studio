import videoBg from "/videos/main_video.mp4";
import { VideoContainer } from "./VideoBackgroundElements";

export const VideoBackground = () => {
  return (
    <VideoContainer>
      <div className="overlay" />
      <video src={videoBg} autoPlay loop muted />
    </VideoContainer>
  );
};
