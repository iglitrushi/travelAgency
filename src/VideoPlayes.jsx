
import video from './planeVideo.mp4'
import PropTypes from 'prop-types';

const VideoPlayes = ({playState}) => {
  return (
    <div className={`video-player ${playState? '': 'hide'}`}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}
VideoPlayes.propTypes = {
  playState: PropTypes.bool.isRequired,
};

export default VideoPlayes
