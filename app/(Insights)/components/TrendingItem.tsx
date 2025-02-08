import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const TrendingItem = () => {
  return (
    <div className="flex w-full flex-col gap-5 border-b border-border pb-5">
      <div className="flex items-center gap-2.5">
        <Text variant={"card_title_large"}> Trending Topics</Text>
        <div className="min-w-5 min-h-5 rounded-full flex bg-background items-center justify-center">
          <Icon name="trending_up" className="text-[16px]" />
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <Text variant={"navbar"}>Journals</Text>
      </div>
    </div>
  );
};

export default TrendingItem;
