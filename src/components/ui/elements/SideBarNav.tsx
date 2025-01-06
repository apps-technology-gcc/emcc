import React from "react";
import { Text } from "./Text";

const SideBarNav = () => {
  return (
    <div className="flex flex-col p-5  w-[300px] gap-10">
      <Text
        variant="navbar"
        className="border-b cursor-pointer hover:text-primary-600 pb-5"
      >
        FAQ'S
      </Text>
      <Text
        variant="navbar"
        className=" border-b cursor-pointer hover:text-primary-600 pb-5"
      >
        FAQ'S
      </Text>
    </div>
  );
};

export default SideBarNav;
