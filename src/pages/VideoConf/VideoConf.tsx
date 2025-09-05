"use client";

import React, { useState } from "react";
import VideoConfFooter from "./ui/VideoConfFooter";
import VideoConfHeader from "./ui/VideoConfHeader";
import VideoConfSidebar from "./ui/VideoConfSidebar";
import ParticipantVideo from "./ui/ParticipantVideo";

interface Participant {
  id: number;
  name: string;
  videoOn: boolean;
  audioOn: boolean;
  isScreenSharing: boolean;
}

export default function VideoConf() {
  const [layoutMode, setLayoutMode] = useState<"grid" | "speaker" | "sidebar">(
    "grid"
  );
  const [showSidebar, setShowSidebar] = useState(false);

  // Список участников конференции
  const [participants] = useState<Participant[]>([
    {
      id: 1,
      name: "You",
      videoOn: true,
      audioOn: true,
      isScreenSharing: false,
    },
    {
      id: 2,
      name: "Alex Johnson",
      videoOn: true,
      audioOn: true,
      isScreenSharing: false,
    },
    {
      id: 3,
      name: "Maria Garcia",
      videoOn: false,
      audioOn: true,
      isScreenSharing: false,
    },
    {
      id: 4,
      name: "David Kim",
      videoOn: true,
      audioOn: false,
      isScreenSharing: false,
    },
    {
      id: 5,
      name: "Sarah Wilson",
      videoOn: true,
      audioOn: true,
      isScreenSharing: true,
    },
    {
      id: 6,
      name: "James Brown",
      videoOn: false,
      audioOn: false,
      isScreenSharing: false,
    },
  ]);

  // Определение класса сетки в зависимости от количества участников
  const getGridClass = () => {
    const count = participants.length;
    if (count <= 1) return "grid-cols-1";
    if (count <= 2) return "grid-cols-2";
    if (count <= 4) return "grid-cols-2 grid-rows-2";
    if (count <= 6) return "grid-cols-3 grid-rows-2";
    if (count <= 9) return "grid-cols-3 grid-rows-3";
    if (count <= 12) return "grid-cols-4 grid-rows-3";
    return "grid-cols-4 grid-rows-4";
  };

  // Рендер в зависимости от режима отображения
  const renderLayout = () => {
    if (layoutMode === "speaker") {
      // В режиме спикера показываем того, кто демонстрирует экран, или второго участника
      const speaker =
        participants.find((p) => p.isScreenSharing) ||
        participants[1] ||
        participants[0];
      const others = participants.filter((p) => p.id !== speaker.id);

      return (
        <div className="flex flex-col h-full p-4 gap-4">
          {/* Основной спикер */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-full max-w-6xl">
              <ParticipantVideo
                participant={speaker}
                isMain={true}
                isSelf={speaker.id === 1}
              />
            </div>
          </div>

          {/* Остальные участники внизу */}
          {others.length > 0 && (
            <div className="h-32 flex gap-2 justify-center overflow-x-auto pb-2">
              {others.map((participant) => (
                <div
                  key={participant.id}
                  className="h-full aspect-video flex-shrink-0 max-w-[200px]"
                >
                  <ParticipantVideo
                    participant={participant}
                    isSelf={participant.id === 1}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (layoutMode === "sidebar") {
      const mainParticipant =
        participants.find((p) => p.isScreenSharing) || participants[0];

      return (
        <div className="flex h-full p-4 gap-4">
          {/* Основная область */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-full max-w-4xl">
              <ParticipantVideo
                participant={mainParticipant}
                isMain={true}
                isSelf={mainParticipant.id === 1}
              />
            </div>
          </div>

          {/* Боковая панель с участниками */}
          <div className="w-80 flex flex-col gap-2 overflow-y-auto">
            {participants.map((participant) => (
              <div key={participant.id} className="aspect-video">
                <ParticipantVideo
                  participant={participant}
                  isSelf={participant.id === 1}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Режим сетки (по умолчанию)
    return (
      <div className="h-full p-4">
        <div className={`grid ${getGridClass()} gap-2 h-full auto-rows-fr`}>
          {participants.map((participant) => (
            <ParticipantVideo
              key={participant.id}
              participant={participant}
              isSelf={participant.id === 1}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-[#0D0D0D] text-white">
      {/* Верхняя панель */}
      <VideoConfHeader
        participantCount={participants.length}
        layoutMode={layoutMode}
        onLayoutChange={setLayoutMode}
        onToggleSidebar={() => setShowSidebar(!showSidebar)}
      />

      {/* Область с видео - учитываем высоту футера */}
      <div className="flex-1 overflow-hidden mb-[111px]">{renderLayout()}</div>

      {/* Футер остается как есть */}
      <VideoConfFooter />

      {/* Боковая панель участников (опционально) */}
      {showSidebar && (
        <VideoConfSidebar
          participants={participants}
          onClose={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
}
