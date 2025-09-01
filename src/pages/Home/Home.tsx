import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Link href="/VideoConf/VideoConf">
        <div className="w-40 h-52 px-2 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
          <span className="text-left px-4 font-bold">
            Создать видео-встречу
          </span>
        </div>
      </Link>
    </div>
  );
}
