import React from "react";
import { Icon } from "../ui/elements/Icon";
import { Text } from "../ui/elements/Text";

const DocumentItem = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2.5">
      <Icon name="description" className="text-[20px]" />
      <Text variant={"navbar"} className="text-neutralDark">
        {title}
      </Text>
    </div>
  );
};

export default DocumentItem;
