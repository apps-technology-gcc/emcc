import * as React from "react";
import { ChatMessageProps } from "./types";
import { Text } from "../ui/elements/Text";

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, time, sender, isUser, avatarSrc } = message;

  if (isUser) {
    return (
      <div className="flex mt-3.5 w-full">
        <div className="flex flex-1 shrink h-full basis-0 min-w-[240px]">
          <div className="flex flex-col flex-1 shrink justify-center my-auto font-light rounded-none basis-0 min-w-[240px] text-zinc-900">
            <Text
              variant={"small"}
              className="px-5 -mr-[1px] bg-background py-2.5 w-full text-xs leading-5"
            >
              {text}
            </Text>
            <Text variant={"extra_small"} className="mt-2.5 text-xs text-right">
              {sender} {time}
            </Text>
          </div>
          <div className="flex flex-col justify-start items-end w-[17px]">
            <div
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              className="h-5 w-[18px] bg-background"
            ></div>
          </div>
        </div>
        <div className="flex items-start self-start w-[30px]">
          <img
            loading="lazy"
            src={avatarSrc}
            className="object-contain aspect-square w-[30px]"
            alt={`${sender}'s avatar`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex mt-3.5 w-full">
      <div className="flex items-start self-start w-[30px]">
        <img
          loading="lazy"
          src={avatarSrc}
          className="object-contain aspect-square w-[30px]"
          alt={`${sender}'s avatar`}
        />
      </div>
      <div className="flex flex-1 shrink h-full basis-0 min-w-[240px]">
        <div className="flex flex-col justify-start items-end w-[17px]">
          {/* clip-path: polygon(0 0, 100% 0, 100% 100%); */}
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            className="h-5 w-[18px] bg-background"
          ></div>
        </div>
        <div className="flex flex-col flex-1 shrink justify-center my-auto font-light rounded-none basis-0 min-w-[240px] text-zinc-900">
          <Text
            variant={"small"}
            className="px-5 bg-background py-2.5 w-full text-xs leading-5 "
          >
            {text}
          </Text>
          <Text variant={"extra_small"} className="mt-2.5 text-xs">
            {sender} {time}
          </Text>
        </div>
      </div>
    </div>
  );
};
