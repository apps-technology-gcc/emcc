import React from "react";
import SearchCoach from "../components/SearchCoach";
import Section from "@/src/components/layout/Section";
import TextContentSection from "@/src/components/common/TextContentSection";
import { Text } from "@/src/components/ui/elements/Text";
import { AccordionList } from "@/src/components/ui/elements/AccordionsList";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import { Icon } from "@/src/components/ui/elements/Icon";
import { cn } from "@/src/lib/utils";
import { AccordionMenuList } from "@/src/components/ui/elements/AccordionsMenuList";
import SidebarMenu from "@/src/components/common/SideBarMenu";
import BulletText from "@/src/components/ui/elements/BulletText";

const Page = () => {
  const pathname = "/";
  const menuData = [
    {
      title: "Search the Public Register",
      menuColor: "pink-400",
      accordion: {
        activeItem: "Coach Register",
        title: "Search a Coach Record",
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
      links: [
        { text: "Disciplinary Action", href: "/" },
        { text: "Regulation", href: "/about" },
      ],
    },
  ];
  return (
    <Section bgColor="white">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-16">
        <div className="md:col-span-7 flex flex-col gap-12">
          <TextContentSection
            title="Register of Coaching Entities"
            texts={[
              "As well as regulating individual barristers, we also regulate a number of specialist legal services businesses known as “entities”.",
              "From this page, you can download a register of the entities which we regulate. ",
              "Most of the entities that we regulate specialise in the type of work typically undertaken by barristers such as advocacy, litigation and specialist legal advice. ",
            ]}
          />

          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"} className="text-neutral">
              We authorise two types of entities:
            </Text>
            <BulletText
              texts={[
                "BSB Authorised Bodies are fully owned and managed by authorised individuals (lawyers with current practising certificates",
                "BSB Licensed Bodies also referred to as Alternative Business Structures ('ABS') are owned and managed jointly by authorised individuals and others. These could include a mix of other professionals, or family-owned businesses. ",
                "Other legal regulators such as the Solicitors Regulation Authority (SRA) also regulate legal services businesses such as ABSs. You should always make sure that the legal services business that you are dealing with is properly regulated and by whom.",
              ]}
            />
          </div>
          <SearchCoach />
        </div>
        <div className="md:col-span-4">
          <SidebarMenu menuData={menuData} />
        </div>
      </div>
    </Section>
  );
};

export default Page;
