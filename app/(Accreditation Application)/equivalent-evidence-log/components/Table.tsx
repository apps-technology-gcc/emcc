import { Text } from "@/src/components/ui/elements/Text";
import { cn } from "@/src/lib/utils";
import React from "react";

const Table = ({
  title,
  tableHeader,
  data,
}: {
  title: string;
  tableHeader: string[];
  data: any[];
}) => {
  return (
    <div className="flex flex-col gap-12">
      <Text variant={"card_title_large"} className="text-neutral">
        {title}
      </Text>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <div className="flex w-full border-border  border flex-col rounded-tl-md rounded-tr-md overflow-hidden">
            <div className="grid grid-cols-12 bg-primary-100">
              {tableHeader.map((item, index) => {
                return (
                  <div
                    className={cn(
                      "flex items-center  border-border  px-2.5 py-5",
                      index + 1 != tableHeader.length
                        ? "border-r col-span-7"
                        : "col-span-5"
                    )}
                    key={index}
                  >
                    <Text
                      variant={"card_title_small"}
                      className="text-[#222222]"
                    >
                      {item}
                    </Text>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-12 border border-b min-h-[50px]">
              <div className="flex items-center col-span-7 border-border border-r px-2.5 py-5">
                {/* <Text variant={"card_title_small"} className="text-[#222222]">
Date
</Text> */}
              </div>

              <div className="flex items-center col-span-5 border-border px-2.5 py-5">
                {/* <Text variant={"card_title_small"} className="text-[#222222]">
Reflections on EMCC Competence & Assessment Frameworks
</Text> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
