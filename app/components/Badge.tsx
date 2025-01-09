import * as React from "react";
import { BadgeProps } from "@/src/types";
import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";

export const Badge: React.FC<BadgeProps> = ({
  icon,
  text,
  linkText,
  linkIcon,
}) => {
  return (
    <div className="flex gap-2.5 items-center self-start p-1.5 bg-green-50 border border-green-500 border-solid rounded-[30px]">
      <div className="flex gap-2.5 items-center self-stretch p-0.5 my-auto w-5 h-5 bg-green-200 rounded-[30px]">
        {/* <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain self-stretch my-auto w-4 aspect-square"
        /> */}
        <Icon name="notifications" className="w-4 text-[16px]" />
      </div>
      <Text variant="card_title_small" className="text-neutral">
        {text}
      </Text>
      <div className="flex shrink-0 self-stretch w-px bg-green-500 h-[21px]" />
      <div className="flex gap-2.5 items-center self-stretch my-auto text-sm text-center text-indigo-600">
        <Text variant="button">{linkText}</Text>
        {/* <img
          loading="lazy"
          src={linkIcon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        /> */}
        <Icon name="chevron_right" className="w-4 text-[16px]" />
      </div>
    </div>
  );
};
