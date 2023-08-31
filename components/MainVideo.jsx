import { useState, useEffect } from "react";

function MainVideo() {
  //increase the video size after 3 seconds
  const [isVideoActive, setIsVideoActive] = useState(false);

  useEffect(() => {
    // Start a timer after the component is mounted
    const timer = setTimeout(() => {
      setIsVideoActive(true);
    }, 3000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`c-main-video ${isVideoActive ? "c-main-video--active" : ""}`}
    >
      <div className="c-main-video__content">
        <iframe
          id="existing-iframe-example"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/z9j2o2w4BrY?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&rel=0&modestbranding=1"
          frameborder="0"
          controls="0"
        ></iframe>
      </div>
    </div>
  );
}

export default MainVideo;
