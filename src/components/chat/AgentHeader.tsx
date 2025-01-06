import * as React from "react";
import { AgentHeaderProps } from "@/src/types";
import { Text } from "../ui/elements/Text";

export const AgentHeader: React.FC<AgentHeaderProps> = ({
  name,
  role,
  avatarSrc,
}) => {
  return (
    <div className="flex gap-2.5 items-center px-5 py-2.5 w-full bg-slate-100">
      <div className="flex items-start self-stretch my-auto w-[30px]">
        <img
          loading="lazy"
          src={avatarSrc}
          className="object-contain aspect-square w-[30px]"
          alt={`${name}'s avatar`}
        />
      </div>
      <div className="flex flex-col self-stretch my-auto text-zinc-900">
        <Text variant={"small"} className="font-medium">
          {name}
        </Text>
        <Text variant="extra_small" className="mt-1.5 text-xs font-light">
          {role}
        </Text>
      </div>
    </div>
  );
};
