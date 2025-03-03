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

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const menuData = [
    {
      title: "EMCC Research",
      menuColor: "pink-400",

      links: [
        {
          text: "Research Agenda",
          href: "/research-agenda",
        },
        {
          text: "Research Webinars",
          href: "/research-webinars",
        },
        {
          text: "Research & Impact Posters",
          href: "/research-and-impact-posters",
        },
        {
          text: "Funded Research Programs",
          href: "/funded-research-programs",
        },
        {
          text: "Get Involved",
          href: "/get-involved",
        },
        {
          text: "Industry Data",
          href: "/industry-journals",
        },
      ],
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
          title="Research"
          description="Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla odio id tortor felis suspendisse porta placerat rhoncus. Vestibulum semper vitae pellentesque fames quam purus nec faucibus porttitor."
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Research",
            },
            {
              name: "Search Accrediated Members",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-[auto_370px] gap-16 min-h-screen">
          <div className=" flex flex-col gap-20">
            {/* Main content */}

            <div className="flex flex-col gap-12">
              <TextContentSection
                title="Research Agenda"
                texts={[
                  "Currently EMCC Global Research is focused on the following main topics.",

                  "Mentoring.  Decoding the success factors and best practices of mentoring in the contemporary workplace, with focus on the effects of generational differences and the impact of new technologies. Within this area EMCC is interested in developing a review of current mentoring practices, and comparative studies too.",
                  "The coaching process.  Taking a deeper look at the specific interactions of the coaching process, and exploring the depths and different aspects of the workings of the coaching relationships. Within this area EMCC is interested in developing studies that shed light on the working mechanisms of coaching interventions or classes of coaching interventions. Besides furthering the theoretical understanding, EMCC aims to develop effective practices, theory and evidence based coaching intervention strategies.",

                  "The coaching context.  Understanding and interpreting coaching within a wider context. Examples may include the perspective of the coachee, the organizational context, or the effects of the individual differences in coaches themselves. Within this area EMCC is interested in developing a clearer understanding of the boundaries of the coaching relationship, the effect of the external factors, and through these a set of best practices to manage them in parallel with the coaching relationship itself.",
                ]}
              />
              <AccordionGroup items={accordionData} />
            </div>
          </div>
          <div className="">
            <div className="sticky flex flex-col gap-12 top-4 max-h-[calc(100vh)] overflow-y-scroll scrollbar-hide">
              <SidebarMenu menuData={menuData} />
              <ApplyBoard
                buttonText="Download"
                title="Thought Leadership & Development"
                description="Lorem ipsum dolor sit amet consectetur. Placerat interdum enim tortor eget."
              />
              <MoreAboutUs
                title="Research Projects"
                style="start"
                cards={[
                  {
                    title: "Lorem ipsum dolor sit amet consectetur.",
                    description:
                      "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
                  },
                  {
                    title: "Lorem ipsum dolor sit amet consectetur.",
                    description:
                      "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
                  },
                  {
                    title: "Lorem ipsum dolor sit amet consectetur.",
                    description:
                      "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
                  },
                  {
                    title: "Lorem ipsum dolor sit amet consectetur.",
                    description:
                      "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit. Proin porta sit amet nam egestas ac. Sit fermentum amet ut consequat nec. Non faucibus lectus quis tortor aliquam suscipit fermentum sem mi.",
                  },
                ]}
              />
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
