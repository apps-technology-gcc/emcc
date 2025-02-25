"use client";
import Banner from "@/src/components/common/Banner";
import { Text, textVariants } from "@/src/components/ui/elements/Text";
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
import { cn } from "@/src/lib/utils";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import sqricon from "@/public/sqricon.svg";
import PresidentImg from "@/public/president.png";
import FreelancerImg from "@/public/freelancer.png";
import MemberCard from "@/src/components/card/MemberCard";
import SectionLink from "@/src/components/common/SectionLink";
import AboutGlobalImg from "@/public/about-global.png";
// import Guiding from "../../components/Guiding";
// import TextContentSection from "../../components/TextContentSection";
// import AccordionGroup from "../../components/AccordionGroup";
import EmccFlag from "@/public/emcc-flag.svg";
import flag from "@/public/flag.png";
import NavLink from "@/src/components/ui/elements/NavLink";
import CoachingImg1 from "@/public/coaching_logo_1.png";
import CoachingImg2 from "@/public/coaching_logo_2.png";
import CoachingImg3 from "@/public/coaching_logo_3.png";
import Link from "@/src/components/ui/elements/Link";
import Tag from "@/src/components/ui/elements/Tags";
import { TextLink } from "@/src/components/ui/elements/Additional";
import ArticleImg from "@/public/article.png";
const page = () => {
  const bredList = [
    {
      name: "Accreditation",
    },
  ];

  const guidingValues = [
    {
      id: 1,
      title: "Pioneering Spirit",
      description:
        "We are among the first two organizations to introduce accreditation based on competency framework...",
    },
    {
      id: 2,
      title: "Excellence",
      description:
        "Proprietary access to academic & research bodies. Access to diverse cultures & methodologies...",
    },
    {
      id: 3,
      title: "Strong Academic Research",
      description:
        "EMCC works towards professionalism of Mentoring and Coaching based on research and best practice...",
    },
  ];
  const textContentData = {
    "The Work We Do": [
      {
        id: 1,
        content:
          "EMCCs vision is to be the ‘go to body’ for setting the highest quality standards in Mentoring and Coaching. In this section, we set out the standards that we believe you should use as a guide, whether you are a coach, mentor, coach or mentor supervisor, or trainer or programme provider. It comprises competences, CPD guidance, supervision competences and guidance, the Global Code of Ethics, diversity and regulation. It aims to answer some important questions:",
      },
      {
        id: 2,
        content:
          "We currently have two individual membership categories so that you can select the membership which is right for you and that best matches your experience, expertise and extent of your practice.",
      },
      {
        id: 3,
        content:
          "See below for a brief description of each category. Further down the page is a guide to help you to map your coaching and mentoring capability to decide the category for you. Once you have made your selection click on the appropriate membership category listed in the box on the right of this page.",
      },
      {
        id: 4,
        content:
          "This will tell you more about the membership benefits, the price and take you to the joining application form",
      },
    ],
    "Our Strategy": [
      {
        id: 1,
        content:
          "EMCCs vision is to be the ‘go to body’ for setting the highest quality standards in Mentoring and Coaching. In this section, we set out the standards that we believe you should use as a guide, whether you are a coach, mentor, coach or mentor supervisor, or trainer or programme provider. It comprises competences, CPD guidance, supervision competences and guidance, the Global Code of Ethics, diversity and regulation. It aims to answer some important questions:",
      },
      {
        id: 2,
        content:
          "We currently have two individual membership categories so that you can select the membership which is right for you and that best matches your experience, expertise and extent of your practice.",
      },
      {
        id: 3,
        content:
          "See below for a brief description of each category. Further down the page is a guide to help you to map your coaching and mentoring capability to decide the category for you. Once you have made your selection click on the appropriate membership category listed in the box on the right of this page.",
      },
      {
        id: 4,
        content:
          "This will tell you more about the membership benefits, the price and take you to the joining application form.",
      },
    ],
  };

  const accordionData1 = [
    {
      id: 1,
      title: "Our Founders",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 2,
      title: "Our History",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 3,
      title: "What We Do",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 4,
      title: "Our Mission",
      content: "This is the content<br/>This is another paragraph",
    },
  ];
  const accordionData2 = [
    {
      id: 1,
      title: "Our Strategic Priorities",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 2,
      title: "Our Partnerships",
      content: "This is the content<br/>This is another paragraph",
    },
    {
      id: 3,
      title: "Find Out More",
      content: "This is the content<br/>This is another paragraph",
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
            ACCREDITATION
          </Text>
          <Text variant={"body"} className="text-white">
            The EMCC exists to develop, promote, and set the expectation of best
            practice in mentoring, coaching, and supervision globally for the
            benefit of society
          </Text>
        </div>
      </Banner>
      <Breadcrumb>
        <Breadcrumbs list={bredList} />
      </Breadcrumb>
      <Section bgColor="white" className="">
        <div className="grid grid-cols-11 gap-16">
          <div className="col-span-7 flex flex-col gap-20">
            <div className="flex flex-col gap-12">
              <SectionTitle title="Accreditation" />
              <div className="flex flex-col gap-8">
                <Text
                  // key={textItem.id}
                  variant="body"
                  className="text-neutral"
                >
                  Find out all you need to know about the highest industry
                  standards for practitioners, and education and training
                  programmes in Coaching, Mentoring, and Supervision.
                </Text>
                <Text
                  // key={textItem.id}
                  variant="body"
                  className="text-neutral"
                >
                  EMCC Global Accreditation means you are part of a global
                  family – a family which is motivated for everyone to achieve,
                  where we collaborate for professional excellence and where we
                  champion research and evidence-based practice. EMCC Global
                  Accreditation gives your clients and employers, your peers and
                  your community reassurance about how you are maintaining
                  professional standards and are adhering to a shared Global
                  Code of Ethics.
                </Text>
                <ul className="ml-5">
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" })
                    )}
                  >
                    What knowledge and skills does EMCC believe coaches and
                    mentors should aspire to? Where is there a list of them, so
                    I can benchmark myself?
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" })
                    )}
                  >
                    How do I ensure that my practice is developing, that I am
                    learning from my experience and up to date with developments
                    in coaching and mentoring knowledge and research?
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" })
                    )}
                  >
                    What is supervision? What should I look for in a supervisor?
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" })
                    )}
                  >
                    What ethical standards should inform my practice?
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" })
                    )}
                  >
                    How does good coaching and mentoring practice promote
                    diversity and work in a way that takes into account the
                    range of characteristics and needs of clients?
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" })
                    )}
                  >
                    How is the EMCC working with other bodies to address
                    concerns about professional standards, and the possibility
                    of governmental control of the profession?
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <SectionTitle title="How to Get EMCC Accreditation" />
              <div className="flex flex-col gap-8">
                <Text
                  // key={textItem.id}
                  variant="body"
                  className="text-neutral"
                >
                  Lorem ipsum dolor sit amet consectetur. Urna in amet
                  adipiscing morbi aliquam felis. Massa enim proin urna laoreet
                  ornare tellus turpis bibendum maecenas. Congue sed sed
                  malesuada sit lacus magna. Nam at magna congue faucibus
                  dignissim sit. Metus quam platea pulvinar amet fermentum
                  molestie etiam mattis sem. Tortor sit in laoreet sed pulvinar.
                  Ut vitae nunc enim venenatis libero lacus faucibus amet.
                  Turpis in sapien eget magna luctus. Non eget proin enim id
                  imperdiet turpis consequat in. Viverra aliquet iaculis nisl
                  tellus quisque fringilla vitae.
                </Text>
                <Text
                  // key={textItem.id}
                  variant="body"
                  className="text-neutral"
                >
                  Convallis aenean sit scelerisque non amet maecenas. Vitae
                  viverra quis viverra ipsum velit arcu turpis. Dignissim eu
                  vulputate malesuada nunc tellus. Hendrerit venenatis dapibus
                  risus sed. Fermentum amet rhoncus varius pretium amet eget
                  odio sapien. Ipsum at netus eu at imperdiet morbi. Id in
                  rutrum sed et. Quis aliquet viverra tincidunt maecenas
                  condimentum id metus ornare pulvinar. Scelerisque sit tempus
                  egestas eget sed ut. Mauris cursus lobortis libero netus.
                  Integer vestibulum mattis turpis vitae sem ac tempor. Ut porta
                  diam nibh odio elit tortor urna mauris in.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <SectionTitle title="5-Day Fast Track" />
              <div className="flex flex-col gap-8">
                <Text
                  // key={textItem.id}
                  variant="body"
                  className="text-neutral"
                >
                  If you find paperwork a challenge, or just need a helping hand
                  to get you to where you want to be, then you could also
                  consider registering for one of our Five Day Challenge.
                </Text>
                <Text
                  // key={textItem.id}
                  variant="body"
                  className="text-neutral"
                >
                  The Five Day Challenge is an intense week of dialogue with a
                  cohort of your peers and led by a facilitator. You work
                  through the application as a group, supporting each other and
                  together overcoming whatever it is that has been holding you
                  back from applying; we find that for many people the barrier
                  is usually difficulty finding the time, or finding logs, or
                  getting distracted – the Five Day Challenge is a dedicated
                  time for you to work through it in a supportive way.
                </Text>
                <Text
                  // key={textItem.id}
                  variant="body"
                  className="text-neutral"
                >
                  You can read more about the Five Day Challenge by clicking
                  <span className="underline">this link.</span>
                </Text>

                <video
                  width="100%"
                  height="auto"
                  controls
                  src="https://youtu.be/K4TOrB7at0Y"
                ></video>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <SectionTitle title="Accreditation Standards" />
              <div className="">
                <div className="flex items-center">
                  <NavLink
                    variant={"tab-2"}
                    className="text-white bg-neutralDark border-neutralDark"
                    href="#"
                  >
                    For Individuals
                  </NavLink>
                  <NavLink variant={"tab-2"} href="#">
                    For Organisations
                  </NavLink>
                  <NavLink variant={"tab-2"} href="#">
                    For Training Providers
                  </NavLink>
                </div>
                <div className="border-border flex flex-col gap-12 rounded-tl-none border-[0.5px] rounded-md p-8">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                      <Text
                        variant={"card_title_large"}
                        className="text-primary-600"
                      >
                        Coaching
                      </Text>
                      {/* Body */}
                      <Text variant={"body"}>
                        Lorem ipsum dolor sit amet consectetur. Auctor eget
                        aliquam volutpat donec sagittis auctor sed viverra nunc.
                        Mi gravida facilisis lacinia aliquam in sed. Eu quisque
                        fames non amet neque non quam nunc odio. Quisque sodales
                        in eget imperdiet mattis nulla dignissim.
                      </Text>
                    </div>
                    <div className="flex items-center gap-8">
                      <Image
                        src={CoachingImg1}
                        width={150}
                        height={60}
                        alt="coaching_img"
                        className="h-[60px] w-auto"
                      />
                      <Image
                        src={CoachingImg2}
                        width={150}
                        height={60}
                        alt="coaching_img"
                        className="h-[60px] w-auto"
                      />
                      <Image
                        src={CoachingImg3}
                        width={150}
                        height={60}
                        alt="coaching_img"
                        className="h-[60px] w-auto"
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <Link
                        iconPosition="right"
                        icon={<Icon name="east" className="text-[20px]" />}
                        variant={"primary"}
                        href="/accreditation-standards"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                      <Text
                        variant={"card_title_large"}
                        className="text-primary-600"
                      >
                        Mentoring
                      </Text>
                      {/* Body */}
                      <Text variant={"body"}>
                        Lorem ipsum dolor sit amet consectetur. Auctor eget
                        aliquam volutpat donec sagittis auctor sed viverra nunc.
                        Mi gravida facilisis lacinia aliquam in sed. Eu quisque
                        fames non amet neque non quam nunc odio. Quisque sodales
                        in eget imperdiet mattis nulla dignissim.
                      </Text>
                    </div>
                    <div className="flex items-center gap-8">
                      <Image
                        src={CoachingImg1}
                        width={150}
                        height={60}
                        alt="coaching_img"
                        className="h-[60px] w-auto"
                      />
                      <Image
                        src={CoachingImg2}
                        width={150}
                        height={60}
                        alt="coaching_img"
                        className="h-[60px] w-auto"
                      />
                      <Image
                        src={CoachingImg3}
                        width={150}
                        height={60}
                        alt="coaching_img"
                        className="h-[60px] w-auto"
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <Link
                        iconPosition="right"
                        icon={<Icon name="east" className="text-[20px]" />}
                        variant={"primary"}
                        href="/accreditation-standards"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                      <Text
                        variant={"card_title_large"}
                        className="text-primary-600"
                      >
                        Supervision
                      </Text>
                      {/* Body */}
                      <Text variant={"body"}>
                        Lorem ipsum dolor sit amet consectetur. Auctor eget
                        aliquam volutpat donec sagittis auctor sed viverra nunc.
                        Mi gravida facilisis lacinia aliquam in sed. Eu quisque
                        fames non amet neque non quam nunc odio. Quisque sodales
                        in eget imperdiet mattis nulla dignissim.
                      </Text>
                    </div>
                    <div className="flex items-center gap-8">
                      <Image
                        src={CoachingImg1}
                        width={150}
                        height={60}
                        alt="coaching_img"
                        className="h-[60px] w-auto"
                      />

                      <Image
                        src={CoachingImg3}
                        width={150}
                        height={60}
                        alt="coaching_img"
                        className="h-[60px] w-auto"
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <Link
                        iconPosition="right"
                        icon={<Icon name="east" className="text-[20px]" />}
                        variant={"primary"}
                        href="/accreditation-standards"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <SectionTitle title="How to apply for Accreditation" />
              <Text variant={"body"} className="text-neutral">
                Having an EMCC Global Individual Accreditation (EIA) is really a
                celebration of everything you have experienced or learned as a
                coach, mentor or leader up to now. It says to your clients or
                your organisations that you are practicing at a level which has
                been assessed and verified by a professional body.
              </Text>

              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>
                  Achieving your EIA through your education or training provider
                </Text>
                <div className="flex flex-col gap-8">
                  <Text variant={"body"} className="text-neutral">
                    If you completed your education or training with one of our
                    accredited providers (they will hold an EMCC Global Quality
                    Award – EQA) then we are reassured that your education and
                    training have included everything that you need in order to
                    be recommended for your EMCC Global Individual Accreditation
                    (EIA).
                  </Text>
                  <Text variant={"body"} className="text-neutral">
                    You should automatically receive contact from us once we are
                    notified of your programme graduation from the provider. If
                    you have completed your course and submitted your course
                    documentation to your provider but you have not heard from
                    us, then please contact your EQA course provider and ask
                    them to confirm your graduation to us.{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>
                  The Five Day Challenge{" "}
                </Text>
                <div className="flex flex-col gap-8">
                  <Text variant={"body"} className="text-neutral">
                    If you find paperwork a challenge, or just need a helping
                    hand to get you to where you want to be, then you could also
                    consider registering for one of our Five Day Challenges.
                  </Text>
                  <Text variant={"body"} className="text-neutral">
                    The Five Day Challenge is an intense week of dialogue with a
                    cohort of your peers and led by a facilitator. You work
                    through the application as a group, supporting each other
                    and together overcoming whatever it is that has been holding
                    you back from applying; we find that for many people the
                    barrier is usually difficulty finding the time, or finding
                    logs, or getting distracted – the Five Day Challenge is a
                    dedicated time for you to work through it in a supportive
                    way.
                  </Text>
                  <Text variant={"body"} className="text-neutral">
                    This is a good route for people who have not completed a
                    regular training route, who are not sure whether their
                    previous experience ‘counts’, who need some additional
                    support or who have just got stuck.
                  </Text>
                  <Text variant={"body"} className="text-neutral">
                    You can read more about the Five Day Challenge by clicking
                    <span className="underline">this link</span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>
                  Self-guided application
                </Text>
                <div className="flex flex-col gap-8">
                  <Text variant={"body"} className="text-neutral">
                    We have put together a ‘guide to applying’ which can be
                    downloaded here. After reading the guide please contact{" "}
                    <a
                      className="underline"
                      href="mailto:accreditation.admin@emccglobal.org"
                    >
                      accreditation.admin@emccglobal.org
                    </a>{" "}
                    with any questions or to register your intent to apply.
                  </Text>
                  <Text variant={"body"} className="text-neutral">
                    You can view a list of current EIA holders here
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Text variant={"card_title_large"}>Queries</Text>
                <div className="flex flex-col gap-8">
                  <Text variant={"body"} className="text-neutral">
                    In many cases, especially if you have a quick question or
                    need some clarification, a call with an assessor will be
                    best for you. To contact us about this, email{" "}
                    <a
                      className="underline"
                      href="mailto:accreditation.admin@emccglobal.org"
                    >
                      accreditation.admin@emccglobal.org
                    </a>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-12">
                <SectionTitle title="Smart Certification" />
                <div className="flex flex-col gap-8">
                  <Text variant={"body"} className="text-neutral">
                    EMCC Global has partnered with CVTrust to grant Smart
                    Certificates which are secure certified digital copies of
                    all accreditation certificates that includes an easy way to
                    share the certificates they have earned with recruiters,
                    future employers, or professional and personal networks.
                  </Text>
                  <Text variant={"body"} className="text-neutral">
                    The certificates are managed through an account created for
                    each certificate holder on the CVTrust web-based platform.
                    Participants will be able to manage all of their
                    certificates in one place and access them anytime from
                    anywhere. Smart Certificates may be sent as a secure PDF
                    document or with a personal hyperlink via any electronic
                    means.{" "}
                  </Text>
                </div>
                <Text variant={"card_title_small"} className="text-neutral">
                  Smart Certificates will enable all accreditation award holders
                  to:
                </Text>
                <ul className="ml-5">
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" }),
                      "text-neutral"
                    )}
                  >
                    Receive instant access to verified digital certificates
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" }),
                      "text-neutral"
                    )}
                  >
                    Store certificates in a secure web based platform accessible
                    anytime from anywhere
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" }),
                      "text-neutral"
                    )}
                  >
                    Share certificates easily across social networks or via
                    email
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" }),
                      "text-neutral"
                    )}
                  >
                    Post Smart Certificates to their LinkedIn profile
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" }),
                      "text-neutral"
                    )}
                  >
                    Prevent fraud and reduce counterfeiting
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" }),
                      "text-neutral"
                    )}
                  >
                    Reduce administrative costs
                  </li>
                  <li
                    className={cn(
                      "list-disc",
                      textVariants({ variant: "body" }),
                      "text-neutral"
                    )}
                  >
                    Eliminate the need to apply to EMCC Global for lost,
                    misplaced, or damaged certificates.
                  </li>
                </ul>
                <Text variant={"body"} className="text-neutral">
                  Read <span className="underline">CVTrusts</span> FAQ for more
                  information
                </Text>
                <Text variant={"body"} className="text-neutral underline">
                  User Guide to Activate and Share your Smart Certificates on
                  Linked In
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <SectionTitle title="For Organisations" />
              <div className="flex flex-col gap-8">
                <Text variant={"body"} className="text-neutral">
                  Lorem ipsum dolor sit amet consectetur. Hendrerit nunc lacus
                  sagittis velit id cras. Turpis arcu a porta vitae. Nisl
                  suspendisse amet massa risus orci. Lobortis faucibus elementum
                  orci erat consectetur ut. Egestas felis risus faucibus sed
                  pretium duis etiam bibendum. Vehicula tincidunt vitae feugiat
                  hendrerit mauris gravida tempor egestas.
                </Text>
                <Text variant={"body"} className="text-neutral">
                  Risus turpis ac id convallis erat habitant natoque. Bibendum
                  ac aliquet accumsan ornare nisi nibh aliquam. Vitae fermentum
                  magna blandit enim id tellus. In curabitur ultrices vulputate
                  quis in. Lectus pretium diam tempus et non sed massa. In nisl
                  auctor libero luctus vitae proin turpis auctor. Sit at
                  bibendum lectus et pretium. Facilisis elementum amet elementum
                  morbi donec quis molestie. Magna massa diam lectus natoque. Et
                  ac augue quis quis vitae non convallis sit. Condimentum amet
                  varius nisl dui aliquet morbi libero lectus. Faucibus
                  elementum sit proin sed.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <SectionTitle title="For Trade & Training Providers" />
              <div className="flex flex-col gap-8">
                <Text variant={"body"} className="text-neutral">
                  Lorem ipsum dolor sit amet consectetur. Hendrerit nunc lacus
                  sagittis velit id cras. Turpis arcu a porta vitae. Nisl
                  suspendisse amet massa risus orci. Lobortis faucibus elementum
                  orci erat consectetur ut. Egestas felis risus faucibus sed
                  pretium duis etiam bibendum. Vehicula tincidunt vitae feugiat
                  hendrerit mauris gravida tempor egestas.
                </Text>
                <Text variant={"body"} className="text-neutral">
                  Risus turpis ac id convallis erat habitant natoque. Bibendum
                  ac aliquet accumsan ornare nisi nibh aliquam. Vitae fermentum
                  magna blandit enim id tellus. In curabitur ultrices vulputate
                  quis in. Lectus pretium diam tempus et non sed massa. In nisl
                  auctor libero luctus vitae proin turpis auctor. Sit at
                  bibendum lectus et pretium. Facilisis elementum amet elementum
                  morbi donec quis molestie. Magna massa diam lectus natoque. Et
                  ac augue quis quis vitae non convallis sit. Condimentum amet
                  varius nisl dui aliquet morbi libero lectus. Faucibus
                  elementum sit proin sed.
                </Text>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-12">
              <div className="">
                <div className="p-5 mb-[17px] bg-pink-400">
                  <Text
                    variant={"side_nav_header"}
                    className="text-neutralDark"
                  >
                    About Accreditation
                  </Text>
                </div>
                <div className="flex flex-col ">
                  <div className="border-b border-border">
                    <AccordionList
                      title="About Accreditation"
                      listItems={[
                        "How to get EMCC Accreditation",
                        "Five Day - Fast Track",
                        "Accreditation Awards",
                        "How to apply for Accreditation",
                        "Smart Certification",
                        "For Organisations",
                        "For Trade & Training Providers",
                      ]}
                    />
                  </div>
                  <div className="border-b border-border">
                    <AccordionList
                      title="Accreditation Standards"
                      listItems={[
                        "How to get EMCC Accreditation",
                        "Five Day - Fast Track",
                        "Accreditation Awards",
                        "How to apply for Accreditation",
                        "Smart Certification",
                        "For Organisations",
                        "For Trade & Training Providers",
                      ]}
                    />
                  </div>
                  <div className="border-b border-border">
                    <AccordionList
                      title="Accreditation Pathways"
                      listItems={[
                        "How to get EMCC Accreditation",
                        "Five Day - Fast Track",
                        "Accreditation Awards",
                        "How to apply for Accreditation",
                        "Smart Certification",
                        "For Organisations",
                        "For Trade & Training Providers",
                      ]}
                    />
                  </div>
                  <NavLink2
                    className="flex mt-5 items-center justify-between w-full"
                    href="#"
                    variant={"eight"}
                  >
                    Competency Frameworks
                    <Icon name="chevron_right" className="text-[16px]" />
                  </NavLink2>
                </div>
              </div>
              <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
                <Text variant={"card_title_large"}>Suggested Articles</Text>
                <div className="flex items-center gap-5">
                  <div className="min-w-20 h-20">
                    <Image
                      className="rounded-md w-full h-auto"
                      src={ArticleImg}
                      width={80}
                      height={80}
                      alt="icon"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-5">
                    <Text variant={"card_title_small"}>
                      Accreditation V's Certification: What's the difference?
                    </Text>
                    <Tag style="style1" className="max-w-fit" variant="tag2">
                      Article
                    </Tag>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="min-w-20 h-20">
                    <Image
                      className="rounded-md w-full h-auto"
                      src={ArticleImg}
                      width={80}
                      height={80}
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <Text variant={"card_title_small"}>
                      Becoming an Approved Body for EMCC Accreditation
                    </Text>
                    <Tag style="style1" className="max-w-fit" variant="tag2">
                      Article
                    </Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-20 flex-col gap-12">
          <SectionTitle title="Related Resources" />
          <div className="flex items-start gap-8">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  <Tag style="style1" className="max-w-fit" variant="tag2">
                    Podcast
                  </Tag>

                  <Text variant="resource_header" className="text-neutralDark">
                    Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst
                  </Text>
                </div>
                <Text variant="body" className="text-neutralDark">
                  Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst aliquam
                  pretium imperdiet molestie placerat risus. Mi risus accumsan
                  orci vel.
                </Text>
              </div>
              <TextLink title="Listen" />
            </div>
            <div className="h-full min-h-[250px] w-[1px] bg-background"></div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  <Tag style="style1" className="max-w-fit" variant="tag2">
                    Webinar
                  </Tag>

                  <Text variant="resource_header" className="text-neutralDark">
                    Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst
                  </Text>
                </div>
                <Text variant="body" className="text-neutralDark">
                  Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst aliquam
                  pretium imperdiet molestie placerat risus. Mi risus accumsan
                  orci vel.
                </Text>
              </div>
              <TextLink title="Details" />
            </div>
            <div className="h-full  min-h-[250px] w-[1px] bg-background"></div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  <Tag style="style1" className="max-w-fit" variant="tag2">
                    White Paper
                  </Tag>

                  <Text variant="resource_header" className="text-neutralDark">
                    Pulvinar enim dictumst Lectus ac rhoncus volutpat hac.{" "}
                  </Text>
                </div>
                <Text variant="body" className="text-neutralDark">
                  Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst aliquam
                  pretium imperdiet molestie placerat risus. Mi risus accumsan
                  orci vel.
                </Text>
              </div>
              <TextLink title="Learn More" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

interface AccordionProps {
  title: string;
  content?: string;
  listItems?: string[];
  withMedia?: boolean;
  children?: React.ReactNode;
  className?: string;
}
const AccordionList: React.FC<AccordionProps> = ({
  title,
  content,
  listItems,
  withMedia = false,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        withMedia ? "py-5 border-b border-border" : "py-5",
        className
      )}
    >
      <div
        className="cursor-pointer px-5 flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <Text variant="card_title_small" className={withMedia ? "!m-0" : ""}>
          {title}
        </Text>
        <Icon
          className="text-neutralDark text-[20px]"
          name={isOpen ? "remove" : "add"}
        />
      </div>
      <div
        className={cn(
          "overflow-hidden duration-500 ease-in-out transition-height flex flex-col",
          withMedia ? "items-center" : "gap-6 items-center",
          isOpen ? "h-auto pt-[20px]" : "h-0 p-0"
        )}
      >
        {listItems ? (
          <ul className="flex w-full items-start px-5 flex-col gap-5">
            {listItems.map((item, index) => (
              <li
                className={cn(
                  "hover:list-disc cursor-pointer group hover:text-primary-600 ml-5",
                  index == 0 ? "text-primary-600 list-disc" : ""
                )}
              >
                <Text
                  className="group-hover:text-primary-600 list-disc"
                  variant="navbar"
                  key={index}
                  as="span"
                  color="neutralDark"
                >
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default page;
