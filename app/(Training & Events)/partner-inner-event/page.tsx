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
import EventCard from "../components/EventCard";
import Link from "@/src/components/ui/elements/Link";
import BulletText from "@/src/components/ui/elements/BulletText";
import TrainingSection from "../training-and-workshops/components/TrainingSection";
import IconWithText from "@/components/common/IconWithText";
import { Button } from "@/src/components/ui/elements/Button";

import { Input, Label } from "@/src/components/ui/elements/form/Input";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import GoogleIcon from "@/public/google_icon.svg";
import Image from "next/image";
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
  const [activeTab, setActiveTab] = useState("Booking");
  const handleChangeTab = (e: Event, tab: string) => {
    e.preventDefault();
    setActiveTab(tab);
  };
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
              Training & Events
            </Text>
            <Text variant={"body"} className="text-white">
              Training with EMCC will develop your practical knowledge and
              skills in Coaching, Mentoring & Supervision. Our best in class
              programmes are led by recognised industry experts and mapped
              against the our global standard competency frameworks.
            </Text>
          </div>
          <div className="flex flex-col gap-2.5">
            {/* <Tag
              variant={"tag2"}
              style={"style1"}
              className="!bg-pink-200 max-w-fit"
            >
              Members Only
            </Tag> */}
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
              name: "Training & Events",
              href: "/",
            },
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
                    onClick={(e: any) => handleChangeTab(e, "Overview")}
                    href=""
                    variant={"tab-1"}
                    className={cn(
                      activeTab == "Overview" ? "bg-primary-600 text-white" : ""
                    )}
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    onClick={(e: any) => handleChangeTab(e, "Speakers")}
                    href=""
                    variant={"tab-1"}
                    className={cn(
                      activeTab == "Speakers" ? "bg-primary-600 text-white" : ""
                    )}
                  >
                    Speakers
                  </NavLink>
                  <NavLink
                    onClick={(e: any) => handleChangeTab(e, "Booking")}
                    href=""
                    variant={"tab-1"}
                    className={cn(
                      activeTab == "Booking" ? "bg-primary-600 text-white" : ""
                    )}
                  >
                    Booking
                  </NavLink>
                </div>
                {activeTab == "Speakers" && (
                  <>
                    <SectionTitle title="Meet Our Hosts and Speakers" />

                    <Speakers />
                  </>
                )}
                {activeTab == "Booking" && (
                  <>
                    {" "}
                    <SectionTitle title="Register For The Event" />
                    <div className="flex items-center gap-2.5">
                      <Text variant={"body"}>Don't have an account?</Text>
                      <div className="items-center flex gap-5">
                        <Link href="/register" className="text-primary-600">
                          Register
                        </Link>
                        <Link href="/login" className="text-primary-600">
                          Login
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col gap-12">
                      <div className="grid gap-x-8 gap-y-5 grid-cols-1 sm:grid-cols-2">
                        <Input
                          label="First Name"
                          placeholder="First Name *"
                          id="firstName"
                          name="firstName"
                        />
                        <Input
                          label="Last Name"
                          placeholder="Last Name *"
                          id="LastName"
                          name="LastName"
                        />
                        <Input
                          label="Email Address"
                          placeholder="Email Address *"
                          id="LastName"
                          name="LastName"
                        />
                        <Input
                          label="Phone Number"
                          placeholder="Phone Number *"
                          id="LastName"
                          name="LastName"
                        />
                        {/* <Input
                        label="Email Address"
                        placeholder="Email Address *"
                        id="LastName"
                        name="LastName"
                      /> */}
                        <SearchSelect
                          options={[]}
                          label="Select Country"
                          name="time"
                        />
                        <SearchSelect
                          options={[]}
                          label="Select Time"
                          name="time"
                        />
                        <SearchSelect
                          options={[]}
                          label="I am an EMCC member"
                          name="time"
                        />{" "}
                        <div></div>
                        <div className="col-span-2 flex flex-col gap-2.5">
                          <Label label="I agree to EMCC keeping my details under GDPR requirements and contacting me in relation to future webinars and other development events" />
                          <div className="grid grid-cols-2">
                            <SearchSelect options={[]} name="abcd" />
                          </div>
                        </div>
                        {/*  */}
                        <SearchSelect
                          options={[]}
                          label="How did you hear about this webinar?"
                          name="time"
                        />{" "}
                      </div>
                      <Checkbox
                        id="checked"
                        label="information you provided when registering will be shared with the account owner and host and can be used and shared by team in accordance with their terms and privacy policy"
                      />
                      <Button
                        className="max-w-fit"
                        variant={"default"}
                        btnType={"primary"}
                      >
                        Register
                      </Button>
                    </div>
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
                {activeTab == "Overview" && (
                  <div className="border-warning-500 border bg-warning-50 rounded-[4px] overflow-hidden flex items-center p-5 gap-2.5">
                    <Icon
                      name="info"
                      className="text-[20px] text-warning-500"
                    />
                    <Text variant={"body"} className="text-[#222222]">
                      This Event is only accessible to the EMCC Members
                    </Text>
                  </div>
                )}
                {activeTab == "Speakers" && (
                  <div className="bg-background px-5 py-8 rounded-md flex flex-col gap-8">
                    <Text variant={"card_title_large"}>
                      In Association With:
                    </Text>
                    <div className="flex gap-5 items-start">
                      <div className="">
                        <Image
                          alt="google"
                          src={GoogleIcon}
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="flex flex-col gap-5">
                        <Text variant={"card_title_large"}>Google LLC</Text>
                        <Text variant={"body"} className="text-[#2B2B2B]">
                          California, USA
                        </Text>
                      </div>
                    </div>
                  </div>
                )}
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
                <IconWithText iconName="confirmation_number" text="$ 100" />
                <IconWithText iconName="call" text="+88 0123 456 789" />
              </div>
              {activeTab !== "Booking" && (
                <Button variant={"default"} btnType={"primary"} outline>
                  Register Now
                </Button>
              )}
              {/* */}
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
