import React from "react";
import { Text } from "../ui/elements/Text";
import { Icon } from "../ui/elements/Icon";

const SectionLink = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <div onClick={() => onClick()} className="flex items-center gap-2.5 ">
      <Icon name="family_history" className="text-[20px] text-green-500" />
      <Text
        variant={"button"}
        className="underline border-b border-neutralDark"
      >
        {title}
      </Text>
    </div>
  );
};

export default SectionLink;
