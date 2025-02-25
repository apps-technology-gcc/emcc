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
import LearningItem from "./components/LearningItem";
import CpdImg from "@/public/cpd_main.png";
import BulletText from "@/src/components/ui/elements/BulletText";
const page = () => {
  const bredList = [
    {
      name: "About Us",
      //   href: "/",
    },
    {
      name: "CPD",
      href: "CPD",
    },
    // {
    //   name: "Contact",
    //   href: "/contact",
    // },
  ];

  const textContentData = {
    "Our Organisation": [
      {
        id: 1,
        content:
          "EMCCs vision is to be the ‘go to body’ for setting the highest quality standards in Mentoring and Coaching. In this section, we set out the standards that we believe you should use as a guide, whether you are a coach, mentor, coach or mentor supervisor, or trainer or programme provider. It comprises competences, CPD guidance, supervision competences and guidance, the Global Code of Ethics, diversity and regulation. It aims to answer some important questions:",
      },
    ],
  };
  const accItems = [
    {
      id: 1,
      title: "EMCC Global Council Members",
      content: "EMCC Global Council Members",
    },
    {
      id: 2,
      title: "EMCC Global Executive Board",
      content: "EMCC Global Executive Board",
    },
    {
      id: 3,
      title: "EMCC Special Ambassadors",
      content: "EMCC Special Ambassadors",
    },
    {
      id: 4,
      title: "EMCC Volunteers",
      content: "EMCC Volunteers",
    },
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
          <Text variant={"body"} className="text-white">
            Posuere diam massa in morbi posuere nullam. Accumsan dictum lacus
            nibh aliquam tincidunt faucibus quis vehicula ac. Tempor fringilla
            odio id tortor felis suspendisse porta placerat rhoncus. Vestibulum
            semper vitae pellentesque fames quam purus nec faucibus porttitor.
          </Text>
        </div>
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={bredList} />
      </Breadcrumb>
      <Section bgColor="white">
        <div className="grid grid-cols-11 gap-16">
          <div className="col-span-7 flex flex-col gap-20">
            <div className="flex flex-col gap-12">
              {/* <SectionTitle title="" />
              <Text variant={"body"} className="text-neutral">
                
              </Text> */}
              <TextContentSection
                title="Types of CPD"
                texts={[
                  "Continuing Professional Development is a powerful learning tool that professionals from across all industries can apply to improving skills and developing their knowledge. The types of CPD vary depending on a range of different learning methods.",
                ]}
              />
              <div className="flex flex-col gap-8">
                <LearningItem
                  id={1}
                  title="Structured CPD / Active Learning"
                  content="Structured CPD typically involves interactive and participation-based study. It is often proactive and can include attending training courses, workshops, seminars, conferences, eLearning courses or CPD certified events. CPD active learning can also apply to professionals taking career-orientated exams, however the study and revision would be considered self-directed learning."
                />
                <LearningItem
                  id={2}
                  title="Structured CPD / Active Learning"
                  content="Structured CPD typically involves interactive and participation-based study. It is often proactive and can include attending training courses, workshops, seminars, conferences, eLearning courses or CPD certified events. CPD active learning can also apply to professionals taking career-orientated exams, however the study and revision would be considered self-directed learning."
                />
                <LearningItem
                  id={3}
                  title="Structured CPD / Active Learning"
                  content="Structured CPD typically involves interactive and participation-based study. It is often proactive and can include attending training courses, workshops, seminars, conferences, eLearning courses or CPD certified events. CPD active learning can also apply to professionals taking career-orientated exams, however the study and revision would be considered self-directed learning."
                />
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <TextContentSection
                title="Continuing Professional Development"
                texts={[
                  "Continuous Professional Development (CPD) is defined as the learning process required for coaches, mentors, team coaches, programme managers and supervisors to maintain standards and enhance their practice over time. It involves ongoing commitment to developing knowledge and technical expertise, keeping up to date with evolving best practices, and supporting professional and personal growth.",
                  "Learning is transformative, unlocking potential, increasing capacity and capability, and fostering maturity. EMCC Global recognizes both formal learning (e.g. participation in events and courses) and informal learning (e.g. reading, participation in projects etc..).",
                ]}
              />
              <div className=" flex flex-col p-5 bg-green-50 border-l-2 border-green-500">
                <Text variant={"card_title_large"} className="text-neutral">
                  Making your growth plan – follow the EMCC Global Roadmap for
                  CPD to create your unique journey. Please click on the CPD
                  Road Map image below to download the Roadmap
                </Text>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="description" className="text-[20px]" />
                <Text variant={"navbar"} className="text-neutralDark">
                  CPD Roadmap
                </Text>
              </div>
              <Image src={CpdImg} width={400} height={515} alt="cpd_img" />
              <div className="flex flex-col gap-8">
                <Text variant={"card_title_large"} className="text-neutralDark">
                  Continuous professional development: A key for personal and
                  professional growth
                </Text>
                <Text variant={"body"} className="text-neutral">
                  Participating in CPD activities is crucial for keeping
                  academic and practical qualifications relevant, allowing
                  individuals to continuously enhance their skills regardless of
                  their profession, age, or educational background. It includes
                  refining current skills, elevating them, or acquiring new
                  ones. CPD encourages forward thinking and seizing
                  opportunities to stay up-to-date with industry advancements.
                  It offers practitioners a pathway to enrich their skills,
                  expand their knowledge, and elevate their maturity.
                </Text>
              </div>
              <div className="flex flex-col gap-8">
                <Text variant={"card_title_large"} className="text-neutralDark">
                  A multifaceted approach to CPD
                </Text>
                <Text variant={"body"} className="text-neutral">
                  CPD transforms learning from passive to active by prompting
                  individuals to document and monitor their skills, knowledge,
                  and experiences.
                </Text>
                <Text variant={"body"} className="text-neutral">
                  CPD encompasses a diverse array of activities tailored to
                  cater to various learning preferences and styles.
                </Text>
                <Text variant={"body"} className="text-neutral">
                  From formal educational events to informal ones, here’s a
                  snapshot of what CPD can entail:
                </Text>
                <BulletText
                  texts={[
                    "Participating in training courses and seminars, which may involve lectures, group activities, discussions, and workshops, delivered in various formats such as in-person, online, or hybrid.",
                    "Engaging in CPD events, including speaker presentations, panel discussions, conferences featuring keynote sessions and breakout learning opportunities, as well as seminars and workshops.",
                    "Undergoing supervision sessions.",
                    "Attending informative sessions such as non-interactive lectures and industry briefings.",
                    "Listening to educational content through podcasts and discussions.",
                    "Reading printed or online materials such as books, articles, case studies, and infographics.",
                    "Staying updated with industry-specific news and research.",
                    "Mentoring others.",
                    "Authoring articles or books.",
                    "Participating in forum discussions.",
                    "Preparing to facilitate expert discussions or training sessions.",
                    "Volunteering for relevant initiatives.",
                    "And any other similar activities aimed at ensuring holistic growth and development.",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-8">
                <Text variant={"card_title_large"} className="text-neutralDark">
                  Every activity presents an opportunity for reflection and
                  reflexivity
                </Text>
                <Text variant={"body"} className="text-neutral">
                  CPD isn’t just about attending events or consuming
                  information; it’s about reflection and reflexivity. Every
                  activity, structured or not, planned or spontaneous, presents
                  an opportunity for learning. Keeping a CPD journal allows
                  practitioners to reflect on their learning journey and is a
                  way to capture key insights, impact on the practice and to
                  create awareness of the personal evolution over time.
                </Text>
              </div>
              <div className="flex flex-col gap-8">
                <Text variant={"card_title_large"} className="text-neutralDark">
                  Validating CPD hours
                </Text>
                <BulletText
                  texts={[
                    "At EMCC events, participants are required to complete a feedback form which includes reflective questions. This completion is essential for obtaining a CPD certificate.",
                    "For other events, attendees can join the certificate of attendance along with personal reflections on the learning gained during the event.",
                    "For all informal CPD activities, practitioners need to assess the duration spent on the activity and reflect on the insights gained.",
                  ]}
                />
                <Text variant={"body"} className="text-neutral">
                  Accreditation requires a minimum of 16 hours of CPD annually
                  for Foundation and Practitioner level and 32 hours for Senior
                  and Master Practitioner level, ensuring practitioners are
                  continually investing in their growth and development. You can
                  find resources on the website.
                </Text>
              </div>
              <div className="flex flex-col gap-8">
                <Text variant={"card_title_large"} className="text-neutralDark">
                  Joining a community of learners
                </Text>
                <Text variant={"body"} className="text-neutral">
                  EMCC Global offers a rich tapestry of learning opportunities,
                  designed to inspire, empower, and connect professionals
                  worldwide: Global Provider Summit (GPS) Dialogue Series,
                  Reflective and Reflexive Practice Sessions, conferences,
                  webinars, volunteering opportunities and webinars.
                </Text>
                <Text variant={"body"} className="text-neutral">
                  For more information on events and initiatives, visit
                  https://www.emccglobal.org/calendar/
                </Text>
                <Text variant={"body"} className="text-neutral">
                  Our Centre for Excellence is dedicated to upholding best
                  practices in CPD, catering to coaches, mentors, and
                  supervisors worldwide. If you’re passionate about continuous
                  learning and would like to be part of our team, reach out to
                  us at cpd@emccglobal.org
                </Text>
              </div>
            </div>

            {/* <div className="flex flex-col gap-12"></div> */}
          </div>
          {/* <RightSide
            isGlobal={true}
            aboutTitle="About Us"
            aboutContent="Learn more about our mission and values."
            accordionList={[
              {
                title: "Basic Accordion",
                listItems: ["Item 1", "Item 2", "Item 3"],
              },
              { title: "Advanced Accordion", listItems: ["Item 4", "Item 5"] },
            ]}
            boardLink="/board"
            leadershipLink="/leadership"
            moreAboutItems={[
              { title: "esg", description: "Details about ESG..." },
              { title: "Research", description: "Details about Research..." },
            ]}
            applyTitle="Join Us"
            applyContent="Apply to become part of our team."
            applyButtonLabel="Register Now"
            applyButtonUrl="/apply"
          /> */}
        </div>
      </Section>
    </>
  );
};

export default page;
