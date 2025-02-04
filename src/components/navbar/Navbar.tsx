"use client";
import React, { useState, useRef } from "react";
import NavLink2 from "../ui/elements/NavLink2";
import { Icon } from "../ui/elements/Icon";
import { AboutMegaMenu } from "./AboutMegaMenu";
import { JoinEmccMegaMenu } from "./JoinEmccMenu";
import { KnowledgeMegaMenu } from "./Knowledge";
import { InsightsMegaMenu } from "./InsightsMegaMenu";
import { MoreMegaMenu } from "./MoreMegaMenu";
import Section from "../layout/Section";
import { Text } from "../ui/elements/Text";
import { cn } from "@/src/lib/utils";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<
    "About" | "Join EMCC" | "Knowledge" | "Insights" | "More +" | null
  >(null);
  const navLinks = [
    { text: "About", isactive: activeMenu === "About" },
    { text: "Join EMCC", isactive: activeMenu === "Join EMCC" },
    { text: "Knowledge", isactive: activeMenu === "Knowledge" },
    { text: "Insights", isactive: activeMenu === "Insights" },
    { text: "More +", isactive: activeMenu === "More +" },
  ];

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (text: any) => {
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

  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const handleOffcanvasClose = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <div className="bg-white py-5 relative border-b-2 border-solid  border-green-300">
      <div className="hidden sm:flex  container z-10 flex-wrap sm:flex-nowrap gap-10 justify-between items-center  w-full  max-md:px-5 max-md:max-w-full">
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
              className="pt-[4.5px]"
              {...link}
            >
              {link.text}
            </NavLink2>
          ))}
        </div>
        <div className="flex gap-8 items-center self-stretch my-auto text-xs font-light whitespace-nowrap text-neutral-800">
          <Icon name="search" size={20} className="text-[20px]" />
          <Icon name="person" size={20} className="text-[20px]" />
          <div className="flex gap-2.5 items-center self-stretch my-auto rounded-md flex-auto">
            <Icon name="language" size={20} className="text-[20px]" />
            <Text
              variant={"placeholder"}
              className="text-[#222222] hidden md:block"
            >
              Global
            </Text>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden  container z-10 flex-wrap sm:flex-nowrap gap-10 justify-between items-center  w-full  max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 items-center self-stretch my-auto w-[89px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a30706981d059982fc024f3de458f6477f15c721a5d911f138e4fe56d831445d?apiKey=06aa3e4feb1a44b58f93292c617c0ab1&"
            alt="EMCC Logo"
            className="object-contain self-stretch my-auto aspect-[2.23] w-[89px]"
          />
        </div>
        <div className="flex gap-8 items-center self-stretch my-auto text-xs font-light whitespace-nowrap text-neutral-800">
          <Icon name="search" size={20} className="text-[20px]" />
          {/* <Icon name="person" size={20} /> */}

          <div className="flex gap-2.5 items-center self-stretch my-auto rounded-md flex-auto">
            <Icon name="language" size={20} className="text-[20px]" />
            <Text
              variant={"placeholder"}
              className="text-[#222222] hidden md:block "
            >
              Global
            </Text>
          </div>
          <div className="relative">
            <Icon
              name="menu"
              className="cursor-pointer text-[20px]"
              onClick={() => setIsOffcanvasOpen(true)}
            />
            <div
              className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                isOffcanvasOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                width: "min(375px, 100vw)",
                zIndex: 1000,
              }}
            >
              <div className="flex flex-col gap-[18px]">
                <div className="p-5 flex justify-between items-center">
                  <div className="flex gap-2.5 items-center self-stretch my-auto w-[89px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a30706981d059982fc024f3de458f6477f15c721a5d911f138e4fe56d831445d?apiKey=06aa3e4feb1a44b58f93292c617c0ab1&"
                      alt="EMCC Logo"
                      className="object-contain self-stretch my-auto aspect-[2.23] w-[89px]"
                    />
                  </div>
                  <Icon
                    name="close"
                    className="cursor-pointer ml-auto text-[20px]"
                    onClick={() => setIsOffcanvasOpen(false)}
                  />
                  {/* Offcanvas content goes here */}
                </div>
                <div className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex border-border px-5 py-[14px] items-center justify-between gap-5",
                        index === 0 ? "border-y-[0.5px]" : "border-b-[0.5px]"
                      )}
                    >
                      <Text variant={"navbar"} className="text-neutralDark">
                        {link.text}
                      </Text>
                      <Icon
                        name="arrow_forward"
                        // size={20}
                        className="cursor-pointer text-[20px]"
                        onClick={() => setIsOffcanvasOpen(true)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {isOffcanvasOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                style={{ zIndex: 999 }}
                onClick={() => setIsOffcanvasOpen(false)}
              />
            )}
          </div>
        </div>
      </div>

      {activeMenu && (
        <div
          className="absolute left-0 right-0 top-full w-full mt-[2px] flex justify-center z-20"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute left-0 right-0 -top-2 h-2 bg-transparent"
            onMouseEnter={() => handleMouseEnter(activeMenu)}
          />
          <div className="bg-white max-w-[1170px]">
            {activeMenu === "About" ? (
              <AboutMegaMenu />
            ) : activeMenu === "Insights" ? (
              <InsightsMegaMenu />
            ) : activeMenu === "Join EMCC" ? (
              <JoinEmccMegaMenu />
            ) : activeMenu === "Knowledge" ? (
              <KnowledgeMegaMenu />
            ) : activeMenu === "More +" ? (
              <MoreMegaMenu />
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
