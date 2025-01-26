import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import { Text } from "@/src/components/ui/elements/Text";
import Image from "next/image";
import React, { useState } from "react";
import sqricon from "@/public/sqricon.svg"; // Default image (can be dynamic)
import { cn } from "@/src/lib/utils";
import ModalWrapper from "@/src/components/modal/ModalWrapper";
import { Input, Label } from "@/src/components/ui/elements/form/Input";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import FileUpload from "@/src/components/ui/elements/form/FileUpload";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";

import { Tree, TreeNode } from "react-organizational-chart";

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
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const [modelName, setModelName] = useState("register");

  return (
    <div className="col-span-4">
      <ModalWrapper
        closeModal={closeModal}
        isOpen={isOpen && modelName == "register"}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Text variant={"section_title"}>
              Register your interest in becoming a board member
            </Text>
            <Text variant={"body"}>
              Please submit your information below to register your interest for
              the board position. A member of our team will be get back to you
              soon.
            </Text>
          </div>
          <form
            action=""
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5"
          >
            <div className="w-full">
              <Input
                name="name"
                type="text"
                label="Your Name"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full">
              <Input
                name="name"
                type="text"
                label="Contact Email"
                placeholder="Contact Email"
              />
            </div>

            {/* Your Country */}
            <div className="w-full">
              <SearchSelect
                options={[
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" },
                  { label: "Option 3", value: "option3" },
                ]}
                label="Your Country"
                placeholder="Your Country"
                isMulti={false}
                name="position"
              />
            </div>

            <div className="w-full">
              <SearchSelect
                options={[
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" },
                  { label: "Option 3", value: "option3" },
                ]}
                label="Your City"
                placeholder="Your City"
                isMulti={false}
                name="position"
              />
            </div>
            <div className="w-full">
              <Input
                name="name"
                type="text"
                label="LinkedIn Profile URL"
                placeholder="LinkedIn Profile URL"
              />
            </div>
            <div className="w-full flex flex-col gap-2.5">
              <Label label="Upload Your CV" />
              <FileUpload type="attach" />
            </div>

            <div className="col-span-2 flex flex-col gap-8">
              <div className="w-full">
                <Input
                  cols={50}
                  rows={7}
                  name="message"
                  type="textarea"
                  label="Message"
                />
              </div>
              <div className="w-full">
                <Checkbox id="agree" label="I agree all statements in" />
              </div>
              <div className="flex">
                <Button variant={"default"} btnType={"primary"}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </ModalWrapper>
      <ModalWrapper
        closeModal={closeModal}
        isOpen={isOpen == true && modelName == "chart"}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Text variant={"section_title"}>
              Register your interest in becoming a board member
            </Text>
            <Text variant={"body"}>
              Please submit your information below to register your interest for
              the board position. A member of our team will be get back to you
              soon.
            </Text>
          </div>
          <div className="w-full flex justify-center">
            <Tree
              lineWidth={"2px"}
              lineColor={"#000"}
              lineBorderRadius={"10px"}
              label={
                <div className="bg-blue-600 max-w-fit text-white p-4 rounded-lg shadow-md">
                  Executive Director <br /> Operations
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="bg-blue-600  max-w-fit text-white p-4 rounded-lg shadow-md">
                    Country Director <br /> UAE
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
                      Community Outreach Director
                    </div>
                  }
                />
                <TreeNode
                  label={
                    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
                      Partnership & Sponsorship
                    </div>
                  }
                />
                <TreeNode
                  label={
                    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
                      Membership & Events
                    </div>
                  }
                />
                <TreeNode
                  label={
                    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
                      Marketing & Communication
                    </div>
                  }
                />
                <TreeNode
                  label={
                    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
                      Knowledge & Development
                    </div>
                  }
                />
                <TreeNode
                  label={
                    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
                      Admin/IT
                    </div>
                  }
                />
              </TreeNode>
            </Tree>
          </div>
        </div>
      </ModalWrapper>
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
          <Button
            onClick={() => setIsOpen(true)}
            variant={"default"}
            btnType={"primary"}
            outline
          >
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
