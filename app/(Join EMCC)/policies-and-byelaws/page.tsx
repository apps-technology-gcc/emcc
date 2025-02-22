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

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const menuData = [
    {
      title: "Become a Member",
      menuColor: "primary-100",
      //   accordion: {
      //     activeItem: "Coach Register",
      //     title: "Search a Coach Record",
      //     listItems: [
      //       {
      //         title: "Coach Register",
      //         href: "/",
      //       },
      //       {
      //         title: "Disciplinary Action",
      //         href: "/about",
      //       },
      //     ],
      //   },
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
      title: "FAQ's",
      value: "faqs",
    },
    {
      title: "Data & Privacy Policy",
      value: "data-privacy-policy",
    },
    {
      title: "Terms of Business",
      value: "terms-of-business",
    },
    {
      title: "Corporate Governance",
      value: "corporate-governance",
    },
    {
      title: "Regulatory Policies",
      value: "regulatory-policies",
    },
    {
      title: "Related Party Transactions Policy",
      value: "related-party-transactions",
    },
    {
      title: "Human Rights Policy",
      value: "human-rights-policy",
    },
    {
      title: "Third Party Code",
      value: "third-party-code",
    },
    {
      title: "Antitrust and Competition Law Statement",
      value: "antitrust-competition-law",
    },
    {
      title: "Anti-Corruption Policy",
      value: "anti-corruption-policy",
    },
    {
      title: "Bylaws",
      value: "bylaws",
    },
    {
      title: "GDPR Compliance & Data Security",
      value: "gdpr-compliance",
    },
    {
      title: "FAQ’s",
      value: "faqs",
    },
    {
      title: "Data & Privacy Policy",
      value: "data-privacy-policy",
    },
  ];

  const [activeTab, setActiveTab] = useState({
    title: "FAQ's",
    value: "faqs",
  });
  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="EMCC Policies &  </br>
Byelaws"
          description="Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla odio id tortor felis suspendisse porta placerat rhoncus. Vestibulum semper vitae pellentesque fames quam purus nec faucibus porttitor."
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Join EMCC",
              href: "/",
            },
            {
              name: "Organisational Membership",
              href: "/",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-[300px_auto] gap-16">
          <div className="bg-background p-5 flex flex-col gap-5">
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
          <div className="">
            {activeTab.value === "faqs" ? (
              <div className="flex flex-col gap-12">
                <Text variant={"section_title"}>
                  Frequently Asked Questions
                </Text>
                <AccordionGroup
                  items={[
                    {
                      title: "What’s your very first memory?",
                      content:
                        "The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals. The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals.",
                      id: 1,
                    },
                    {
                      title:
                        "When is the last time you can remember feeling totally at peace?",
                      content:
                        "The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals. The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals.",
                      id: 1,
                    },
                    {
                      title:
                        "What did say as a kid when asked: What do you want to be when you grow up?",
                      content:
                        "The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals. The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals.",
                      id: 1,
                    },
                    {
                      title:
                        "Which of the Seven Wonders of the world do you want to visit the most?",
                      content:
                        "The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals. The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals.",
                      id: 1,
                    },
                    {
                      title: "What super power do you wish you had?",
                      content:
                        "The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals. The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals.",
                      id: 1,
                    },
                    {
                      title:
                        "If you could visit one planet, which would it be?",
                      content:
                        "The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals. The EMCC is a non-profit organisation that provides a platform for sports coaches to connect with athletes and other sports professionals.",
                      id: 1,
                    },
                  ]}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-12">
                <Text variant={"section_title"}>{activeTab.title}</Text>
                <ContentSection
                  texts={[
                    "Lorem ipsum dolor sit amet consectetur. Elementum lorem pulvinar elementum et orci fermentum purus laoreet. Ridiculus dolor malesuada sed volutpat tristique sed euismod consectetur in. Lacinia proin platea tortor justo urna mauris mattis. Enim cras pellentesque velit nisl porttitor enim elementum. Facilisis ultrices egestas faucibus suspendisse. Vitae platea metus orci a netus risus. Pharetra a suscipit lorem risus. Lobortis erat facilisis sed et varius arcu eget sollicitudin. Ut tortor purus convallis a in quis aliquam. Mi lacus at etiam vitae. Elit ultrices et dolor posuere purus fermentum quis. Ultricies egestas amet quam consequat quam.",
                    "Leo eget nisi erat ut dictum in. Sed diam in eget volutpat enim odio accumsan. Leo condimentum sed curabitur id cras. Viverra cursus scelerisque sit tempor habitasse montes imperdiet. Dictumst a dignissim cras gravida sit suspendisse orci volutpat. Iaculis et molestie vulputate mauris mattis mi. Cursus imperdiet montes nunc mattis amet bibendum. Pretium nibh tincidunt viverra duis. Sit sit at augue egestas enim. Lobortis in dignissim enim at ultrices sodales faucibus magna. Eu tincidunt mauris vitae urna. Vehicula dis tortor id in.",
                    "Morbi penatibus pretium quam facilisi nulla semper urna. Arcu quis tempor eros pellentesque. Nam euismod ornare ut commodo tempor vel. Vitae metus ornare nullam id. Lacus tempor amet eget et. Ullamcorper nec urna tortor vestibulum nam netus lacus sed dictum. Turpis in mollis nunc metus faucibus scelerisque cras. Pharetra mauris egestas justo mollis odio a et volutpat pretium. Curabitur malesuada duis et netus pharetra enim faucibus quam tortor. Nibh maecenas sed porttitor turpis turpis sed lectus. Sed at eget suscipit arcu sit a. Ut et ipsum phasellus commodo gravida mi elementum tellus vitae. Quis egestas id arcu odio dolor. Arcu egestas molestie porta amet pulvinar purus at.",
                    "Libero in nibh adipiscing ullamcorper volutpat neque turpis. Amet pharetra nulla egestas massa a diam. Vitae aliquet id molestie nibh vel penatibus viverra. Cursus viverra felis tristique consectetur sed gravida etiam. Quis aenean in a libero varius ac. Malesuada nullam elit dignissim quis. Porttitor id id auctor varius id purus lacus sit orci. Mattis a tincidunt non porta sit tristique lectus scelerisque. Mauris malesuada fermentum eu auctor tortor eu. Fringilla proin commodo lectus neque. Potenti risus volutpat est risus proin aliquam. Purus nullam eget magna lectus ornare.",
                  ]}
                />
              </div>
            )}
          </div>
        </div>
      </Section>
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
      className={cn("flex cursor-pointer flex-col gap-5", {
        "text-primary-600": title.value === activeTab,
      })}
    >
      <Text variant={"navbar"}>{title.title}</Text>
      <Divider />
    </div>
  );
};

export default page;
