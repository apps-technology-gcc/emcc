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
import BookImg from "@/public/book.png";
import PodcastImg from "@/public/podcast-tag-img.svg";
import AppleImg from "@/public/apple.svg";
import GoogleImg from "@/public/google.svg";
import SpotifyImg from "@/public/spotify.svg";
import PodcastSerious from "../components/PodcastSerious";
import PodcastSeriousImg from "@/public/podcast-serious.png";
const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);

  return pageContent ? (
    <Section bgColor="white" className="">
      <div className="grid col-span-11 grid-cols-1 md:grid-cols-11 gap-12">
        <div className="md:col-span-7 flex flex-col gap-12">
          <div
            className="flex flex-col gap-12  rounded-md overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #19E8DE 0%, #086667 100%)",
            }}
          >
            <div className="flex flex-col gap-5 px-5 pt-20">
              <Text variant={"section_title"} className="text-white">
                How To Scale Your Business If You Are Completely Remote with GQ
                Fu
              </Text>
              <div className="flex items-center gap-5">
                <Image src={PodcastImg} width={40} height={40} alt="podcast" />
                <Text variant={"card_title_small"} className="text-white">
                  AI & Digital Podcast
                </Text>
              </div>
            </div>
            <div
              className="flex pb-20 px-5 flex-col gap-12"
              style={{
                background:
                  "linear-gradient(180deg, rgba(28, 28, 28, 0) 0%, #1C1C1C 70%)",
              }}
            >
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"} className="text-white">
                  Episode Description
                </Text>
                <Text variant={"body"} className="text-white">
                  Lacinia massa cursus fermentum duis lacinia senectus. Sodales
                  urna nibh urna ullamcorper vestibulum mauris. Etiam donec vel
                  eu cursus sed ipsum nunc. Pellentesque tortor eget mauris
                  iaculis. Nisl pellentesque aliquet arcu pretium nunc posuere
                  nulla elementum gravida. Proin risus dictum ligula hac sed
                  eget. Eget tortor placerat gravida egestas praesent. Nunc
                  fusce vitae fringilla nisl fermentum imperdiet sit facilisi...
                </Text>
                <Link
                  icon={<Icon name="east" className="text-[20px] text-white" />}
                  variant={"primary"}
                  className="text-white hover:text-white"
                  href={""}
                  iconPosition="right"
                >
                  Read More
                </Link>
              </div>
              <div className="flex flex-col gap-8">
                <Text variant={"section_title"} className="text-white">
                  All Episodes
                </Text>
                <div className="flex items-start border-border border-b-[0.5px] gap-5 px-5 py-2.5">
                  <div className="min-w-[120px]">
                    <Image
                      src={PodcastSeriousImg}
                      width={120}
                      height={120}
                      alt="Podcast Serious"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto flex-col gap-5">
                        <Text
                          variant={"resource_header"}
                          className="text-white"
                        >
                          How To Scale Your Business If You Are Completely
                          Remote with GQ Fu
                        </Text>
                        <Text variant={"small"} className="text-white">
                          AI & Digital Podcast
                        </Text>
                      </div>
                      <Icon
                        name="bookmark_add"
                        className="text-[24px] text-white"
                      />
                    </div>
                    <Text variant={"body"} className="text-white line-clamp-2">
                      Lacinia massa cursus fermentum duis lacinia senectus.
                      Sodales urna nibh urna ullamcorper vestibulum mauris.
                      Etiam donec vel eu cursus sed ipsum nunc. Pellentesque
                      tortor eget mauris iaculis. Nisl pellentesque aliquet arcu
                      pretium nunc posuere nulla elementum gravida. Proin risus
                      dictum ligula hac sed eget. Eget tortor placerat gravida
                      egestas praesent. Nunc fusce vitae fringilla nisl
                      fermentum imperdiet sit facilisi...
                    </Text>
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto items-center gap-2.5">
                        <Text variant={"body"} className="text-[#fff]">
                          13 Nov 2023
                        </Text>
                        <Text
                          variant={"body"}
                          className="text-[#fff] list-item ml-5"
                        >
                          15 min, 8 sec
                        </Text>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                        <Icon name="play_arrow" className="text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start border-border border-b-[0.5px] gap-5 px-5 py-2.5">
                  <div className="min-w-[120px]">
                    <Image
                      src={PodcastSeriousImg}
                      width={120}
                      height={120}
                      alt="Podcast Serious"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto flex-col gap-5">
                        <Text
                          variant={"resource_header"}
                          className="text-white"
                        >
                          How To Scale Your Business If You Are Completely
                          Remote with GQ Fu
                        </Text>
                        <Text variant={"small"} className="text-white">
                          AI & Digital Podcast
                        </Text>
                      </div>
                      <Icon
                        name="bookmark_add"
                        className="text-[24px] text-white"
                      />
                    </div>
                    <Text variant={"body"} className="text-white line-clamp-2">
                      Lacinia massa cursus fermentum duis lacinia senectus.
                      Sodales urna nibh urna ullamcorper vestibulum mauris.
                      Etiam donec vel eu cursus sed ipsum nunc. Pellentesque
                      tortor eget mauris iaculis. Nisl pellentesque aliquet arcu
                      pretium nunc posuere nulla elementum gravida. Proin risus
                      dictum ligula hac sed eget. Eget tortor placerat gravida
                      egestas praesent. Nunc fusce vitae fringilla nisl
                      fermentum imperdiet sit facilisi...
                    </Text>
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto items-center gap-2.5">
                        <Text variant={"body"} className="text-[#fff]">
                          13 Nov 2023
                        </Text>
                        <Text
                          variant={"body"}
                          className="text-[#fff] list-item ml-5"
                        >
                          15 min, 8 sec
                        </Text>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                        <Icon name="play_arrow" className="text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start border-border border-b-[0.5px] gap-5 px-5 py-2.5">
                  <div className="min-w-[120px]">
                    <Image
                      src={PodcastSeriousImg}
                      width={120}
                      height={120}
                      alt="Podcast Serious"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto flex-col gap-5">
                        <Text
                          variant={"resource_header"}
                          className="text-white"
                        >
                          How To Scale Your Business If You Are Completely
                          Remote with GQ Fu
                        </Text>
                        <Text variant={"small"} className="text-white">
                          AI & Digital Podcast
                        </Text>
                      </div>
                      <Icon
                        name="bookmark_add"
                        className="text-[24px] text-white"
                      />
                    </div>
                    <Text variant={"body"} className="text-white line-clamp-2">
                      Lacinia massa cursus fermentum duis lacinia senectus.
                      Sodales urna nibh urna ullamcorper vestibulum mauris.
                      Etiam donec vel eu cursus sed ipsum nunc. Pellentesque
                      tortor eget mauris iaculis. Nisl pellentesque aliquet arcu
                      pretium nunc posuere nulla elementum gravida. Proin risus
                      dictum ligula hac sed eget. Eget tortor placerat gravida
                      egestas praesent. Nunc fusce vitae fringilla nisl
                      fermentum imperdiet sit facilisi...
                    </Text>
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto items-center gap-2.5">
                        <Text variant={"body"} className="text-[#fff]">
                          13 Nov 2023
                        </Text>
                        <Text
                          variant={"body"}
                          className="text-[#fff] list-item ml-5"
                        >
                          15 min, 8 sec
                        </Text>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                        <Icon name="play_arrow" className="text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start border-border border-b-[0.5px] gap-5 px-5 py-2.5">
                  <div className="min-w-[120px]">
                    <Image
                      src={PodcastSeriousImg}
                      width={120}
                      height={120}
                      alt="Podcast Serious"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto flex-col gap-5">
                        <Text
                          variant={"resource_header"}
                          className="text-white"
                        >
                          How To Scale Your Business If You Are Completely
                          Remote with GQ Fu
                        </Text>
                        <Text variant={"small"} className="text-white">
                          AI & Digital Podcast
                        </Text>
                      </div>
                      <Icon
                        name="bookmark_add"
                        className="text-[24px] text-white"
                      />
                    </div>
                    <Text variant={"body"} className="text-white line-clamp-2">
                      Lacinia massa cursus fermentum duis lacinia senectus.
                      Sodales urna nibh urna ullamcorper vestibulum mauris.
                      Etiam donec vel eu cursus sed ipsum nunc. Pellentesque
                      tortor eget mauris iaculis. Nisl pellentesque aliquet arcu
                      pretium nunc posuere nulla elementum gravida. Proin risus
                      dictum ligula hac sed eget. Eget tortor placerat gravida
                      egestas praesent. Nunc fusce vitae fringilla nisl
                      fermentum imperdiet sit facilisi...
                    </Text>
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto items-center gap-2.5">
                        <Text variant={"body"} className="text-[#fff]">
                          13 Nov 2023
                        </Text>
                        <Text
                          variant={"body"}
                          className="text-[#fff] list-item ml-5"
                        >
                          15 min, 8 sec
                        </Text>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                        <Icon name="play_arrow" className="text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start border-border border-b-[0.5px] gap-5 px-5 py-2.5">
                  <div className="min-w-[120px]">
                    <Image
                      src={PodcastSeriousImg}
                      width={120}
                      height={120}
                      alt="Podcast Serious"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto flex-col gap-5">
                        <Text
                          variant={"resource_header"}
                          className="text-white"
                        >
                          How To Scale Your Business If You Are Completely
                          Remote with GQ Fu
                        </Text>
                        <Text variant={"small"} className="text-white">
                          AI & Digital Podcast
                        </Text>
                      </div>
                      <Icon
                        name="bookmark_add"
                        className="text-[24px] text-white"
                      />
                    </div>
                    <Text variant={"body"} className="text-white line-clamp-2">
                      Lacinia massa cursus fermentum duis lacinia senectus.
                      Sodales urna nibh urna ullamcorper vestibulum mauris.
                      Etiam donec vel eu cursus sed ipsum nunc. Pellentesque
                      tortor eget mauris iaculis. Nisl pellentesque aliquet arcu
                      pretium nunc posuere nulla elementum gravida. Proin risus
                      dictum ligula hac sed eget. Eget tortor placerat gravida
                      egestas praesent. Nunc fusce vitae fringilla nisl
                      fermentum imperdiet sit facilisi...
                    </Text>
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto items-center gap-2.5">
                        <Text variant={"body"} className="text-[#fff]">
                          13 Nov 2023
                        </Text>
                        <Text
                          variant={"body"}
                          className="text-[#fff] list-item ml-5"
                        >
                          15 min, 8 sec
                        </Text>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                        <Icon name="play_arrow" className="text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start border-border border-b-[0.5px] gap-5 px-5 py-2.5">
                  <div className="min-w-[120px]">
                    <Image
                      src={PodcastSeriousImg}
                      width={120}
                      height={120}
                      alt="Podcast Serious"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto flex-col gap-5">
                        <Text
                          variant={"resource_header"}
                          className="text-white"
                        >
                          How To Scale Your Business If You Are Completely
                          Remote with GQ Fu
                        </Text>
                        <Text variant={"small"} className="text-white">
                          AI & Digital Podcast
                        </Text>
                      </div>
                      <Icon
                        name="bookmark_add"
                        className="text-[24px] text-white"
                      />
                    </div>
                    <Text variant={"body"} className="text-white line-clamp-2">
                      Lacinia massa cursus fermentum duis lacinia senectus.
                      Sodales urna nibh urna ullamcorper vestibulum mauris.
                      Etiam donec vel eu cursus sed ipsum nunc. Pellentesque
                      tortor eget mauris iaculis. Nisl pellentesque aliquet arcu
                      pretium nunc posuere nulla elementum gravida. Proin risus
                      dictum ligula hac sed eget. Eget tortor placerat gravida
                      egestas praesent. Nunc fusce vitae fringilla nisl
                      fermentum imperdiet sit facilisi...
                    </Text>
                    <div className="flex items-start gap-5">
                      <div className="flex flex-auto items-center gap-2.5">
                        <Text variant={"body"} className="text-[#fff]">
                          13 Nov 2023
                        </Text>
                        <Text
                          variant={"body"}
                          className="text-[#fff] list-item ml-5"
                        >
                          15 min, 8 sec
                        </Text>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                        <Icon name="play_arrow" className="text-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex md:col-span-7 items-start justify-between gap-5">
              <div className="flex flex-auto flex-col gap-5">
                <p className="text-[16px] leading-[28px] text-neutral font-light">
                  03 September 2023
                </p>
              </div>
              <Icon name="bookmark_add" className="text-[24px]" />
              <Icon name="share" className="text-[24px]" />
            </div>
            <div className="flex flex-col gap-5">
              <Text variant={"card_title_large"}>Overview</Text>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex items-center gap-2.5">
                  <Text variant={"body"}>ISBN:</Text>
                  <Text variant={"body"} className="text-neutral">
                    C241334140
                  </Text>
                </div>
                <div className="flex items-center gap-2.5">
                  <Text variant={"body"}>Page count:</Text>
                  <Text variant={"body"} className="text-neutral">
                    448
                  </Text>
                </div>
              </div>
            </div>
            <TextContentSection
              texts={[
                "The book gives a clear insight and understanding of how to work with Low Intensity Cognitive Behaviour Therapy (LICBT). The LICBT is a form of CBT which is used to treat mild to moderate, common mental health problems over a shorter length of contact. The authors of the book shares in a very pedagogical way how LICBT can be used in a structured therapy. Through empirical material the reader it taken though a highly practical and supportive approach which I view as a significant strength of this book.",
                "The authors write that their core mission with the book is to teach the reader how to perform LICBT, I would say that this mission is completed if the reader reads the first seven chapters in detail. Thereafter the rest of the book can be used more independently, depending on the internet or/and need of the reader. The wide variety and extensive number of exercises linked to the books chapters are useful and easy to understand and apply. Also the case studies make sense and are linked to the topics in a pragmatic and meaningful way.",
                "The book start with an overview of the psychotherapeutic approaches which were instrumental in the development of CBT and therefore for LICBT. This overview is short and well written. I see this introduction being especially important when the reader is a coach and/or new to CBT in general. The origins and basics of CBT are also shared through the authors proposed internet clips. I especially liked the one by David Clark https://www.youtube.com/watch?v=bvH9kUUmGog. For the non-native English reader it can be relevant to know David Clark also works with Anke Ehlers (which this book does not mention), however I mention this here because this researcher has also written texts in German and she has, tougher with David Clark done some very interesting and useful work  on CBT and especially on the emotional factors linked to cognition",
              ]}
            />

            <BoardText text=" Lorem ipsum dolor sit amet consectetur. In nisl morbi adipiscing proin amet quis. Augue sem egestas venenatis ac lorem integer. Faucibus nibh ligula magna facilisis. Eu adipiscing sem aliquam porta lorem nunc malesuada. Nulla odio arcu sem magnis faucibus in tortor leo. Mauris nunc imperdiet purus augue nunc. Ullamcorper bibendum quis egestas fringilla mauris. Pellentesque elementum sit gravida aenean. A arcu ut leo velit. Elementum varius ac pellentesque tincidunt id." />
            <TextContentSection
              texts={[
                "The suitability of this book as a general reading for psychologist can be questioned, especially if the psychologist already works with CBT and are used to diagnostic work. Yet, it does give newer elements due the the ‘Lower Intensity’ perspective. Still I am of the view that if a psychologist is proficient in another Cognitive Behaviour Therapeutical approach the book may be too lengthly. However, I write this review for the EMCC with an aim of allowing coaches to get insight into how this book would be able to support their coaching practice, and here it certainly could be a relevant practitioners guide. This guide will allow readers from the fields of coaching, counselling, supervision, and related fields to learn and adopt principles of CBT (Cognitive behaviour therapy) with the ‘Lower Intensity’ perspective into their coaching practice. Furthermore, the aspects of service delivery such as service promotion and self-referral are well explained and can support to maximise the impact of the coaching.",
                "The future potential reader should be aware that the book has a strong UK connotation. Some chapters have a strong focus to the UK NHS (National Health Service). The arrangement of healthcare services which support LICBT and the economical arguments that in the UK have driven the development of LICBT. Both from a Political and Economical perspective this seems to make sense, yet some of the insights are not useful for a non-UK practitioner. Moreover, in general the NHS insights are not relevant for the fields related to coaching, and I would tend to say not even for the UK coaches. In general I enjoyed reading the book, it gave me a clear insight and understanding of the theoretical work which had led the writers to work and develop Low Intensity Cognitive Behaviour Therapy (LICBT).",
              ]}
            /> */}
        </div>
        <div className="md:col-span-4 place-content-start justify-start grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2.5">
              <Text variant={"button"} className="text-neutralDark">
                Listen on
              </Text>
              <Icon
                name="graphic_eq"
                className="text-[20px] text-neutralDark"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex px-5 py-2.5 items-center gap-[30px] bg-background rounded-md overflow-hidden">
                <Image width={50} height={50} src={AppleImg} alt="Apple" />
                <Text variant={"card_title_small"}>Apple Podcasts</Text>
              </div>
              <div className="flex px-5 py-2.5 items-center gap-[30px] bg-background rounded-md overflow-hidden">
                <Image width={50} height={50} src={GoogleImg} alt="Apple" />
                <Text variant={"card_title_small"}>Google Podcasts</Text>
              </div>
              <div className="flex px-5 py-2.5 items-center gap-[30px] bg-background rounded-md overflow-hidden">
                <Image width={50} height={50} src={SpotifyImg} alt="Apple" />
                <Text variant={"card_title_small"}>Spotify Podcasts</Text>
              </div>
            </div>
          </div>
          <PodcastSerious />
          <ResourcesItem />
        </div>
      </div>
    </Section>
  ) : null;
};

export default page;
