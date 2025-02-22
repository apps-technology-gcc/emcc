"use client";
import Banner from "@/src/components/common/Banner";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";

import bgImage from "@/public/about-bg.png";
import { useEffect, useState } from "react";
import pageContentJson from "@/src/data/about.json";
import TextContentSection from "@/src/components/common/TextContentSection";
import BannerSection from "@/app/(About)/components/BannerSection";
import SidebarMenu from "@/src/components/common/SideBarMenu";
import { Text } from "@/src/components/ui/elements/Text";
import BulletText from "@/src/components/ui/elements/BulletText";
import SectionTitle from "@/src/components/common/SectionTitle";
import MemberBoard from "../components/MemberBoard";
import ApplyBoard from "@/src/components/common/ApplyBoard";
import { Button } from "@/src/components/ui/elements/Button";
import SidebarMembers from "@/src/components/common/SidebarMembers";
import NavLink from "@/src/components/ui/elements/NavLink";
import Divider from "@/src/components/ui/elements/Divider";
import { cn } from "@/src/lib/utils";
import AccordionGroup from "@/app/(About)/components/AccordionGroup";
import ContentSection from "@/src/components/common/ContentSection";
import DashBoardNav from "@/src/components/ui/elements/DashboardNav";
import Image from "next/image";
import ProfileImg from "@/public/profile.png";
import { Icon } from "@/src/components/ui/elements/Icon";
import { Input } from "@/src/components/ui/elements/form/Input";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import Profile from "../components/Profile";
import Bookmarks from "../components/Bookmarks";
import Subscriptions from "../components/Subscriptions";
import MembershipAndAccreditation from "../components/MembershipAndAccreditation";

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const menuData = [
    {
      title: "Become a Member",
      menuColor: "primary-100",
      links: [
        { text: "Individual Membership", href: "/" },
        { text: "Organisational Membership", href: "/about" },
        { text: "Training Provider Membership", href: "/about" },
      ],
    },
  ];
  const [packages, setPackages] = useState<string>("Standard");

  const tabList = [
    {
      title: "Profile",
      value: "profile",
    },
    {
      title: "Saved Resources & Events",
      value: "saved-resources",
    },
    {
      // Account Settings
      title: "Account Settings",
      value: "account-settings",
    },
    {
      // Account Settings
      title: "My Subscriptions",
      value: "my-subscriptions",
    },
    // MembershipAndAccreditation
    {
      title: "Membership & Accreditation",
      value: "membership-and-accreditation",
    },
  ];

  const [activeTab, setActiveTab] = useState({
    title: "Profile",
    value: "profile",
  });

  return pageContent ? (
    <>
      <div className="grid grid-cols-[300px_auto] gap-8">
        <div className="bg-background">
          {tabList.map((item, index) => {
            return (
              <SideBarNavItem
                key={index}
                title={item}
                activeTab={activeTab.value}
                onClick={() => setActiveTab(item)}
              />
            );
          })}
          {/* <SideBarNavItem  title="FAQ’s" onClick={}/> */}
        </div>
        <div className="py-12 pr-5 sm:pr-8 ">
          <div className="max-w-[748px] flex flex-col gap-12">
            {" "}
            {activeTab.value === "profile" && <Profile />}
            {activeTab.value === "saved-resources" && <Bookmarks />}
            {activeTab.value === "my-subscriptions" && <Subscriptions />}
          </div>

          {activeTab.value === "membership-and-accreditation" && (
            <MembershipAndAccreditation />
          )}
        </div>
      </div>
    </>
  ) : null;
};

const SideBarNavItem = ({
  title,
  onClick,
  activeTab,
}: {
  title: {
    title: string;
    value: string;
  };
  activeTab: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={cn("flex cursor-pointer flex-col ", {
        "bg-neutral text-white": title.value === activeTab,
      })}
    >
      <Text className=" p-5" variant={"navbar"}>
        {title.title}
      </Text>
      <Divider />
    </div>
  );
};
export default page;
