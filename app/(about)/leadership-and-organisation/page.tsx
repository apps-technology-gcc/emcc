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

import BannerSection from "../components/BannerSection";
import TextContentSection from "@/src/components/common/TextContentSection";
import BoardMembersGridSection from "../components/BoardMembersGridSection";
import SidebarSection from "../components/SidebarSection";
import pageContentJson from "@/src/data/leadershipAndOrg.json";

const page = () => {
  const bredList = [
    {
      name: "About Us",
      //   href: "/",
    },
    {
      name: "Executive Leadership Team",
      href: "board-and-governance",
    },
  ];
  const [pageContent, setPageContent] =
    useState<LeadershipData>(pageContentJson);
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
          <div className="col-span-7 flex flex-col gap-20">
            <TextContentSection
              title={pageContent.executiveLeadership.title}
              texts={pageContent.executiveLeadership.description}
            />
            <BoardMembersGridSection
              title={pageContent.executiveDirectors.title}
              members={pageContent.executiveDirectors.members}
              linkTitle="Executive Board Structure"
            />
            <BoardMembersGridSection
              title={pageContent.countryDirectors.title}
              members={pageContent.countryDirectors.members}
              // linkTitle="Advisory Board Structure"
            />
          </div>
          <div className="col-span-4">
            <SidebarSection {...pageContent.sidebar} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default page;
