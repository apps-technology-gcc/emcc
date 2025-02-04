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
import TextContentSection from "@/components/common/TextContentSection";
import AccordionGroup from "../../components/AccordionGroup";
import BoardText from "../../components/BoardText";
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
    "Coaching & Climate Change": [
      "We currently have xx membership categories so that you can select the membership which is right for you and that best matches your experience, expertise and extent of your practice. See below for a brief description of each category. Further down the page is a guide to help you to map your coaching and mentoring capability to decide the category for you. Once you have made your selection click on the appropriate membership category listed in the box on the right of this page.",
    ],
    "Comittment to Change": [
      "Lorem ipsum dolor sit amet consectetur. Egestas arcu vestibulum ridiculus nec at facilisis. Mattis lorem porttitor ullamcorper rutrum condimentum at congue. Quam lacus eu scelerisque aliquam. Cras sed elementum scelerisque ut vitae dolor ipsum nisl viverra. Vel tristique platea adipiscing elementum commodo. Neque pretium molestie quis cursus cras vestibulum amet. Lacus mus eu mus tortor tristique urna lacinia nec ultricies.",
      "Sed pellentesque nunc quam praesent porttitor velit ultrices. Malesuada orci nullam risus odio elementum. Malesuada vitae laoreet neque viverra tellus fringilla mattis faucibus. Eget quam id a quisque vel tempor montes enim. Tempor vulputate mauris nec morbi porta auctor nibh auctor. Vestibulum nisi ipsum a amet maecenas. Tempor cum eget in aliquam.",
    ],
  };
  const accItems1 = [
    {
      id: 1,
      title: "Webinars",
      content: "Webinars",
    },
    {
      id: 2,
      title: "Global Statement on Climate Change",
      content: "Global Statement on Climate Change",
    },
    {
      id: 3,
      title: "Blog Posts",
      content: "Blog Posts",
    },
    {
      id: 4,
      title: "Tools & Resources",
      content: "Tools & Resources",
    },
  ];
  const accItems2 = [
    {
      id: 1,
      title: "Mental Health Awareness",
      content: "Mental Health Awareness",
    },
    {
      id: 2,
      title: "Pro-Bono Coaching & Mentoring",
      content: "Pro-Bono Coaching & Mentoring",
    },
    {
      id: 3,
      title: "Culture, Talent and Inclusion (CTI)",
      content: "Culture, Talent and Inclusion (CTI)",
    },
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
          text: "ESG",
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
            Environmental, social, & governance
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
                title="Coaching & Climate Change"
                texts={textContentData["Coaching & Climate Change"]}
              />

              <AccordionGroup items={accItems1} />
            </div>
            <div className="flex flex-col gap-12">
              <TextContentSection
                title="Comittment to Change"
                texts={textContentData["Comittment to Change"]}
              />

              <AccordionGroup items={accItems2} />
              <Button
                className="max-w-fit"
                outline
                variant={"default"}
                btnType={"primary"}
                Icon={<Icon name="download" className="text-[20px]" />}
              >
                Download Strategic Priorities
              </Button>
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
