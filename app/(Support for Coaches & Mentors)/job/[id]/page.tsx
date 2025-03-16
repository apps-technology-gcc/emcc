"use client";

import Breadcrumb from "@/src/components/common/Breadcrumb";
import Section from "@/src/components/layout/Section";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import { Button } from "@/src/components/ui/elements/Button";
import { Text, textVariants } from "@/src/components/ui/elements/Text";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import JobLogo from "@/public/job_logo.svg";
import Image from "next/image";
import BulletText from "@/src/components/ui/elements/BulletText";
import InputChips from "@/src/components/ui/elements/InputChips";
import { Icon } from "@/src/components/ui/elements/Icon";
const page = () => {
  const skills: string[] = [
    "Graphic Design",
    "Magento",
    "Project Management",
    "Figma",
    "Marketing",
    "Advertising",
    "Event Planning",
    "Magento",
    "Graphic Design",
  ];

  return (
    <>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Career Hub",
            },
            {
              name: "Job Seeking",
            },
            {
              name: "UI/UX Designer (3 Year Exp.)",
              href: "/job-seeking/job-details",
            },
          ]}
        />
      </Breadcrumb>

      <Section bgColor="white" className="">
        <div className="mx-auto max-w-[800px]">
          <div className="flex flex-col gap-12 max-w-[800px]">
            <Link
              className={cn(
                textVariants({ variant: "button" }),
                "text-primary-600"
              )}
              href={"/job-seeking"}
            >
              Go back to the job listing
            </Link>
            <div className="flex justify-between gap-5">
              <div className="flex flex-col gap-5">
                <Text variant={"section_title"} className="#222222">
                  UI/UX Designer (3 Year Exp.)
                </Text>
                <div className="flex items-start gap-5">
                  <Image src={JobLogo} width={40} height={40} alt="Job Logo" />
                  <div className="flex flex-col gap-5">
                    <Text variant={"body"} className="text-[#303030]">
                      Information Technology (Software)
                    </Text>
                    <div className="flex items-center gap-2.5">
                      <Text variant={"body"}>G.C.C. Limited</Text>
                      <Text variant={"body"} className="text-[#2b2b2b]">
                        -
                      </Text>
                      <Text variant={"body"} className="text-[#2b2b2b]">
                        Dubai, UAE
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant={"default"} btnType={"primary"}>
                Apply
              </Button>
            </div>
            <SectionTitleWithDetails
              title="Overview"
              texts={[
                "You will be part of a supportive design team with an innovative design culture. As well as product discovery and delivery, you will be responsible for planning and building reusable components in Figma, for a design system that can be applied to a diverse set of products, in coordination with other designers.",
              ]}
            />
            <SectionTitleWithDetails
              title="Key Responsibilities"
              texts={[
                "You will be responsible for ensuring implementation of web design and user experience (UX) requirements, optimising web pages (UI) for maximum impact and intuitive design, and intoning brand consistency (Branding) across all web pages.",
              ]}
            />

            <SectionTitleWithPoints
              title="What Will I Be Doing?"
              texts={[
                "Creating design solutions and consistent interfaces using the same building blocks in Figma (from wireframes, high-fidelity prototypes, interaction flows, user journey, etc.)",
                "Develop design systems and re-usable component libraries, interactive elements like color palette, grid system, spacing, cards, chips, accordions, menus, navigation, sliders, buttons, links, widgets, lists, forms elements etc. to make page design more efficient and organise.",
                "Working independently, taking ownership of the project and responsibility for your work and the attention to detail needed.",
                "Producing and iterating over concepts and prototypes at pace.",
                "Collaborate effectively with other team members and stakeholders.",
                "Collaborating on the development of new products and brands.",
              ]}
            />
            <SectionTitleWithPoints
              title="Must Haves"
              texts={[
                "4+ years of product design or UX and UI design experience using Figma.",
                "Familiar knowledge of frontend technology like HTML, CSS, TailwindCSS, Bootstrap.",
                "Must have strong knowledge of Material Design Systems, Apple Design Systems.",
                "A proven self-starter and is entrepreneurial in spirit.",
                "Bachelor’s or postgraduate degree or equivalent practical experience.",
                "Have fluency with visual and interaction design tools (Figma), including prototyping, to create wireframes and high-fidelity prototypes.",
                "Foundational knowledge of information architecture, design principles, and content strategy for both web and mobile.",
                "Must be able to work with the Product Development team and collaborate for a pixel-perfect outcome.",
              ]}
            />
            <div className="flex flex-col gap-5">
              <Text variant={"card_title_large"}>
                Skills That Will Help You In The Role:
              </Text>
              <div className="flex items-center gap-5">
                {skills.map((skill, index) => (
                  <InputChips variant={"secondary"} radius={true} key={index}>
                    {skill}
                  </InputChips>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Text variant={"card_title_large"}>Attachments</Text>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2.5">
                  <Icon name="draft" className="text-[30px] text-[#ACABAC]" />
                  <Text variant={"body"} className="underline">
                    Recruitment Pack.pdf
                  </Text>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon name="draft" className="text-[30px] text-[#ACABAC]" />
                  <Text variant={"body"} className="underline">
                    Strategic Plan.pdf
                  </Text>
                </div>
              </div>
            </div>
            <SectionTitleWithDetails
              title="About Us"
              texts={[
                "G.C.C Limited is the alternative to a holding company. We help build compelling vision & intelligent business strategy to bring digital products and services that truly transform businesses in the market. Our teams live and work across the UK, Europe, and the UAE – with a remote hub in Dhaka, Bangladesh. Since our start, we’ve had a single focus- driving competitive solutions to some of the most pressing business challenges. We focus on documentation, breaking down silos and continuous improvement. As a team, we are always reflecting and refining our approach to stay ahead of industry trends and set the bar higher. We believe design and code are communication tools for humans, not computers. Computers can interpret what is written or presented, but true engineering happens in our collaboration with others. As a future member of our product development team, you’ll be expected to focus on maintainable and scalable solutions, design and solution focused contributions.",
              ]}
            />
            <SectionTitleWithPoints
              title="Core Values We Embrace"
              texts={[
                "Openness and Collaboration: you’ll believe in the value of teamwork",
                "Bold and Pragmatic: you’ll approach everything you do with integrity and authenticity.",
                "Professionalism & Transparency: you’ll value clear communication and honesty.",
                "Optimistic and Balanced : you’ll be focused on results.",
                "Principles & Simple Truths: you’ll believe in doing things the right way.",
                "Impact & People over profits: you’ll be thinking about the positive impact we can create in communities to serve humanity.",
              ]}
            />
            <div className="flex justify-end items-center">
              <Button variant={"default"} btnType={"primary"}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

const SectionTitleWithDetails = ({
  title,
  texts,
}: {
  title: string;
  texts: string[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Text variant={"card_title_large"}>{title}Core Values We Embrace</Text>
      {texts.map((text, index) => (
        <Text key={index} variant={"body"}>
          {text}
        </Text>
      ))}
    </div>
  );
};
const SectionTitleWithPoints = ({
  title,
  texts,
}: {
  title: string;
  texts: string[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Text variant={"card_title_large"}>{title}</Text>
      <BulletText texts={texts} />
    </div>
  );
};

export default page;
