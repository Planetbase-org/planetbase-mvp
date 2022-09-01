import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="youtube-video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/t9ZZymyrXKQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
