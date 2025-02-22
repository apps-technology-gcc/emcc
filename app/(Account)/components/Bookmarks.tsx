import React from "react";
import BookMarkItem from "./BookMarkItem";
import SectionTitle from "@/src/components/common/SectionTitle";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";

const Bookmarks = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center justify-between gap-5">
        <SectionTitle dark caps title="Saved Resources & Events" />
        <div className="min-w-[200px]">
          <SearchSelect options={[]} placeholder="Type" name="" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-12">
        <BookMarkItem />
        <BookMarkItem type="event" />
        <BookMarkItem />
        <BookMarkItem type="event" />
        <BookMarkItem type="event" />
        <BookMarkItem />
      </div>
    </div>
  );
};

export default Bookmarks;
