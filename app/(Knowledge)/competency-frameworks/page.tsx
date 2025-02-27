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

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const menuData = [
    {
      title: "Communities of Practice",
      menuColor: "pink-400",

      links: [
        { text: "Global Coaching Mentoring Alliance", href: "/gcma" },
        {
          type: "accordion",
          activeItem: "Working Groups",
          title: "Working Groups",
          listItems: [
            {
              title: "Coach Register",
              href: "/",
            },
            {
              title: "Disciplinary Action",
              href: "/about",
            },
          ],
        },
        { text: "Volunteering & Pro-Bono Coaching", href: "/about" },
        { text: "Working for EMCC", href: "/about" },
      ],
    },
  ];

  const breadcrumb = [
    {
      text: "Communities of Practice",
      href: "/",
    },
    {
      text: "Global Coaching & Mentoring Alliance (GCMA)",
      href: "/",
    },
  ];

  const accordionData2 = [
    {
      id: 1,
      title: "What is the GCMA?",
      content:
        "The GCMA is a global alliance of professional coaching and mentoring organizations working together to advance the coaching profession.",
    },
    {
      id: 2,
      title: "Why was the GCMA established?",
      content:
        "The GCMA was established to provide a unified voice and shared standards for the coaching profession globally.",
    },
    {
      id: 3,
      title: "How will the GCMA behave, and work together?",
      content:
        "The GCMA operates through collaborative partnerships and shared principles among its member organizations.",
    },
    {
      id: 4,
      title: "How can someone submit a query or comment to the GCMA?",
      content:
        "Queries can be submitted through any of the member organizations' channels.",
    },
    {
      id: 5,
      title: "Is the GCMA reaching out to other bodies as well?",
      content:
        "The GCMA actively engages with various professional bodies to expand its global reach and impact.",
    },
    {
      id: 6,
      title: "How will the GCMA ensure it takes a global perspective?",
      content:
        "Through diverse international membership and inclusive decision-making processes.",
    },
    {
      id: 7,
      title: "What are the HR Buyers' views of GCMA?",
      content:
        "HR professionals recognize GCMA as a mark of quality and standards in coaching services.",
    },
    {
      id: 8,
      title: "How does the GCMA define coaching?",
      content:
        "The GCMA provides a comprehensive framework for professional coaching standards and practices.",
    },
    {
      id: 9,
      title: "What is the value of credentialing/accreditation?",
      content:
        "Credentialing ensures quality, professionalism, and adherence to global standards in coaching.",
    },
    {
      id: 10,
      title: "Could you define credentialed/accredited?",
      content:
        "These terms refer to professionals who have met specific standards and requirements set by recognized bodies.",
    },
    {
      id: 11,
      title:
        "What's the role of mentoring in this organisation, beyond coaching?",
      content:
        "Mentoring complements coaching services by providing guidance based on experience and expertise.",
    },
  ];
  const resourcesData = [
    {
      title: "Research",
      description: "Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst",
      downloadUrl: "/path/to/pdf1",
      downloadText: "Download PDF",
      fromColor: "#BE4FEE",
      toColor: "#883BFE",
    },
    {
      title: "Research",
      description: "Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst",
      downloadUrl: "/path/to/pdf2",
      downloadText: "Download PDF",
      fromColor: "#00CCC6",
      toColor: "#BE38F3",
    },
    {
      title: "Research",
      description: "Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst",
      downloadUrl: "/path/to/pdf3",
      downloadText: "Download PDF",
      fromColor: "#5340FFCC",
      toColor: "#BE38F3",
    },
  ];
  const moreAboutUsData = {
    title: "More About Us",
    cards: [
      {
        title: "ESG",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit.",
        icon: sqricon.src, // optional
      },
      {
        title: "Research",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit.",
        icon: sqricon.src, // optional
      },
    ],
  };
  const classess =
    "from-[#BE4FEE] to-[#883BFE] from-[#5340FFCC] to-[#BE38F3] from-[#00CCC6] to-[#BE38F3]";
  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="EMCC Competency Frameworks"
          description="Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla odio id tortor felis suspendisse porta placerat rhoncus. Vestibulum semper vitae pellentesque fames quam purus nec faucibus porttitor."
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "EMCC Competency Frameworks",
              // href:"/competency-frameworks"
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-[auto_370px] gap-16 min-h-screen">
          <div className=" flex flex-col gap-8">
            {/* Main content */}
            <TextContentSection
              title="EMCC Competencies"
              texts={[
                "EMCCs vision is to be the ‘go to’ body in mentoring, coaching and supervision. In support of this vision, you can view a summary presentation, outlining the role of Thought Leadership & Development.",
                "In this section, we also set out the standards that we believe you should use as a guide, whether you are a coach, mentor, coach or mentor supervisor, or trainer or programme provider. It comprises competences, CPD guidance, supervision competences and guidance, mentoring definition, the Global Code of Ethics, diversity and regulation.",
              ]}
            />
            <div className="flex items-center gap-5">
              <Tag className="bg-[#AEFFE8]" style={"style3"} variant={"tag2"}>
                Coaching
              </Tag>
              <Tag className="bg-[#AEFFE8]" style={"style3"} variant={"tag2"}>
                Mentoring
              </Tag>
              <Tag className="bg-[#AEFFE8]" style={"style3"} variant={"tag2"}>
                Supervision
              </Tag>
            </div>
            <Text variant={"body"} className="text-neutral">
              It aims to answer some important questions:
            </Text>
            <BulletText
              texts={[
                "What knowledge and skills does EMCC believe coaches and mentors should aspire to? Where is there a list of them,  so I can benchmark myself?",
                "How do I ensure that my practice is developing, that I am learning from my experience and up to date with developments in coaching and mentoring knowledge and research?",
                "What is supervision? What should I look for in a supervisor?",
                "What ethical standards should inform my practice?",
                "How does good coaching and mentoring practice promote diversity and work in a way that takes into account the range of characteristics and needs of clients?",
                "How is the EMCC working with other bodies to address concerns about professional standards, and the possibility of governmental control of the profession?",
              ]}
            />
            <Text variant={"body"} className="text-neutral">
              More information about coaching supervision, continuous
              professional development, and diversity in coaching can be found
              in the links.
            </Text>
          </div>
          <div className="">
            <div className="sticky flex flex-col gap-12 top-4 max-h-[calc(100vh)] overflow-y-scroll scrollbar-hide">
              <SidebarMenu menuData={menuData} />
              <MoreAboutUs
                title={moreAboutUsData.title}
                cards={moreAboutUsData.cards}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="transparent" className="!pt-0">
        <div className="flex flex-col gap-12">
          <SectionTitle title="Additional Resources" />
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8">
            {resourcesData.map((resource, index) => (
              <ResourceCard
                resourceImg={ResourceImg.src}
                key={index}
                title={resource.title}
                description={resource.description}
                downloadUrl={resource.downloadUrl}
                downloadText={resource.downloadText}
                fromColor={resource.fromColor}
                toColor={resource.toColor}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

export default page;
