"use client";

import React from "react";
import { Users, MessageSquare, Settings } from "lucide-react";

interface VideoConfHeaderProps {
  participantCount: number;
  layoutMode: "grid" | "speaker" | "sidebar";
  onLayoutChange: (mode: "grid" | "speaker" | "sidebar") => void;
  onToggleSidebar: () => void;
}

const VideoConfHeader: React.FC<VideoConfHeaderProps> = ({
  participantCount,
  layoutMode,
  onLayoutChange,
  onToggleSidebar,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#1B1B1B] border-b border-[#2A2A2A]">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Team Meeting</h1>
        <span className="text-sm text-gray-500">
          {participantCount} participants
        </span>
      </div>

      {/* Кнопки управления раскладкой */}
      <div className="flex items-center gap-2">
        {/* Режимы отображения */}
        <div className="flex bg-[#0D0D0D] rounded-lg p-1">
          <button
            onClick={() => onLayoutChange("grid")}
            className={`px-4 py-1.5 rounded-md text-sm transition-all ${
              layoutMode === "grid"
                ? "bg-[#2A2A2A] text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => onLayoutChange("speaker")}
            className={`px-4 py-1.5 rounded-md text-sm transition-all ${
              layoutMode === "speaker"
                ? "bg-[#2A2A2A] text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Speaker
          </button>
          <button
            onClick={() => onLayoutChange("sidebar")}
            className={`px-4 py-1.5 rounded-md text-sm transition-all ${
              layoutMode === "sidebar"
                ? "bg-[#2A2A2A] text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Sidebar
          </button>
        </div>

        <div className="w-px h-6 bg-[#2A2A2A] mx-2" />

        {/* Дополнительные кнопки */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg bg-[#0D0D0D] hover:bg-[#2A2A2A] transition-colors text-gray-400 hover:text-white"
        >
          <Users size={18} />
        </button>
        <button className="p-2 rounded-lg bg-[#0D0D0D] hover:bg-[#2A2A2A] transition-colors text-gray-400 hover:text-white">
          <MessageSquare size={18} />
        </button>
        <button className="p-2 rounded-lg bg-[#0D0D0D] hover:bg-[#2A2A2A] transition-colors text-gray-400 hover:text-white">
          <Settings size={18} />
        </button>
      </div>
    </div>
  );
};

export default VideoConfHeader;
