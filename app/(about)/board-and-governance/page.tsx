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
import ModalWrapper from "@/src/components/modal/ModalWrapper";
import { Tree, TreeNode } from "react-organizational-chart";
import OrgChartComponent from "@/src/components/common/OrgChart";

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

  const [modalName, setModalName] = useState("initial");

  const [isOpenMainModal, setIsOpenMainModal] = useState(false);
  const closeModel = () => {
    setIsOpenMainModal(false);
    setModalName("initial");
  };
  return (
    <>
      <ModalWrapper
        isOpen={isOpenMainModal && modalName === "initial"}
        closeModel={closeModel}
      >
        <div className="flex w-[1170px] flex-col gap-12">
          <div className="flex flex-col gap-5">
            <Text variant={"section_title"} className="text-neutralDark">
              Executive Board (Middle East)
            </Text>
            <Text variant={"body"} className="text-neutral">
              Lorem ipsum dolor sit amet consectetur. Facilisis tincidunt varius
              massa congue aliquam maecenas placerat libero. Mauris a est
              commodo quam nulla at massa at. Scelerisque mauris faucibus et a
              dictumst pellentesque id sagittis viverra.
            </Text>
          </div>
          <div className="w-full">
            {/* OrgChart
             */}
            <OrgChartComponent />
          </div>
        </div>
      </ModalWrapper>
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
              onClick={() => setIsOpenMainModal(true)}
              linkTitle="Advisory Board Structure"
            />
          </div>
          <div className="md:col-span-4">
            <SidebarSection activeSection="" {...pageContent.sidebar} />
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

// export default OrgChart;
export default page;
