"use client";

import React from "react";
import { Mic, MicOff, Video, VideoOff, X } from "lucide-react";

interface Participant {
  id: number;
  name: string;
  videoOn: boolean;
  audioOn: boolean;
  isScreenSharing: boolean;
}

interface VideoConfSidebarProps {
  participants: Participant[];
  onClose: () => void;
}

const VideoConfSidebar: React.FC<VideoConfSidebarProps> = ({
  participants,
  onClose,
}) => {
  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-[#1B1B1B] border-l border-[#2A2A2A] z-50 flex flex-col">
      {/* Заголовок */}
      <div className="flex justify-between items-center p-4 border-b border-[#2A2A2A]">
        <h2 className="text-lg font-semibold">
          Participants ({participants.length})
        </h2>
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-[#2A2A2A] transition-colors text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
      </div>

      {/* Список участников */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {participants.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between p-3 rounded-lg bg-[#0D0D0D] hover:bg-[#2A2A2A] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center text-sm font-medium">
                  {p.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{p.name}</span>
                  {p.id === 1 && (
                    <span className="text-xs text-gray-500">You</span>
                  )}
                  {p.isScreenSharing && (
                    <span className="text-xs text-green-500">Presenting</span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {p.audioOn ? (
                  <div className="text-gray-400">
                    <Mic size={16} />
                  </div>
                ) : (
                  <div className="text-red-500">
                    <MicOff size={16} />
                  </div>
                )}
                {p.videoOn ? (
                  <div className="text-gray-400">
                    <Video size={16} />
                  </div>
                ) : (
                  <div className="text-red-500">
                    <VideoOff size={16} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Нижняя панель действий */}
      <div className="p-4 border-t border-[#2A2A2A]">
        <button className="w-full py-2 px-4 bg-[#0D0D0D] hover:bg-[#2A2A2A] rounded-lg text-sm text-gray-400 hover:text-white transition-colors">
          Invite More People
        </button>
      </div>
    </div>
  );
};

export default VideoConfSidebar;
