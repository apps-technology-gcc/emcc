"use client";
import Banner from "@/src/components/common/Banner";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";

import bgImage from "@/public/about-bg.png";
import { useEffect, useState } from "react";
import pageContentJson from "@/src/data/about.json";
import TextContentSection from "@/src/components/common/TextContentSection";
import SidebarMenu from "@/src/components/common/SideBarMenu";
import { Text } from "@/src/components/ui/elements/Text";
import BulletText from "@/src/components/ui/elements/BulletText";
import SectionTitle from "@/src/components/common/SectionTitle";
import MemberBoard from "../components/MemberBoard";
import ApplyBoard from "@/src/components/common/ApplyBoard";
import { Button } from "@/src/components/ui/elements/Button";
import SidebarMembers from "@/src/components/common/SidebarMembers";
import BannerSection from "@/src/components/common/BannerSection";

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
              name: "Individual Membership",
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
                  title="Individual Membership"
                  texts={[
                    "The EMCC exists to develop, promote, and set the expectation of best practice in mentoring, coaching, and supervision globally for the benefit of society",
                  ]}
                />
                <Text variant={"body"}>
                  Please view a detailed summary of the criteria for each
                  membership category
                  <span className="underline cursor-pointer"> here.</span>
                </Text>
              </div>
              <div className="flex flex-col gap-0 border rounded-tl-md rounded-tr-md border-border overflow-hidden">
                <div className="grid border-b border-border grid-cols-6 h-[50px] bg-green-50">
                  <div className="col-span-2 px-2.5 border-r border-border flex items-center">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#222222]"
                    >
                      Membership Type
                    </Text>
                  </div>
                  <div className="border-r border-border px-2.5 flex items-center">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#222222]"
                    >
                      Ideal For
                    </Text>
                  </div>
                  <div className="col-span-2 border-r border-border px-2.5 flex items-center">
                    <Text
                      variant={"card_title_small"}
                      className="text-[#222222]"
                    >
                      Experience/ Qualification
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
                <div className="grid border-b border-border grid-cols-6 h-[50px] bg-green-50">
                  <div className="col-span-2 border-r border-border px-2.5 flex items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      Affiliate
                    </Text>
                  </div>
                  <div className=" border-r border-border px-2.5 flex items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      Students
                    </Text>
                  </div>
                  <div className="col-span-2 border-r border-border px-2.5 flex items-center">
                    <Text
                      variant={"small"}
                      className="underline cursor-pointer border-b border-neutralDark"
                    >
                      Prerequisite
                    </Text>
                  </div>
                  <div className="  border-border px-2.5 flex justify-center w-full items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      $10
                    </Text>
                  </div>
                </div>
                <div className="grid border-border grid-cols-6 h-[50px] bg-green-50">
                  <div className="col-span-2 border-r border-border px-2.5 flex items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      Affiliate
                    </Text>
                  </div>
                  <div className=" border-r border-border px-2.5 flex items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      Students
                    </Text>
                  </div>
                  <div className="col-span-2 border-r border-border px-2.5 flex items-center">
                    <Text
                      variant={"small"}
                      className="underline cursor-pointer border-b border-neutralDark"
                    >
                      Prerequisite
                    </Text>
                  </div>
                  <div className="  border-border px-2.5 flex justify-center w-full items-center">
                    <Text variant={"small"} className="text-[#222222]">
                      $10
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <TextContentSection
                title="Benefits"
                texts={[
                  "EMCC membership enhances your professional standing by providing global recognition of your skills and capabilities. You also benefit from:y",
                ]}
              />
              <BulletText
                texts={[
                  "Access to local and international networks of coaching and mentoring professionals",
                  "Regular news, technical guidance, research and consultations",
                  "Access to regular industry focused online events",
                  "Professional development opportunities",
                  "Member discounts for events and training",
                  "Dedicated support channels for individual guidance and support",
                  "The opportunity to participate in the Councils 'Global mentoring programme",
                  "A voice for championing the profession and our members to government, regulators and employers",
                  "Participation in industry focused research into the coaching, mentoring and supervision ",
                  "Leadership development and volunteer opportunities within EMCC",
                  "When you join EMCC Middle East as a member, you automatically become a member of EMCC Global.",
                  "Discounted participation in EMCCs Coaching, Mentoring and Supervision Conferences",
                  "Discounted cost for all accreditations",
                  "Listing for individual coaches and/or mentors on EMCCs ‘Find a Mentor/Coach’ database",
                  "Free subscription to the International Journal of Mentoring and Coaching",
                  "Quarterly newsletters",
                  "Communities of Practice",
                  "Local events in your country (if there is a local EMCC in your country, if not why not think about setting one up?)",
                  "Opportunity to volunteer, contribute to, and influence the world of mentoring, coaching, and/or supervision.",
                ]}
              />
            </div>
            <div className="flex flex-col gap-8">
              <TextContentSection
                title="Transfer your membership"
                texts={[
                  "As an EMCC Global member, you belong to an international governance community and if you take the opportunity to live and work in another country, your membership is transferable across any of the nine regions.",
                ]}
              />
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_small"} className="text-neutral">
                  These are:
                </Text>
                <Text variant={"card_title_small"} className="text-neutral">
                  Asia Pacific, North America & Canada, India , Europe.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <SectionTitle title="Membership Referral Scheme" />
              <div className="flex flex-col gap-8">
                <Text variant={"card_title_small"} className="text-neutral">
                  Did you know that you can get AED 80.00 off the price of your
                  membership fee if you are referred by an existing member?
                </Text>
                <Text variant={"body"} className="text-neutral">
                  The member will provide you with a discount code to use along
                  with their membership number which you enter in the 'shop'
                  section when you sign-up online for membership.
                </Text>
                <Text variant={"body"} className="text-neutral">
                  Please note that this isn't available if you have held an EMCC
                  membership in the past, and cannot be used with any other
                  promotional offers. It can only be redeemed against individual
                  memberships, it doesn't apply to organisation memberships.
                </Text>
              </div>
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
