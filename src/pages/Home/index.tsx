import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <Link href="/VideoConf">
      <div className="mx-auto w-40 h-52 bg-green-300">
        Создать видео-встречу
      </div>
    </Link>
  );
};

export default Home;
