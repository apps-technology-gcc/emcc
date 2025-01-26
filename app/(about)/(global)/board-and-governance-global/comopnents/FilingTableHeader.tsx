import { Text } from "@/src/components/ui/elements/Text";
import * as React from "react";

function FilingTableHeader() {
  return (
    <div className="flex overflow-hidden flex-wrap w-full text-sm font-medium whitespace-nowrap bg-indigo-100 rounded-tl-md text-neutral-800 max-md:max-w-full">
      <div
        className="gap-2.5 self-stretch px-2.5 py-5 h-full border-r border-solid border-border w-[140px]"
        role="columnheader"
      >
        <Text variant={"card_title_small"} className="text-[#222222] ">
          Filing
        </Text>
      </div>
      <div
        className="flex-1 shrink gap-2.5 self-stretch px-2.5 py-5 h-full border-r border-solid border-border min-w-[240px]"
        role="columnheader"
      >
        <Text variant={"card_title_small"} className="text-[#222222] ">
          Description
        </Text>
      </div>
      <div
        className="gap-2.5 self-stretch px-2.5 py-5 h-full border-r border-solid border-border w-[140px]"
        role="columnheader"
      >
        <Text variant={"card_title_small"} className="text-[#222222] ">
          Date
        </Text>
      </div>
      <div
        className="flex overflow-hidden gap-2.5 items-center px-2.5 py-5 h-full rounded-none border-solid border-border w-[120px]"
        role="columnheader"
      >
        <div className="gap-2.5 self-stretch my-auto w-[100px]">
          <Text variant={"card_title_small"} className="text-[#222222] ">
            Preview
          </Text>
        </div>
      </div>
    </div>
  );
}

export default FilingTableHeader;
