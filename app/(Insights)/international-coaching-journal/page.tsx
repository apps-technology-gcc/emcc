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
import InternationalImg from "@/public/international-coaching-journal.png";
import BoardText from "@/src/components/common/BoardText";
import AuthorImg from "@/public/author.png";
import BookImg from "@/public/book.png";
import PodcastImg from "@/public/podcast-tag-img.svg";
import AppleImg from "@/public/apple.svg";
import GoogleImg from "@/public/google.svg";
import SpotifyImg from "@/public/spotify.svg";
import PodcastSerious from "../components/PodcastSerious";
import { Button } from "@/src/components/ui/elements/Button";
import DocumentItem from "@/src/components/common/DocumentItem";

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);

  return pageContent ? (
    <>
      <Breadcrumb>
        <Breadcrumbs list={pageContent.breadcrumb} />
      </Breadcrumb>
      <Section bgColor="white" className="">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-8 justify-between md:col-span-11">
              <Text variant={"section_title"} className="flex-cuto">
                International Coaching Journal
              </Text>
              <Icon
                name="bookmark_add"
                className="text-[24px] text-neutralDark"
              />
            </div>
            <div className="flex items-start sm:items-center gap-2.5">
              <Text variant={"body"} className="">
                Author(s):
              </Text>
              <Text variant={"body"} className="text-neutral">
                Katelyn J. Cavanaugh and Stephanie A. Zajac with Eric D.
                Middleton, Ryan P. Brown, D. Brent Smith, and Courtney L.
                Holladay
              </Text>
            </div>
          </div>

          <div className="grid col-span-11 grid-cols-1 md:grid-cols-11 gap-12">
            <div className="md:col-span-4 place-content-start justify-start  flex flex-col gap-12">
              <div className="w-full">
                <Image
                  src={InternationalImg}
                  width={370}
                  height={530}
                  alt="article-details"
                  className="w-full h-auto"
                />
              </div>
              <Button variant={"default"} btnType={"primary"} outline>
                Read The Journal
              </Button>
              <div className="p-5 bg-background rounded-md flex flex-col gap-8">
                <div className="flex items-center gap-5 justify-between">
                  <Text variant={"card_title_large"}>Journal Versions</Text>
                  <div className="flex items-center gap-2 5">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#191919]"
                    >
                      Year 2024
                    </Text>
                    <Icon name="keyboard_arrow_down" className="text-[16px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <DocumentItem title="Volume 1 – January 2024" />
                  <DocumentItem title="Volume 2 – July 2024" />
                </div>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <Text variant={"card_title_large"}>About the Journal</Text>
                <div className="grid xs:grid-cols-2 gap-5 sm:grid-cols-10">
                  <div className="flex sm:col-span-4 items-center gap-2.5">
                    <Text variant={"body"}>ISBN:</Text>
                    <Text variant={"body"} className="text-neutral">
                      28455454545
                    </Text>
                  </div>
                  <div className="flex sm:col-span-6 items-center gap-2.5">
                    <Text variant={"body"}>Published:</Text>
                    <Text variant={"body"} className="text-neutral">
                      13 November 2023
                    </Text>
                  </div>
                  <div className="flex sm:col-span-4 items-center gap-2.5">
                    <Text variant={"body"}>EISSN:</Text>
                    <Text variant={"body"} className="text-neutral">
                      2837-4649
                    </Text>
                  </div>
                  <div className="flex sm:col-span-6 items-center gap-2.5">
                    <Text variant={"body"}>Frequency:</Text>
                    <Text variant={"body"} className="text-neutral">
                      Twice per year
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <Text variant={"card_title_large"}>Description</Text>
                <TextContentSection
                  texts={[
                    "Lorem ipsum dolor sit amet consectetur. Imperdiet sed a enim mi erat nisl arcu. Integer blandit egestas aliquam amet eu dolor risus orci massa. Auctor in sollicitudin libero ullamcorper. Porttitor feugiat adipiscing leo auctor cras odio aliquam pellentesque pulvinar. Netus neque elit imperdiet mauris egestas vitae. Vel imperdiet dui vulputate sit id. Pretium potenti risus interdum facilisi eget enim. At auctor amet tortor vitae turpis scelerisque. Nullam vitae arcu tortor at morbi vel velit. Ullamcorper in massa aliquet interdum tincidunt tortor aenean. Vitae augue dolor sem sed nibh.",
                    "Fusce sagittis eget viverra egestas nisl turpis bibendum. Diam arcu suspendisse diam purus. Faucibus porta risus malesuada mattis lorem vitae tortor. Lacinia ut ac bibendum scelerisque quis porta nunc. Facilisi velit lectus curabitur suscipit. Nulla neque porttitor blandit ipsum. Eget bibendum ipsum eget orci commodo tincidunt fusce leo senectus. Tortor interdum nisl erat hendrerit. In porta pretium volutpat metus felis cursus amet mollis. Elementum ultrices est enim posuere. Cursus iaculis augue leo sem aliquam amet integer.",
                    "Orci fermentum commodo donec egestas et. Purus diam diam nunc quam scelerisque sit arcu justo diam. Habitant vitae elit arcu orci at fermentum. Facilisis pulvinar lacus nec diam molestie. Cras sollicitudin sit sed tortor. At consectetur ipsum praesent dui porttitor. Justo cum sapien id ut adipiscing sit tincidunt.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

export default page;
