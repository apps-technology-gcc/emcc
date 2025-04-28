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
  const sections = [
    { id: "definition", title: "Definition" },
    { id: "guidelines", title: "Guidelines" },
    { id: "framework", title: "Framework" },
  ];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Create an Intersection Observer with options
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visibleSection = entries.reduce((max: any, entry: any) => {
          return entry.intersectionRatio > (max?.intersectionRatio || 0)
            ? entry
            : max;
        }, null);

        // Update active section if we have a visible section
        if (visibleSection && visibleSection.intersectionRatio > 0) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        // Root margin to start detecting slightly before the element comes into view
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for smoother detection
      }
    );

    // Observe all section elements
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function to remove observers
    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]); // Add sections as dependency

  // For debugging
  useEffect(() => {
    console.log("Active Section:", activeSection);
  }, [activeSection]);

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
              title: "Definition",
              href: "/coaching",
              id: "definition",
            },
            {
              title: "Guidelines",
              href: "/coaching",
              id: "guidelines",
            },
            {
              title: "Framework",
              href: "/coaching",
              id: "framework",
            },
          ],
        },
        {
          type: "accordion",
          activeItem: "Coach Register",
          title: "Mentoring",
          listItems: [
            {
              title: "Definition",
              href: "/mentoring",
              id: "definition",
            },
            {
              title: "Guidelines",
              href: "/mentoring",
              id: "guidelines",
            },
            {
              title: "Framework",
              href: "/mentoring",
              id: "framework",
            },
          ],
        },
        {
          type: "accordion",
          activeItem: "Coach Register",
          title: "Supervision",
          listItems: [
            {
              title: "Definition",
              href: "/supervision",
              id: "definition",
            },
            {
              title: "Guidelines",
              href: "/supervision",
              id: "guidelines",
            },
            {
              title: "Framework",
              href: "/supervision",
              id: "framework",
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
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur.",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur.",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur.",
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
                title="Coaching"
                texts={[
                  "The purpose of the competence framework is to provide a description of a mentor/coach at four distinct levels of development in order to help mentors/coaches understand their level of development and Training Providers evaluate the effectiveness of their programmes through the mentor/coaching performance of their students. The competence indicators are examples of behaviours or principles of the coaching profession that meet the eight competence categories. The competence framework also provides an assessment tool that allows an experienced assessor to:",
                ]}
              />

              <BulletText
                style="decimal"
                texts={[
                  "Evaluate the behaviours of a mentor/coach",
                  "Categorise the level that the mentor/coach is operating at (EIA Level Descriptors)",
                  "Categorise the level of mentor/coach training (EQA Level Descriptors).",
                ]}
              />
              <TextContentSection
                texts={[
                  "This framework details the eight competences identified by the EMCC for good practice in mentoring and coaching. These competences are supported by capability indicators (CIs). It should be noted that CIs are only intended as guidance. It is not to be considered absolutely necessary to address every CI in an accreditation application.",
                  "The progression principles used are: at each ‘higher’ level, the CIs should describe greater breadth and depth of knowledge; greater synthesis of ideas; ability to evoke more significant insights; working effectively with increasingly complex issues and contexts, and, at the higher levels, the creation of a coherent personal approach to mentoring/coaching.",
                ]}
              />
            </div>

            <TextContentSection
              id="definition"
              title="Definition"
              texts={[
                "Lorem ipsum dolor sit amet consectetur. Non tincidunt augue commodo aliquet. Nulla vitae elementum eget sociis adipiscing vehicula pellentesque. Aenean purus lacus nibh suspendisse tellus felis morbi purus felis. Velit lobortis aenean sem nunc cras. Purus accumsan eu massa nunc scelerisque enim sagittis. Magnis odio massa ultricies eget egestas orci aliquam. Adipiscing ullamcorper eu platea morbi arcu. Nullam elementum in massa duis vel. Elementum amet in ultricies nunc tellus facilisi turpis. Ultrices a in egestas est eu. Lorem quis aenean duis diam pulvinar aliquet nulla aenean consequat. Aliquet massa ac commodo nullam velit tincidunt gravida. Velit tristique amet viverra nulla vulputate turpis nibh libero. Gravida nulla molestie varius tortor in arcu.",
                "Non at lorem vulputate diam pretium. Tristique lectus sed feugiat dictum sit. Blandit massa facilisis vel nulla aliquet interdum purus. Nec urna sit fringilla eu ullamcorper. Ut dictum pulvinar ornare porttitor.",
              ]}
            />
            <div id="guidelines" className="flex flex-col gap-12">
              <TextContentSection title="Guidelines" />
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Introduction</Text>
                <Text variant={"body"} className="text-neutral">
                  Lorem ipsum dolor sit amet consectetur. Vitae pharetra justo
                  et odio ut accumsan. Velit urna in et orci massa posuere
                  risus. Sapien at a amet nibh elit suscipit in. Congue mus
                  lacus leo fringilla. Eget ultrices varius risus commodo
                  fermentum massa elementum. Vitae quam fringilla morbi risus
                  volutpat viverra diam sit. Sed lectus amet et at lacus euismod
                  ullamcorper diam. Tellus et eu eros sit eget. Id suspendisse
                  urna in at. Turpis diam rhoncus sagittis fames pharetra vel
                  mauris. Nunc cursus accumsan ullamcorper sit ut dignissim
                  feugiat rhoncus morbi. Magna viverra mattis elit malesuada.
                </Text>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Terminology</Text>
                <Text variant={"body"} className="text-neutral">
                  Lorem ipsum dolor sit amet consectetur. Maecenas sit eget
                  vitae nisl. Pretium ornare risus mauris aliquam fames eu
                  molestie tristique. Facilisi at leo diam maecenas. Justo
                  tempor enim proin semper non enim nulla enim condimentum. Et
                  sed in at lorem. Nunc nec varius porttitor id ullamcorper
                  aenean tempor velit. Habitasse ornare integer bibendum commodo
                  pellentesque id pellentesque risus quisque. Consequat ut vitae
                  pretium nam mauris nullam. Consequat et sollicitudin praesent
                  dui elit aliquam pretium praesent tristique.
                </Text>
              </div>
              <AccordionGroup items={accordionData} />
            </div>

            <div id="framework" className="flex flex-col gap-12">
              <TextContentSection
                texts={[
                  "Lorem ipsum dolor sit amet consectetur. Sed tellus lobortis nullam lobortis purus eget suscipit purus. Ipsum nullam felis eget proin a nulla commodo cursus. Sapien urna dui aliquet adipiscing volutpat molestie. Vitae volutpat porta enim montes consequat id mauris.",
                ]}
                title="Framework"
              />
              <Image src={FrameWorkImg} alt="SQR Icon" />
              <Image src={CtgImg} alt="SQR Icon" />
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
              <SidebarMenu menuData={menuData} activeSection={activeSection} />
              {/* <SidebarSection {...sideBarData} activeSection={activeSection} /> */}
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
