import * as React from "react";
import TimelineItem from "./TimelineItem";
import { Text } from "@/src/components/ui/elements/Text";

const timelineData = [
  {
    year: "2016",
    content:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sed a enim mi erat nisl arcu. Integer blandit egestas aliquam amet eu dolor risus orci massa. Auctor in sollicitudin libero ullamcorper. Porttitor feugiat adipiscing leo auctor cras odio aliquam pellentesque pulvinar.",
  },
  {
    year: "2015",
    content:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sed a enim mi erat nisl arcu. Integer blandit egestas aliquam amet eu dolor risus orci massa. Auctor in sollicitudin libero ullamcorper. Porttitor feugiat adipiscing leo auctor cras odio aliquam pellentesque pulvinar.",
  },
  {
    year: "2014",
    content:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sed a enim mi erat nisl arcu. Integer blandit egestas aliquam amet eu dolor risus orci massa. Auctor in sollicitudin libero ullamcorper. Porttitor feugiat adipiscing leo auctor cras odio aliquam pellentesque pulvinar.",
  },
  {
    year: "2013",
    content:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sed a enim mi erat nisl arcu. Integer blandit egestas aliquam amet eu dolor risus orci massa. Auctor in sollicitudin libero ullamcorper. Porttitor feugiat adipiscing leo auctor cras odio aliquam pellentesque pulvinar.",
  },
];

const Timeline = () => {
  return (
    <div className="">
      {timelineData.map((item, index) => (
        <TimelineItem
          isFirstItem={index == 0}
          isLastItem={index == timelineData.length - 1}
          key={item.year}
          year={item.year}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Timeline;
