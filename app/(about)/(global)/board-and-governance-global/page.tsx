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
import RightSide from "../../components/RightSide";
import TextContentSection from "../../components/TextContentSection";
import AccordionGroup from "../../components/AccordionGroup";
import BoardText from "../../components/BoardText";
import BoardMember from "../../components/BoardMember";
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
    "EMCC Global Board & Executive Team": [
      {
        id: 1,
        content:
          "The EMCC Middle East Board & Executive team exists to provide advice, support and resource to Subscription Members. The Executive team looks over the operations by bringing over the global standard of coaching and mentorship to the Middle East.",
      },
    ],
    "Download filing history": [
      {
        id: 1,
        content:
          "Lorem ipsum dolor sit amet consectetur. Vel mattis at eleifend nibh nisi scelerisque sed laoreet. Tempus neque mi massa odio at at. At rhoncus adipiscing turpis malesuada integer ac pulvinar. Mi neque nunc ornare vitae eget.",
      },
    ],
    "Governance Documents": [
      {
        id: 1,
        content:
          "Lorem ipsum dolor sit amet consectetur. Vel mattis at eleifend nibh nisi scelerisque sed laoreet. Tempus neque mi massa odio at at.",
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

  const links = [
    "Related Party Transactions Policy",
    "Human Rights Policy",
    "Third Party Code",
    "Antitrust and Competition Law Statement",
    "Anti-Corruption Policy",
    "Bylaws",
    "GDPR Compliance & Data Security",
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
        <div className="grid grid-cols-11 gap-16">
          <div className="col-span-7 flex flex-col gap-20">
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

              <TextContentSection
                texts={textContentData["Governance Documents"]}
                title="Governance Documents"
              />

              <div className=" gap-y-5 gap-x-12 flex items-center flex-wrap ">
                {links.map((link, index) => {
                  return (
                    <Link
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
          <RightSide
            isGlobal={true}
            aboutTitle="About Us"
            aboutContent="Learn more about our mission and values."
            accordionList={[
              {
                title: "Basic Accordion",
                listItems: ["Item 1", "Item 2", "Item 3"],
              },
              { title: "Advanced Accordion", listItems: ["Item 4", "Item 5"] },
            ]}
            boardLink="/board"
            leadershipLink="/leadership"
            moreAboutItems={[
              { title: "ESG", description: "Details about ESG..." },
              { title: "Research", description: "Details about Research..." },
            ]}
            applyTitle="Join Us"
            applyContent="Apply to become part of our team."
            applyButtonLabel="Register Now"
            applyButtonUrl="/apply"
          />
        </div>
      </Section>
    </>
  );
};

export default page;
