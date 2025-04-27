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
// import EventCard from "../components/EventCard";
import Link from "@/src/components/ui/elements/Link";
import BulletText from "@/src/components/ui/elements/BulletText";
import IconWithText from "@/components/common/IconWithText";
import { Button } from "@/src/components/ui/elements/Button";
import { Input, Label } from "@/src/components/ui/elements/form/Input";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import GoogleIcon from "@/public/google_icon.svg";
import Image from "next/image";
import CardImg from "@/public/card.svg";
import Radio from "@/src/components/ui/elements/form/Radio";
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
      <Section bgColor="white" className="!py-[55px]">
        <div className="flex flex-col gap-12">
          <Text variant={"section_title"}>Membership Renewal</Text>
          <div className="grid grid-cols-1 md:grid-cols-11 gap-12">
            <div className="md:col-span-7 flex flex-col gap-12">
              <div className="flex flex-col gap-5 p-5 border-l-4 border-green-500 bg-green-50">
                <Text variant={"card_title_small"} className="text-[#333333]">
                  You currently subscribed to EMCC{" "}
                  <span className="font-medium">{`{ Membership_Name }`}</span>
                </Text>
                <Text variant={"body"}>
                  Valid From 01 June 2024 to 30 May 2025
                </Text>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Member Details</Text>
                <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                  <Input
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    id="first-name"
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    id="last-name"
                  />
                  <Input
                    label="Email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    type="email"
                  />
                  <Input
                    label="Phone Number"
                    name="companyName"
                    placeholder="Phone Number"
                    id="company-name"
                  />
                  <Input
                    label="Address Line 1"
                    name="addressLine1"
                    placeholder="Address Line 1"
                    id="address-line-1"
                  />
                  <Input
                    label="Address Line 2"
                    name="addressLine2"
                    placeholder="Address Line 2"
                    id="address-line-2"
                  />
                  <Input
                    label="Post Code"
                    name=""
                    placeholder="Address Line 2"
                    id="address-line-2"
                  />
                  <div className=""></div>
                  <SearchSelect
                    label="Your Country"
                    options={[]}
                    name="country"
                    placeholder="Country"
                    // id="country-1"
                  />
                  <SearchSelect
                    label="City"
                    options={[]}
                    name="country"
                    placeholder="Country"
                    // id="country-2"
                  />
                </div>
              </div>
              <div className="p-5 bg-primary-50 flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                  <Text variant={"card_title_large"}>Membership Terms</Text>
                  <Checkbox
                    name="a"
                    id="a"
                    label="I agree that, for as long as I remain a member of EMCC, I will support the aims and guiding principles and abide by such Code of Ethics and Professional Practices as may be put in place"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <Text variant={"card_title_large"}>Contact Permission</Text>
                  <Checkbox
                    name="a"
                    id="a"
                    label="I agree that my details can be used to create a 'Find a Mentor/Coach record' that will be visible to the public on the EMCC website"
                  />
                </div>
                <Text variant={"small"}>
                  <span className="underline">Please note:</span> EMCC will
                  never share or sell your data to a third party. You may change
                  your answers to the above points via your membership record at
                  any time. You can view our privacy policy here.
                </Text>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Payment Details</Text>
                <div className="flex bg-background rounded-md p-5 flex-col gap-8">
                  <Image src={CardImg} width={170} height={40} alt="Card" />
                  <div className="grid grid-cols-2 gap-8">
                    <Input placeholder="Card Number *" name="exp_date" />
                    <div className="grid grid-cols-2 gap-5">
                      <Input
                        placeholder="Expiry Date (MM/YY) *"
                        name="exp_date"
                      />
                      <Input placeholder="CVC *" name="cvc" />
                    </div>
                  </div>
                  <Checkbox
                    id=""
                    label="Lorem ipsum dolor sit amet consectetur. Accumsan neque bibendum tellus tellus scelerisque eu tortor fusce."
                  />
                  <Checkbox
                    id=""
                    label="Your data will be used to process your Account Activation, support your experience throughout this website, and for other purposes described in our "
                  />
                  <div className="flex justify-end">
                    <Button variant={"default"} btnType={"primary"}>
                      Pay
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-5">
              {/* <SidebarMenu /> */}
              <Text variant={"card_title_large"}>Your Order</Text>
              <div className="border-border rounded-md border-[0.5px]">
                <div className="px-5 py-8 border-b-[0.5px] border-border">
                  <div className="flex items-center gap-5">
                    <div className="flex flex-col gap-2.5">
                      <Text variant={"card_title_small"}>Description</Text>
                      <Text variant={"small"}>Founding Member</Text>
                    </div>
                    <Text variant={"body"}>$200.00</Text>
                  </div>
                </div>
                <div className="px-5 py-8 border-b-[0.5px] border-border">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-5">
                      <Text variant={"card_title_small"}>Subtotal</Text>
                      <Text variant={"body"}>$200.00</Text>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <Text variant={"card_title_small"}>VAT (0%)</Text>
                      <Text variant={"body"}>$0.00</Text>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <Text variant={"card_title_small"}>Discount</Text>
                      <Text variant={"body"}>$20.00</Text>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-8 ">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-5">
                      <Text variant={"card_title_small"}>Grand Total</Text>
                      <Text variant={"body"}>$180.00</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Page;
