import React from 'react'
import VideoConfFooter from './ui/VideoConfFooter'

export default function VideoConf() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex-1 flex items-center justify-center">
        {/* Здесь будет твое видео или сетка участников */}
        <p>Video Area</p>
      </div>
      <VideoConfFooter />
    </div>
  );
}
