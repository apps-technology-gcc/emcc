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
import BulletText from "@/src/components/ui/elements/BulletText";

import IconWithText from "@/components/common/IconWithText";
import { Button } from "@/src/components/ui/elements/Button";
import TrainingSection from "@/src/components/common/TrainingSection";
import Speakers from "@/src/components/common/Speaker";
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
const Page = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <>
      <Banner bgImage={bgImage.src}>
        <div className="flex flex-col gap-16">
          <div className="max-w-[763px] flex flex-col gap-12">
            <Text
              font={"tinos"}
              variant={"h1_page_title"}
              className="uppercase text-white"
            >
              Config 2024: Designing a Better Conference For People Who Build
              Product
            </Text>
            <Text variant={"body"} className="text-white">
              Lorem ipsum dolor sit amet consectetur. Faucibus eu enim sed arcu
              ornare. Mauris vitae volutpat arcu aliquam varius. Sapien urna
              pharetra rhoncus augue eros tempus a. Commodo habitasse vel eget
              quis. Erat amet pharetra quisque nam quam. Interdum tristique eget
              augue lacus egestas nisi egestas.
            </Text>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <Icon name="event_note" className="text-[24px]  text-white" />
              <Text variant={"card_title_small"} className="text-white">
                Friday, 9th November, 2021
              </Text>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon name="schedule" className="text-[24px]  text-white" />
              <Text variant={"card_title_small"} className="text-white">
                7:00 am to 2:00pm EDT
              </Text>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon name="location_on" className="text-[24px] text-white" />
              <Text variant={"card_title_small"} className="text-white">
                Friday, 9th November, 2021
              </Text>
            </div>
          </div>
        </div>
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Config 2024: Designing a Better Conference For People Who Build Product",
              href: "/config",
            },
          ]}
        />
      </Breadcrumb>

      <Section bgColor="white">
        <div className="flex flex-col gap-20">
          <div className="grid grid-cols-1 md:grid-cols-11 gap-16">
            <div className="md:col-span-7 flex flex-col gap-20">
              <div className="flex flex-col gap-12">
                <div className="flex items-center bg-primary-200">
                  <NavLink
                    href=""
                    variant={"tab-1"}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Overview");
                    }}
                    className="bg-primary-600 text-white"
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("Speakers");
                    }}
                    href=""
                    variant={"tab-1"}
                  >
                    Speakers
                  </NavLink>
                </div>
                {activeTab == "Speakers" && (
                  <>
                    <SectionTitle title="Meet Our Hosts and Speakers" />

                    <Speakers />
                  </>
                )}
                {activeTab == "Overview" && (
                  <>
                    <div className="flex flex-col gap-8">
                      <TextContentSection
                        title="About The Event"
                        texts={[
                          "Lorem ipsum dolor sit amet consectetur. Libero gravida rhoncus amet lorem lacus metus. Iaculis lacus leo quisque id adipiscing lorem leo quis nibh. Euismod ullamcorper semper mauris euismod justo quis odio neque. Facilisis pretium placerat rhoncus dignissim placerat in mauris tristique et. Justo semper aliquet fringilla neque euismod. Id urna nibh elit cras sed turpis. Diam duis lacus sed faucibus neque quam. In augue ut auctor platea iaculis in.",
                          "Massa cursus aliquet morbi nunc tincidunt. Velit tristique pellentesque magnis quam scelerisque suspendisse ornare varius. Fringilla leo magnis libero aenean sit augue elit odio elementum. Quam amet fringilla magna eu viverra sit volutpat porttitor. Curabitur purus aliquet est tortor arcu sed. Sem aliquam aliquet mattis ac porttitor scelerisque bibendum hendrerit. Faucibus enim pharetra non faucibus.",
                        ]}
                      />
                      <BulletText
                        texts={[
                          "Setting high standards in assessment criteria",
                          "Measuring ability against our evidence-based competence framework",
                          "Using reliable and rigorous assessment processess",
                          "Demanding a professional, reflective approach",
                          "Ensuring a commitment to continuous development",
                        ]}
                      />
                    </div>
                    <video
                      width="100%"
                      height="auto"
                      controls
                      src="https://youtu.be/K4TOrB7at0Y"
                    ></video>
                  </>
                )}
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-8">
              {/* <SidebarMenu /> */}

              <div className="flex flex-col gap-5">
                <IconWithText
                  iconName="event_note"
                  text="Friday, 9th November, 2024"
                />
                <IconWithText
                  iconName="schedule"
                  text="7:00 am to 2:00pm EDT"
                />
                <IconWithText
                  iconName="location_on"
                  text="Virtual & In Person - San Francisco, CA
Moscone Center"
                />
                <IconWithText iconName="call" text="+88 0123 456 789" />
              </div>
              <Button variant={"default"} btnType={"primary"} outline>
                Join Webineer
              </Button>
              <Text variant={"body"} className="text-[#333]">
                Please email at <u>event@emcc.global</u> if you wish to cancel
                the event.
              </Text>
            </div>
          </div>
          <TrainingSection
            title="Upcoming Events"
            events={events}
            viewMoreLink="/view more"
          />
        </div>
      </Section>
    </>
  );
};

export default Page;
