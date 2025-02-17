import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const DetailsItem = ({
  label,
  values,
}: {
  label: string;
  values: string[];
}) => {
  return (
    <div className="flex flex-col gap-[14px]">
      <Text variant={"card_title_small"} className="text-[#222222]">
        {label}
      </Text>
      <div className="flex flex-col">
        {values.map((value, index) => (
          <Text key={index} className="text-[#222222]" variant={"body"}>
            {value}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default DetailsItem;
