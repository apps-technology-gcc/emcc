"use client";
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
import AccordionGroup from "../../components/AccordionGroup";
import BoardMember from "../../components/BoardMember";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import Link from "@/src/components/ui/elements/Link";
import FilingsTable from "./comopnents/FilingsTable";
import SidebarSection from "../../components/SidebarSection";

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
    "EMCC Global Board & Executive Team": [
      "The EMCC Middle East Board & Executive team exists to provide advice, support and resource to Subscription Members. The Executive team looks over the operations by bringing over the global standard of coaching and mentorship to the Middle East.",
    ],
    "Download filing history": [
      "Lorem ipsum dolor sit amet consectetur. Vel mattis at eleifend nibh nisi scelerisque sed laoreet. Tempus neque mi massa odio at at. At rhoncus adipiscing turpis malesuada integer ac pulvinar. Mi neque nunc ornare vitae eget.",
    ],
    "Governance Documents": [
      "Lorem ipsum dolor sit amet consectetur. Vel mattis at eleifend nibh nisi scelerisque sed laoreet. Tempus neque mi massa odio at at.",
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

  const links = [
    "Related Party Transactions Policy",
    "Human Rights Policy",
    "Third Party Code",
    "Antitrust and Competition Law Statement",
    "Anti-Corruption Policy",
    "Bylaws",
    "GDPR Compliance & Data Security",
  ];
  const sideBarData = {
    aboutEMCC: {
      title: "About EMCC Global",
      accordion: {
        title: "About EMCC Global",
        listItems: [
          "Our History, Our Culture",
          "Our Strategy",
          "Our Locations",
        ],
      },
      links: [
        {
          text: "Our Organisation",
          href: "/organisation",
        },
        {
          text: "Board & Governance",
          href: "/board-and-governance-global",
        },
        {
          text: "esg",
          href: "/ESG",
        },
      ],
    },
    // moreAboutUs: {
    //   title: "More About Us",
    //   cards: [
    //     {
    //       icon: "sqricon",
    //       title: "Research",
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
    //     },
    //     {
    //       icon: "sqricon",
    //       title: "CPD",
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
    //     },
    //   ],
    // },
    moreDetails: {
      title: "For more details about the Board see the links below.",
      items: [
        {
          title: "Terms of Reference (PDF - 151KB)",
        },
        {
          title: "AGM Minutes of Meeting",
        },
        {
          title: "EMCC Global Byelaws (2024-2025)",
        },
      ],
    },
    downloadHistory: {
      title: "Download Filing History",
      items: [
        {
          title: "Terms of Reference (PDF - 151KB)",
        },
        {
          title: "AGM Minutes of Meeting",
        },
        {
          title: "EMCC Global Byelaws (2024-2025)",
        },
      ],
    },
    applyToJoin: {
      title: "Apply to Join Our Board",
      description:
        "Lorem ipsum dolor sit amet consectetur. Leo leo risus varius gravida tellus. Aliquet mi sit tristique mauris egestas molestie volutpat.",
      buttonText: "Register Your Interest",
    },
  };
  return (
    <>
      <Banner bgImage={bgImage.src}>
        <div className="max-w-[763px] flex flex-col gap-12">
          <Text
            font={"tinos"}
            variant={"h1_page_title"}
            className="uppercase text-white"
          >
            EMCC Board & Executive Team
          </Text>
          <Text variant={"body"} className="text-white">
            Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus
            nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla
            odio id tortor felis suspendisse porta placerat rhoncus. Vestibulum
            semper vitae pellentesque fames quam purus nec faucibus porttitor.
          </Text>
        </div>
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={bredList} />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-16">
          <div className="md:col-span-7 flex flex-col gap-20">
            <div className="flex flex-col gap-12">
              <TextContentSection
                title="EMCC Global Board & Executive Team"
                texts={textContentData["EMCC Global Board & Executive Team"]}
              />
            </div>

            <BoardMember
              title="President EMCC"
              name="Afifa Mohammad"
              description="  Lorem ipsum dolor sit amet consectetur. Lorem senectus amet
                    nullam mollis. Velit risus felis a a. Adipiscing platea a
                    tincidunt tellus. Libero ac vivamus sit lacus velit et ac
                    tempor mattis. Morbi dictum dictumst ac sed diam morbi. Ut
                    proin pharetra nam vitae. Egestas tellus ultrices dolor
                    risus donec commodo."
              // email="emailname@domain.com"
              imageSrc={PresidentImg.src}
            />

            {/* BOARD Members*/}

            <div className=" flex flex-col rounded-md">
              <Text
                variant={"section_title"}
                className="text-neutralDark mb-8 "
              >
                Executive Board Members
              </Text>
              <div className="grid mb-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <MemberCard />
                <MemberCard />
                <MemberCard />
              </div>
              {/* <SectionLink title="Executive Board Structure" /> */}
            </div>
            <div className=" flex flex-col rounded-md">
              <Text
                variant={"section_title"}
                className="text-neutralDark mb-8 "
              >
                Non-Executive Board Members
              </Text>
              <div className="grid mb-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <MemberCard />
                <MemberCard />
                <MemberCard />
              </div>
              {/* <SectionLink title="Executive Board Structure" /> */}
            </div>
            <div className="flex flex-col gap-12">
              <TextContentSection
                texts={textContentData["Download filing history"]}
                title="Download filing history"
              />

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                <SearchSelect
                  // control={control}
                  name="country"
                  options={[
                    { value: "us", label: "United States" },
                    { value: "uk", label: "United Kingdom" },
                  ]}
                  // checkbox
                  // isMulti
                  placeholder="Select a country"
                  onChange={(value) => console.log(value)}
                />
                <SearchSelect
                  // control={control}
                  name="country"
                  options={[
                    { value: "us", label: "United States" },
                    { value: "uk", label: "United Kingdom" },
                  ]}
                  // checkbox
                  // isMulti
                  placeholder="Select a country"
                  onChange={(value) => console.log(value)}
                />
              </div>
              <FilingsTable />
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

              <TextContentSection
                texts={textContentData["Governance Documents"]}
                title="Governance Documents"
              />

              <div className=" gap-y-5 gap-x-12 flex items-center flex-wrap ">
                {links.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      href="/"
                      variant="secondary"
                      className="underline flex max-w-fit border-b border-black"
                    >
                      {link}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <SidebarSection {...sideBarData} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default page;
