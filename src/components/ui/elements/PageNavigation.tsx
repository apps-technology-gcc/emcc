"use client";
import React from "react";
import { Text } from "./Text";
import { Icon } from "./Icon";
import { IconType } from "@/src/types";

// Define types for our navigation items
interface SubNavItem {
  id: string;
  text: string;
}

interface NavItem {
  id: string;
  title: string;
  subItems?: SubNavItem[];
}

const PageNavigation = () => {
  // Sample navigation data - you can replace this with your actual data
  const navigationItems: NavItem[] = [
    {
      id: "1",
      title: "Main Section 1",
      subItems: [
        { id: "1-1", text: "Nav Bar Text 1" },
        { id: "1-2", text: "Nav Bar Text 2" },
        { id: "1-3", text: "Nav Bar Text 3" },
      ],
    },
    {
      id: "2",
      title: "Main Section 2",
      subItems: [
        { id: "2-1", text: "Nav Bar Text 4" },
        { id: "2-2", text: "Nav Bar Text 5" },
      ],
    },
    {
      id: "3",
      title: "Main Section 3",
      subItems: [
        { id: "3-1", text: "Nav Bar Text 6" },
        { id: "3-2", text: "Nav Bar Text 7" },
      ],
    },
  ];

  const [isMainOpen, setIsMainOpen] = React.useState(false);
  const [openSubmenuId, setOpenSubmenuId] = React.useState<string | null>(null);

  const handleMainClick = () => {
    setIsMainOpen(!isMainOpen);
    // Close all submenus when main section is closed
    if (isMainOpen) {
      setOpenSubmenuId(null);
    }
  };

  const handleSubmenuClick = (itemId: string) => {
    setOpenSubmenuId(openSubmenuId === itemId ? null : itemId);
  };

  return (
    <div>
      {/* Main header */}
      <div className="flex py-5 border-b border-border items-center justify-between gap-5">
        <Text variant="card_title_small">Navigation Menu</Text>
        <Icon
          className="text-neutralDark text-[20px] cursor-pointer"
          name={isMainOpen ? "remove" : ("add" as IconType)}
          onClick={handleMainClick}
        />
      </div>

      {/* Navigation items */}
      {isMainOpen && (
        <div className="pt-[30px] flex flex-col gap-5 pb-5">
          {navigationItems.map((item) => (
            <div key={item.id}>
              <div
                className="flex cursor-pointer items-center gap-5 justify-between"
                onClick={() => handleSubmenuClick(item.id)}
              >
                <Text variant="button">{item.title}</Text>
                <Icon
                  className="text-neutralDark text-[20px]"
                  name={
                    (openSubmenuId === item.id
                      ? "keyboard_arrow_up"
                      : "keyboard_arrow_down") as IconType
                  }
                />
              </div>

              {/* Submenu items */}
              {openSubmenuId === item.id && item.subItems && (
                <div className="w-full px-5 flex flex-col gap-5 mt-5">
                  {item.subItems.map((subItem) => (
                    <Text key={subItem.id} variant="navbar">
                      {subItem.text}
                    </Text>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageNavigation;
