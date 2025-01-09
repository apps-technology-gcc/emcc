import * as React from "react";
import { WelcomeHeaderProps } from "@/src/types";
import { Text } from "@/src/components/ui/elements/Text";

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col max-w-full text-2xl font-semibold uppercase whitespace-nowrap text-zinc-900 w-[130px]">
        <Text variant={"section_title"} className="uppercase">
          {title}
        </Text>
        <div className="flex mt-2.5 w-full bg-green-300 min-h-[2px]" />
      </div>
      <Text variant={"body"} className="mt-12  text-neutral">
        {description}
      </Text>
    </div>
  );
};
