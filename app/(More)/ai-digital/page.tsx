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
import AccordionGroup from "@/app/(About)/components/AccordionGroup";

import MoreAboutUs from "@/src/components/common/MoreAboutUs";
import sqricon from "@/public/sqricon.svg";
import Tag from "@/src/components/ui/elements/Tags";
import { Text } from "@/src/components/ui/elements/Text";
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
            <div className="flex flex-col gap-8">
              <TextContentSection
                title="AI & Digital"
                texts={[
                  "EMCC Global’s Centre for Excellence on AI & Digital aims to serve as a forum where challenging conversations can happen. This task force strives to set the standards, create guidelines and conduct research, as well as inform and upskill the field on coaching technologies.",

                  "The Centre for Excellence on AI & Digital work in collaboration with EMCC Global’s other Centres of Excellence, such as accreditation, ethics, and research, to cover hot topics and address needs in the digital coaching field, including",
                ]}
              />
              <BulletText
                texts={[
                  "The broad landscape for AI & Digital",
                  "Ethical Considerations",
                  "Standards for Digital Platform Providers",
                ]}
              />
            </div>
            <div className="border-green-400 border-l-4 bg-green-50 p-6 gap-5 flex flex-col">
              <Text variant={"card_title_large"}>
                New Standards for Digital Providers: Version 1.0 Guidance
                Released
              </Text>
              <Text variant={"body"}>
                Discover the comprehensive Version 1.0 Guidance, developed by
                the EMCC Global Centres for Excellence on AI & Digital and
                Ethics. This document is essential for providers of coaching,
                mentoring, and supervision who utilize technology and AI.
              </Text>
              <Link href="#" icon="east" iconPosition="right">
                Read the Full Document
              </Link>
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

export default page;
