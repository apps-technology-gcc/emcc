import * as React from "react";
import { LogbookRowProps } from "@/src/types";

export const LogbookRow: React.FC<LogbookRowProps> = () => (
  <div className="grid grid-cols-12 border border-b min-h-[50px]">
    <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
      {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Date
      </Text> */}
    </div>
    <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
      {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Hours
      </Text> */}
    </div>
    <div className="flex items-center col-span-4 border-border border-r px-2.5 py-5">
      {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Event/Activity/Learning
      </Text> */}
    </div>
    <div className="flex items-center col-span-4 border-border px-2.5 py-5">
      {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Reflections on EMCC Competence & Assessment Frameworks
      </Text> */}
    </div>
  </div>
);
