"use client";
import DirectorCard from "../components/DirectorCard";
import Banner from "@/src/components/common/Banner";
import { Text } from "@/src/components/ui/elements/Text";
import React, { useState } from "react";
import bgImage from "@/public/about-bg.png";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";
import SectionTitle from "@/src/components/common/SectionTitle";
import { Accordion } from "@/src/components/ui/elements/Accordions";
import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";
import Image from "next/image";
import world_map from "@/public/world_map.png";
import flag from "@/public/flag.png";
import { cn } from "@/src/lib/utils";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import PresidentImg from "@/public/president.png";
import FreelancerImg from "@/public/freelancer.png";
import MemberCard from "@/src/components/card/MemberCard";
import SectionLink from "@/src/components/common/SectionLink";
import TextContentSection from "@/components/common/TextContentSection";
import { Input } from "@/src/components/ui/elements/form/Input";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import Link from "@/src/components/ui/elements/Link";
const page = () => {
  const bredList = [
    {
      name: "About Us",
      //   href: "/",
    },
    {
      name: "Our Organisation",
      href: "board-and-governance",
    },
    // {
    //   name: "Contact",
    //   href: "/contact",
    // },
  ];

  const textContentData = {
    "Our Organisation": [
      {
        id: 1,
        content:
          "EMCCs vision is to be the ‘go to body’ for setting the highest quality standards in Mentoring and Coaching. In this section, we set out the standards that we believe you should use as a guide, whether you are a coach, mentor, coach or mentor supervisor, or trainer or programme provider. It comprises competences, CPD guidance, supervision competences and guidance, the Global Code of Ethics, diversity and regulation. It aims to answer some important questions:",
      },
    ],
  };
  const accItems = [
    {
      id: 1,
      title: "EMCC Global Council Members",
      content: "EMCC Global Council Members",
    },
    {
      id: 2,
      title: "EMCC Global Executive Board",
      content: "EMCC Global Executive Board",
    },
    {
      id: 3,
      title: "EMCC Special Ambassadors",
      content: "EMCC Special Ambassadors",
    },
    {
      id: 4,
      title: "EMCC Volunteers",
      content: "EMCC Volunteers",
    },
  ];
  return (
    <>
      <Banner bgImage={bgImage.src}>
        <div className="max-w-[763px] flex flex-col gap-12">
          <Text
            font={"tinos"}
            variant={"h1_page_title"}
            className="uppercase text-white"
          >
            Our Organisation
          </Text>
          <div className="flex flex-col gap-8">
            <Text variant={"body"} className="text-white">
              Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus
              nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla
              odio id tortor felis suspendisse porta placerat rhoncus.
              Vestibulum semper vitae pellentesque fames quam purus nec faucibus
              porttitor.
            </Text>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-primary-100">
                <Text variant={"small"} className="text-neutralDark">
                  Coaches
                </Text>
              </div>
              <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-green-200">
                <Text variant={"small"} className="text-neutralDark">
                  Mentor
                </Text>
              </div>
              <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-pink-200">
                <Text variant={"small"} className="text-neutralDark">
                  Supervisor
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={bredList} />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-12">
            <SectionTitle title="OAccredited Directory" />
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center gap-5">
                <div className="flex-1 w-full gap-5 grid grid-cols-10">
                  <div className="col-span-6">
                    <Input
                      type="text"
                      name="search"
                      placeholder="Search by Name, Experience, Accredited Practitioners e.g. Coach, Mentor"
                    />
                  </div>
                  <div className="col-span-4">
                    <SearchSelect
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" },
                      ]}
                      placeholder="Select Country"
                      name="Select"
                    />
                  </div>
                </div>
                <Button variant={"default"} btnType={"primary"}>
                  Search
                </Button>
              </div>
              <div className="flex justify-end">
                <Link href="#" variant={"primary"}>
                  Advance Search
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <DirectorCard />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-12">
              <div className="flex  items-center gap-5">
                <div className="flex items-center gap-2.5">
                  <Icon
                    name="chevron_left"
                    className="text-neutralDark text-[16px]"
                  />
                  <Text variant="small">Page 2 of 16</Text>
                  <Icon
                    name="chevron_right"
                    className="text-neutralDark text-[16px]"
                  />
                </div>
                <div className="flex items-center gap-2.5">
                  <Text variant="small">Go to page</Text>
                  <input
                    name="page"
                    className="h-6 w-6 border border-borer rounded-sm"
                    type="text"
                  />
                  <Text variant="small">Go</Text>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Text variant="small">Showing 10 of 100</Text>
                <input
                  name="page"
                  className="h-6 w-6 border border-borer rounded-sm"
                  type="text"
                />
                <Text variant="small">Per page</Text>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default page;
