"use client";
import * as React from "react";

import NavLink from "@/src/components/ui/elements/NavLink";
import {
  AllNewsCard,
  CommonNewsCard,
  EventNewsCard,
  GpsNewsCard,
  LeadershipNewsCard,
  PartnersNewsCard,
} from "@/src/components/card/NewsCard";
import { Text } from "@/src/components/ui/elements/Text";
import Section from "@/src/components/layout/Section";
import { cn } from "@/src/lib/utils";
import Marquee from "react-fast-marquee";

const filterCategories = [
  {
    label: "A-Z",
    value: "A-Z",
  },
  {
    label: "Partners",
    value: "Partners",
  },
  {
    label: "Thought Leadership",
    value: "Thought Leadership",
  },
  {
    label: "Events",
    value: "Events",
  },
  {
    label: "GPS Series",
    value: "GPS Series",
  },
  {
    label: "Journal",
    value: "Journal",
  },
  {
    label: "Research",
    value: "Research",
  },
  {
    label: "Community",
    value: "Community",
  },
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

const partnersData = [
  {
    title: "The Coaching Circle & Assessment Center",
    description:
      "CoachHub is the leading digital coaching platform for remote & online coaching with over 4000 international, certified coaches.",
    tag: "Coaching Platform",
    tagColor: "bg-indigo-200",
  },
  {
    title: "The Coaching Circle & Assessment Center",
    description:
      "CoachHub is the leading digital coaching platform for remote & online coaching with over 4000 international, certified coaches.",
    tag: "Gold Sponsor",
    tagColor: "bg-teal-200",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/aa9e2f2ed1d69bc9889d6caafa058c3b87346039b23ce7384a44227a79e300ab?apiKey=7d86919144c846178294e9d8a4321223&",
  },
  {
    title: "Starter Leadership",
    description:
      "CoachHub is the leading digital coaching platform for remote & online coaching with over 4000 international, certified coaches.",
    tag: "Coach Training",
    tagColor: "bg-fuchsia-200",
  },
  {
    title: "Solution for Executive Coaching",
    description:
      "CoachHub is the leading digital coaching platform for remote & online coaching with over 4000 international, certified coaches.",
    tag: "Assessments",
    tagColor: "bg-violet-200",
  },
  {
    title: "CoachHub Coaching",
    description:
      "CoachHub is the leading digital coaching platform for remote & online coaching with over 4000 international, certified coaches.",
    tag: "Sponsor",
    tagColor: "bg-rose-200",
  },
  {
    title: "CoachHub Coaching",
    description:
      "CoachHub is the leading digital coaching platform for remote & online coaching with over 4000 international, certified coaches.",
    tag: "Course Provider",
    tagColor: "bg-emerald-200",
  },
];
const leadershipData = [
  {
    title: "Digital Transformation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    dotColor: "bg-cyan-500",
    imageAlt: "Digital Transformation Icon",
  },
  {
    title: "Climate Action & Sustainabality",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    dotColor: "bg-indigo-600",
    imageAlt: "Climate Action Icon",
  },
  {
    title: "Future of Work",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    dotColor: "bg-fuchsia-500",
    imageAlt: "Future of Work Icon",
  },
  {
    title: "Management, Leadership & Culture",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    dotColor: "bg-emerald-500",
    imageAlt: "Management Icon",
  },
  {
    title: "Team Coaching",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    dotColor: "bg-blue-500",
    imageAlt: "Team Coaching Icon",
  },
  {
    title: "Systems Coaching",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod sed lectus interdum molestie ac urna tristique lorem.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fc20062b39f27c3869b2e6b8f5e448f9c7ed3940ca07d74ee041b3a3e3cf0175?apiKey=7d86919144c846178294e9d8a4321223&",
    dotColor: "bg-yellow-400",
    imageAlt: "Systems Coaching Icon",
  },
];

const events = [
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/33dcf1aea279e33a34c4c7b87ac4d83024aec82553164c877faffb47adf5155c?apiKey=7d86919144c846178294e9d8a4321223&",
    imgAlt: "Event Image 1",
    title:
      "Config 2024: Designing a Better Conference For People Who Build Product",
    date: "Friday 30 July, 2024",
    type: "Team Coaching",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/33dcf1aea279e33a34c4c7b87ac4d83024aec82553164c877faffb47adf5155c?apiKey=7d86919144c846178294e9d8a4321223&",
    imgAlt: "Event Image 2",
    title:
      "Config 2024: Designing a Better Conference For People Who Build Product",
    date: "Friday 30 July, 2024",
    type: "Team Coaching",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/33dcf1aea279e33a34c4c7b87ac4d83024aec82553164c877faffb47adf5155c?apiKey=7d86919144c846178294e9d8a4321223&",
    imgAlt: "Event Image 3",
    title:
      "Config 2024: Designing a Better Conference For People Who Build Product",
    date: "Friday 30 July, 2024",
    type: "Team Coaching",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/33dcf1aea279e33a34c4c7b87ac4d83024aec82553164c877faffb47adf5155c?apiKey=7d86919144c846178294e9d8a4321223&",
    imgAlt: "Event Image 4",
    title:
      "Config 2024: Designing a Better Conference For People Who Build Product",
    date: "Friday 30 July, 2024",
    type: "Team Coaching",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/33dcf1aea279e33a34c4c7b87ac4d83024aec82553164c877faffb47adf5155c?apiKey=7d86919144c846178294e9d8a4321223&",
    imgAlt: "Event Image 5",
    title:
      "Config 2024: Designing a Better Conference For People Who Build Product",
    date: "Friday 30 July, 2024",
    type: "Team Coaching",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/33dcf1aea279e33a34c4c7b87ac4d83024aec82553164c877faffb47adf5155c?apiKey=7d86919144c846178294e9d8a4321223&",
    imgAlt: "Event Image 6",
    title:
      "Config 2024: Designing a Better Conference For People Who Build Product",
    date: "Friday 30 July, 2024",
    type: "Team Coaching",
  },
];

const commonData = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a9ab209544dd3849656a20054a5025f7abe728ab234c898415ea3627a18fa057?apiKey=7d86919144c846178294e9d8a4321223&",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    date: "Friday 30 July, 2024",
    imageAlt: "News article image",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a9ab209544dd3849656a20054a5025f7abe728ab234c898415ea3627a18fa057?apiKey=7d86919144c846178294e9d8a4321223&",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    date: "Friday 30 July, 2024",
    imageAlt: "News article image",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a9ab209544dd3849656a20054a5025f7abe728ab234c898415ea3627a18fa057?apiKey=7d86919144c846178294e9d8a4321223&",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    date: "Friday 30 July, 2024",
    imageAlt: "News article image",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a9ab209544dd3849656a20054a5025f7abe728ab234c898415ea3627a18fa057?apiKey=7d86919144c846178294e9d8a4321223&",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    date: "Friday 30 July, 2024",
    imageAlt: "News article image",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a9ab209544dd3849656a20054a5025f7abe728ab234c898415ea3627a18fa057?apiKey=7d86919144c846178294e9d8a4321223&",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    date: "Friday 30 July, 2024",
    imageAlt: "News article image",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a9ab209544dd3849656a20054a5025f7abe728ab234c898415ea3627a18fa057?apiKey=7d86919144c846178294e9d8a4321223&",
    title:
      "Lorem ipsum dolor sit amet consectetur. Erat lorem amet est mauris consequat et convallis.",
    date: "Friday 30 July, 2024",
    imageAlt: "News article image",
  },
];
export const WhatsNew: React.FC = () => {
  const [selectedCtg, setSelectedCtg] = React.useState("A-Z");
  const handleSelectCtg = (event: any, value: string) => {
    // Prevent click for href
    event?.preventDefault();
    setSelectedCtg(value);
  };

  const cardConfig: any = {
    "A-Z": {
      data: newsItems,
      component: (item: any) => (
        <AllNewsCard
          key={item.id} // Use a unique identifier from the data
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt}
          title={item.title}
          date={item.date || "Friday 30 July, 2024"} // Make date dynamic
        />
      ),
    },
    Partners: {
      data: partnersData,
      component: (item: any) => (
        <PartnersNewsCard
          key={item.id}
          title={item.title}
          description={item.description}
          tag={item.tag}
          tagColor={item.tagColor}
          imageUrl={item.imageSrc}
          imageAlt="Partner Image"
        />
      ),
    },
    "Thought Leadership": {
      data: leadershipData,
      component: (item: any) => (
        <LeadershipNewsCard
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt}
          dotColor={item.dotColor}
        />
      ),
    },
    Events: {
      data: events,
      component: (item: any) => (
        <EventNewsCard
          key={item.id}
          imageUrl={item.imgSrc}
          imageAlt={item.imgAlt}
          title={item.title}
          date={item.date}
          team={item.type}
        />
      ),
    },
    default: {
      data: commonData,
      component: (item: any) => (
        <CommonNewsCard
          key={item.id}
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt}
          title={item.title}
          date={item.date}
        />
      ),
    },
  };

  const { data, component } = cardConfig[selectedCtg] || cardConfig.default;
  const [currentIndex, setCurrentIndex] = React.useState(0);
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
            <div className="overflow-x-auto">
              <div className="flex gap-2.5 items-start">
                {filterCategories.map((category) => (
                  <NavLink
                    key={category.value}
                    href="#"
                    variant={"declaration"}
                    className={cn(
                      "whitespace-nowrap",
                      selectedCtg === category.value
                        ? "text-white bg-neutralDark border-neutralDark"
                        : ""
                    )}
                    onClick={(e) => handleSelectCtg(e, category.value)}
                  >
                    {category.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {/* {selectedCtg === "A-Z"
              ? newsItems.map((item, index) => (
                  <AllNewsCard
                    key={index}
                    imageUrl={item.imageUrl}
                    imageAlt={item.imageAlt}
                    title={item.title}
                    date="Friday 30 July, 2024"
                  />
                ))
              : selectedCtg === "Partners"
              ? partnersData.map((item, index) => (
                  <PartnersNewsCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    tag={item.tag}
                    tagColor={item.tagColor}
                    imageSrc={item.imageSrc}
                  />
                ))
              : selectedCtg === "Thought Leadership"
              ? leadershipData.map((item, index) => (
                  <LeadershipNewsCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    imageAlt={item.imageAlt}
                    dotColor={item.dotColor}
                  />
                ))
              : selectedCtg === "Events"
              ? events.map((item, index) => (
                  <EventNewsCard
                    key={index}
                    imgSrc={item.imgSrc}
                    imgAlt={item.imgAlt}
                    title={item.title}
                    date={item.date}
                    type={item.type}
                  />
                ))
              : commonData.map((item, index) => (
                  <CommonNewsCard
                    key={index}
                    imageUrl={item.imageUrl}
                    imageAlt={item.imageAlt}
                    title={item.title}
                    date={item.date}
                  />
                ))} */}
            {data.map((item: any) => component(item))}
          </div>
        </div>
      </div>
    </Section>
  );
};
