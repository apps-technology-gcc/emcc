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
import Breadcrumb from "@/src/components/common/Breadcrumb";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import Tag from "@/src/components/ui/elements/Tags";
import Divider from "@/src/components/ui/elements/Divider";
import DetailsItem from "../components/DetailsItem";

const Page = () => {
  const pathname = "/";

  const rowData = [
    {
      label: "Date of Qualification:",
      value: ["Nov 2007"],
    },
    {
      label: "Practising Certificate Valid:",
      value: ["1 April 2024 to 30 April 2025"],
    },
    {
      label: "Areas of Practice (Self-declared):",
      value: [
        "Personal Branding",
        "Sales Coaching & Mentoring",
        "Strategic Advisory - Corporate",
      ],
    },
    {
      label: "DBS Status (for minors):",
      value: ["No"],
    },
    {
      label: "Current Practising Status:",
      value: ["Self Employed"],
    },
    {
      label: "Accreditation Body:",
      value: ["EMCC Global"],
    },

    {
      label: "Verified Client Expertise:",
      value: [
        "Corporate - Systemic",
        "Corporate - Teams",
        "Corporate - Executive",
        "Corporate - Board Level",
        "Individual -",
        "Corporate - Supervision",
      ],
    },
  ];

  return (
    <>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Search a Coach Record",
              href: "/",
            },
            {
              name: "Coach Registrar",
              href: "/search",
            },
            {
              name: "Falicity Smoke",
              href: "/search",
            },
          ]}
        />
      </Breadcrumb>

      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-16">
          <div className="md:col-span-7 flex flex-col gap-12">
            <div className="p-5 gap-8 flex bg-primary-50 flex-col rounded-[10px]">
              <div className="flex flex-col gap-5">
                <Text variant={"section_title"} className="text-[#222222]">
                  Falicity Smoke
                </Text>
                <Text variant={"small"} className="text-primary-600">
                  Director for Digital Transformation
                </Text>
                <Tag style={"style3"} variant={"tag2"} className="max-w-fit">
                  Practising
                </Tag>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5">
                <div className="grid xs:grid-cols-2 xs:col-span-3 gap-x-12 gap-y-5">
                  <div className="flex items-center gap-5">
                    <Icon name="email" className="text-[20px]" />
                    <Text variant={"small"}>emailname@domain.com</Text>
                  </div>
                  <div className="flex items-center gap-5">
                    <Icon name="g_translate" className="text-[20px]" />
                    <Text variant={"small"}>German, Spanish, English</Text>
                  </div>
                  <div className="flex items-center gap-5">
                    <Icon name="location_on" className="text-[20px]" />
                    <Text variant={"small"}>London, UK</Text>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="grid xs:grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col gap-10">
                {rowData.slice(4).map((item, index) => (
                  <DetailsItem
                    key={index}
                    label={item.label}
                    values={item.value}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-10">
                {rowData.slice(0, 4).map((item, index) => (
                  <DetailsItem
                    key={index}
                    label={item.label}
                    values={item.value}
                  />
                ))}
              </div>
              <div className="xs:col-span-2 ">
                <DetailsItem
                  label="Primary practice address:"
                  values={[
                    "N05 Chambers, 103 Colmore Row, BIRMINGHAM, B3 3AC, United Kingdom",
                  ]}
                />
              </div>
              <div className="xs:col-span-2 ">
                <DetailsItem
                  label="Disciplinary Findings:"
                  values={[
                    "There are no current findings on our Register in relation to this coach.",
                  ]}
                />
              </div>
              <div className="xs:col-span-2 ">
                <DetailsItem
                  label="Note:"
                  values={[
                    "Please note historical disciplinary findings imposed before 2002 are not included on our website. Also findings which do not include a period of suspension from practice or disbarment are removed from the website after two years",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Page;
