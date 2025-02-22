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

  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="EMCC MIDDLE EAST
MEMBERSHIP"
          description="The EMCC exists to develop, promote, and set the expectation of best practice in mentoring, coaching, and supervision globally for the benefit of society"
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
        <div className="grid grid-cols-1 md:grid-cols-11 gap-16">
          <div className="md:col-span-7 flex flex-col gap-20">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <TextContentSection
                  title="Organisational Membership"
                  texts={[
                    "Includes membership for 3 named individuals and is aimed at HR, training and other professionals whose roles and include responsibility for development, co-ordination, provision of coach/mentoring schemes or programmes.",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-0 border rounded-tl-md rounded-tr-md border-border overflow-hidden">
                <div className="grid border-b border-border grid-cols-5 h-[50px] bg-green-50">
                  <div className="px-2.5 border-r border-border flex items-center">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#222222]"
                    >
                      Membership Type
                    </Text>
                  </div>
                  <div className="border-r col-span-2 border-border px-2.5 flex items-center">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#222222]"
                    >
                      Ideal For
                    </Text>
                  </div>
                  <div className=" border-r border-border px-2.5 flex items-center">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#222222]"
                    >
                      Prerequisite
                    </Text>
                  </div>
                  <div className="px-2.5 flex justify-center w-full items-center">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#222222]"
                    >
                      Cost
                    </Text>
                  </div>
                </div>
                <div className="grid border-b border-border grid-cols-5  ">
                  <div className=" border-r border-border px-2.5 py-[16px] flex items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      Corporate
                    </Text>
                  </div>
                  <div className=" border-r col-span-2 border-border px-2.5 py-[16px] flex items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      Large / Public Sector, Universities, Professional Services
                      Firms, HR / Training Companies
                    </Text>
                  </div>
                  <div className=" border-r border-border px-2.5 py-[16px] flex items-center">
                    <Text variant={"small"} className=" ">
                      None
                    </Text>
                  </div>
                  <div className="  border-border px-2.5 py-[16px] flex justify-center w-full items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      $10
                    </Text>
                  </div>
                </div>
                <div className="grid border-border grid-cols-5 ">
                  <div className=" border-r border-border px-2.5 py-[16px] flex items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      Non-Corporate
                    </Text>
                  </div>
                  <div className=" border-r col-span-2 border-border px-2.5 py-[16px] flex items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      Schools, Non-Profit / NGO
                    </Text>
                  </div>
                  <div className=" border-r border-border px-2.5 py-[16px] flex items-center">
                    <Text variant={"small"} className=" ">
                      None
                    </Text>
                  </div>
                  <div className="  border-border px-2.5 py-[16px] flex justify-center w-full items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      $10
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <TextContentSection
                title="Benefits of Organisational Membership"
                // texts={[]}
              />

              <div className="flex flex-col gap-8">
                <div className="flex w-full bg-background items-center">
                  <NavLink
                    variant={"tab-2"}
                    className="text-white bg-neutralDark border-neutralDark"
                    href="#"
                  >
                    Standard
                  </NavLink>
                  <NavLink variant={"tab-2"} href="#">
                    Standard
                  </NavLink>
                </div>
              </div>
              {packages == "Standard" ? (
                <div className="flex flex-col gap-8 ">
                  <Text variant={"body"} className="text-neutral">
                    A clear signal to your employees, partners and customers
                    that you are committed to delivering the highest standards
                    of professionalism and ethics.
                  </Text>
                  <div className="flex flex-col gap-5">
                    <Text variant={"card_title_large"} className="text-neutral">
                      Benefits are:
                    </Text>
                    <BulletText
                      texts={[
                        "Includes one individual membership for the person who is the main contact for your organisation. This member can vote and take up voluntary roles on behalf of your organisation",
                        "Discount of 25% on employee membership ",
                        "Access to the International Journal and research papers",
                        "Comprehensive and well-received Global Code of Ethics which enhances your credibility and guides your practice  ",
                        "Connection to the widest range of coaches, mentors and coaching and mentoring organisations of any professional body in Europe",
                        "Access to a range of professional networks and events around the UK, run by experienced practising coaches and mentors with reduced member prices",
                        "Special invitation to 2 organisation only events per year; connecting you with other organisation members and topics of relevance to internal coaching and mentoring",
                      ]}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-8 ">
                  <Text variant={"body"} className="text-neutral">
                    A clear signal to your employees and customers that you are
                    committed to delivering the highest standards of
                    professionalism and ethics.
                  </Text>
                  <div className="flex flex-col gap-5">
                    <Text variant={"card_title_large"} className="text-neutral">
                      You also benefit from:
                    </Text>

                    <BulletText
                      texts={[
                        "Includes one individual membership for the person who is the main contact for your organisation. This member can vote and take up voluntary roles on behalf of your organisation",
                        "Discount of 25% on employee membership ",
                        "Access to the International Journal and research papers",
                        "Comprehensive and well-received Global Code of Ethics which enhances your credibility and guides your practice  ",
                        "Connection to the widest range of coaches, mentors and coaching and mentoring organisations of any professional body in Europe",
                        "Access to a range of professional networks and events around the UK, run by experienced practising coaches and mentors with reduced member prices",
                        "Special invitation to 2 organisation only events per year; connecting you with other organisation members and topics of relevance to internal coaching and mentoring",
                      ]}
                    />
                    <Text variant={"body"} className="text-neutral">
                      As a premium organisation member you are assigned a
                      liaison person whose role is to enable you to gain full
                      value from your membership by connecting you with people
                      or resources to assist your coach mentor needs. You
                      receive one free CPD event per year* which you can select
                      from our acclaimed portfolio. Our CPD portfolio is aligned
                      to our competence framework to enable you to support your
                      coach mentor development. Our CPD events are assessed and
                      approved to meet the high standards required by EMCC
                    </Text>
                  </div>
                </div>
              )}
            </div>

            <MemberBoard />
          </div>
          <div className="md:col-span-4 flex flex-col gap-12">
            <SidebarMenu menuData={menuData} />
            <Button
              variant={"default"}
              btnType={"primary"}
              outline
              // onClick={onButtonClick}
            >
              Join Now
            </Button>
            <ApplyBoard
              buttonText="Become a Corporate Sponsor"
              title="Would you like to join as our corporate sponsor?"
              description="Lorem ipsum dolor sit amet consectetur. Tortor fames tortor pretium convallis morbi tellus pretium. Lectus lectus fermentum donec sollicitudin libero."
            />
            <SidebarMembers />
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

export default page;
