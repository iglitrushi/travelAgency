
import './VideoPlayers.css';
import videoFile from './assets/planevd.mp4';

const VideoPlayes = () => {
  return (
    <div className="video-player">
      <video 
        width="100%" 
        height="300" 
        controls 
        autoPlay 
        muted 
        loop
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayes;
