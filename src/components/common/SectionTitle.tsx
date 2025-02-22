import React from "react";
import { Text } from "../ui/elements/Text";
import { cn } from "@/src/lib/utils";

const SectionTitle = ({
  title,
  caps,
  dark,
}: {
  title: string;
  caps?: boolean;
  dark?: boolean;
}) => {
  return (
    <div className="flex flex-col max-w-full text-2xl font-semibold uppercase ">
      <Text
        variant={"section_title"}
        className={cn(
          "uppercase text-neutralDark flex max-w-fit border-spacing-10 border-b-2 border-green-300 ",
          dark ? "border-neutralDark" : " border-green-300",
          caps ? "text-uppercase" : "text-capitalize"
        )}
      >
        {title}
      </Text>
      {/* <div className="flex mt-2.5 w-full bg-green-300 min-h-[2px]" /> */}
    </div>
  );
};

export default SectionTitle;
