import Image from "next/image";
import React from "react";

const VideoConfFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[111px] bg-[#1B1B1B] flex items-center justify-between px-4">
      {/* Left side buttons */}
      <div className="flex items-center">
        {/* Unmute Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-white text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image src="/micOFF.svg" alt="micOFF icon" width={36} height={37} />
          </div>
          Unmute
        </button>

        {/* Start Video Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-white text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image src="/camON.svg" alt="camON icon" width={39} height={23} />
          </div>
          Start Video
        </button>

        {/* Spacer between Start Video and Security */}
        <div className="w-[140px]"></div>

        {/* Security Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-white text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/security.svg"
              alt="Security icon"
              width={32}
              height={34}
            />
          </div>
          Security
        </button>

        {/* Participants Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-white text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/participants.svg"
              alt="Participants icon"
              width={95}
              height={30}
            />
          </div>
          Participants
        </button>

        {/* Chat Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-white text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image src="/chat.svg" alt="Chat icon" width={36} height={31} />
          </div>
          Chat
        </button>

        {/* Share Screen Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-green-500 text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/shareScreen.svg"
              alt="share screen icon"
              width={95}
              height={29}
            />
          </div>
          Share Screen
        </button>

        {/* Polling Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-white text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image src="/poling.svg" alt="poling icon" width={31} height={36} />
          </div>
          Polling
        </button>

        {/* Record Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-white text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image src="/record.svg" alt="Record icon" width={36} height={36} />
          </div>
          Record
        </button>

        {/* Breakout Rooms Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-white text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/breakoutRooms.svg"
              alt="Breakout Rooms icon"
              width={32}
              height={32}
            />
          </div>
          Breakout Rooms
        </button>

        {/* Reactions Button */}
        <button className="w-[150px] h-[92px] flex flex-col items-center justify-center text-white text-xs">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/reactions.svg"
              alt="Reactions icon"
              width={35}
              height={36}
            />
          </div>
          Reactions
        </button>
      </div>

      {/* Right side Leave button */}
      <button className="w-[100px] h-[50px] bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded flex items-center justify-center ml-4">
        Leave
      </button>
    </div>
  );
};

export default VideoConfFooter;