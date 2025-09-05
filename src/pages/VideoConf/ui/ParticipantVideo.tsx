"use client";

import React, { useState } from "react";
import { MicOff, Monitor, MoreVertical } from "lucide-react";

interface Participant {
  id: number;
  name: string;
  videoOn: boolean;
  audioOn: boolean;
  isScreenSharing: boolean;
}

interface ParticipantVideoProps {
  participant: Participant;
  isMain?: boolean;
  isSelf?: boolean;
}

const ParticipantVideo: React.FC<ParticipantVideoProps> = ({
  participant,
  isMain = false,
  isSelf = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-[#1B1B1B] rounded-lg overflow-hidden border border-[#2A2A2A] ${
        isMain ? "w-full h-full" : "w-full h-full"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Видео область */}
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1B1B1B] to-[#0D0D0D]">
        {participant.videoOn ? (
          <div
            className={`font-bold text-[#3A3A3A] ${isMain ? "text-6xl" : "text-4xl"}`}
          >
            {participant.name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div
              className={`rounded-full bg-[#2A2A2A] flex items-center justify-center font-semibold text-gray-400 ${
                isMain ? "w-24 h-24 text-3xl" : "w-16 h-16 text-2xl"
              }`}
            >
              {participant.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-gray-500 text-sm">Camera off</span>
          </div>
        )}
      </div>

      {/* Имя участника */}
      <div className="absolute bottom-2 left-2 flex items-center gap-2">
        <span className="bg-black/70 px-2 py-1 rounded text-sm text-white">
          {participant.name} {isSelf && "(You)"}
        </span>
        {!participant.audioOn && (
          <div className="bg-red-600 p-1 rounded">
            <MicOff size={14} />
          </div>
        )}
      </div>

      {/* Индикатор демонстрации экрана */}
      {participant.isScreenSharing && (
        <div className="absolute top-2 right-2 bg-green-500 px-2 py-1 rounded text-xs flex items-center gap-1">
          <Monitor size={12} />
          Presenting
        </div>
      )}

      {/* Действия при наведении */}
      {isHovered && !isSelf && (
        <div className="absolute top-2 right-2 flex gap-1">
          <button className="p-1.5 bg-black/70 rounded hover:bg-black/90 transition-colors">
            <MoreVertical size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ParticipantVideo;
