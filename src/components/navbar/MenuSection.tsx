import * as React from "react";
// import { NavigationItem } from "./NavigationItem";
import { NavigationSectionProps } from "@/src/types";
import NavLink2 from "../ui/elements/NavLink2";
import { Text } from "../ui/elements/Text";

export const MenuSection: React.FC<NavigationSectionProps> = ({
  title,
  items,
}) => (
  <div className="flex  border-l justify-start border-border h-full flex-col flex-1 shrink basis-0 min-w-[240px]">
    <div className="flex flex-col justify-center w-full">
      {title && (
        <Text className="pl-5 mb-5" variant="card_title_small">
          {title}
        </Text>
      )}

      <div className="flex flex-col gap-2.5 justify-center  w-full text-xs">
        {items.map((item, index) => (
          <NavLink2 href={"/"} variant="three" key={index}>
            {item}
          </NavLink2>
        ))}
      </div>
    </div>
  </div>
);
