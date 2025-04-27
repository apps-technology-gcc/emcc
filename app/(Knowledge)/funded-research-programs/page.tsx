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
import EventCard from "@/src/components/common/EventCard";
import PosterImg1 from "@/public/poster_1.png";
import PosterImg2 from "@/public/poster_2.png";
import Link from "@/src/components/ui/elements/Link";
import { Icon } from "@/src/components/ui/elements/Icon";
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
          type: "accordion",
          activeItem: "Complex Challenges Program",
          title: "Funded Research Programs",
          listItems: [
            {
              title: "Complex Challenges Program",
              href: "/",
            },
            {
              title: "Human Capital & Leadership Development",
              href: "/about",
            },
          ],
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
          description="EMCC Global believes in the power of practitioner/researcher dialogue, to build an evidence base for professional practice."
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Research",
            },
            {
              name: "Funded Research Programs",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-[auto_370px] gap-16 min-h-screen">
          <div className=" flex flex-col gap-20">
            <div className="flex flex-col gap-12">
              <TextContentSection title="EMCC Global Funded Research Programs" />
              <div className="flex p-5 bg-green-50 border-green-500 border-l-2">
                <Text variant={"card_title_large"}>
                  Bringing Practice to Research and Research to Practice 
                </Text>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  <Text variant={"card_title_large"}>
                    Complex Challenges Program
                  </Text>
                  <TextContentSection
                    texts={[
                      "We wish to extend our programme of small high quality research projects to address complex challenges identified by our members.",
                      "The competition themes originate in the complex challenges identified by our members through collective dialogue to co-create ideas for research that is important to our community.",
                      "Each successful proposal will be awarded up to 7k Euro to carry out a research project that clearly demonstrates relevance to one of the following themes identified by our members as complex challenges.",
                    ]}
                  />
                </div>
                <BulletText
                  texts={[
                    "How do we establish a bridge between two equal learning partners (practitioners and researchers)?",
                    "How do we achieve Inclusive Return on Investment?",
                    "What are the implications of partnerships between AI and coaches?",
                    "How can we achieve cultural inclusion in the wider scope of assessment including accreditation?",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>We invite members to</Text>
                <BulletText
                  texts={[
                    "Bring together a project team comprising suitably experienced practitioners and researchers",
                    "Propose a research project that will provide relevant insights for practitioners into one of the Complex Challenges.",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Requirements</Text>
                <BulletText
                  texts={[
                    "At least one member of the team must be a practitioner.",
                    " At least one must be an EMCC member.",
                    "The project including the final report must be completed by 31 July 2024.",
                    "The team must disseminate outcomes in collaboration with EMCC Global",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>
                  For timeline and specifications please visit{" "}
                  <u>more details</u>
                </Text>
                <div className="grid grid-cols-2 gap-x-[2px] gap-y-5">
                  <div className="flex-auto p-5 bg-green-50">
                    <Text variant={"body"} className="text-neutral">
                      Submission Deadline 25 Nov 2024
                    </Text>
                  </div>
                  <div className="flex-auto p-5 bg-green-50">
                    <Text variant={"body"} className="text-neutral">
                      research.development@emccglobal.org
                    </Text>
                  </div>
                  <div className="flex-auto p-5 gap-2.5 flex items-start bg-warning-50 rounded-md">
                    <Icon name="emergency_home" className="text-[20px]" />
                    <Text variant={"body"} className="text-neutral">
                      This program has expired and is no longer receiving
                      applications
                    </Text>
                  </div>
                </div>
              </div>
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
