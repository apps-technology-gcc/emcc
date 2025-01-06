import * as React from "react";
import { FooterColumnProps } from "@/src/types";
import { Text } from "../ui/elements/Text";
import NavLink2 from "../ui/elements/NavLink2";

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col justify-center">
    <Text variant="card_title_small">{title}</Text>
    <div className="flex flex-col items-start mt-8 text-xs font-light text-zinc-800">
      {links.map((link, index) => (
        <div key={index} className={index > 0 ? "mt-5" : ""}>
          <NavLink2 variant="link" href="#">
            <span className="group-hover:underline">{link}</span>
          </NavLink2>
        </div>
      ))}
    </div>
  </div>
);
