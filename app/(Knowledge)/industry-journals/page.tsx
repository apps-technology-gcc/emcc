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
import EventCard from "@/src/components/common/EventCard";
import PosterImg1 from "@/public/poster_1.png";
import PosterImg2 from "@/public/poster_2.png";
import Link from "@/src/components/ui/elements/Link";
import { Icon } from "@/src/components/ui/elements/Icon";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import JournalCard from "@/src/components/common/JournalCard";
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
  const journalData = [
    {
      locked: false,
      imageSrc: "/path/to/journal.png",
      imageAlt: "journal",
      tag: "Journal",
      date: "03 Sep, 2024",
      title: "EMCC International Journal",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae hendrerit molestie neque dictum amet donec non. Feugiat libero ut turpis tortor. Nunc commodo mauris enim sem ullamcorper amet ullamcorper. Sit odio integer malesuada turpis enim sapien tincidunt lorem lacus. Imperdiet felis vel proin parturient porta nibh purus. Tellus amet vel neque mollis lorem in interdum arcu. Auctor adipiscing maecenas pharetra ultricies arcu commodo. Blandit sit euismod sed morbi id. Sed neque molestie neque ultrices commodo enim metus hac dictum.",
    },
    {
      locked: true,
      imageSrc: "/path/to/journal.png",
      imageAlt: "journal",
      tag: "Journal",
      date: "03 Sep, 2024",
      title: "EMCC International Journal",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae hendrerit molestie neque dictum amet donec non. Feugiat libero ut turpis tortor. Nunc commodo mauris enim sem ullamcorper amet ullamcorper. Sit odio integer malesuada turpis enim sapien tincidunt lorem lacus. Imperdiet felis vel proin parturient porta nibh purus. Tellus amet vel neque mollis lorem in interdum arcu. Auctor adipiscing maecenas pharetra ultricies arcu commodo. Blandit sit euismod sed morbi id. Sed neque molestie neque ultrices commodo enim metus hac dictum.",
    },
    {
      locked: false,
      imageSrc: "/path/to/journal.png",
      imageAlt: "journal",
      tag: "Journal",
      date: "03 Sep, 2024",
      title: "EMCC International Journal",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae hendrerit molestie neque dictum amet donec non. Feugiat libero ut turpis tortor. Nunc commodo mauris enim sem ullamcorper amet ullamcorper. Sit odio integer malesuada turpis enim sapien tincidunt lorem lacus. Imperdiet felis vel proin parturient porta nibh purus. Tellus amet vel neque mollis lorem in interdum arcu. Auctor adipiscing maecenas pharetra ultricies arcu commodo. Blandit sit euismod sed morbi id. Sed neque molestie neque ultrices commodo enim metus hac dictum.",
    },
    {
      locked: true,
      imageSrc: "/path/to/journal.png",
      imageAlt: "journal",
      tag: "Journal",
      date: "03 Sep, 2024",
      title: "EMCC International Journal",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae hendrerit molestie neque dictum amet donec non. Feugiat libero ut turpis tortor. Nunc commodo mauris enim sem ullamcorper amet ullamcorper. Sit odio integer malesuada turpis enim sapien tincidunt lorem lacus. Imperdiet felis vel proin parturient porta nibh purus. Tellus amet vel neque mollis lorem in interdum arcu. Auctor adipiscing maecenas pharetra ultricies arcu commodo. Blandit sit euismod sed morbi id. Sed neque molestie neque ultrices commodo enim metus hac dictum.",
    },
  ];
  const classess =
    "from-[#BE4FEE] to-[#883BFE] from-[#5340FFCC] to-[#BE38F3] from-[#00CCC6] to-[#BE38F3] line-clamp-[7]";
  return pageContent ? (
    <div>
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
        <div className="flex flex-col gap-12">
          <div className="flex items-start gap-8">
            <div className="flex flex-auto flex-col gap-5">
              <SectionTitle title="Journals & Publications" />
              <Text variant={"body"} className="text-neutral">
                Consectetur vitae ut amet ligula platea facilisi ac ipsum.
                Faucibus auctor consequat suscipit commodo.
              </Text>
            </div>
            <div className="min-w-[200px]">
              <SearchSelect options={[]} name="select" placeholder="Sort" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {journalData.map((item: any, index: number) => (
              <JournalCard
                key={index}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt || "Journal Image"}
                locked={item.locked}
                tag={item.tag}
                date={item.date}
                maxContentLine={7}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  ) : null;
};

export default page;
