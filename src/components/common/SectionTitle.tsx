import React from "react";
import { Text } from "../ui/elements/Text";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col max-w-full text-2xl font-semibold uppercase ">
      <Text
        variant={"section_title"}
        className="uppercase text-neutralDark flex max-w-fit border-spacing-10 border-b-2 border-green-300 "
      >
        {title}
      </Text>
      {/* <div className="flex mt-2.5 w-full bg-green-300 min-h-[2px]" /> */}
    </div>
  );
};

export default SectionTitle;
