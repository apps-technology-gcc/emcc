import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import { Text } from "@/src/components/ui/elements/Text";
import Image from "next/image";
import React, { useState } from "react";
import sqricon from "@/public/sqricon.svg"; // Default image (can be dynamic)
import { cn } from "@/src/lib/utils";

interface RightSideProps {
  aboutTitle: string;
  aboutContent: string;
  accordionList: {
    title: string;
    listItems: string[];
  }[];
  boardLink: string;
  leadershipLink: string;
  moreAboutItems: { title: string; description: string }[];
  applyTitle: string;
  applyContent: string;
  applyButtonLabel: string;
  applyButtonUrl: string;
  isGlobal?: boolean;
}

const RightSide: React.FC<RightSideProps> = ({
  aboutTitle,
  aboutContent,
  accordionList,
  boardLink,
  leadershipLink,
  moreAboutItems,
  applyTitle,
  applyContent,
  applyButtonLabel,
  applyButtonUrl,
  isGlobal = false,
}) => {
  return (
    <div className="col-span-4">
      <div className="flex flex-col gap-12">
        <div className="">
          <div
            className={cn(
              "p-5 mb-[17px] ",
              isGlobal == true ? "bg-pink-300" : "bg-primary-100"
            )}
          >
            <Text variant={"side_nav_header"} className="text-neutralDark">
              {aboutTitle}
            </Text>
            {/* <Text variant="body">{aboutContent}</Text> */}
          </div>
          <div className="flex flex-col gap-5">
            {accordionList.map((item, index) => (
              <div key={index} className="border-b border-border">
                <AccordionList title={item.title} listItems={item.listItems} />
              </div>
            ))}
            <NavLink2
              className="flex items-center justify-between w-full"
              href={boardLink}
              variant={"eight"}
            >
              Board & Governance
              <Icon name="chevron_right" className="text-[16px]" />
            </NavLink2>
            <NavLink2
              className="flex items-center justify-between w-full"
              href={leadershipLink}
              variant={"eight"}
            >
              Leadership & Organisation
              <Icon name="chevron_right" className="text-[16px]" />
            </NavLink2>
          </div>
        </div>

        <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
          <Text variant={"card_title_large"}>More About Us</Text>
          {moreAboutItems.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <Image src={sqricon} width={50} height={40} alt="icon" />
              <div className="flex flex-col items-start gap-5">
                <Text variant={"card_title_small"}>{item.title}</Text>
                <Text variant={"body"}>
                  {item.description.length > 63
                    ? item.description.slice(0, 62) + "..."
                    : item.description}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
          <Text variant={"card_title_large"}>{applyTitle}</Text>
          <Text variant={"body"}>{applyContent}</Text>
          <Button variant={"default"} btnType={"primary"} outline>
            <a href={applyButtonUrl}>{applyButtonLabel}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

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
                key={index}
              >
                <Text
                  className="group-hover:text-primary-600 list-disc"
                  variant="navbar"
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
