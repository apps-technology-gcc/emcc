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

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const menuData = [
    {
      title: "Communities of Practice",
      menuColor: "pink-400",

      links: [
        {
          type: "accordion",
          activeItem: "Working Groups",
          title: "Coaching",
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
        {
          type: "accordion",
          activeItem: "Coach Register",
          title: "Mentoring",
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
        {
          type: "accordion",
          activeItem: "Coach Register",
          title: "Supervision",
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
    //     What is supervision?
    // Why is supervision important?
    // What kinds of supervision are there?
    // What kinds of supervision are there?
    // How much supervision do I need?
    // How may I find a supervisor?
    // How should I select a supervisor?
    // How may I train as a supervisor?
    // How may I gain accreditation as a supervisor?
    {
      id: 1,
      title: " What is supervision?",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 2,
      title: " Why is supervision important?",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 3,
      title: " What kinds of supervision are there?",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 4,
      title: "What kinds of supervision are there?",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 5,
      title: "How much supervision do I need?",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 6,
      title: "How may I find a supervisor?",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 7,
      title: "How should I select a supervisor?",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 8,
      title: "How may I train as a supervisor?",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 9,
      title: "How may I gain accreditation as a supervisor?",
      content: "This is the content<br/>This is another paragraph",
    },
  ];
  const classess =
    "from-[#BE4FEE] to-[#883BFE] from-[#5340FFCC] to-[#BE38F3] from-[#00CCC6] to-[#BE38F3]";
  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="Competences"
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
            {
              name: "Coaching",
              href: "/competency-frameworks",
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
                title="Supervision"
                texts={[
                  "The field of supervision is evolving. New forms of coaching, mentoring and supervision are emerging. As this occurs, via its ‘Supervision Centre for Excellence’, EMCC Global aims to follow suit by updating its systems and processes to remain relevant and continue supporting practitioners in all fields.",
                  "There are a range of membership networks and groups supporting continuing professional development and research in the field of supervision. Active supervisors are encouraged to participate in these in order to remain current and connected to the latest developments in theory and practice.",
                ]}
              />
            </div>

            <div className="flex flex-col gap-12">
              <TextContentSection title="Definition" />
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>
                  EMCC Global’s definition of supervision is{" "}
                </Text>
                <Text variant={"body"} className="text-neutral">
                  A safe space for reflective dialogue with a practicing
                  supervisor, supporting the supervisee’s practice, development
                  and well-being.
                </Text>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>
                  The purpose of supervision is
                </Text>
                <BulletText
                  texts={[
                    "To ensure the supervisee maintains appropriate professional standards",
                    "To facilitate the development of the supervisee’s professional practice",
                    "To provide support for the supervisee’s well-being",
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <TextContentSection title="Guidelines" />
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  <Text variant={"card_title_large"}>Introduction</Text>
                  <Text variant={"body"} className="text-neutral">
                    This provides information and guidance regarding the EMCC
                    Global ‘Supervision Centre for Excellence’s’ perspective on
                    supervision. It is work in progress and open ongoing to
                    input and discussion. It addresses the following questions:
                  </Text>
                </div>
                <BulletText
                  texts={[
                    "What is supervision?",
                    "Why is supervision important?",
                    "What kinds of supervision are there?",
                    "How much supervision do I need?",
                    "How may I find a supervisor?",
                    "How should I select a supervisor?",
                    "How may I train as a supervisor?",
                    "How may I gain accreditation as a supervisor?",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Terminology</Text>
                <TextContentSection
                  texts={[
                    "The term ‘practitioners’ refers to internal or external coaches/ mentors/ team coaches/ supervisors/ organisational development specialists, or leaders/ managers/ employees who may be practicing these disciplines as part of their role.",
                    "‘Practice’ refers to the practice of coaching/ mentoring/ team coaching/ supervising/ organisational development in this context. The term ‘client’ refers to the recipient of these services.",
                    "A pdf of the guidelines for supervision can be downloaded here",
                  ]}
                />
              </div>
              <AccordionGroup items={accordionData} />
            </div>

            <div className="flex flex-col gap-12">
              <TextContentSection
                texts={[
                  "EMCC Global takes the approach that competence frameworks can be helpful triggers for dialogue and debate; they can provide practitioners, trainers and assessors with valuable reference material; they act as a container for ideas and help answer the question ‘what does good look like?",
                  "The framework is designed to be flexible and adaptable to the needs of different contexts and disciplines. It is not intended to be a comprehensive list of all possible behaviours, but rather a starting point for dialogue and debate. It is not expected that every supervisor should exhibit each one of these, or treat them as a checklist. Rather, they are intended to stimulate awareness and promote understanding.",
                  "EMCC Global has a framework for supervision which has evolved based on research and feedback over the years, the full version of which can be downloaded via the link at the bottom of this page. It contains eight core competences, as described below:",
                ]}
                title="Framework"
              />
              <Image src={FrameWorkImg} alt="SQR Icon" />
              <MemberBoard
                title="Evaluate your behavioral competencies"
                texts={[
                  "These competence headings are supported by about 40 behavioural indicators. It is not expected that every supervisor should exhibit each one of these, or treat them as a checklist. Rather, they are intended to stimulate awareness and promote understanding.",
                ]}
                buttonText="Get Started"
              />
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
                // resourceImg={ResourceImg.src}
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
