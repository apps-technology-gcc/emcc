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
              name: "Research & Impact Posters",
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
                title="Research & Impact Posters"
                texts={[
                  "EMCC Global is a leader in promoting evidence –based practice. We are delighted to provide an online gallery for research posters to open the dialogue between researchers and practitioners.",
                  "Before the 2022 EMCC Global Research Conference, we invited anyone undertaking coaching, mentoring or supervision research, to submit a poster showcasing their research and its impact on practice.",
                  "Thank you to all pioneering poster contributors and we hope practitioners will be inspired to apply research to enhance their practice through evidenced based research.",
                ]}
              />
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Poster Title</Text>
                <Image src={PosterImg1} alt="Poster-Img" className="w-full" />
                <div className="flex items-center justify-between">
                  <Link href="/">Preview</Link>
                  <Link
                    href="/"
                    iconPosition="right"
                    icon={<Icon name="file_download" className="text-[20px]" />}
                  >
                    Download
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Poster Title</Text>
                <Image src={PosterImg1} alt="Poster-Img" className="w-full" />
                <div className="flex items-center justify-between">
                  <Link href="/">Preview</Link>
                  <Link
                    href="/"
                    iconPosition="right"
                    icon={<Icon name="file_download" className="text-[20px]" />}
                  >
                    Download
                  </Link>
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
