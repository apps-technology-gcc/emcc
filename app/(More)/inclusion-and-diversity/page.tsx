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
import SidebarMenu from "@/src/components/common/SideBarMenu";

import ALogo from "@/public/A_logo.svg";
import ICFLogo from "@/public/icf_logo.svg";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import SectionTitle from "@/src/components/common/SectionTitle";
import AccordionGroup from "@/src/components/common/AccordionGroup";

import MoreAboutUs from "@/src/components/common/MoreAboutUs";
import sqricon from "@/public/sqricon.svg";
import Tag from "@/src/components/ui/elements/Tags";
import { Text, textVariants } from "@/src/components/ui/elements/Text";
import BulletText from "@/src/components/ui/elements/BulletText";
import ResourceCard from "@/components/common/ResourceCard";
import ResourceImg from "@/public/resource-img.png";
import ApplyBoard from "@/src/components/common/ApplyBoard";
import FrameWorkImg from "@/public/framework.png";
import CtgImg from "@/public/category.png";
import MemberBoard from "@/src/components/common/MemberBoard";
import RelatedResourceGroup from "@/src/components/common/RelatedResourceGroup";
import GlobalCodeEthicsImg from "@/public/global-ethics-img.png";
import Link from "@/src/components/ui/elements/Link";
import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";
import { cn } from "@/src/lib/utils";
import InclusiveImg from "@/public/inclusive_img.png";
const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const menuData = [
    {
      title: "EMCC Research",
      menuColor: "pink-400",

      links: [
        {
          text: "AI & Digital",
          href: "/ai-digital",
        },
        {
          text: "Climate Action & Sustainability",
          href: "/climate-action-and-sustainability",
        },
        {
          text: "Inclusion & Diversity ",
          href: "/inclusion-and-diversity ",
        },
        {
          text: "Skills Agenda for Europe",
          href: "/skills-agenda-for-europe",
        },
        {
          text: "Culture, Talent and Inclusion (CTI)",
          href: "/cti",
        },
      ],
    },
  ];

  const classess =
    "from-[#BE4FEE] to-[#883BFE] from-[#5340FFCC] to-[#BE38F3] from-[#00CCC6] to-[#BE38F3]";
  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="Leadership in Action"
          description="Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla odio id tortor felis suspendisse porta placerat rhoncus. Vestibulum semper vitae pellentesque fames quam purus nec faucibus porttitor."
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Leadership in Action",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-[auto_370px] gap-16 min-h-screen">
          <div className="flex flex-col gap-12">
            <TextContentSection title="Climate Action & Sustainability" />
            <SectionTitleWithDetails
              title="EMCC Global – Inclusion, Diversity and Equality (I,D&E) Statement"
              texts={[
                "This document is a statement of EMCC’s understanding of inclusion, diversity, and equality and what the implications are for EMCC organisations and for our practitioner and corporate members. The definitions, the scope of the concepts, and the suggested implications, are all permitted or constrained by the parameters of our Vision and Values and Global Ethics.",
              ]}
            />
            <SectionTitleWithDetails
              title="Context"
              texts={[
                "The EMCC’s purpose is to develop, promote, and set the expectation of best practice in mentoring, coaching, and supervision globally for the benefit of society.  We recognise that there are different traditions, cultural practices, legal frameworks, and history within and between member regions and countries.",
                "We believe that the diversity of the EMCC Family is a major strength. And, by being more conscious regarding the implications of inclusion, diversity, and equality for EMCC members, volunteers, employees, directors, and our boards, we will better serve our Purpose, and our Vision to be the ‘go to’ body in mentoring, coaching, and supervision.",
              ]}
            />
            <SectionTitleWithDetails
              title="Definition"
              texts={[
                "Inclusion, diversity, and equality, are different concepts. Inclusion, diversity, and equality can each be present, or missing in an organisation or team, independently of the other.",
                "Inclusion is an emotion, influenced by your mindset: Inclusion is effected when people feel respected, valued, trusted, safe, have a sense of belonging, and are able to be their best self.",
                "Diversity is difference.  Our differences include, but are not limited to, abilities, age, appearance, career, clothes, culture, disability, education, ethnicity, experience, gender, health, interests, marital status, nationality, parental status, philosophy, political views, religion, sexual identity, socio-economic background, thought processes, tribes and work experience. Some of these differences are permanent and some may change and shift over time. Our differences are what makes us unique.",
                "Equality is treating everyone equally well. In practice this means that if we are to help individuals be, and do their best, we are likely to be treating everyone differently – if only slightly, because we are all unique. Treating everyone equally well, requires us to respond to people, having regard to their differences; not regardless oftheir differences.",
              ]}
            />
            <SectionTitleWithDetails
              title="I,D&E Vision"
              texts={[
                "Our vision is that the EMCC Family is an inclusive community in which every member, individual and corporate, feels respected, valued, trusted, safe, has a sense of belonging and can be their best self and do their best work for the benefit of society.",
              ]}
            />
            <SectionTitleWithPoints
              title="I,D&E Mission"
              texts={[
                {
                  text: "Demystify the Inclusion, Diversity and Equality Agenda – The IDEA",
                },
                {
                  text: "Help the EMCC Family to become even more inclusive and diverse",
                },
                {
                  text: "Support individual and corporate members, and accredited training providers:",
                  children: [
                    "To become more inclusive practitioners so that the practice of mentoring, coaching and supervision helps workplaces and communities to be more inclusive and to reap the benefits of diversity",
                  ],
                },
                {
                  text: "To be more confident in demonstrating, through their practice, their belief that…",
                  children: [
                    "everybody matters",
                    "we are all different",
                    "diversity adds value",
                    "inclusion is an emotion",
                  ],
                },
                {
                  text: "To explore more ways of enabling their clients to understand that:",
                  children: [
                    "It’s vital to treat everybody equally well",
                    "we only get maximum, consistent value from diversity when individuals feel included",
                    "inclusive mentoring, coaching and supervision enables clients to feel respected, trusted, safe, valued have a sense of belonging and are therefore able to be their best self and do their best work",
                  ],
                },
                {
                  text: "To consistently develop themselves regarding the Inclusion, Diversity and Equality agenda by:",
                  children: [
                    "regularly seeking feedback from colleagues, with particular reference to any bias their behaviour may be revealing",
                    "asking “what did I believe about her/him/them, before I had that meeting/session? Where did that belief come from? What evidence do I have?”",
                  ],
                },
              ]}
            />

            <Image src={InclusiveImg} className="w-full" alt="inclusive_img" />

            <div className="flex flex-col gap-5">
              <Text variant={"card_title_large"}>Implication for</Text>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-2.5">
                  <div className="h-[26px] flex items-center">
                    <div className="min-h-2.5 min-w-2.5 bg-green-500"></div>
                  </div>
                  <Text variant={"body"} className="text-neutral">
                    EMCC Global to enable all members of the EMCC family to feel
                    included (respected, valued, trusted, safe and having a
                    sense of belonging) by regularly reviewing the extent to
                    which the Five Pillars – managing inclusion, combatting
                    discrimination, promoting equal opportunity, facilitating
                    access and valuing diversity are being lived out by EMCC
                    Global leaders, staff and volunteers.
                  </Text>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="h-[26px] flex items-center">
                    <div className="min-h-2.5 min-w-2.5 bg-green-500"></div>
                  </div>
                  <Text variant={"body"} className="text-neutral">
                    EMCC Regional and Country Organisation Boards to enable
                    their members, employees and volunteers to feel included
                    (respected, valued, trusted, safe and having a sense of
                    belonging) by regularly reviewing the extent to which the
                    Five Pillars – managing inclusion, combatting
                    discrimination, promoting equal opportunity, facilitating
                    access and valuing diversity are being lived out within
                    their organisation.
                  </Text>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="h-[26px] flex items-center">
                    <div className="min-h-2.5 min-w-2.5 bg-green-500"></div>
                  </div>
                  <Text variant={"body"} className="text-neutral">
                    EMCC Accredited Training Providers to ensure all programme
                    participants feel included (respected, valued, trusted, safe
                    and having a sense of belonging) and include in their
                    content, the need for, and tools to support, mentors,
                    coaches and supervisors to see why managing inclusion,
                    combatting discrimination, promoting equal opportunity,
                    facilitating access and valuing diversity matter, and how
                    they as mentors, coaches and supervisors can better
                    facilitate this.
                  </Text>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="h-[26px] flex items-center">
                    <div className="min-h-2.5 min-w-2.5 bg-green-500"></div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Text variant={"body"} className="text-neutral">
                      EMCC Mentors, Coaches And Supervisors to…
                    </Text>
                    <BulletText
                      texts={[
                        "help clients to better understand the rationale for creating and maintaining inclusive communities",
                        "help clients to see why managing inclusion, confronting discrimination, promoting equal opportunity, facilitating access and valuing diversity are key to maintaining inclusive communities and why that matters",
                        "to help clients better understand their role regarding the above when you coach/mentor/supervise them as they reflect on their behaviour, think about their thinking, review their goals or explore what actions they could take.",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Section */}
            <SectionTitleWithDetails
              title="Implication for"
              texts={[
                "EMCC Global to enable all members of the EMCC family to feel included (respected, valued, trusted, safe and having a sense of belonging) by regularly reviewing the extent to which the Five Pillars – managing inclusion, combatting discrimination, promoting equal opportunity, facilitating access and valuing diversity are being lived out by EMCC Global leaders, staff and volunteers.",
              ]}
            />
          </div>
          <div className="">
            <div className="sticky flex flex-col gap-12 top-4 max-h-[calc(100vh)] overflow-y-scroll scrollbar-hide">
              <SidebarMenu menuData={menuData} />
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="transparent" className="!pt-0">
        <RelatedResourceGroup title="Related Resources" />
      </Section>
    </>
  ) : null;
};

const SectionTitleWithDetails = ({
  title,
  texts,
}: {
  title: string;
  texts: string[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Text variant={"card_title_large"}>{title}Core Values We Embrace</Text>
      {texts.map((text, index) => (
        <Text key={index} variant={"body"}>
          {text}
        </Text>
      ))}
    </div>
  );
};
const SectionTitleWithPoints = ({
  title,
  texts,
}: {
  title: string;
  texts: {
    text: string;
    children?: string[];
  }[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Text variant={"card_title_large"}>{title}</Text>
      <ul className="ml-5">
        {texts.map((item, index) => (
          <li
            key={index}
            className={cn(
              textVariants({ variant: "body" }),
              "text-neutral list-disc"
            )}
          >
            {item.text}
            <ul className="ml-5">
              {item?.children &&
                item.children.map((item, index) => (
                  <li
                    key={index}
                    className={cn(
                      textVariants({ variant: "body" }),
                      "text-neutral list-disc"
                    )}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
