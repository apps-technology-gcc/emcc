import * as React from "react";
import { Button } from "../ui/elements/Button";
import { LocationSwitcherProps } from "@/src/types";
// import { Button } from "./Button";
// import { LocationSwitcherProps } from "./types";

export const LocationSwitcher: React.FC<LocationSwitcherProps> = ({
  country,
  onContinue,
  onSwitch,
}) => {
  return (
    <div className="flex relative flex-col p-12 bg-white shadow-sm max-w-[600px] max-md:px-5">
      <div className="flex z-0 flex-col w-full max-md:max-w-full">
        <div className="text-base font-medium text-zinc-900 max-md:max-w-full">
          Visiting From {country}?
        </div>
        <div className="mt-5 text-sm font-light leading-7 text-zinc-800 max-md:max-w-full">
          You can switch to this country to see information tailored to your
          location.
        </div>
      </div>
      <div className="flex z-0 flex-wrap gap-8 items-start mt-12 w-full text-sm text-center max-md:mt-10 max-md:max-w-full">
        <Button outline onClick={onContinue}>
          CONTINUE TO {country}
        </Button>
        <Button onClick={onSwitch}>SWITCH LOCATIONS</Button>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/b98e27c1daa99dc932e7040e9e2330ea33e74d03e42867a79cf538ee5e44e621?apiKey=7d86919144c846178294e9d8a4321223&"
        className="object-contain absolute top-5 right-5 z-0 w-6 h-6 aspect-square"
        alt=""
      />
    </div>
  );
};
