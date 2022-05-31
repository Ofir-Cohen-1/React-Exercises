import React, { useEffect, useRef, useState } from "react";
import cartoon from "../video/videoplayback.mp4";

function App() {
  const [playPause, setPlayPause] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (playPause) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playPause]);

  return (
    <div className="main">
      <video ref={videoRef}>
        <source src={cartoon} type="video/mp4" />
      </video>
      <div className="btns">
        <button onClick={() => setPlayPause((prev) => !prev)}>
          Play/Pause
        </button>
      </div>
    </div>
  );
}

export default App;
