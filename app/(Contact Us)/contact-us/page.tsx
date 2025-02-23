"use client";
import Banner from "@/src/components/common/Banner";

import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";

import bgImage from "@/public/about-bg.png";
import { useEffect, useState } from "react";
import pageContentJson from "@/src/data/about.json";
import TextContentSection from "@/src/components/common/TextContentSection";
import BannerSection from "@/src/components/common/BannerSection";
import SectionTitle from "@/src/components/common/SectionTitle";
import { Text } from "@/src/components/ui/elements/Text";
import SideBarNav from "@/src/components/ui/elements/SideBarNav";
import { Icon } from "@/src/components/ui/elements/Icon";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import Divider from "@/src/components/ui/elements/Divider";
import GlobalContact from "../components/GlobalContact";
import MiddleEastContact from "../components/MiddleEastContact";
import ComplaintsProcedure from "../components/ComplaintsProcedure";
import SuggestionOrComment from "../components/SuggestionOrComment";

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const [activeMenuItem, setActiveMenuItem] = useState<any>(
    "EMCC Global Contacts"
  );
  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="Contact Us"
          description="The EMCC exists to develop, promote, and set the expectation of best practice in mentoring, coaching, and supervision globally for the benefit of society"
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={pageContent.breadcrumb} />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="flex flex-col gap-12">
          <SectionTitle title="Let’s Connect" />
          <div className="grid gap-12 grid-cols-[368px_auto]">
            <div className="flex flex-col gap-8">
              <Text variant={"body"}>
                Lorem ipsum dolor sit amet consectetur. Leo ac lobortis pretium
                sem tellus bibendum phasellus
              </Text>
              <LeftMenuGroup
                activeMenuItem={activeMenuItem}
                setActiveMenuItem={setActiveMenuItem}
              />
            </div>
            {/* GLobal Contact */}
            {activeMenuItem == "EMCC Global Contacts" && <GlobalContact />}
            {activeMenuItem == "Middle East Contacts" && <MiddleEastContact />}
            {activeMenuItem == "EMCC Complaints Procedure" && (
              <ComplaintsProcedure />
            )}
            {activeMenuItem == "Make a Suggestion or Comment" && (
              <SuggestionOrComment />
            )}
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

const LeftMenuGroup = ({
  activeMenuItem,
  setActiveMenuItem,
}: {
  activeMenuItem: any;
  setActiveMenuItem: any;
}) => {
  const menus = [
    {
      title: "EMCC Global Contacts",
      //   href: "/contact-us/global-contacts",
    },
    {
      title: "Middle East Contacts",
      //   href: "/contact-us/middle-east-contacts",
    },
    {
      title: "EMCC Complaints Procedure",
      //   href: "/contact-us/complaints",
    },
    {
      title: "Make a Suggestion or Comment",
      //   href: "/contact-us/feedback",
    },
  ];
  return (
    <div className="flex flex-col">
      {menus.map((item, index) => (
        <MenuLinkItem
          key={item.title}
          title={item.title}
          activeMenuItem={activeMenuItem}
          onClick={() => setActiveMenuItem(item.title)}
          //   href={item.href}
          index={index}
        />
      ))}
    </div>
  );
};

const MenuLinkItem = ({
  title,
  onClick,
  activeMenuItem,
  //   href,
  index,
}: {
  title: string;
  activeMenuItem: any;
  onClick: () => void; //   href: string;
  index: number;
}) => {
  return (
    <div
      //   href={href}
      onClick={() => onClick()}
      className={cn(
        "py-5 flex cursor-pointer items-center gap-2.5 border-border  border-b",
        {
          "border-t": index === 0,
        }
      )}
    >
      <Text
        className={cn({
          "text-primary-600": activeMenuItem === title,
        })}
        variant={"button"}
      >
        {title}
      </Text>
      <Icon
        name="east"
        className={cn("text-[20px]", {
          "text-primary-600": activeMenuItem === title,
        })}
      />
    </div>
  );
};

export default page;
