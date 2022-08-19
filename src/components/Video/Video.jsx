import React from 'react';
import VideoPlayer from "react-video-js-player"

function VideoSection() {
    var videoSrc = Event;
    const poster = "https://res.cloudinary.com/dputu7z0u/image/upload/v1660934879/evangeline-shaw-nwLTVwb7DbU-unsplash_1_1_ycva7h.jpg"
  return (
      <div>
          <VideoPlayer
              src={videoSrc}
              poster={poster}
          />
    </div>
  )
}

export default VideoSection