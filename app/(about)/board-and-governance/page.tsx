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
import sqricon from "@/public/sqricon.svg";
import PresidentImg from "@/public/president.png";
import FreelancerImg from "@/public/freelancer.png";
import MemberCard from "@/src/components/card/MemberCard";
import SectionLink from "@/src/components/common/SectionLink";
import BoardMember from "../components/BoardMember";
import BannerSection from "../components/BannerSection";
import pageContentJson from "@/src/data/boardAndGovt.json";
import { BoardPageContent } from "./type";
import ExecutiveBoardSection from "./components/ExecutiveBoardSection";
import BoardMembersGridSection from "./../components/BoardMembersGridSection";
import SidebarSection from "../components/SidebarSection";
import BoardText from "@/src/components/common/BoardText";
const page = () => {
  const bredList = [
    {
      name: "About Us",
      //   href: "/",
    },
    {
      name: "Board & Governance",
      href: "board-and-governance",
    },
    // {
    //   name: "Contact",
    //   href: "/contact",
    // },
  ];

  const [pageContent, setPageContent] =
    useState<BoardPageContent>(pageContentJson);
  return (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection {...pageContent.banner} />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={pageContent.breadcrumb} />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-16">
          <div className="md:col-span-7 flex flex-col gap-20">
            <ExecutiveBoardSection {...pageContent.executiveBoard} />
            <BoardMember
              title={pageContent.president.title}
              name={pageContent.president.name}
              description={pageContent.president.description}
              imageSrc={PresidentImg.src}
            />

            <BoardMember
              title={pageContent.boardSecretary.title}
              name={pageContent.boardSecretary.name}
              description={pageContent.boardSecretary.description}
              email={pageContent.boardSecretary.email}
              imageSrc={PresidentImg.src}
            />
            <BoardText text={pageContent.boardText} />
            <BoardMembersGridSection
              title={pageContent.boardMembers.title}
              members={pageContent.boardMembers.members}
              linkTitle="Executive Board Structure"
            />
            <BoardMembersGridSection
              title={pageContent.boardAdvisors.title}
              members={pageContent.boardAdvisors.members}
              linkTitle="Advisory Board Structure"
            />
          </div>
          <div className="md:col-span-4">
            <SidebarSection {...pageContent.sidebar} />
          </div>
        </div>
      </Section>
    </>
  );
};

interface AccordionProps {
  title: string;
  content?: string;
  listItems?: string[];
  withMedia?: boolean;
  children?: React.ReactNode;
  className?: string;
}
const AccordionList: React.FC<AccordionProps> = ({
  title,
  content,
  listItems,
  withMedia = false,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        withMedia ? "py-5 border-b border-border" : "py-[15px]",
        className
      )}
    >
      <div
        className="cursor-pointer px-5 flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <Text variant="card_title_small" className={withMedia ? "!m-0" : ""}>
          {title}
        </Text>
        <Icon
          className="text-neutralDark text-[20px]"
          name={isOpen ? "remove" : "add"}
        />
      </div>
      <div
        className={cn(
          "overflow-hidden duration-500 ease-in-out transition-height flex flex-col",
          withMedia ? "items-center" : "gap-6 items-center",
          isOpen ? "h-auto pt-[20px]" : "h-0 p-0"
        )}
      >
        {listItems ? (
          <ul className="flex w-full items-start px-5 flex-col gap-5">
            {listItems.map((item, index) => (
              <li
                className={cn(
                  "hover:list-disc cursor-pointer group hover:text-primary-600 ml-5",
                  index == 0 ? "text-primary-600 list-disc" : ""
                )}
              >
                <Text
                  className="group-hover:text-primary-600 list-disc"
                  variant="navbar"
                  key={index}
                  as="span"
                  color="neutralDark"
                >
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default page;
