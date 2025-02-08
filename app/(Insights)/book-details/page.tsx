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
import Link from "@/src/components/ui/elements/Link";
import InputChips from "@/src/components/ui/elements/InputChips";
import ResourcesItem from "../components/ResourcesItem";
import TrendingItem from "../components/TrendingItem";
import Image from "next/image";
import ArticleDetailsImg from "@/public/article-details.png";
import BoardText from "@/src/components/common/BoardText";
import AuthorImg from "@/public/author.png";
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

      <Section bgColor="white" className="">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-12">
          <div className="flex md:col-span-7 items-start justify-between gap-5">
            <div className="flex flex-auto flex-col gap-5">
              <Text variant={"tag"} className="text-primary-600">
                Telecommunications
              </Text>
              <p className="text-[16px] leading-[28px] text-neutral font-light">
                {" "}
                03 September 2023
              </p>
            </div>
            <Icon name="bookmark_add" className="text-[24px]" />
            <Icon name="share" className="text-[24px]" />
          </div>
          <div className="grid col-span-11 grid-cols-1 md:grid-cols-11 gap-12">
            <div className="md:col-span-7 flex flex-col gap-12">
              <Image
                src={ArticleDetailsImg}
                width={752}
                height={400}
                alt="article-details"
              />
              <TextContentSection
                texts={[
                  "Lorem ipsum dolor sit amet consectetur. In nisl morbi adipiscing proin amet quis. Augue sem egestas venenatis ac lorem integer. Faucibus nibh ligula magna facilisis. Eu adipiscing sem aliquam porta lorem nunc malesuada. Nulla odio arcu sem magnis faucibus in tortor leo. Mauris nunc imperdiet purus augue nunc. Ullamcorper bibendum quis egestas fringilla mauris. Pellentesque elementum sit gravida aenean. A arcu ut leo velit. Elementum varius ac pellentesque tincidunt id.",
                  "Egestas diam eget ornare pharetra morbi facilisis tristique ipsum. Fringilla nisi auctor risus lectus etiam sed ultricies. Pellentesque maecenas ut malesuada bibendum tincidunt sit aliquam. Fringilla nec mattis tortor amet egestas in. Arcu mi elementum vulputate auctor amet proin risus. Velit eu consequat diam pharetra. Ut vulputate proin ut sit quam quam dui. Id tortor id dignissim molestie tortor ipsum non nunc. Consectetur mauris tellus eu egestas in. Nisi vitae viverra placerat quis quis augue a euismod. Egestas eu duis adipiscing purus elementum porttitor. Cras eget elementum facilisis massa mauris interdum leo elit libero. Morbi amet nunc placerat viverra hendrerit.",
                ]}
              />

              <BoardText text=" Lorem ipsum dolor sit amet consectetur. In nisl morbi adipiscing proin amet quis. Augue sem egestas venenatis ac lorem integer. Faucibus nibh ligula magna facilisis. Eu adipiscing sem aliquam porta lorem nunc malesuada. Nulla odio arcu sem magnis faucibus in tortor leo. Mauris nunc imperdiet purus augue nunc. Ullamcorper bibendum quis egestas fringilla mauris. Pellentesque elementum sit gravida aenean. A arcu ut leo velit. Elementum varius ac pellentesque tincidunt id." />
              <TextContentSection
                texts={[
                  "Lorem ipsum dolor sit amet consectetur. In nisl morbi adipiscing proin amet quis. Augue sem egestas venenatis ac lorem integer. Faucibus nibh ligula magna facilisis. Eu adipiscing sem aliquam porta lorem nunc malesuada. Nulla odio arcu sem magnis faucibus in tortor leo. Mauris nunc imperdiet purus augue nunc. Ullamcorper bibendum quis egestas fringilla mauris. Pellentesque elementum sit gravida aenean. A arcu ut leo velit. Elementum varius ac pellentesque tincidunt id.",
                  "Egestas diam eget ornare pharetra morbi facilisis tristique ipsum. Fringilla nisi auctor risus lectus etiam sed ultricies. Pellentesque maecenas ut malesuada bibendum tincidunt sit aliquam. Fringilla nec mattis tortor amet egestas in. Arcu mi elementum vulputate auctor amet proin risus. Velit eu consequat diam pharetra. Ut vulputate proin ut sit quam quam dui. Id tortor id dignissim molestie tortor ipsum non nunc. Consectetur mauris tellus eu egestas in. Nisi vitae viverra placerat quis quis augue a euismod. Egestas eu duis adipiscing purus elementum porttitor. Cras eget elementum facilisis massa mauris interdum leo elit libero. Morbi amet nunc placerat viverra hendrerit.",
                ]}
              />
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5">
                  <Text variant={"card_title_large"}>Popular Tags</Text>
                </div>
                <div className="flex items-center gap-5">
                  <InputChips variant={"secondary"}>Text</InputChips>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 place-content-start justify-start grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 gap-12">
              <div className="flex flex-col w-full !pb-5 border-border border-b-[1px] gap-8">
                <Text variant={"card_title_large"} className="text-neutralDark">
                  About the Author
                </Text>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-5">
                    <Image
                      src={AuthorImg}
                      width={100}
                      height={100}
                      alt="author"
                    />
                    <div className="flex flex-col gap-5">
                      <Text
                        variant={"card_title_large"}
                        className="text-neutralDark"
                      >
                        Kity Liu
                      </Text>
                      <Text variant={"body"} className="text-[#2B2B2B]">
                        CEO | GCC
                      </Text>
                    </div>
                  </div>
                  <Text variant={"body"}>
                    Egestas diam eget ornare pharetra morbi facilisis tristique
                    ipsum. Fringilla nisi auctor risus lectus etiam sed
                    ultricies. Pellentesque maecenas ut malesuada bibendum
                    tincidunt sit aliquam. Fringilla nec mattis tortor amet
                    egestas in. Arcu mi elementum vulputate auctor amet proin
                    risus. Velit eu consequat diam pharetra.
                  </Text>
                </div>
              </div>
              <ResourcesItem />
              <TrendingItem />
            </div>
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

export default page;
