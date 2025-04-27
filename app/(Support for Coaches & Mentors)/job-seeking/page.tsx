"use client";
import React, { useState } from "react";
import CareerBg from "@/public/career_bg.jpeg";
import Banner from "@/src/components/common/Banner";
import BannerSection from "@/src/components/common/BannerSection";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";
import { Button } from "@/src/components/ui/elements/Button";
import { Text, textVariants } from "@/src/components/ui/elements/Text";
import TextContentSection from "@/src/components/common/TextContentSection";
import { Icon } from "@/src/components/ui/elements/Icon";
import KeyBoardLeftIcon from "@/public/keyboard_icon_left.svg";
import KeyBoardRightIcon from "@/public/keyboard_icon_right.svg";
import MentorCardBg from "@/public/mentor_card_bg.png";
import FigmaLogo from "@/public/logo_figma.svg";
import Link from "@/src/components/ui/elements/Link";
import { SearchInput } from "@/src/components/ui/elements/form/Search";
import Switch from "@/src/components/ui/elements/Switch";
import InputChips from "@/src/components/ui/elements/InputChips";
import Divider from "@/src/components/ui/elements/Divider";
import JobCard, { JobCardProps } from "./components/JobCard";
const page = () => {
  const [tagItems, setTagItems] = useState([
    {
      id: 1,
      name: "Business Development",
    },
    {
      id: 2,
      name: "Administrative Assistant",
    },
    {
      id: 3,
      name: "Media and Communications",
    },
    {
      id: 4,
      name: "Human Resources",
    },
    {
      id: 5,
      name: "Healthcare Service",
    },
    {
      id: 6,
      name: "Program and Project Management",
    },
    {
      id: 7,
      name: "Information Technology",
    },
    {
      id: 8,
      name: "Customer Service",
    },
    {
      id: 9,
      name: "Engineering",
    },
  ]);
  const jobData: JobCardProps[] = [
    {
      logo: "/path-to-logo.png",
      title: "UI/UX Designer",
      experience: "3 Years",
      company: "G.C.C. Limited",
      location: "Dubai, UAE",
      jobType: "Full Time",
      workMode: "Remote",
      applyLink: "#",
      // applied: true,
      // date: "31th Aug, 2024",
    },
    {
      logo: "/path-to-logo.png",
      title: "UI/UX Designer",
      experience: "3 Years",
      company: "G.C.C. Limited",
      location: "Dubai, UAE",
      jobType: "Full Time",
      workMode: "Remote",
      applyLink: "#",
      // applied: true,
      // date: "31th Aug, 2024",
    },
    {
      logo: "/path-to-logo.png",
      title: "UI/UX Designer",
      experience: "3 Years",
      company: "G.C.C. Limited",
      location: "Dubai, UAE",
      jobType: "Full Time",
      workMode: "Remote",
      applyLink: "#",
      // applied: true,
      // date: "31th Aug, 2024",
    },
    {
      logo: "/path-to-logo.png",
      title: "UI/UX Designer",
      experience: "3 Years",
      company: "G.C.C. Limited",
      location: "Dubai, UAE",
      jobType: "Full Time",
      workMode: "Remote",
      applyLink: "#",
      // applied: true,
      // date: "31th Aug, 2024",
    },
    {
      logo: "/path-to-logo.png",
      title: "UI/UX Designer",
      experience: "3 Years",
      company: "G.C.C. Limited",
      location: "Dubai, UAE",
      jobType: "Full Time",
      workMode: "Remote",
      applyLink: "#",
      // applied: true,
      // date: "31th Aug, 2024",
    },
    {
      logo: "/path-to-logo.png",
      title: "UI/UX Designer",
      experience: "3 Years",
      company: "G.C.C. Limited",
      location: "Dubai, UAE",
      jobType: "Full Time",
      workMode: "Remote",
      applyLink: "#",
      // applied: true,
      // date: "31th Aug, 2024",
    },
  ];

  return (
    <>
      <section
        className={cn(
          "md:py-[75px] bg-neutralDark relative py-[75px] flex items-center justify-start md:min-h-[500px]"
        )}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute right-0 w-[517px] top-0 h-full"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 26% 100%)" }}
        >
          <Image
            src={CareerBg}
            className="max-w-[130%]  object-contain "
            alt="career-bg"
          />
        </div>
        <div className="container">
          <BannerSection
            title="Welcome to your professional community"
            description="Lorem ipsum dolor sit amet consectetur. Scelerisque congue sagittis ac duis tortor sollicitudin facilisi. Nisi feugiat facilisis id ac proin potenti. Ut aenean porttitor dignissim sit purus nunc. Ac quam fermentum velit sed amet. Ipsum magna neque quam adipiscing."
          />
        </div>
      </section>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Career Hub",
            },
            {
              name: "job-seeking",
              href: "#",
            },
          ]}
        />
      </Breadcrumb>

      <Section bgColor="white">
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <Text variant={"section_title"}>Trending Jobs</Text>
            <Text variant={"body"} className="text-neutral">
              Search thousands of job openings from global companies hiring
              right now.Remote or office-based, your perfect job could be
              waiting for
            </Text>
            <div className="flex flex-col gap-5">
              <div className="relative max-w-[360px] ">
                <input
                  id=""
                  placeholder="Search Jobs By Keyword"
                  className="w-full rounded-sm outline-none px-2.5 py-2 border transition-colors text-body_3 border-border text-neutralDark focus:border-primary-600 placeholder:text-neutralLight h-[32px] text-xs leading-[18px] font-light font-poppins font-poppins text-left border w-full min-h-[40px] text-neutralDark border-border outline-none px-2.5 py-2 focus:border-primary-600  "
                  type="text"
                />
                <div className="flex items-center absolute  right-2.5  top-1/2 transform -translate-y-1/2  cursor-pointer">
                  <Icon className="text-lg text-neutralDark " name={"search"} />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="relative w-[360px] ">
                  <input
                    placeholder="Location"
                    id=""
                    className="w-full rounded-sm outline-none px-2.5 py-2 border transition-colors text-body_3 border-border text-neutralDark focus:border-primary-600 placeholder:text-neutralLight h-[32px] text-xs leading-[18px] font-light font-poppins font-poppins text-left border w-full min-h-[40px] text-neutralDark border-border outline-none px-2.5 py-2 focus:border-primary-600  "
                    type="text"
                  />
                  <div className="flex items-center absolute  right-2.5  top-1/2 transform -translate-y-1/2  cursor-pointer">
                    <Icon
                      className="text-lg text-neutralDark "
                      name={"location_on"}
                    />
                  </div>
                </div>
                <Switch label="Remote Jobs Only" />
              </div>
            </div>
            <Button className="max-w-fit" variant={"default"}>
              Search
            </Button>
            <Text variant={"body"} className="text-neutral">
              Search 171, 999+ new jobs
            </Text>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center flex-wrap gap-x-2.5 gap-y-[14px]">
              {tagItems.map((item) => {
                return (
                  <InputChips
                    radius={true}
                    variant={"secondary"}
                    key={item.id}
                    className={cn(
                      textVariants({
                        variant: "placeholder",
                      }),
                      "bg-transparent border-neutralDark border"
                    )}
                  >
                    {item.name}
                  </InputChips>
                );
              })}
            </div>
            <Link href="/" variant={"secondary"}>
              See More
            </Link>
          </div>
        </div>
      </Section>

      <Section bgColor="white" className="pt-0">
        <div className="flex flex-col gap-12">
          <div className="flex justify-end">
            <Icon name="tune" className="text-[24px]" />
          </div>
          <div className="">
            <Divider />
            {jobData.map((item) => {
              return <JobCard {...item} key={item.title} />;
            })}
            {/* <JobCard/> */}
            {/*  */}
          </div>
        </div>
      </Section>
    </>
  );
};

export default page;
