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
import { Text, textVariants } from "@/src/components/ui/elements/Text";
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
import { Input } from "@/src/components/ui/elements/form/Input";
import { cn } from "@/src/lib/utils";
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

  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="Accredited Training & Course Providers"
          description="These are accreditation course providers.  Which meet our ethical and competency standars
We also"
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Courses",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-[281px_auto] gap-8 ">
            <div className="flex p-2.5">
              <input
                name="search"
                id="search"
                placeholder="Search"
                className={cn(
                  textVariants({
                    variant: "card_title_large",
                  })
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[281px_auto] gap-8 min-h-screen"></div>
        </div>
      </Section>
      <Section bgColor="transparent" className="!pt-0">
        <RelatedResourceGroup title="Related Resources" />
      </Section>
    </>
  ) : null;
};

export default page;
