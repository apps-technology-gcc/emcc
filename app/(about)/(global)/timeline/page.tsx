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
import Timeline from "./components/TimeLine";
import SidebarSection from "../../components/SidebarSection";
const page = () => {
  const bredList = [
    {
      name: "About Us",
      //   href: "/",
    },

    // {
    //   name: "Contact",
    //   href: "/contact",
    // },
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
    moreAboutUs: {
      title: "More About Us",
      cards: [
        {
          icon: "sqricon",
          title: "Research",
          description:
            "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
        },
        {
          icon: "sqricon",
          title: "CPD",
          description:
            "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
        },
      ],
    },
    applyToJoin: {
      title: "Apply to Join Our Board",
      description: "3rd December 2024 | 4:30pm to 6:30pm",
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
            ABOUT EMCC <br /> Global
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
          <div className="md:col-span-7 flex flex-col gap-12">
            <div className="flex flex-col gap-12">
              <SectionTitle title="EMCC Timeline 2006-2016" />
              <div className="flex flex-col gap-8">
                <Text variant={"body"} className="text-neutral">
                  Lorem ipsum dolor sit amet consectetur. Mi sit turpis eu
                  euismod. Et cras urna sagittis lacus ipsum est turpis
                  tincidunt ipsum. Aliquam velit urna fusce consequat lacus
                  dolor. Amet ultrices mi pellentesque in dignissim amet. Vitae
                  tempor blandit nisi arcu. Nulla faucibus adipiscing nibh orci
                  in sapien dignissim. Ornare volutpat eleifend ornare est. Quis
                  sit congue natoque facilisis elementum diam purus consectetur
                  massa.
                </Text>
              </div>
              <Timeline />
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
