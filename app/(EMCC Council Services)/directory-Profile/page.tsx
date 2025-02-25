"use client";
import Banner from "@/src/components/common/Banner";
import { Text } from "@/src/components/ui/elements/Text";
import React, { useState } from "react";
import bgImage from "@/public/about-bg.png";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";
import SectionTitle from "@/src/components/common/SectionTitle";
import { Accordion } from "@/src/components/ui/elements/Accordions";
import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";
import Image from "next/image";
import world_map from "@/public/world_map.png";
import flag from "@/public/flag.png";
import { cn } from "@/src/lib/utils";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import PresidentImg from "@/public/president.png";
import FreelancerImg from "@/public/freelancer.png";
import MemberCard from "@/src/components/card/MemberCard";
import SectionLink from "@/src/components/common/SectionLink";
import TextContentSection from "@/components/common/TextContentSection";

import CpdImg from "@/public/cpd_main.png";
import BulletText from "@/src/components/ui/elements/BulletText";
import DirectorMember from "@/public/director_member.png";
import NavLink from "@/src/components/ui/elements/NavLink";
import Link from "@/src/components/ui/elements/Link";
const page = () => {
  const bredList = [
    {
      name: "EMCC Council Services",
      //   href: "/",
    },
    {
      name: "Accredited Directory - Middle East",
    },
    {
      name: "Falicity Smoke",
      href: "Falicity Smoke",
    },

    // {
    //   name: "Contact",
    //   href: "/contact",
    // },
  ];

  return (
    <>
      <Banner bgImage={bgImage.src}>
        <div className="max-w-[763px] flex flex-col gap-12">
          <Text
            font={"tinos"}
            variant={"h1_page_title"}
            className="uppercase text-white"
          >
            Continuing Professional Development
          </Text>
          <div className="flex flex-col gap-8">
            <Text variant={"body"} className="text-white">
              Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus
              nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla
              odio id tortor felis suspendisse porta placerat rhoncus.
              Vestibulum semper vitae pellentesque fames quam purus nec faucibus
              porttitor.
            </Text>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-primary-100">
                <Text variant={"small"} className="text-neutralDark">
                  Coaches
                </Text>
              </div>
              <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-green-200">
                <Text variant={"small"} className="text-neutralDark">
                  Mentor
                </Text>
              </div>
              <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-pink-200">
                <Text variant={"small"} className="text-neutralDark">
                  Supervisor
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={bredList} />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-11 gap-16">
          <div className="col-span-7 flex flex-col gap-12">
            <div className="flex items-start gap-8">
              <div className="min-w-[160px] relative">
                <Image src={DirectorMember} width={160} height={200} alt="" />

                <div className="absolute flex items-center justify-center bottom-0 left-o w-full h-[28px] bg-gradient-two">
                  <Text variant={"small"} className="text-white">
                    #Open to Work
                  </Text>
                </div>
              </div>
              <div className="flex justify-between flex-auto gap-2.5">
                <div className="flex flex-col gap-5">
                  <Text variant={"section_title"} className="text-[#222222]">
                    Falicity Smoke
                  </Text>
                  <Text variant={"small"} className="text-primary-600">
                    Director for Digital Transformation
                  </Text>
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-primary-100">
                      <Icon name="local_police" className="text-[10px]" />
                      <Text variant={"small"} className="text-neutralDark">
                        Coach
                      </Text>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-green-300">
                      <Icon name="local_police" className="text-[10px]" />
                      <Text variant={"small"} className="text-neutralDark">
                        Mentor
                      </Text>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-pink-200">
                      {/* <Icon name="local_police" className="text-[10px]" /> */}
                      <Text variant={"small"} className="text-neutralDark">
                        Supervisor
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start gap-12">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-2.5">
                        <Icon name="email" className="text-[20px]" />
                        <span className="text-xs text-neutralDark font-light ">
                          Email Me
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Icon name="location_on" className="text-[20px]" />
                        <span className="text-xs text-neutralDark font-light ">
                          London, UK
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Icon name="wc" className="text-[20px]" />
                        <span className="text-xs text-neutralDark font-light ">
                          40 - 49 Years
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-2.5">
                        <Icon name="language" className="text-[20px]" />
                        <span className="text-xs text-neutralDark font-light ">
                          Email Me
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Icon name="g_translate" className="text-[20px]" />
                        <span className="text-xs text-neutralDark font-light ">
                          London, UK
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Icon name="wc" className="text-[20px]" />
                        <span className="text-xs text-neutralDark font-light ">
                          40 - 49 Years
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-end justify-end">
                  <div className="h-[44px] w-[44px] bg-background rounded-full flex items-center justify-center">
                    <Icon name="balance" className="text-[24px]" />
                  </div>
                  <div className="h-[44px] w-[44px] bg-background rounded-full flex items-center justify-center">
                    <Icon name="email" className="text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex bg-background items-center">
              <NavLink
                variant={"tab-2"}
                className="text-white bg-neutralDark border-neutralDark"
                href="#"
              >
                Biography
              </NavLink>
              <NavLink variant={"tab-2"} href="#">
                Experience
              </NavLink>
              <NavLink variant={"tab-2"} href="#">
                Awards & Qualifications
              </NavLink>
            </div>
            <div className="flex flex-col gap-8">
              <Text variant={"body"} className="text-neutralDark">
                Nadya is a strategic advisor to business executives of
                organisations and government entities. Nadya is known for
                helping clients in two ways: as a leading organisational
                development expert; as a leadership coach and career strategist.
                She has worked for more than 15 years; both in Europe and the
                Middle East, helping organisations optimise talent management
                and leverage best practice through governance with a touch of
                creativity. She is a corporate governance practitioner, on her
                way to getting chartered.
              </Text>
              <Text variant={"body"} className="text-neutralDark">
                Vitae libero libero cras vivamus massa consectetur odio cursus.
                Facilisis volutpat lacus eu neque vel. Morbi in aenean commodo
                vitae platea sit ut nec. Nibh sit mattis tellus est nulla sit
                nisl orci erat. Molestie elit malesuada ac et convallis cursus
                netus. Vestibulum pellentesque non massa risus cursus diam sed
                maecenas. Blandit sit nibh nunc a. Mauris diam orci eget
                pretium. Suspendisse purus feugiat morbi accumsan venenatis
                viverra id nec. Pretium imperdiet id quisque id. Augue tortor
                integer sit neque. In odio vulputate senectus nulla scelerisque.
              </Text>
              <Text variant={"body"} className="text-neutralDark">
                Faucibus porttitor pretium ut sapien semper aenean augue netus
                nisl. Nunc orci lobortis facilisi vitae magnis ultrices in
                magna. In nunc tellus donec nunc dignissim. Tristique vitae
                fermentum pellentesque quam arcu sapien facilisi sit.
                Pellentesque aliquet est turpis aliquet. Netus placerat cursus
                nisi maecenas est ac. Nunc ut mi pulvinar eget fringilla lorem.
                Volutpat posuere id morbi duis orci tristique.
              </Text>
              <Text variant={"body"} className="text-neutralDark">
                Netus ut purus sagittis nunc eu montes tincidunt. Enim elementum
                arcu nibh ullamcorper elementum tristique suspendisse. Imperdiet
                phasellus massa nunc non tincidunt. Sagittis malesuada ultrices
                massa tincidunt pulvinar ac sed urna. At malesuada quisque
                rhoncus enim phasellus. Fermentum elementum eu laoreet aliquam.
                Egestas at facilisis lectus semper semper. Semper risus arcu
                pellentesque cursus malesuada. Egestas non risus donec diam
                egestas adipiscing imperdiet. Leo purus ac dapibus tellus. Morbi
                tellus sit ut consequat donec aliquam mattis eu. Interdum
                aliquam interdum erat gravida pulvinar scelerisque. Tempor enim
                quis vitae in porta.
              </Text>
            </div>
            <div className="h-[44px] w-[44px] bg-background rounded-full flex items-center justify-center">
              <Icon name="email" className="text-[24px]" />
            </div>
            <Link
              variant={"primary"}
              iconPosition="left"
              icon={<Icon name="west" className="text-[24px]" />}
              href="#"
            >
              Go back to directory
            </Link>
          </div>
          <div className="col-span-4 flex flex-col gap-12">
            <video
              width="100%"
              height="auto"
              controls
              src="https://youtu.be/K4TOrB7at0Y"
            ></video>
            <div className="flex bg-background flex-col gap-12 px-5 py-8">
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"} className="text-neutralDark">
                  Area of Practice
                </Text>
                <div className="flex flex-col">
                  <Text variant={"body"}>Board-Level/C-Suite Coaching</Text>
                  <Text variant={"body"}>Communication Coaching</Text>
                  <Text variant={"body"}>Executive Coaching </Text>
                  <Text variant={"body"}>Health & Wellbeing Coaching</Text>
                  <Text variant={"body"}>Personal/ Life Coaching</Text>
                  <Text variant={"body"}>Team Coaching</Text>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"} className="text-neutralDark">
                  Publications
                </Text>
                <Text variant={"body"} className="underline">
                  Revitalizing a Retail Chain: Boosting Sales by 30%.
                </Text>
                <Text variant={"body"} className="underline">
                  Unlocking International Market Expansion for a Tech Startup.
                </Text>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"} className="text-neutralDark">
                  Attachments
                </Text>
                <div className="flex items-center gap-2.5">
                  <Icon name="description" className="text-[20px]" />
                  <Text variant={"body"}>EIA professional mentor/coach</Text>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon name="description" className="text-[20px]" />
                  <Text variant={"body"}>EIA professional mentor/coach</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default page;
