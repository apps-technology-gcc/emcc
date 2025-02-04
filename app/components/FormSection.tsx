"use client";
import { Button } from "@/src/components/ui/elements/Button";
import { Input } from "@/src/components/ui/elements/form/Input";
import Radio from "@/src/components/ui/elements/form/Radio";
import Link from "@/src/components/ui/elements/Link";
import { Text, textVariants } from "@/src/components/ui/elements/Text";
import { cn } from "@/src/lib/utils";
import * as React from "react";
import { useState } from "react";

const options = [
  {
    id: "membersDirectory",
    label: "Members Directory (Accredited & Non-Accredited)",
  },
  {
    id: "charteredMembers",
    label: "Chartered Members",
  },
  {
    id: "trainingCourses",
    label: "Training & Course Providers (Accredited & Non-Accredited)",
  },
];

function FormSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = () => {
    console.log("Updated");
  };
  return (
    <form className="flex px-5 p-12 flex-col self-start min-w-[240px] w-[652px] max-md:max-w-full max-md:pr-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label
          htmlFor="searchOptions"
          className={cn(
            "text-base font-medium text-neutralDark max-md:max-w-full",
            textVariants({
              variant: "card_title_large",
            })
          )}
        >
          What are you looking for?
        </label>
        <div className="flex flex-wrap gap-8 items-end mt-5 w-full max-md:max-w-full">
          {options.map((option) => (
            <div key={option.id} className="flex flex-col min-w-[240px]">
              <div className="flex gap-2.5 items-center">
                <Radio label={option.label} id="#e" />
                {/* <input
                  type="checkbox"
                  id={option.id}
                  className="flex flex-col self-stretch my-auto w-5 rounded-[30px] border border-solid border-zinc-900"
                />
                <label
                  htmlFor={option.id}
                  className="self-stretch my-auto text-xs font-light text-zinc-900"
                >
                  {option.label}
                </label> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex mt-8 flex-wrap gap-5 items-start w-full"
      >
        <div className="flex flex-col flex-1 shrink text-xs font-light basis-[60px] min-w-[240px] text-zinc-400 max-md:max-w-full">
          <Input
            name="search"
            placeholder="What are you searching for?"
            className="max-w-full"
            tabIndex={0}
          />
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
      <div className="flex flex-col gap-5 mt-8 w-full text-sm text-indigo-600 max-md:max-w-full">
        <Link href="#">
          <Text
            variant={"button"}
            className="gap-2.5 self-stretch text-primary-600"
          >
            Browse Middle-East member directory
          </Text>
        </Link>
        <Link href="#">
          <Text
            variant={"button"}
            className="gap-2.5 self-stretch max-md:max-w-full text-primary-600"
          >
            Browse accredited members (Coaches, Mentors, Supervisors)
          </Text>
        </Link>
        <Link href="#">
          <Text
            variant={"button"}
            className="gap-2.5 self-stretch text-primary-600"
          >
            Browse accredited training providers by region
          </Text>
        </Link>
      </div>
    </form>
  );
}

export default FormSection;
