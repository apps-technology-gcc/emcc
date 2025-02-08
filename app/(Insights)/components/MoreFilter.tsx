import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const MoreFilter = () => {
  return (
    <div className="flex h-[40px] items-center border-border border p-2.5 justify-between rounded-sm gap-2.5">
      <Text variant={"placeholder"} className="text-neutralLight">
        More Filter Industry
      </Text>
      <Icon name="tune" className="text-[24px]" />
    </div>
  );
};

export default MoreFilter;
