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
import ResourceCard from "@/components/common/ResourceCard";
import MoreAboutUs from "@/src/components/common/MoreAboutUs";
import sqricon from "@/public/sqricon.svg";

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
        <BannerSection {...pageContent.banner} />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={pageContent.breadcrumb} />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-[auto_370px] gap-16 min-h-screen">
          <div className=" flex flex-col gap-20">
            {/* Main content */}
            <div className="flex flex-col gap-8">
              <TextContentSection
                title="Global Coaching Mentoring Alliance (GCMA)"
                texts={[
                  "EMCC is delighted to be part of the GCMA (Global Coaching and Mentoring Alliance), formed in November, 2012, to work alongside other global coaching & mentoring bodies, to provide a shared view of the practice of professional coaching.",
                ]}
              />
              <div className="flex items-center gap-12">
                <Image
                  src={Logo}
                  className="w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  height={57}
                  alt="logo"
                />
                <Image
                  src={ICFLogo}
                  className="w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  height={57}
                  alt="logo"
                />
                <Image
                  src={ALogo}
                  className="w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  height={57}
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <SectionTitle title="Frequently Asked Questions" />
              <AccordionGroup items={accordionData2} />
            </div>
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
