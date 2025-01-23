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
import { cn } from "@/src/lib/utils";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import sqricon from "@/public/sqricon.svg";
import PresidentImg from "@/public/president.png";
import FreelancerImg from "@/public/freelancer.png";
import MemberCard from "@/src/components/card/MemberCard";
import SectionLink from "@/src/components/common/SectionLink";
import AboutGlobalImg from "@/public/about-global.png";
import Guiding from "../../components/Guiding";
import TextContentSection from "../../components/TextContentSection";
import AccordionGroup from "../../components/AccordionGroup";
import EmccFlag from "@/public/emcc-flag.svg";
import flag from "@/public/flag.png";

const page = () => {
  const bredList = [
    {
      name: "About Us",
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
        <div className="grid grid-cols-11 gap-16">
          <div className="col-span-7 flex flex-col gap-20">
            <div className="flex flex-col gap-12">
              <TextContentSection
                title="The Work We Do"
                texts={textContentData["The Work We Do"]}
              />

              <AccordionGroup items={accordionData1} />
              <Image src={AboutGlobalImg} width={450} height={500} alt="path" />
            </div>
            <Guiding
              sectionTitle=" Our Guiding Values"
              values={guidingValues}
            />
            <div className="flex flex-col gap-12">
              <TextContentSection
                title="Our Strategy"
                texts={textContentData["Our Strategy"]}
              />
              <AccordionGroup items={accordionData2} />

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
            <div className="flex flex-col gap-12">
              <SectionTitle title="Our Region" />
              <div className="flex flex-col gap-8">
                <Text variant={"body"} className="text-neutral">
                  Lorem ipsum dolor sit amet consectetur. Pharetra est nisi nunc
                  condimentum. Risus pharetra nunc suspendisse fermentum leo
                  faucibus. Quis faucibus sed placerat suscipit facilisis
                  eleifend.
                </Text>
              </div>
              <Image
                alt="world_map"
                width={736}
                height={314}
                className=""
                src={world_map}
              />
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Councils</Text>
                <div className="flex items-center gap-5 gap-y-[14px] flex-wrap">
                  <div className="min-w-[220px] flex items-center gap-2.5">
                    <Image
                      width={24}
                      height={16}
                      alt="flag"
                      className=""
                      src={EmccFlag}
                    />
                    <Text variant={"placeholder"}>United Arab Emirates</Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Councils</Text>
                <div className="flex items-center gap-5 gap-y-[14px] flex-wrap">
                  <div className="min-w-[220px] flex items-center gap-2.5">
                    <Image
                      width={24}
                      height={16}
                      alt="flag"
                      className=""
                      src={flag}
                    />
                    <Text variant={"placeholder"}>United Arab Emirates</Text>
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
                    About EMCC ME
                  </Text>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="border-b border-border">
                    <AccordionList
                      title="Basic Accordion"
                      listItems={["Item 1", "Item 2", "Item 3"]}
                    />
                  </div>
                  <NavLink2
                    className="flex items-center justify-between w-full"
                    href="#"
                    variant={"eight"}
                  >
                    Board & Governance
                    <Icon name="chevron_right" className="text-[16px]" />
                  </NavLink2>
                  <NavLink2
                    className="flex items-center justify-between w-full"
                    href="#"
                    variant={"eight"}
                  >
                    Leadership & Organisation
                    <Icon name="chevron_right" className="text-[16px]" />
                  </NavLink2>
                </div>
              </div>
              <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
                <Text variant={"card_title_large"}>More About Us</Text>
                <div className="flex items-center gap-5">
                  <Image src={sqricon} width={50} height={40} alt="icon" />
                  <div className="flex flex-col items-start gap-5">
                    <Text variant={"card_title_small"}>ESG</Text>
                    <Text variant={"body"}>
                      {`Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`.length > 63
                        ? `Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`.slice(0, 62) + "..."
                        : `Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`}
                    </Text>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Image src={sqricon} width={50} height={40} alt="icon" />
                  <div className="flex flex-col items-start gap-5">
                    <Text variant={"card_title_small"}>Research</Text>
                    <Text variant={"body"}>
                      {`Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`.length > 63
                        ? `Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`.slice(0, 62) + "..."
                        : `Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
                <Text variant={"card_title_large"}>
                  Apply to Join Our Board
                </Text>
                <Text variant={"body"}>
                  Lorem ipsum dolor sit amet consectetur. Leo leo risus varius
                  gravida tellus. Aliquet mi sit tristique mauris egestas
                  molestie volutpat.
                </Text>
                <Button variant={"default"} btnType={"primary"} outline>
                  Register Your Interest
                </Button>
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
