import React, { useState, useRef } from "react";
import NavLink2 from "../ui/elements/NavLink2";
import { Icon } from "../ui/elements/Icon";
import { AboutMegaMenu } from "./AboutMegaMenu";
import { JoinEmccMegaMenu } from "./JoinEmccMenu";
import { KnowledgeMegaMenu } from "./Knowledge";
import { InsightsMegaMenu } from "./InsightsMegaMenu";
import { MoreMegaMenu } from "./MoreMegaMenu";

const Navbar = () => {
  const navLinks = [
    { text: "About", isActive: true },
    { text: "Join EMCC", isActive: false },
    { text: "Knowledge", isActive: false },
    { text: "Insights", isActive: false },
    { text: "More +", isActive: false },
  ];

  const [activeMenu, setActiveMenu] = useState<string | null>("about");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(text);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  return (
    <div className="flex relative flex-col bg-white">
      <div className="flex z-10 flex-wrap gap-10 justify-between items-center px-14 py-5 w-full border-b-2 border-solid border-green-300 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 items-center self-stretch my-auto w-[89px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a30706981d059982fc024f3de458f6477f15c721a5d911f138e4fe56d831445d?apiKey=06aa3e4feb1a44b58f93292c617c0ab1&"
            alt="EMCC Logo"
            className="object-contain self-stretch my-auto aspect-[2.23] w-[89px]"
          />
        </div>
        <div className="flex gap-8 items-center self-stretch my-auto h-full relative">
          {navLinks.map((link, index) => (
            <NavLink2
              onMouseEnter={() => handleMouseEnter(link.text)}
              onMouseLeave={handleMouseLeave}
              href="#"
              variant={"two"}
              key={index}
              {...link}
            >
              {link.text}
            </NavLink2>
          ))}
        </div>
        <div className="flex gap-8 items-center self-stretch my-auto text-xs font-light whitespace-nowrap text-neutral-800">
          <Icon name="search" size={20} />
          <Icon name="person" size={20} />
          <div className="flex gap-2.5 items-center self-stretch my-auto rounded-md w-[105px]">
            <Icon name="language" size={20} />
            <div className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis">
              Global
            </div>
          </div>
        </div>
      </div>
      {activeMenu && (
        <div
          className="absolute left-0 right-0 top-full w-full bg-white shadow-lg z-20"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute left-0 right-0 -top-2 h-2 bg-transparent"
            onMouseEnter={() => handleMouseEnter(activeMenu)}
          />
          <div className="max-w-7xl mx-auto px-4 py-6">
            {/* <AboutMegaMenu /> */}
            {/* <JoinEmccMegaMenu /> */}
            {/* <KnowledgeMegaMenu />
             */}
            {/* <InsightsMegaMenu /> */}
            <MoreMegaMenu />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
