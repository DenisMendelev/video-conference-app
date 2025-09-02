import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Link href="/NewVideoMeet/NewVideoMeet">
        <div className="w-90 h-[600px] bg-blue-500 rounded-xl flex items-center flex-col justify-between hover:bg-blue-400 transition-colors cursor-pointer">
          <Image
            className="p-8 mr-auto"
            src="/vercel.svg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <span className="text-left p-8 text-6xl font-bold">
            Создать видео-встречу
          </span>
        </div>
      </Link>
      <div className="mx-8 w-[600px] h-[600px]">
        <span className="text-gray-300 text-5xl font-bold text-center">
          Войдите, чтобы управлять своими встречами и видеть их историю
        </span>
        <Image
          className="mx-auto p-2 mr-auto"
          src="/globe.svg"
          width={425}
          height={425}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
