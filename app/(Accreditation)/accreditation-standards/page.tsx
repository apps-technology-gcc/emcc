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
            ACCREDITATION
          </Text>
          <Text variant={"body"} className="text-white">
            The EMCC exists to develop, promote, and set the expectation of best
            practice in mentoring, coaching, and supervision globally for the
            benefit of society
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
              <SectionTitle title="Accreditation for Individuals" />
              <div className="flex flex-col gap-8">
                <div className="flex items-center">
                  <NavLink
                    variant={"tab-2"}
                    className="text-white bg-neutralDark border-neutralDark"
                    href="#"
                  >
                    Professional Practice
                  </NavLink>
                  <NavLink variant={"tab-2"} href="#">
                    Team Coaching
                  </NavLink>
                  <NavLink variant={"tab-2"} href="#">
                    Program Management
                  </NavLink>
                </div>
                <div className="flex flex-col gap-12">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-8">
                        <NavLink variant={"navlink-1"} href="#">
                          Coaching
                        </NavLink>
                        <NavLink variant={"navlink-1"} href="#">
                          Mentoring
                        </NavLink>
                        <NavLink variant={"navlink-1"} href="#">
                          Supervision
                        </NavLink>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <Text variant={"card_title_small"}>
                        EIA - Individual Accreditation
                      </Text>
                      <div className="flex items-start gap-8">
                        <div className="flex flex-col gap-5">
                          <Text variant={"body"} className="text-neutral">
                            Lorem ipsum dolor sit amet consectetur. Adipiscing
                            orci mauris amet suspendisse cras placerat et id.
                            Ultrices ullamcorper justo vitae semper urna. Ipsum
                            pellentesque risus tristique eget. Feugiat malesuada
                            arcu nisl ultrices morbi condimentum est. Quisque
                            nec neque adipiscing id.
                          </Text>
                          <Link
                            iconPosition="right"
                            icon={<Icon name="east" className="text-[20px]" />}
                            variant={"primary"}
                            href="/accreditation-inner"
                          >
                            Learn More
                          </Link>
                        </div>
                        <Image
                          src={CoachingImg1}
                          width={150}
                          height={60}
                          alt="coaching_img"
                          className="h-[60px] w-auto"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <Text variant={"card_title_small"}>
                        EIA - Individual Accreditation
                      </Text>
                      <div className="flex items-start gap-8">
                        <div className="flex flex-col gap-5">
                          <Text variant={"body"} className="text-neutral">
                            Lorem ipsum dolor sit amet consectetur. Adipiscing
                            orci mauris amet suspendisse cras placerat et id.
                            Ultrices ullamcorper justo vitae semper urna. Ipsum
                            pellentesque risus tristique eget. Feugiat malesuada
                            arcu nisl ultrices morbi condimentum est. Quisque
                            nec neque adipiscing id.
                          </Text>
                          <Link
                            iconPosition="right"
                            icon={<Icon name="east" className="text-[20px]" />}
                            variant={"primary"}
                            href="/accreditation-inner"
                          >
                            Learn More
                          </Link>
                        </div>
                        <Image
                          src={CoachingImg1}
                          width={150}
                          height={60}
                          alt="coaching_img"
                          className="h-[60px] w-auto"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <Text variant={"card_title_small"}>
                        EIA - Individual Accreditation
                      </Text>
                      <div className="flex items-start gap-8">
                        <div className="flex flex-col gap-5">
                          <Text variant={"body"} className="text-neutral">
                            Lorem ipsum dolor sit amet consectetur. Adipiscing
                            orci mauris amet suspendisse cras placerat et id.
                            Ultrices ullamcorper justo vitae semper urna. Ipsum
                            pellentesque risus tristique eget. Feugiat malesuada
                            arcu nisl ultrices morbi condimentum est. Quisque
                            nec neque adipiscing id.
                          </Text>
                          <Link
                            iconPosition="right"
                            icon={<Icon name="east" className="text-[20px]" />}
                            variant={"primary"}
                            href="/accreditation-inner"
                          >
                            Learn More
                          </Link>
                        </div>
                        <Image
                          src={CoachingImg1}
                          width={150}
                          height={60}
                          alt="coaching_img"
                          className="h-[60px] w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Tag
              icon={<Icon name="download" className="text-[16px]" />}
              iconPosition="right"
              className="!bg-primary-200 !text-neutralDark max-w-fit"
              style={"style2"}
            >
              Download EMCC Coaching Framework
            </Tag>
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
        <div className="flex mt-20 flex-col gap-12">
          <SectionTitle title="Related Resources" />
          <div className="flex items-start gap-8">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  <Tag style="style1" className="max-w-fit" variant="tag2">
                    Podcast
                  </Tag>

                  <Text variant="resource_header" className="text-neutralDark">
                    Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst
                  </Text>
                </div>
                <Text variant="body" className="text-neutralDark">
                  Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst aliquam
                  pretium imperdiet molestie placerat risus. Mi risus accumsan
                  orci vel.
                </Text>
              </div>
              <TextLink title="Read More" />
            </div>
            <div className="h-full min-h-[250px] w-[1px] bg-background"></div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  <Tag style="style1" className="max-w-fit" variant="tag2">
                    Webinar
                  </Tag>

                  <Text variant="resource_header" className="text-neutralDark">
                    Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst
                  </Text>
                </div>
                <Text variant="body" className="text-neutralDark">
                  Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst aliquam
                  pretium imperdiet molestie placerat risus. Mi risus accumsan
                  orci vel.
                </Text>
              </div>
              <TextLink title="Details" />
            </div>
            <div className="h-full  min-h-[250px] w-[1px] bg-background"></div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  <Tag style="style1" className="max-w-fit" variant="tag2">
                    White Paper
                  </Tag>

                  <Text variant="resource_header" className="text-neutralDark">
                    Pulvinar enim dictumst Lectus ac rhoncus volutpat hac.{" "}
                  </Text>
                </div>
                <Text variant="body" className="text-neutralDark">
                  Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst aliquam
                  pretium imperdiet molestie placerat risus. Mi risus accumsan
                  orci vel.
                </Text>
              </div>
              <TextLink title="Learn More" />
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
