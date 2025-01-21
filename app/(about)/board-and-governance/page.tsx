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
import sqricon from "@/public/sqricon.svg";
import PresidentImg from "@/public/president.png";
import FreelancerImg from "@/public/freelancer.png";
import MemberCard from "@/src/components/card/MemberCard";
import SectionLink from "@/src/components/common/SectionLink";
const page = () => {
  const bredList = [
    {
      name: "About Us",
      //   href: "/",
    },
    {
      name: "Board & Governance",
      href: "board-and-governance",
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
            Board & Governance
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
              <SectionTitle title="Executive Board & Governance" />
              <div className="flex flex-col gap-8">
                <Text variant={"body"} className="text-neutral">
                  The EMCC Middle East Board & Executive team exists to provide
                  advice, support and resource to Subscription Members. The
                  Executive team looks over the operations by bringing over the
                  global standard of coaching and mentorship to the Middle East.
                </Text>

                <SectionLink title=" Our Organisational Structure" />
              </div>
              <div className="flex flex-col">
                <div className="border-b border-spacing-5 border-border">
                  <Accordion
                    className="mb-[5px]"
                    title="What We Do"
                    content="This is the content<br/>This is another paragraph"
                  />
                </div>
                <div className="border-b border-spacing-5 border-border">
                  <Accordion
                    className="mb-[5px]"
                    title="Our Members"
                    content="This is the content<br/>This is another paragraph"
                  />
                </div>
                <div className="border-b border-spacing-5 border-border">
                  <Accordion
                    className="mb-[5px]"
                    title="Our Mission"
                    content="This is the content<br/>This is another paragraph"
                  />
                </div>
              </div>
            </div>
            {/* President */}
            <div className=" flex flex-col rounded-md">
              <Text
                variant={"section_title"}
                className="text-neutralDark mb-8 "
              >
                President
              </Text>
              <div className="flex items-start gap-8 flex-wrap md:flex-nowrap">
                <div className="min-w-[200px]">
                  <Image
                    alt="President"
                    src={PresidentImg}
                    width={200}
                    height={230}
                    className="flex-auto"
                  />
                </div>
                <div className="flex items-start flex-col gap-5">
                  <Text variant={"card_title_large"}>Afifa Mohammad</Text>
                  <Text variant={"body"} className="text-neutral">
                    Lorem ipsum dolor sit amet consectetur. Lorem senectus amet
                    nullam mollis. Velit risus felis a a. Adipiscing platea a
                    tincidunt tellus. Libero ac vivamus sit lacus velit et ac
                    tempor mattis. Morbi dictum dictumst ac sed diam morbi. Ut
                    proin pharetra nam vitae. Egestas tellus ultrices dolor
                    risus donec commodo.
                  </Text>
                </div>
              </div>
            </div>
            {/* FREELANCER */}
            <div className=" flex flex-col rounded-md">
              <Text
                variant={"section_title"}
                className="text-neutralDark mb-8 "
              >
                Board Secretary
              </Text>
              <div className="flex items-start gap-8 flex-wrap md:flex-nowrap">
                <div className="min-w-[200px]">
                  <Image
                    alt="President"
                    src={FreelancerImg}
                    width={200}
                    height={230}
                    className="flex-auto"
                  />
                </div>
                <div className="flex items-start flex-col gap-5">
                  <Text variant={"card_title_large"}>Mohammad Abdullah</Text>
                  <Text variant={"body"} className="text-neutral">
                    Lorem ipsum dolor sit amet consectetur. Lorem senectus amet
                    nullam mollis. Velit risus felis a a. Adipiscing platea a
                    tincidunt tellus. Libero ac vivamus sit lacus velit et ac
                    tempor mattis. Morbi dictum dictumst ac sed diam morbi. Ut
                    proin pharetra nam vitae. Egestas tellus ultrices dolor
                    risus donec commodo.
                  </Text>
                  <div className="flex items-center gap-2.5">
                    <Icon name="email" className="text-[20px]" />
                    <Text variant={"small"}>emailname@domain.com</Text>
                  </div>
                </div>
              </div>
            </div>
            {/* BOARD */}
            <div className=" flex flex-col p-5 bg-green-50 border-l-2 border-green-500">
              <Text variant={"body"} className="text-neutral">
                The Board is accountable to our members and oversees the
                Councils’ regionalactivities in the Middle East. It’s made up of
                senior leaders from a broad range of industry and sectors,
                member firms and organisations.
              </Text>
            </div>
            <div className=" flex flex-col rounded-md">
              <Text
                variant={"section_title"}
                className="text-neutralDark mb-8 "
              >
                Board Secretary
              </Text>
              <div className="grid mb-8 gap-x-8 gap-y-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <MemberCard />
                <MemberCard />
                <MemberCard />
              </div>
              <SectionLink title="Executive Board Structure" />
            </div>
            <div className=" flex flex-col rounded-md">
              <Text
                variant={"section_title"}
                className="text-neutralDark mb-8 "
              >
                Board Advisors (Non-Executive Board Members)
              </Text>
              <div className="grid mb-8 gap-x-8 gap-y-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <MemberCard />
                <MemberCard />
                <MemberCard />
              </div>
              <SectionLink title="Advisory Board Structure" />
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-12">
              <div className="">
                <div className="p-5 mb-[17px] bg-primary-100">
                  <Text
                    variant={"side_nav_header"}
                    className="text-neutralDark"
                  >
                    About EMCC ME
                  </Text>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="border-b border-border">
                    <AccordionList
                      title="Basic Accordion"
                      listItems={["Item 1", "Item 2", "Item 3"]}
                    />
                  </div>
                  <NavLink2
                    className="flex items-center justify-between w-full"
                    href="#"
                    variant={"eight"}
                  >
                    Board & Governance
                    <Icon name="chevron_right" className="text-[16px]" />
                  </NavLink2>
                  <NavLink2
                    className="flex items-center justify-between w-full"
                    href="#"
                    variant={"eight"}
                  >
                    Leadership & Organisation
                    <Icon name="chevron_right" className="text-[16px]" />
                  </NavLink2>
                </div>
              </div>
              <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
                <Text variant={"card_title_large"}>More About Us</Text>
                <div className="flex items-center gap-5">
                  <Image src={sqricon} width={50} height={40} alt="icon" />
                  <div className="flex flex-col items-start gap-5">
                    <Text variant={"card_title_small"}>ESG</Text>
                    <Text variant={"body"}>
                      {`Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`.length > 63
                        ? `Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`.slice(0, 62) + "..."
                        : `Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`}
                    </Text>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Image src={sqricon} width={50} height={40} alt="icon" />
                  <div className="flex flex-col items-start gap-5">
                    <Text variant={"card_title_small"}>Research</Text>
                    <Text variant={"body"}>
                      {`Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`.length > 63
                        ? `Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`.slice(0, 62) + "..."
                        : `Lorem ipsum dolor sit amet consectetur. Mattis amet elit
                      vulputate convallis massa accumsan purus sit. Proin porta
                      sit amet nam egestas ac. Sit fermentum amet ut consequat
                      nec. Non faucibus lectus quis tortor aliquam suscipit
                      fermentum sem mi.`}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
                <Text variant={"card_title_large"}>
                  Apply to Join Our Board
                </Text>
                <Text variant={"body"}>
                  Lorem ipsum dolor sit amet consectetur. Leo leo risus varius
                  gravida tellus. Aliquet mi sit tristique mauris egestas
                  molestie volutpat.
                </Text>
                <Button variant={"default"} btnType={"primary"} outline>
                  Register Your Interest
                </Button>
              </div>
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
        withMedia ? "py-5 border-b border-border" : "py-[15px]",
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
