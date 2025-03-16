"use client";
import Banner from "@/src/components/common/Banner";

import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";

import bgImage from "@/public/about-bg.png";
import { useState } from "react";
import pageContentJson from "@/src/data/about.json";
import BannerSection from "@/src/components/common/BannerSection";

import Image from "next/image";
import CourseImg from "@/public/course-img.png";
import { Text, textVariants } from "@/src/components/ui/elements/Text";

import RelatedResourceGroup from "@/src/components/common/RelatedResourceGroup";

import { Icon } from "@/src/components/ui/elements/Icon";
import { cn } from "@/src/lib/utils";
import Dropdown from "@/src/components/common/DropDown";
import Link from "@/src/components/ui/elements/Link";
import Tag from "@/src/components/ui/elements/Tags";
import Course from "./components/Course";
import PageNavigation from "@/src/components/ui/elements/PageNavigation";

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const courses = [
    {
      title: "Google UX Design Professional Certificate",
      category: "Marketing and Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porta arcu sed risus mattis vehicula in. Lobortis vel risus tellus elit risus sed aliquam quam. Feugiat est sit viverra pellentesque morbi volutpat. Commodo tincidunt viverra commodo laoreet nibh vitae nullam cursus magna. Risus diam duis quam nulla adipiscing. Et quam nec enim vivamus dictumst mattis. At nec augue tristique donec diam tortor.",
      lessons: 6,
      duration: "10h 40m",
      location: "London, UK",
      level: "Advance",
      startDate: "25 Jul 2026",
      link: "#",
      imageSrc: CourseImg.src,
    },
    {
      title: "Google UX Design Professional Certificate",
      category: "Marketing and Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porta arcu sed risus mattis vehicula in. Lobortis vel risus tellus elit risus sed aliquam quam. Feugiat est sit viverra pellentesque morbi volutpat. Commodo tincidunt viverra commodo laoreet nibh vitae nullam cursus magna. Risus diam duis quam nulla adipiscing. Et quam nec enim vivamus dictumst mattis. At nec augue tristique donec diam tortor.",
      lessons: 6,
      duration: "10h 40m",
      location: "London, UK",
      level: "Advance",
      startDate: "25 Jul 2026",
      link: "#",
      imageSrc: CourseImg.src,
    },
    {
      title: "Google UX Design Professional Certificate",
      category: "Marketing and Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Porta arcu sed risus mattis vehicula in. Lobortis vel risus tellus elit risus sed aliquam quam. Feugiat est sit viverra pellentesque morbi volutpat. Commodo tincidunt viverra commodo laoreet nibh vitae nullam cursus magna. Risus diam duis quam nulla adipiscing. Et quam nec enim vivamus dictumst mattis. At nec augue tristique donec diam tortor.",
      lessons: 6,
      duration: "10h 40m",
      location: "London, UK",
      level: "Advance",
      startDate: "25 Jul 2026",
      link: "#",
      imageSrc: CourseImg.src,
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
            <div className="flex items-center px-2.5 pb-2.5 border-b border-border p-2.5">
              <input
                name="search"
                id="search"
                placeholder="Search"
                className={cn(
                  textVariants({
                    variant: "card_title_large",
                  }),
                  "placeholder:text-[14px] flex-auto text-[14px] outline-none focus:outline-none focus:shadow-none shadow-none"
                )}
              />
              <Icon name="search" className="text-[20px] text-[#191919]" />
            </div>
            <div className="flex items-center gap-10 justify-between">
              <div className="relative">
                <Dropdown
                  options={[
                    "Starting Soon",
                    "Most Popular",
                    "Newest",
                    "A-Z",
                    "Z-A",
                  ]}
                >
                  <div className="flex h-[28px]  px-5 cursor-pointer items-center border-border border gap-2.5">
                    <Text variant={"label"} className="text-[#191919]">
                      Sort
                    </Text>
                    <Icon name="tune" className="text-[#191919] text-[16px]" />
                  </div>
                </Dropdown>
              </div>
              <div className="flex h-[28px]  cursor-pointer items-center border-border border gap-2.5">
                <Dropdown
                  options={[
                    "Professional Certification",
                    "Accreditation Courses",
                    "Short Courses",
                    "Diploma",
                    "Degree",
                  ]}
                  type="checkbox"
                >
                  <div className="flex h-[28px] px-5 cursor-pointer items-center border-border border-r gap-2.5">
                    <Text variant={"label"} className="text-[#191919]">
                      Course Type
                    </Text>
                    <Icon
                      name="keyboard_arrow_down"
                      className="text-[#191919] text-[16px]"
                    />
                  </div>
                </Dropdown>
                <Dropdown
                  options={["Beginners", "Intermediate", "Advanced"]}
                  type="checkbox"
                >
                  <div className="flex h-[28px] px-5 cursor-pointer items-center border-border border-r gap-2.5">
                    <Text variant={"label"} className="text-[#191919]">
                      Course Level
                    </Text>
                    <Icon
                      name="keyboard_arrow_down"
                      className="text-[#191919] text-[16px]"
                    />
                  </div>
                </Dropdown>

                <Dropdown
                  options={[
                    "1 Week",
                    "2 - 3 Weeks",
                    "1 Month",
                    "2- 3 Months",
                    "3 - 6 Months",
                    "6 - 12 Months",
                    "1- 4 Years",
                  ]}
                  type="checkbox"
                >
                  <div className="flex h-[28px] px-5 cursor-pointer items-center border-border border-r gap-2.5">
                    <Text variant={"label"} className="text-[#191919]">
                      Duration
                    </Text>
                    <Icon
                      name="keyboard_arrow_down"
                      className="text-[#191919] text-[16px]"
                    />
                  </div>
                </Dropdown>

                <Dropdown
                  options={["Online", "In Person", "Hybrid"]}
                  type="checkbox"
                >
                  <div className="flex h-[28px] px-5 cursor-pointer items-center border-border border-r gap-2.5">
                    <Text variant={"label"} className="text-[#191919]">
                      Mode
                    </Text>
                    <Icon
                      name="keyboard_arrow_down"
                      className="text-[#191919] text-[16px]"
                    />
                  </div>
                </Dropdown>

                <Dropdown
                  options={[
                    "United Kingdom",
                    "United Arab Emirates",
                    "Bahrain",
                    "Brazil",
                    "Central African Republic",
                    "Curaçao",
                    "Georgia",
                    "Greece",
                    "Guinea",
                    "Haiti",
                    "Iceland",
                  ]}
                  type="checkbox"
                >
                  <div className="flex h-[28px] px-5 cursor-pointer items-center gap-2.5">
                    <Text variant={"label"} className="text-[#191919]">
                      Location
                    </Text>
                    <Icon
                      name="keyboard_arrow_down"
                      className="text-[#191919] text-[16px]"
                    />
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[281px_auto] gap-8 ">
            <div className="flex flex-col max-h-fit bg-[#EBF4FF] p-5">
              <div className="flex flex-col gap-5">
                <MenuAccordion
                  title="Accredited Training Providers"
                  items={["Coaching", "Mentoring", "Supervision"]}
                />
                <MenuAccordion
                  title="Non Accredited Providers"
                  items={["Assessment", "Courses"]}
                />
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-12">
                  {courses.map((course, index) => (
                    <Course key={course.title} {...course} />
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  {courses.slice(0, 2).map((course, index) => (
                    <Course vertical key={course.title} {...course} />
                  ))}
                </div>
                <div className="flex flex-col gap-12">
                  {courses.map((course, index) => (
                    <Course key={course.title} {...course} />
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-12">
                <div className="flex  items-center gap-5">
                  <div className="flex items-center gap-2.5">
                    <Icon
                      name="chevron_left"
                      className="text-neutralDark text-[16px]"
                    />
                    <Text variant="small">Page 2 of 16</Text>
                    <Icon
                      name="chevron_right"
                      className="text-neutralDark text-[16px]"
                    />
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Text variant="small">Go to page</Text>
                    <input
                      name="page"
                      className="h-6 w-6 border border-borer rounded-sm"
                      type="text"
                    />
                    <Text variant="small">Go</Text>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Text variant="small">Showing 10 of 100</Text>
                  <input
                    name="page"
                    className="h-6 w-6 border border-borer rounded-sm"
                    type="text"
                  />
                  <Text variant="small">Per page</Text>
                </div>
              </div>
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

const MenuAccordion = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col border-b border-border">
      <div
        className="flex items-center justify-between cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <h6 className="text-xs leading-none font-semibold text-[#394DFF]">
          {title}
        </h6>
        <Icon
          name={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          className="text-[20px] transition-transform"
        />
      </div>
      {isOpen && (
        <div className="p-5 flex flex-col gap-5 ">
          {items.map((item, index) => (
            <Text key={item} variant="nav_text_2" className="text-[#191919]">
              {item}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
