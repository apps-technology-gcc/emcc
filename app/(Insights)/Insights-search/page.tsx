"use client";
import Banner from "@/src/components/common/Banner";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";

import bgImage from "@/public/about-bg.png";
import { useState } from "react";
import pageContentJson from "@/src/data/insights.json";
import TextContentSection from "@/src/components/common/TextContentSection";
import BannerSection from "../components/BannerSection";
import { Text } from "@/src/components/ui/elements/Text";
import { Icon } from "@/src/components/ui/elements/Icon";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import MoreFilter from "./../components/MoreFilter";

import ResultCard from "./components/ResultCard";
import { Button } from "@/src/components/ui/elements/Button";

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const dummyData = [
    {
      locked: false,
      date: "03 Sep, 2024",
      tag: "Journal",
      title: "EMCC International Journal",
      description:
        "Consectetur vitae ut amet ligula platea facilisi ac ipsum. Faucibus auctor consequat suscipit commodo.",
      link: "/journal-1",
    },
    {
      locked: true,
      date: "03 Sep, 2024",
      tag: "Article",
      title: "Let’s Talk About a DAM Evolution",
      description:
        "Id facilisis nunc ut sit nec sed sagittis. Suspendisse neque eget pulvinar lorem tincidunt consequat.",
      link: "/article-1",
    },
    {
      locked: false,
      date: "03 Sep, 2024",
      tag: "Podcasts",
      title: "Let’s Talk About a DAM Evolution",
      description:
        "Faucibus auctor consequat suscipit commodo. Id facilisis nunc ut sit nec sed sagittis.",
      link: "/podcast-1",
    },
    {
      locked: true,
      date: "03 Sep, 2024",
      tag: "Article",
      title: "The Future of Digital Assets",
      description:
        "Suspendisse neque eget pulvinar lorem tincidunt consequat. Consectetur vitae ut amet ligula platea facilisi.",
      link: "/article-2",
    },
    {
      locked: false,
      date: "03 Sep, 2024",
      tag: "Journal",
      title: "Innovation in Modern Tech",
      description:
        "Faucibus auctor consequat suscipit commodo. Id facilisis nunc ut sit nec sed sagittis.",
      link: "/journal-2",
    },
    {
      locked: true,
      date: "03 Sep, 2024",
      tag: "Podcasts",
      title: "Exploring AI and ML",
      description:
        "Consectetur vitae ut amet ligula platea facilisi ac ipsum. Suspendisse neque eget pulvinar lorem tincidunt consequat.",
      link: "/podcast-2",
    },
    {
      locked: false,
      date: "03 Sep, 2024",
      tag: "Article",
      title: "Navigating the Cloud",
      description:
        "Id facilisis nunc ut sit nec sed sagittis. Consectetur vitae ut amet ligula platea facilisi.",
      link: "/article-3",
    },
    {
      locked: true,
      date: "03 Sep, 2024",
      tag: "Journal",
      title: "Blockchain Beyond Cryptocurrency",
      description:
        "Suspendisse neque eget pulvinar lorem tincidunt consequat. Faucibus auctor consequat suscipit commodo.",
      link: "/journal-3",
    },
    {
      locked: false,
      date: "03 Sep, 2024",
      tag: "Podcasts",
      title: "The Rise of Remote Work",
      description:
        "Faucibus auctor consequat suscipit commodo. Id facilisis nunc ut sit nec sed sagittis.",
      link: "/podcast-3",
    },
  ];
  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection {...pageContent.banner} />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={pageContent.breadcrumb} />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-2.5 py-2.5 border-b border-border">
            <div className="h-[38px] flex justify-center items-center gap-2.5 px-5 bg-background rounded-full">
              <Text variant={"placeholder"} className="text-neutralDark">
                Insights
              </Text>
              <Icon name="close" className="text-[16px]" />
            </div>
            <div className="h-[38px] flex justify-center items-center gap-2.5 px-5 bg-background rounded-full">
              <Text variant={"placeholder"} className="text-neutralDark">
                Insights
              </Text>
              <Icon name="close" className="text-[16px]" />
            </div>
            <Text variant={"card_title_large"} className="text-neutralLight">
              Search Keywords
            </Text>
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"} className="text-neutralDark">
              Filter by
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
              <SearchSelect
                options={[
                  { label: "All", value: "all" },
                  { label: "Category 1", value: "category1" },
                  { label: "Category 2", value: "category2" },
                  { label: "Category 3", value: "category3" },
                ]}
                placeholder={"Featured Topics"}
                name="Featured Topics"
                isMulti
              />
              <SearchSelect
                options={[
                  { label: "All", value: "all" },
                  { label: "Category 1", value: "category1" },
                  { label: "Category 2", value: "category2" },
                  { label: "Category 3", value: "category3" },
                ]}
                placeholder={"Type"}
                name="Type"
                isMulti
              />
              <SearchSelect
                options={[
                  { label: "All", value: "all" },
                  { label: "Category 1", value: "category1" },
                  { label: "Category 2", value: "category2" },
                  { label: "Category 3", value: "category3" },
                ]}
                placeholder={"Services"}
                name="Services"
                isMulti
              />
              <SearchSelect
                options={[
                  { label: "All", value: "all" },
                  { label: "Category 1", value: "category1" },
                  { label: "Category 2", value: "category2" },
                  { label: "Category 3", value: "category3" },
                ]}
                placeholder={"Solutions 1"}
                name="Solutions"
                isMulti
              />

              <MoreFilter />
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="white" className="!pt-0">
        <div className="flex flex-col gap-12">
          <div className="max-w-[936px]">
            <TextContentSection
              title="Result"
              texts={[
                "Consectetur vitae ut amet ligula platea facilisi ac ipsum. Faucibus auctor consequat suscipit commodo. Id facilisis nunc ut sit nec sed sagittis. Suspendisse neque eget pulvinar lorem tincidunt consequat.",
              ]}
            />
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-16">
            {dummyData.map((item, index) => (
              <ResultCard
                key={index}
                tag={item.tag}
                date={item.date}
                title={item.title}
                description={item.description}
                link={item.link}
                locked={item.locked}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button variant={"default"} btnType={"primary"} outline>
              Load More
            </Button>
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

export default page;
