import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const BoardText = ({ text }: { text: string }) => {
  return (
    <div className=" flex flex-col p-5 bg-green-50 border-l-2 border-green-500">
      <Text variant={"body"} className="text-neutral">
        {text}
      </Text>
    </div>
  );
};

export default BoardText;
