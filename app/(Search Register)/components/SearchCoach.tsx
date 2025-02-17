import { Button } from "@/src/components/ui/elements/Button";
import { SearchInput } from "@/src/components/ui/elements/form/Search";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const SearchCoach = () => {
  return (
    <div className="p-8 rounded-[10px] bg-[#D9F2ED] flex flex-col gap-8">
      <Text variant={"body"} className="text-neutral">
        Search The Coaches Register
      </Text>
      <div className="flex items-center gap-8">
        <div className="flex-auto items-center flex gap-5">
          <SearchInput placeholder={"Search by name"} id="search" />
          <SearchInput
            icon={"location_on"}
            placeholder={"Search by name"}
            id="search"
          />
        </div>
        <Button btnType={"primary"} variant={"default"}>
          Search Register
        </Button>
      </div>
    </div>
  );
};

export default SearchCoach;
