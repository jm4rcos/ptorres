"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const getHello = async () => {
    const response = await fetch("/api/say-hello");
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    getHello();
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-4 bg-amber-200 rounded-lg p-4 min-w-[300px]">
      <Link href="/dashboard/feed">
        <div className="w-full cursor-pointer font-bold flex items-center justify-center text-black h-10 bg-gray-300 rounded-lg">
          Feed
        </div>
      </Link>

      <div className="w-full h-10 bg-gray-300 rounded-lg" />
      <div className="w-full h-10 bg-gray-300 rounded-lg" />
      <div className="w-full h-10 bg-gray-300 rounded-lg" />
    </div>
  );
};

Sidebar.Skeleton = () => {
  return <div></div>;
};
