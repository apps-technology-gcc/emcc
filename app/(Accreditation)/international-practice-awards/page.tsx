"use client";
import Banner from "@/src/components/common/Banner";
import { Text, textVariants } from "@/src/components/ui/elements/Text";
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
import { cn } from "@/src/lib/utils";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import sqricon from "@/public/sqricon.svg";
import PresidentImg from "@/public/president.png";
import FreelancerImg from "@/public/freelancer.png";
import MemberCard from "@/src/components/card/MemberCard";
import SectionLink from "@/src/components/common/SectionLink";
import AboutGlobalImg from "@/public/about-global.png";
// import Guiding from "../../components/Guiding";
// import TextContentSection from "../../components/TextContentSection";
// import AccordionGroup from "../../components/AccordionGroup";
import EmccFlag from "@/public/emcc-flag.svg";
import flag from "@/public/flag.png";
import NavLink from "@/src/components/ui/elements/NavLink";
import CoachingImg1 from "@/public/coaching_logo_1.png";
import CoachingImg2 from "@/public/coaching_logo_2.png";
import CoachingImg3 from "@/public/coaching_logo_3.png";
import Link from "@/src/components/ui/elements/Link";
import Tag from "@/src/components/ui/elements/Tags";
import { TextLink } from "@/src/components/ui/elements/Additional";
import ArticleImg from "@/public/article.png";
import TextContentSection from "@/src/components/common/TextContentSection";
import Divider from "@/src/components/ui/elements/Divider";
const page = () => {
  const bredList = [
    {
      name: "Accreditation",
    },
    {
      name: "For Individuals",
      href: "#",
    },
  ];

  const guidingValues = [
    {
      id: 1,
      title: "Pioneering Spirit",
      description:
        "We are among the first two organizations to introduce accreditation based on competency framework...",
    },
    {
      id: 2,
      title: "Excellence",
      description:
        "Proprietary access to academic & research bodies. Access to diverse cultures & methodologies...",
    },
    {
      id: 3,
      title: "Strong Academic Research",
      description:
        "EMCC works towards professionalism of Mentoring and Coaching based on research and best practice...",
    },
  ];
  const textContentData = {
    "The Work We Do": [
      {
        id: 1,
        content:
          "EMCCs vision is to be the ‘go to body’ for setting the highest quality standards in Mentoring and Coaching. In this section, we set out the standards that we believe you should use as a guide, whether you are a coach, mentor, coach or mentor supervisor, or trainer or programme provider. It comprises competences, CPD guidance, supervision competences and guidance, the Global Code of Ethics, diversity and regulation. It aims to answer some important questions:",
      },
      {
        id: 2,
        content:
          "We currently have two individual membership categories so that you can select the membership which is right for you and that best matches your experience, expertise and extent of your practice.",
      },
      {
        id: 3,
        content:
          "See below for a brief description of each category. Further down the page is a guide to help you to map your coaching and mentoring capability to decide the category for you. Once you have made your selection click on the appropriate membership category listed in the box on the right of this page.",
      },
      {
        id: 4,
        content:
          "This will tell you more about the membership benefits, the price and take you to the joining application form",
      },
    ],
    "Our Strategy": [
      {
        id: 1,
        content:
          "EMCCs vision is to be the ‘go to body’ for setting the highest quality standards in Mentoring and Coaching. In this section, we set out the standards that we believe you should use as a guide, whether you are a coach, mentor, coach or mentor supervisor, or trainer or programme provider. It comprises competences, CPD guidance, supervision competences and guidance, the Global Code of Ethics, diversity and regulation. It aims to answer some important questions:",
      },
      {
        id: 2,
        content:
          "We currently have two individual membership categories so that you can select the membership which is right for you and that best matches your experience, expertise and extent of your practice.",
      },
      {
        id: 3,
        content:
          "See below for a brief description of each category. Further down the page is a guide to help you to map your coaching and mentoring capability to decide the category for you. Once you have made your selection click on the appropriate membership category listed in the box on the right of this page.",
      },
      {
        id: 4,
        content:
          "This will tell you more about the membership benefits, the price and take you to the joining application form.",
      },
    ],
  };

  const accordionData1 = [
    {
      id: 1,
      title: "Our Founders",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 2,
      title: "Our History",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 3,
      title: "What We Do",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 4,
      title: "Our Mission",
      content: "This is the content<br/>This is another paragraph",
    },
  ];
  const accordionData2 = [
    {
      id: 1,
      title: "Our Strategic Priorities",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 2,
      title: "Our Partnerships",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 3,
      title: "Find Out More",
      content: "This is the content<br/>This is another paragraph",
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
            International Practice Awards (IPA)
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
      <Section bgColor="white" className="">
        <div className="grid grid-cols-11 gap-16">
          <div className="col-span-7 flex flex-col gap-20">
            <div className="flex flex-col gap-12">
              <TextContentSection
                title="Awards"
                texts={[
                  {
                    id: 1,
                    content:
                      "Lorem ipsum dolor sit amet consectetur. Nec porta scelerisque id consectetur lectus aliquet et ullamcorper. Pulvinar lorem at condimentum auctor bibendum tristique vestibulum sagittis fermentum. Augue eget pretium viverra molestie sem risus justo luctus. At eu interdum feugiat sem tellus adipiscing. Nibh quis lectus ullamcorper dictumst iaculis id pellentesque donec.",
                  },
                  {
                    id: 2,
                    content:
                      "Mauris tristique fringilla netus et sit enim blandit sit. Condimentum at posuere felis donec et viverra ut. Ultricies tempor porttitor pretium interdum dolor. Quisque nunc imperdiet in vulputate vulputate blandit amet nibh facilisis.",
                  },
                ]}
              />
              <div className=" flex flex-col p-5 bg-green-50 border-l-2 border-green-500">
                <Text variant={"card_title_large"} className="text-neutral">
                  Winners of EMCC Global Coaching, Mentoring, Supervision, and
                  Team Coaching Awards
                </Text>
              </div>
              <div className="flex border-b border-border items-center gap-5 justify-between">
                <NavLink
                  className="text-primary-600 border-primary-600"
                  variant={"navlink-2"}
                  href="#"
                >
                  2024
                </NavLink>
                <NavLink variant={"navlink-2"} href="#">
                  2023
                </NavLink>
                <NavLink variant={"navlink-2"} href="#">
                  2022
                </NavLink>
                <NavLink variant={"navlink-2"} href="#">
                  2021
                </NavLink>
                <NavLink variant={"navlink-2"} href="#">
                  2020
                </NavLink>
                <NavLink variant={"navlink-2"} href="#">
                  2019
                </NavLink>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                  <Text variant={"card_title_large"}>Coaching Award</Text>
                  <Icon
                    name="emoji_events"
                    className="text-[24px] text-green-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Clare Smale
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      Electricity Supply Board
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Maria Travers
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      Electricity Supply Board
                    </Text>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                  <Text variant={"card_title_large"}>Coaching Award</Text>
                  <Icon
                    name="emoji_events"
                    className="text-[24px] text-green-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Clare Smale
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      Electricity Supply Board
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Maria Travers
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      Electricity Supply Board
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Clare Smale
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      Electricity Supply Board
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Maria Travers
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      Electricity Supply Board
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Clare Smale
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      Electricity Supply Board
                    </Text>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                  <Text variant={"card_title_large"}>Coaching Award</Text>
                  <Icon
                    name="emoji_events"
                    className="text-[24px] text-green-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Clare Smale
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Maria Travers
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col gap-5">
                    <Tag style={"style3"} variant={"tag2"}>
                      Special President’s Award
                    </Tag>
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Clare Smale
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Tag style={"style3"} variant={"tag2"}>
                      Special recognition
                    </Tag>
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Maria Travers
                    </Text>
                    <Text variant={"body"} className="border-neutral ">
                      United Kingdom
                    </Text>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                  <Text variant={"card_title_large"}>Coaching Award</Text>
                  <Icon
                    name="emoji_events"
                    className="text-[24px] text-green-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col gap-5">
                    <Text
                      variant={"card_title_small"}
                      className="border-neutralDark border-b-[0.5px] max-w-fit"
                    >
                      Clare Smale
                    </Text>

                    <Text variant={"body"} className="border-neutral ">
                      Electricity Supply Board
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-12">
              <div className="">
                <div className="p-5 mb-[17px] bg-pink-400">
                  <Text
                    variant={"side_nav_header"}
                    className="text-neutralDark"
                  >
                    About Accreditation
                  </Text>
                </div>
                <div className="flex flex-col ">
                  <div className="border-b border-border">
                    <AccordionList
                      title="About Accreditation"
                      listItems={[
                        "How to get EMCC Accreditation",
                        "Five Day - Fast Track",
                        "Accreditation Awards",
                        "How to apply for Accreditation",
                        "Smart Certification",
                        "For Organisations",
                        "For Trade & Training Providers",
                      ]}
                    />
                  </div>
                  <div className="border-b border-border">
                    <AccordionList
                      title="Accreditation Standards"
                      listItems={[
                        "How to get EMCC Accreditation",
                        "Five Day - Fast Track",
                        "Accreditation Awards",
                        "How to apply for Accreditation",
                        "Smart Certification",
                        "For Organisations",
                        "For Trade & Training Providers",
                      ]}
                    />
                  </div>
                  <div className="border-b border-border">
                    <AccordionList
                      title="Accreditation Pathways"
                      listItems={[
                        "How to get EMCC Accreditation",
                        "Five Day - Fast Track",
                        "Accreditation Awards",
                        "How to apply for Accreditation",
                        "Smart Certification",
                        "For Organisations",
                        "For Trade & Training Providers",
                      ]}
                    />
                  </div>
                  <NavLink2
                    className="flex mt-5 items-center justify-between w-full"
                    href="#"
                    variant={"eight"}
                  >
                    Competency Frameworks
                    <Icon name="chevron_right" className="text-[16px]" />
                  </NavLink2>
                </div>
              </div>
              <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
                <Text variant={"card_title_large"}>Suggested Articles</Text>
                <div className="flex items-center gap-5">
                  <div className="min-w-20 h-20">
                    <Image
                      className="rounded-md w-full h-auto"
                      src={ArticleImg}
                      width={80}
                      height={80}
                      alt="icon"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-5">
                    <Text variant={"card_title_small"}>
                      Accreditation V's Certification: What's the difference?
                    </Text>
                    <Tag style="style1" className="max-w-fit" variant="tag2">
                      Article
                    </Tag>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="min-w-20 h-20">
                    <Image
                      className="rounded-md w-full h-auto"
                      src={ArticleImg}
                      width={80}
                      height={80}
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <Text variant={"card_title_small"}>
                      Becoming an Approved Body for EMCC Accreditation
                    </Text>
                    <Tag style="style1" className="max-w-fit" variant="tag2">
                      Article
                    </Tag>
                  </div>
                </div>
              </div>
            </div>
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
        withMedia ? "py-5 border-b border-border" : "py-5",
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
