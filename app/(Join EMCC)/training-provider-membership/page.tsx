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
            <div className="flex flex-col gap-8">
              <TextContentSection
                title="Training Provider Membership"
                texts={[
                  "Includes membership for 3 named individuals and is aimed at HR, training and other professionals whose roles and include responsibility for development, co-ordination, provision of coach/mentoring schemes or programmes.",
                ]}
              />
            </div>

            <div className="flex flex-col gap-8">
              <TextContentSection
                title="Benefits"
                texts={[
                  "EMCC membership enhances your professional standing by providing global recognition of your skills and capabilities. You also benefit from:",
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
