import { Text } from "@/src/components/ui/elements/Text";
import * as React from "react";

function TextSection() {
  return (
    <Text
      variant={"section_title"}
      className="flex-1 flex items-center justify-center shrink py-12 pr-8 pl-14 text-2xl font-semibold text-white bg-neutralDark min-w-[240px] max-md:px-5 max-md:max-w-full"
    >
      Find coaches, mentors, training, courses & more
    </Text>
  );
}

export default TextSection;
