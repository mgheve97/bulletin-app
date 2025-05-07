"use client";
import React from "react";

interface BoardItemProps {
  title: string;
  datepost: string;
  content: string;
}

const BoardItem: React.FC<BoardItemProps> = ({ title, datepost, content }) => (
  <div className="p-10 rounded-md border-2 mb-10">
    <p className="font-bold text-3xl mt-1">{title}</p>
    <p className="font-bold text-gray-500 text-md mt-2">{datepost}</p>
    <p className="font-medium text-lg mt-4 break-words">{content}</p>
  </div>
);

export default BoardItem;
