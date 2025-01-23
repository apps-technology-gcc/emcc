import * as React from "react";

function FilingTableHeader() {
  return (
    <div className="flex overflow-hidden flex-wrap w-full text-sm font-medium whitespace-nowrap bg-indigo-100 rounded-md text-neutral-800 max-md:max-w-full">
      <div
        className="gap-2.5 self-stretch px-2.5 py-5 h-full rounded-md border border-solid border-neutral-300 w-[140px]"
        role="columnheader"
      >
        Filing
      </div>
      <div
        className="flex-1 shrink gap-2.5 self-stretch px-2.5 py-5 h-full border border-solid border-neutral-300 min-w-[240px]"
        role="columnheader"
      >
        Description
      </div>
      <div
        className="gap-2.5 self-stretch px-2.5 py-5 h-full border border-solid border-neutral-300 w-[140px]"
        role="columnheader"
      >
        Date
      </div>
      <div
        className="flex overflow-hidden gap-2.5 items-center px-2.5 py-5 h-full rounded-none border border-solid border-neutral-300 w-[120px]"
        role="columnheader"
      >
        <div className="gap-2.5 self-stretch my-auto w-[100px]">Preview</div>
      </div>
    </div>
  );
}

export default FilingTableHeader;
