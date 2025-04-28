"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Text } from "../ui/elements/Text";
import { AccordionMenuList } from "../ui/elements/AccordionsMenuList";
import NavLink2 from "../ui/elements/NavLink2";
import { Icon } from "../ui/elements/Icon";
import { cn } from "@/src/lib/utils";

const SidebarMenu = ({ menuData, activeSection }: any) => {
  const pathname = usePathname();

  return (
    <div>
      {menuData.map((section: any, sectionIndex: any) => (
        <div key={sectionIndex}>
          <div className={cn("p-5 mb-[17px] ", `bg-${section.menuColor}`)}>
            <Text variant={"side_nav_header"} className="text-neutralDark">
              {section.title}
            </Text>
          </div>
          <div className="flex flex-col gap-5">
            {section.accordion && (
              <div className="border-b border-border">
                <AccordionMenuList
                  activeItem={section.accordion.activeItem}
                  itemColor={section.accordion.itemColor}
                  title={section.accordion.title}
                  listItems={section.accordion.listItems}
                />
              </div>
            )}
            {section.links?.map((link: any, index: any) => (
              <>
                {link.type === "accordion" ? (
                  <div className="border-b border-border" key={index}>
                    <AccordionMenuList
                      className="pt-0"
                      activeItem={activeSection}
                      itemColor={link.itemColor}
                      title={link.title}
                      listItems={link.listItems}
                    />
                  </div>
                ) : (
                  <NavLink2
                    key={index}
                    className={cn(
                      "flex items-center justify-between w-full",
                      pathname === link.href && "!text-primary-800"
                    )}
                    href={link.href || "#"}
                    variant={"eight"}
                  >
                    {link.text}
                    <Icon name="chevron_right" className="text-[16px]" />
                  </NavLink2>
                )}
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
