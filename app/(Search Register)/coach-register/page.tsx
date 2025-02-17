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
            title="Search The Public Register"
            texts={[
              "An accredited coach  is anyone who has been Called to the Bar in England and Wales but to offer a full range of legal services (including what are known as “reserved legal activities”) a barrister must also be authorised to practise and only these barristers are recorded below on the Barristers’ Register. It records their practising status and address, the reserved legal activities they are authorised to undertake and whether they have been the subject of any disciplinary findings. Barristers who are not authorised to practise are allowed to provide a more limited range of legal services but they must not refer to themselves as barristers in doing so. You can still find out whether they have been the subject of a disciplinary finding here. The Barristers’ Register shows all barristers currently authorised to practise. A separate tab shows disbarred or unregistered barristers with a current disciplinary finding.",
            ]}
          />
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
