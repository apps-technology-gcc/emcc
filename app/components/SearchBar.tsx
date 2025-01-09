"use client";
import * as React from "react";
import { SearchBarProps } from "@/src/types";
import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-5 items-start w-full"
    >
      <div className="flex flex-col flex-1 shrink text-xs font-light basis-[60px] min-w-[240px] text-zinc-400 max-md:max-w-full">
        <div className="flex flex-wrap gap-2.5 items-center px-2.5 py-2 w-full bg-white border border-solid border-neutral-300 max-md:max-w-full">
          <label htmlFor="searchInput" className="sr-only">
            {placeholder}
          </label>
          <input
            id="searchInput"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full bg-transparent border-none outline-none"
            aria-label={placeholder}
          />
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/0882933954394bcb479ef236dec571ec77bf36a4c92af47d3e29a1a21a76c69c?apiKey=7d86919144c846178294e9d8a4321223&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          /> */}
          <Icon name="search" className="shrink-0 self-stretch my-auto w-6" />
        </div>
      </div>
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
