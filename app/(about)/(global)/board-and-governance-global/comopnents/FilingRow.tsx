import * as React from "react";
// import { FilingRowData } from "./types";
import { cn } from "@/src/lib/utils";
import { Text } from "@/src/components/ui/elements/Text";
import { FilingRowData } from "@/src/types";

interface FilingRowProps {
  data: FilingRowData;
  isLast: boolean;
}

function FilingRow({ data, isLast }: FilingRowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center w-full border-solid border-b border-b-border max-md:max-w-full",
        isLast && "border-b-0"
      )}
      role="row"
    >
      <div
        className="gap-2.5 self-stretch px-2.5 py-5 my-auto text-sm font-light leading-loose whitespace-nowrap border-r border-solid border-border text-neutral-800 w-[140px]"
        role="cell"
      >
        <Text variant={"body"} className="text-[#222222] ">
          {data.type}
        </Text>
      </div>
      <div
        className="flex-1 shrink gap-2.5 self-stretch px-2.5 py-5 my-auto text-sm font-light leading-loose border-r border-solid border-border min-w-[240px] text-neutral-800"
        role="cell"
      >
        <Text variant={"body"} className="text-[#222222] ">
          {data.description}
        </Text>
      </div>
      <div
        className="gap-2.5 self-stretch px-2.5 py-5 my-auto text-sm font-light leading-loose border-r border-solid border-border text-neutral-800 w-[140px]"
        role="cell"
      >
        <Text variant={"body"} className="text-[#222222] ">
          {data.date}
        </Text>
      </div>
      <div
        className="flex gap-2.5 justify-center items-center self-stretch px-2.5 py-4 my-auto border-solid border-border min-h-[50px] w-[120px]"
        role="cell"
      >
        <div className="flex flex-col justify-center items-center self-stretch my-auto w-[100px]">
          <img
            loading="lazy"
            src={data.previewUrl}
            className="object-contain w-5 aspect-square"
            alt="Preview document"
          />
        </div>
      </div>
    </div>
  );
}

export default FilingRow;
