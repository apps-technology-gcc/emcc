"use client";
import Banner from "@/src/components/common/Banner";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";

import bgImage from "@/public/about-bg.png";
import { useEffect, useState } from "react";
import pageContentJson from "@/src/data/insights.json";
import TextContentSection from "@/src/components/common/TextContentSection";
import BannerSection from "../components/BannerSection";
import { Text } from "@/src/components/ui/elements/Text";
import { Icon } from "@/src/components/ui/elements/Icon";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import MoreFilter from "./../components/MoreFilter";
import SectionTitle from "@/src/components/common/SectionTitle";
import JournalCard from "./components/JournalCard";
import Link from "@/src/components/ui/elements/Link";
import CaseStudyCard from "./components/CaseStudyCard";
import ResourcesGroup from "./components/ResourcesGroup";
import InputChips from "@/src/components/ui/elements/InputChips";
import ResourcesItem from "../components/ResourcesItem";
import TrendingItem from "../components/TrendingItem";

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);

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
        <div className="grid grid-cols-1 md:grid-cols-11 gap-16">
          <div className="md:col-span-7 flex flex-col gap-20">
            <div className="flex flex-col gap-12">
              <SectionTitle title="Coaching Journal" />
              {pageContent.journals.map((item: any, index: number) => (
                <JournalCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt || "Journal Image"}
                  locked={item.locked}
                  tag={item.tag}
                  date={item.date}
                />
              ))}
              <div className="flex justify-end">
                <Link
                  href={""}
                  iconPosition={"right"}
                  icon={<Icon name="east" className="text-[20px]" />}
                >
                  View All Journal Publications
                </Link>
              </div>
            </div>

            {pageContent.resources.map((item: any, index: number) => (
              <ResourcesGroup
                key={index}
                title={item.title}
                resources={item.resources}
                cta={item.cta}
              />
            ))}
          </div>
          <div className="md:col-span-4 place-content-start grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 gap-12">
            <ResourcesItem />
            <TrendingItem />
            <div className="flex flex-col gap-5  pb-5">
              <div className="flex items-center gap-2.5">
                <Text variant={"card_title_large"}>Popular Tags</Text>
              </div>
              <div className="flex items-center gap-2.5">
                <InputChips variant={"secondary"}>Text</InputChips>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

export default page;
