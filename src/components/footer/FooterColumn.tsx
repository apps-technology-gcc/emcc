"use client";
import * as React from "react";
import { FooterColumnProps } from "@/src/types";
import { Text } from "../ui/elements/Text";
import NavLink2 from "../ui/elements/NavLink2";
import { Icon } from "../ui/elements/Icon";

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="hidden xs:flex flex-auto flex-col justify-center">
        <Text variant="card_title_small">{title}</Text>
        <div className="flex flex-col items-start mt-8 text-xs font-light text-zinc-800">
          {links.map((link, index) => (
            <div key={index} className={index > 0 ? "mt-5" : ""}>
              <NavLink2 variant="link" href={link.href}>
                <span className="group-hover:underline">{link.label}</span>
              </NavLink2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-5 w-full xs:hidden flex-auto flex-col justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-5 justify-between cursor-pointer"
        >
          <Text variant="card_title_small">{title}</Text>
          <Icon name={isOpen ? "expand_less" : "expand_more"} />
        </button>
        <div
          className={`flex flex-col items-start text-xs font-light text-zinc-800 transition-all duration-300 ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {links.map(
            (
              link: {
                label: string;
                href: string;
              },
              index
            ) => (
              <div key={index} className={index > 0 ? "mt-5" : ""}>
                <NavLink2 variant="link" href={link.href}>
                  <span className="group-hover:underline">{link.label}</span>
                </NavLink2>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
