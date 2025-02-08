import * as React from "react";
import { LogbookRow } from "./LogbookRow";
import { Text } from "@/src/components/ui/elements/Text";
import Link from "@/src/components/ui/elements/Link";
import { Icon } from "@/src/components/ui/elements/Icon";

export const Logbook: React.FC = () => {
  const headers = [
    { title: "Date", width: "w-[120px]" },
    { title: "Hours", width: "w-40" },
    { title: "Event/Activity/Learning", width: "w-full", minWidth: "240px" },
    {
      title: "Reflections on EMCC Competence & Assessment Frameworks",
      width: "w-80",
      minWidth: "240px",
    },
  ];

  const rows = Array(5).fill(null);

  return (
    <div className="overflow-auto">
      <div className="flex min-w-[600px] flex-col gap-2.5">
        <div className="flex w-full border-border  border flex-col rounded-tl-md rounded-tr-md overflow-hidden">
          <div className="grid grid-cols-12 bg-primary-100">
            <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
              <Text variant={"card_title_small"} className="text-[#222222]">
                Date
              </Text>
            </div>
            <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
              <Text variant={"card_title_small"} className="text-[#222222]">
                Hours
              </Text>
            </div>
            <div className="flex items-center col-span-4 border-border border-r px-2.5 py-5">
              <Text variant={"card_title_small"} className="text-[#222222]">
                Event/Activity/Learning
              </Text>
            </div>
            <div className="flex items-center col-span-4 border-border px-2.5 py-5">
              <Text variant={"card_title_small"} className="text-[#222222]">
                Reflections on EMCC Competence & Assessment Frameworks
              </Text>
            </div>
          </div>
          <LogbookRow />
          <LogbookRow />
          <LogbookRow />
          <LogbookRow />
        </div>
        <div className="flex justify-end">
          <Link
            href="#"
            variant={"primary"}
            icon={<Icon name="add" className="text-[20px]" />}
            iconPosition="right"
          >
            Add More
          </Link>
        </div>
      </div>
    </div>
  );
};
