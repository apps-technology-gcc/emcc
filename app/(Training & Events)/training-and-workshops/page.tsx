"use client";
import React, { useState } from "react";
import Section from "@/src/components/layout/Section";
import TextContentSection from "@/src/components/common/TextContentSection";
import { Text } from "@/src/components/ui/elements/Text";
import { AccordionList } from "@/src/components/ui/elements/AccordionsList";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import { Icon } from "@/src/components/ui/elements/Icon";
import { cn } from "@/src/lib/utils";
import { AccordionMenuList } from "@/src/components/ui/elements/AccordionsMenuList";
import SidebarMenu from "@/src/components/common/SideBarMenu";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Tag from "@/src/components/ui/elements/Tags";
import Divider from "@/src/components/ui/elements/Divider";
import Banner from "@/src/components/common/Banner";
import bgImage from "@/public/event-bg.jpeg";
import NavLink from "@/src/components/ui/elements/NavLink";
import SectionTitle from "@/src/components/common/SectionTitle";
import Link from "@/src/components/ui/elements/Link";
import TrainingSection from "@/src/components/common/TrainingSection";

const events = [
  {
    id: 1,
    title:
      "Config 2024: Designing a Better Conference For People Who Build Product",
    topic: "Event Topic",
    location: "Virtual & In Person - San Francisco, CA",
    date: "Friday 30 July, 2024",
    isFree: true,
    membersOnly: false,
    //   backgroundImage: EventBg.src,
  },
  {
    id: 2,
    title: "Next.js Conference 2024",
    topic: "Web Development",
    location: "Virtual",
    date: "Saturday 15 August, 2024",
    isFree: false,
    membersOnly: false,
    //   backgroundImage: EventBg.src,
  },
  {
    id: 3,
    title: "React Summit 2024",
    topic: "Frontend Development",
    location: "Amsterdam, Netherlands",
    date: "Monday 20 September, 2024",
    isFree: true,
    membersOnly: false,
    //   backgroundImage: EventBg.src,
  },
];
const MemberEvents = [
  {
    id: 1,
    title:
      "Config 2024: Designing a Better Conference For People Who Build Product",
    topic: "Event Topic",
    location: "Virtual & In Person - San Francisco, CA",
    date: "Friday 30 July, 2024",
    isFree: true,
    membersOnly: true,
    //   backgroundImage: EventBg.src,
  },
  {
    id: 2,
    title: "Next.js Conference 2024",
    topic: "Web Development",
    location: "Virtual",
    date: "Saturday 15 August, 2024",
    isFree: false,
    membersOnly: true,
    //   backgroundImage: EventBg.src,
  },
  {
    id: 3,
    title: "React Summit 2024",
    topic: "Frontend Development",
    location: "Amsterdam, Netherlands",
    date: "Monday 20 September, 2024",
    isFree: true,
    membersOnly: true,
    //   backgroundImage: EventBg.src,
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("Suspended Coaches");
  return (
    <>
      <Banner bgImage={bgImage.src}>
        <div className="max-w-[763px] flex flex-col gap-12">
          <Text
            font={"tinos"}
            variant={"h1_page_title"}
            className="uppercase text-white"
          >
            Training & Events
          </Text>
          <Text variant={"body"} className="text-white">
            Training with EMCC will develop your practical knowledge and skills
            in Coaching, Mentoring & Supervision. Our best in class programmes
            are led by recognised industry experts and mapped against the our
            global standard competency frameworks.
          </Text>
        </div>
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Training & Events",
              href: "/",
            },
          ]}
        />
      </Breadcrumb>

      <Section bgColor="white">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap5 justify-between">
            <div className="flex items-center gap-8">
              <NavLink
                variant={"navlink-1"}
                href="/"
                className={cn(
                  activeTab === "Suspended Coaches" ? " border-primary-600" : ""
                )}
              >
                All Events
              </NavLink>
              <NavLink
                variant={"navlink-1"}
                href="/"
                onClick={() => setActiveTab("Disqualified Coaches")}
                className={cn(
                  activeTab === "Disqualified Coaches"
                    ? " border-primary-600"
                    : ""
                )}
              >
                In Person Events
              </NavLink>
              <NavLink
                variant={"navlink-1"}
                href="/"
                onClick={() => setActiveTab("Inactive Coaches")}
                className={cn(
                  activeTab === "Inactive Coaches" ? " border-primary-600" : ""
                )}
              >
                Virtual Events
              </NavLink>
            </div>
            <Icon name="tune" className="text-[24px] " />
          </div>

          <TrainingSection
            events={events}
            viewMoreLink="/training-and-workshops/EMCC ME Events"
            title="EMCC ME Events"
          />
          <TrainingSection
            events={events}
            viewMoreLink="/training-and-workshops/EMCC Partner Events"
            title="EMCC Partner Events"
          />
          <TrainingSection
            events={MemberEvents}
            viewMoreLink="/training-and-workshops/Members Only  Event"
            title="Members Only  Event"
          />
        </div>
      </Section>
    </>
  );
};

export default Page;
