import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const ResourcesItem = () => {
  return (
    <div className="flex w-full flex-col gap-5 border-b border-border pb-5">
      <Text variant={"card_title_large"}>Resources</Text>
      <div className="flex items-center gap-2.5">
        <div className="min-h-2.5 min-w-2.5 bg-green-500"></div>
        <Text variant={"navbar"}>Journals</Text>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="min-h-2.5 min-w-2.5 bg-green-500"></div>
        <Text variant={"navbar"}>Journals</Text>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="min-h-2.5 min-w-2.5 bg-green-500"></div>
        <Text variant={"navbar"}>Journals</Text>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="min-h-2.5 min-w-2.5 bg-green-500"></div>
        <Text variant={"navbar"}>Journals</Text>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="min-h-2.5 min-w-2.5 bg-green-500"></div>
        <Text variant={"navbar"}>Journals</Text>
      </div>
    </div>
  );
};

export default ResourcesItem;
