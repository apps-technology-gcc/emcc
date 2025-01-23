import { Text } from "@/src/components/ui/elements/Text";
import { cn } from "@/src/lib/utils";
import * as React from "react";

type TimelineItemProps = {
  year: string;
  content: string;
  isFirstItem: boolean;
  isLastItem: boolean;
};

const TimelineItem = ({
  year,
  content,
  isFirstItem,
  isLastItem,
}: TimelineItemProps) => {
  return (
    <div className="flex gap-5 flex-nowrap">
      <div className="w-50 flex items-center">
        <Text variant={"card_title_small"} className="text-neutralDark">
          2016
        </Text>
      </div>
      <div className="relative">
        <div className="absolute bg-white top-1/2 left-1/2 z-10 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 border border-border rounded-full">
          <div className="relative w-full h-full">
            <div className="absolute rounded-full top-1/2 left-1/2 z-10 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-border "></div>
          </div>
        </div>
        <div className="w-[2px] -z-10 h-full bg-border "></div>
      </div>
      <div
        style={{ boxShadow: "2px 2px 6px 0px #0000001A" }}
        className={cn(
          "flex-auto p-8 bg-white",
          isFirstItem ? "mb-5" : isLastItem ? "mt-5" : "my-5"
        )}
      >
        <Text variant={"body"} className="text-neutralDark">
          Lorem ipsum dolor sit amet consectetur. Imperdiet sed a enim mi erat
          nisl arcu. Integer blandit egestas aliquam amet eu dolor risus orci
          massa. Auctor in sollicitudin libero ullamcorper. Porttitor feugiat
          adipiscing leo auctor cras odio aliquam pellentesque pulvinar.
        </Text>
      </div>
    </div>
  );
};
export default TimelineItem;
