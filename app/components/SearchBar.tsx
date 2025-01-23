"use client";
import * as React from "react";
import { SearchBarProps } from "@/src/types";
import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";
import { SearchHome } from "@/src/components/ui/elements/form/SearchHome";
import { useState } from "react";

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  const [searchValue, setSearchValue] = useState("");
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-5 items-start w-full"
    >
      <SearchHome setValue={setSearchValue} id="search" placeholder="Search" />
      <Button
        variant="default"
        outline
        className="max-w-fit"
        btnType={"primary"}
        tabIndex={0}
      >
        Search
      </Button>
    </form>
  );
};
