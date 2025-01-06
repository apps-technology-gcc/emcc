import React from "react";
import { Text } from "./Text";

const DashBoardNav = () => {
  return (
    <div className="flex flex-col p-5  w-[300px] gap-[30px]">
      <Text
        variant="navbar"
        className="border border-transparent border-b-border hover:border-border-600 p-5 cursor-pointer hover:text-white hover:bg-neutral"
      >
        FAQ'S
      </Text>
      <Text
        variant="navbar"
        className="border border-transparent border-b-border hover:border-border p-5 cursor-pointer hover:text-white hover:bg-neutral"
      >
        FAQ'S
      </Text>
    </div>
  );
};

export default DashBoardNav;
