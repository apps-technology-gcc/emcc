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
import FilingsTable from "../board-and-governance-global/comopnents/FilingsTable";
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
                title="Our Organisation"
                texts={textContentData["Our Organisation"]}
              />

              <AccordionGroup items={accItems} />
            </div>
            <BoardText
              text=" The Board is accountable to our members and oversees the
                Councils’ regionalactivities in the Middle East. It’s made up of
                senior leaders from a broad range of industry and sectors,
                member firms and organisations."
            />

            {/* BOARD Members*/}

            <div className=" flex flex-col rounded-md">
              <Text
                variant={"section_title"}
                className="text-neutralDark mb-8 "
              >
                Global Executive Board
              </Text>
              {/* <FilingsTable /> */}
              <div className="grid mb-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <MemberCard />
                <MemberCard />
                <MemberCard />
              </div>
              {/* <SectionLink title="Executive Board Structure" /> */}
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
