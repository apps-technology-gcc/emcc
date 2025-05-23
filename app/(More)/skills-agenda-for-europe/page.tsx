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

import CommunityImg from "@/public/community.svg";
import MindImg from "@/public/mind.svg";
import EduImg from "@/public/edu.svg";
import StateImg from "@/public/state.svg";
import SkillItem from "@/src/components/common/SkillItem";
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
  const skillsData = [
    {
      icon: MindImg.src, // You'll need to add these icons
      iconAlt: "Hearts and Minds",

      content:
        "The Skills Agenda for Europe should speak to people’s hearts and minds to enable them to deal positively with change. This is best achieved through a bottom-up approach. The practice of leadership, mentoring, coaching, and supervision makes sure that European citizens feel part of the dual transition towards a greener and more digital future, and ensures that change happens intrinsically. Read the ",
      link: {
        text: "EMCC position paper on the the EU Skills Agenda here",
        url: "/documents/position-paper.pdf",
      },
    },
    {
      icon: CommunityImg.src,
      iconAlt: "Sustainable Development",

      content:
        "EMCC is in favor of an inclusive and sustainable EU Skills Agenda that prepares the European workforce for the dual transition through mentoring and coaching. EMCC Accreditation holds lifelong learning, ethics and standards in high regard. EMCC encourages the European Commission to make use of the EMCC methodology of mentoring, coaching, and supervision accreditation to make sure EU policy is backed by evidence-based research and is fit for purpose in",
    },
    {
      icon: EduImg.src,
      iconAlt: "Digital Transition",

      content:
        "The twin digital and green transitions will require reskilling and upskilling of the European workforce. These efforts will be helped by mentoring and coaching programmes. The EMCC leadership, mentoring, and coaching services make sure that people’s motivation for change and well-being is ensured during the major transitions of our time. EMCC helps people not to fear the transitions ahead, but to make the most out of them.",
    },
    {
      icon: StateImg.src,
      iconAlt: "Inclusive Economy",

      content:
        "The updated Skills Agenda for Europe must contribute to an inclusive economy that works for the people. EMCC accredited mentors, coaches, and supervisors across Europe and worldwide contribute to inclusive societies by making sure that every European individual has access to mentoring, coaching, and supervision programmes, programme management, and frameworks to benchmark ‘best practice’. EMCC encourages the Commission and EU Member States to make use of the EMCC local and regional representatives and their strategic partners’ expertise in providing mentoring, coaching, and supervision services in order to implement Europe’s policies and help citizens be ready for the future.",
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
            <TextContentSection title="Skills Agenda for Europe" />
            {skillsData.map((skill, index) => (
              <SkillItem
                key={index}
                icon={skill.icon}
                iconAlt={skill.iconAlt}
                //   backgroundColor={skill.backgroundColor}
                //   borderColor={skill.borderColor}
                content={skill.content}
                link={skill.link}
              />
            ))}
            <div className="flex flex-col gap-5 p-5 border-l-4 border-green-500 bg-green-50">
              <Text variant={"card_title_large"}>
                “It is not the strongest of the species that survives, nor the
                most intelligent, but the one that is most adaptable to change”
              </Text>

              <div className="flex items-center gap-2.5">
                <div className="h-0.5 w-2.5 bg-green-500"></div>
                <Text variant={"body"}>
                  Charles Darwin, Origin of Species, 1859{" "}
                </Text>
              </div>
            </div>
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
