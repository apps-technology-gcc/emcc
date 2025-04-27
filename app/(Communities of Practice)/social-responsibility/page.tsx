"use client";
import Banner from "@/src/components/common/Banner";

import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Section from "@/src/components/layout/Section";

import bgImage from "@/public/about-bg.png";
import { useEffect, useState } from "react";
import pageContentJson from "@/src/data/about.json";
import TextContentSection from "@/src/components/common/TextContentSection";
import BannerSection from "@/src/components/common/BannerSection";
import SidebarMenu from "@/src/components/common/SideBarMenu";

import ALogo from "@/public/A_logo.svg";
import ICFLogo from "@/public/icf_logo.svg";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import SectionTitle from "@/src/components/common/SectionTitle";
import AccordionGroup from "@/src/components/common/AccordionGroup";
import ResourceCard from "@/components/common/ResourceCard";
import MoreAboutUs from "@/src/components/common/MoreAboutUs";
import sqricon from "@/public/sqricon.svg";
import CommunityImg from "@/public/community.svg";
import MindImg from "@/public/mind.svg";
import EduImg from "@/public/edu.svg";
import StateImg from "@/public/state.svg";
import { Text } from "@/src/components/ui/elements/Text";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import BulletText from "@/src/components/ui/elements/BulletText";
import { Button } from "@/src/components/ui/elements/Button";

const page = () => {
  const [pageContent, setPageContent] = useState<any>(pageContentJson);
  const menuData = [
    {
      title: "Communities of Practice",
      menuColor: "pink-400",

      links: [
        { text: "Global Coaching Mentoring Alliance", href: "/gcma" },
        {
          type: "accordion",
          activeItem: "Working Groups",
          title: "Working Groups",
          listItems: [
            {
              title: "Coach Register",
              href: "/",
            },
            {
              title: "Disciplinary Action",
              href: "/about",
            },
          ],
        },
        { text: "Volunteering & Pro-Bono Coaching", href: "/about" },
        { text: "Working for EMCC", href: "/about" },
      ],
    },
  ];

  const breadcrumb = [
    {
      text: "Communities of Practice",
      href: "/",
    },
    {
      text: "Global Coaching & Mentoring Alliance (GCMA)",
      href: "/",
    },
  ];

  const accordionData2 = [
    {
      id: 1,
      title: "What is the GCMA?",
      content:
        "The GCMA is a global alliance of professional coaching and mentoring organizations working together to advance the coaching profession.",
    },
    {
      id: 2,
      title: "Why was the GCMA established?",
      content:
        "The GCMA was established to provide a unified voice and shared standards for the coaching profession globally.",
    },
    {
      id: 3,
      title: "How will the GCMA behave, and work together?",
      content:
        "The GCMA operates through collaborative partnerships and shared principles among its member organizations.",
    },
    {
      id: 4,
      title: "How can someone submit a query or comment to the GCMA?",
      content:
        "Queries can be submitted through any of the member organizations' channels.",
    },
    {
      id: 5,
      title: "Is the GCMA reaching out to other bodies as well?",
      content:
        "The GCMA actively engages with various professional bodies to expand its global reach and impact.",
    },
    {
      id: 6,
      title: "How will the GCMA ensure it takes a global perspective?",
      content:
        "Through diverse international membership and inclusive decision-making processes.",
    },
    {
      id: 7,
      title: "What are the HR Buyers' views of GCMA?",
      content:
        "HR professionals recognize GCMA as a mark of quality and standards in coaching services.",
    },
    {
      id: 8,
      title: "How does the GCMA define coaching?",
      content:
        "The GCMA provides a comprehensive framework for professional coaching standards and practices.",
    },
    {
      id: 9,
      title: "What is the value of credentialing/accreditation?",
      content:
        "Credentialing ensures quality, professionalism, and adherence to global standards in coaching.",
    },
    {
      id: 10,
      title: "Could you define credentialed/accredited?",
      content:
        "These terms refer to professionals who have met specific standards and requirements set by recognized bodies.",
    },
    {
      id: 11,
      title:
        "What's the role of mentoring in this organisation, beyond coaching?",
      content:
        "Mentoring complements coaching services by providing guidance based on experience and expertise.",
    },
  ];
  const resourcesData = [
    {
      title: "Research",
      description: "Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst",
      downloadUrl: "/path/to/pdf1",
      downloadText: "Download PDF",
      fromColor: "#BE4FEE",
      toColor: "#883BFE",
    },
    {
      title: "Research",
      description: "Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst",
      downloadUrl: "/path/to/pdf2",
      downloadText: "Download PDF",
      fromColor: "#00CCC6",
      toColor: "#BE38F3",
    },
    {
      title: "Research",
      description: "Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst",
      downloadUrl: "/path/to/pdf3",
      downloadText: "Download PDF",
      fromColor: "#5340FFCC",
      toColor: "#BE38F3",
    },
  ];
  const moreAboutUsData = {
    title: "More About Us",
    cards: [
      {
        title: "ESG",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit.",
        icon: sqricon.src, // optional
      },
      {
        title: "Research",
        description:
          "Lorem ipsum dolor sit amet consectetur. Mattis amet elit vulputate convallis massa accumsan purus sit.",
        icon: sqricon.src, // optional
      },
    ],
  };
  const classess =
    "from-[#BE4FEE] to-[#883BFE] from-[#5340FFCC] to-[#BE38F3] from-[#00CCC6] to-[#BE38F3]";

  const skillsData = [
    {
      icon: MindImg.src, // You'll need to add these icons
      iconAlt: "Hearts and Minds",

      content:
        "The Skills Agenda for Europe should speak to people’s hearts and minds to enable them to deal positively with change. This is best achieved through a bottom-up approach. The practice of leadership, mentoring, coaching, and supervision makes sure that European citizens feel part of the dual transition towards a greener and more digital future, and ensures that change happens intrinsically. Read the ",
      link: {
        text: "EMCC position paper on the the EU Skills Agenda here",
        url: "/documents/position-paper.pdf",
      },
    },
    {
      icon: CommunityImg.src,
      iconAlt: "Sustainable Development",

      content:
        "EMCC is in favor of an inclusive and sustainable EU Skills Agenda that prepares the European workforce for the dual transition through mentoring and coaching. EMCC Accreditation holds lifelong learning, ethics and standards in high regard. EMCC encourages the European Commission to make use of the EMCC methodology of mentoring, coaching, and supervision accreditation to make sure EU policy is backed by evidence-based research and is fit for purpose in",
    },
    {
      icon: EduImg.src,
      iconAlt: "Digital Transition",

      content:
        "The twin digital and green transitions will require reskilling and upskilling of the European workforce. These efforts will be helped by mentoring and coaching programmes. The EMCC leadership, mentoring, and coaching services make sure that people’s motivation for change and well-being is ensured during the major transitions of our time. EMCC helps people not to fear the transitions ahead, but to make the most out of them.",
    },
    {
      icon: StateImg.src,
      iconAlt: "Inclusive Economy",

      content:
        "The updated Skills Agenda for Europe must contribute to an inclusive economy that works for the people. EMCC accredited mentors, coaches, and supervisors across Europe and worldwide contribute to inclusive societies by making sure that every European individual has access to mentoring, coaching, and supervision programmes, programme management, and frameworks to benchmark ‘best practice’. EMCC encourages the Commission and EU Member States to make use of the EMCC local and regional representatives and their strategic partners’ expertise in providing mentoring, coaching, and supervision services in order to implement Europe’s policies and help citizens be ready for the future.",
    },
  ];
  const countries = [
    ["Asia Pacific", "Czech Republic", "Luxembourg"],
    ["Belgium", "Switzerland", "Portugal"],
    ["India", "Italy", "Turkey"],
    ["Ireland", "Cyprus", "Spain"],
    ["Greece", "Romania", "France"],
  ];
  return pageContent ? (
    <>
      <Banner bgImage={bgImage.src}>
        <BannerSection
          title="Working Groups"
          description="Lorem ipsum dolor sit amet consectetur. Augue non bibendum vestibulum facilisis dis. Adipiscing neque euismod eget aliquam. Facilisis est sem pulvinar erat varius ut quis porta quis. Feugiat non ut quam nisl nisl mauris. Erat vitae viverra volutpat tempor purus leo."
        />
      </Banner>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Communities of Practice",
            },
            {
              name: "Volunteering & Pro-Bono Coaching",
              href: "/gcma",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-[auto_370px] gap-16 min-h-screen">
          <div className=" flex flex-col gap-20">
            {/* Main content */}

            <div className="flex flex-col gap-12">
              <TextContentSection title="Volunteering & Pro-Bono Coaching" />

              <div className="flex flex-col gap-5 p-5 border-l-2 border-green-500 bg-green-50">
                <Text variant={"card_title_large"}>
                  Lorem ipsum dolor sit amet consectetur. Nec adipiscing donec
                  at accumsan dolor est.
                </Text>
              </div>
              <TextContentSection
                texts={[
                  "Lorem ipsum dolor sit amet consectetur. Nec adipiscing donec at accumsan dolor est. In porta duis elit ullamcorper volutpat massa. Euismod magnis amet nec mauris donec orci sem praesent. Egestas ipsum viverra molestie cursus pellentesque sit ut. Eget leo et aliquet vitae magna vitae nibh.",
                  "Egestas leo magnis bibendum est. Donec condimentum posuere elit quis eu sit. Vulputate diam urna eget accumsan. Vitae condimentum et adipiscing cras. Neque id quis montes ultrices scelerisque. Libero id ut vestibulum ullamcorper quis molestie. Egestas consequat integer vitae nunc ac enim interdum tristique ac. Nunc bibendum leo risus at et amet congue egestas etiam. Libero leo non sem bibendum lectus tincidunt diam neque iaculis. Nec et aliquam aenean est lorem sapien platea aliquam. Sit sed gravida sapien sit in praesent donec et lectus.",
                ]}
              />
              <Button
                variant={"default"}
                btnType={"primary"}
                outline
                className="max-w-fit"
              >
                See Current Opportunities
              </Button>
            </div>
          </div>
          <div className="">
            <div className="sticky flex flex-col gap-12 top-4 max-h-[calc(100vh)] overflow-y-scroll scrollbar-hide">
              <SidebarMenu menuData={menuData} />
              <MoreAboutUs
                title={moreAboutUsData.title}
                cards={moreAboutUsData.cards}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  ) : null;
};

export default page;
