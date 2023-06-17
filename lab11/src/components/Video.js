import { useRef, useState } from 'react';

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    const nextState = !playing;
    setPlaying(nextState);

    const video = videoRef.current;
    if (nextState) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <>
      <h2>Video Player</h2>
      <button onClick={handleClick}>{playing ? '일시정지' : '플레이'}</button>
      <div>
        <video ref={videoRef} width="400">
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Video;
