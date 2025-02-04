import { Text } from "@/src/components/ui/elements/Text";
import * as React from "react";

function TextSection() {
  return (
    <Text
      variant={"section_title"}
      className="flex-1 flex items-center justify-center shrink w-1/2 pt-20 pb-5 px-5 md:py-12 md:pr-8 md:pl-14 text-2xl font-semibold text-white bg-neutralDark min-w-[240px] "
    >
      Find coaches, mentors, training, courses & more
    </Text>
  );
}

export default TextSection;
