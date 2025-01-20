"use client";
import * as React from "react";

import NavLink from "@/src/components/ui/elements/NavLink";
import { NewsCard } from "@/src/components/card/NewsCard";
import { Text } from "@/src/components/ui/elements/Text";
import Section from "@/src/components/layout/Section";

const filterCategories = [
  "A-Z",
  "Partners",
  "Thought Leadership",
  "Events",
  "GPS Series",
  "Journal",
  "Research",
  "Community",
];

const newsItems = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    imageAlt: "News item 1 thumbnail",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    imageAlt: "News item 2 thumbnail",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    imageAlt: "News item 3 thumbnail",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    imageAlt: "News item 4 thumbnail",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    imageAlt: "News item 5 thumbnail",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    imageAlt: "News item 6 thumbnail",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
  },
];

export const WhatsNew: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState("A-Z");

  return (
    <Section
      bgColor="white"
      className="flex flex-col justify-center self-stretch py-20 bg-white max-md:px-5"
    >
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col gap-5 max-w-full w-[700px]">
          <div className="flex flex-col max-w-full text-2xl font-semibold uppercase text-zinc-900 w-[168px]">
            <Text
              variant={"section_title"}
              as="h1"
              className="text-neutralDark"
            >
              What's New
            </Text>
            <div
              className="flex mt-2.5 w-full bg-green-300 min-h-[2px]"
              role="presentation"
            />
          </div>
          <Text variant={"body"} as="p" className=" text-neutral">
            EMCC is a not-for-profit basis headquartered in the United Kingdom.
            We serve over 16,000 members, located in over 90 countries.
          </Text>
        </div>

        <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-2.5 items-start self-start text-sm text-zinc-900 max-md:max-w-full">
            {filterCategories.map((category) => (
              <NavLink
                href="#"
                variant={"declaration"}
                // key={category}
                // label={category}
                // isActive={activeFilter === category}
                // onClick={() => setActiveFilter(category)}
              >
                {category}
              </NavLink>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {newsItems.map((item, index) => (
              <NewsCard
                key={index}
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
