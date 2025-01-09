"use client";
import * as React from "react";
import { SearchBar } from "./SearchBar";
import { WelcomeHeader } from "./WelcomeHeader";

export const WelcomeSection: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="flex flex-col justify-center items-start px-14 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[960px]">
        <WelcomeHeader
          title="Welcome"
          description="EMCC is a not-for-profit basis headquartered in the United Kingdom. We serve over 16,000 members, located in over 90 countries. Lorem ipsum dolor sit amet consectetur. Tellus id id dictumst urna fames sit elementum vehicula. Amet vel mi arcu turpis pharetra nibh. Arcu pellentesque amet purus ultrices tellus sit volutpat proin sodales. Nec velit rutrum egestas enim vitae porttitor lectus."
        />
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <SearchBar
            placeholder="What are you searching for?"
            onSearch={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};
