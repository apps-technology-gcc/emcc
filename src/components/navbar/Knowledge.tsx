import * as React from "react";
import { MenuSection } from "./MenuSection";
import { Text } from "../ui/elements/Text";
import { Icon } from "../ui/elements/Icon";
import { Button } from "../ui/elements/Button";
import { NavigationMegaMenuBtn } from "../ui/elements/Additional";
import NavLink2 from "../ui/elements/NavLink2";

const aboutItems = [
  "Our History, Our Culture",
  "Our Strategy",
  "Our Organisation",
  "Board & Governance",
  "esg",
];

const communitiesItems = [
  "Global Coaching & Mentoring Alliance (GCMA)",
  "Working Groups",
  "Volunteering & Pro-Bono Coaching",
  "Working for EMCC",
];

export const KnowledgeMegaMenu: React.FC = () => {
  const items2 = ["Our History, Our Culture", "Our Strategy"];
  const items1 = ["Our Organisation", "Board & Governance", "esg"];
  return (
    <div className="grid grid-cols-3 gap-5 p-12 bg-white rounded-none text-zinc-900 max-md:px-5">
      <div className="flex flex-col self-start">
        <div className="flex mb-5 flex-col w-full text-base font-medium">
          <div className="flex flex-col justify-center items-start w-full">
            <div className="flex gap-5 items-center max-w-full w-[105px]">
              <div className="flex flex-col justify-center self-stretch my-auto w-[105px]">
                <Text variant="card_title_large">Join EMCC</Text>
                <div className="flex mt-2.5 w-full bg-green-300 min-h-[2px]" />
              </div>
            </div>
          </div>
        </div>
        <Text variant="body">
          Pellentesque malesuada accumsan in tellus egestas dui ac lorem
          molestie. Sit purus dolor lectus enim elementum pulvinar viverra.
          Turpis eu pulvinar facilisis consectetur in nunc turpis amet pharetra.
          Iaculis congue convallis dui nibh ut dapibus nulla ut. Lorem
          sollicitudin sed eu velit orci vitae enim nullam nibh. Diam vulputate
          orci dictum volutpat.
        </Text>
        {/* <div className="flex flex-col justify-center items-start mt-5 w-full text-xs text-center">
          <NavigationMegaMenuBtn title="Contact EMCC Global" />
        </div> */}
      </div>
      <div className="flex col-span-2 flex-wrap flex-1 shrink h-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex shrink-0 w-px bg-neutral-300 h-[268px]" />
        <div className="flex flex-wrap flex-1 shrink items-start basis-0 min-w-[240px] size-full max-md:max-w-full">
          <div className="flex  border-l justify-start border-border h-full flex-col flex-1 shrink basis-0 min-w-[240px]">
            <div className="flex flex-col justify-center w-full">
              <div className="flex flex-col justify-center  w-full text-xs">
                {items1.map((item, index) => (
                  <NavLink2 href={"/"} variant="five" key={index}>
                    {item}
                    <Icon
                      className="text-[16px] group-hover:text-primary-600"
                      name="chevron_right"
                    />
                  </NavLink2>
                ))}
                {items2.map((item, index) => (
                  <NavLink2 href={"/"} variant="five" key={index}>
                    {item}
                  </NavLink2>
                ))}
              </div>
            </div>
          </div>
          <MenuSection items={aboutItems} />
        </div>
      </div>
    </div>
  );
};
