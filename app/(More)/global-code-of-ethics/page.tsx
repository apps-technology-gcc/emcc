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
const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const menuData = [
    {
      title: "EMCC Research",
      menuColor: "pink-400",

      links: [
        {
          text: "Research",
          href: "/research-agenda",
        },
        {
          text: "Consultation",
          href: "/research-webinars",
        },
        {
          text: "International Coaching Journal (ICJ)",
          href: "/research-and-impact-posters",
        },
        {
          text: "Leadership in Action",
          href: "/funded-research-programs",
        },
        {
          text: "Global Code of Ethics",
          href: "/global-code-of-ethics",
        },
        {
          text: "International Practice Awards (IPA)",
          href: "/industry-journals",
        },
      ],
    },
  ];

  const accordionData = [
    {
      id: 1,
      title: "EMCC Research Vision",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 2,
      title: "What is research?",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 3,
      title: "Importance of Research",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 3,
      title: "Practitioners and Research",
      content: "This is the content<br/>This is another paragraph",
    },
  ];
  const classess =
    "from-[#BE4FEE] to-[#883BFE] from-[#5340FFCC] to-[#BE38F3] from-[#00CCC6] to-[#BE38F3]";
  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="The Global Code of Ethics"
          description="Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla odio id tortor felis suspendisse porta placerat rhoncus. Vestibulum semper vitae pellentesque fames quam purus nec faucibus porttitor."
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Global Code of Ethics",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-[auto_370px] gap-16 min-h-screen">
          <div className="flex flex-col gap-12">
            <TextContentSection
              title="The Global Code of Ethics"
              texts={[
                "The Global Code of Ethics supports excellence in the development of coaching, mentoring, and supervision and it raises the standards of practice of their members. It was created by two professional associations in February 2016 – Association for Coaching (‘AC’) and EMCC.",

                "<u>Click here</u> to see a full list of the professional bodies who have become signatories",
                "The code has a wider impact by informing the work of people who may not be members of the signatory bodies but who practice coaching, mentoring, supervision, and training related activities or are sponsors, users, beneficiaries and purchasers of such services, anywhere around the world.",

                "The code has recently been updated to the third version (July 2021) and is currently available Chinese (Mandarin), English, Czech, Danish, French, Hungarian, Polish, Portuguese, and Spanish.  We are working on translating it into other languages (Arabic, Dutch, Greek, Indian (Hindi), Italian, Romanian, and Turkish).  If you would like to see the code in your language, please contact us <u>administrator@emccglobal.org</u>",
                "You can find out more about the Code <u>here</u> and also download a simple copy of a pdf document of the Global Code of Ethics in your language <u>here</u>.",
              ]}
            />
            <Image
              src={GlobalCodeEthicsImg}
              width={240}
              height={60}
              alt="Global Code of Ethics"
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

export default page;
