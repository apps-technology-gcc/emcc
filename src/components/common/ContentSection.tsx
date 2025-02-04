import React from "react";
import { Text } from "../ui/elements/Text";

const ContentSection = ({
  texts,
  color,
}: {
  texts: string[];
  color?: string;
}) => {
  return (
    <div className="flex flex-col gap-8">
      {texts.map((textItem, index) => (
        <Text
          key={index}
          variant="body"
          className={color ? `${color}` : "text-neutral"}
        >
          {textItem}
        </Text>
      ))}
    </div>
  );
};

export default ContentSection;
