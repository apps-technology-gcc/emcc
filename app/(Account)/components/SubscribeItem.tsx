"use client";
import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import CheckedImg from "@/public/check_circle.svg";
import Image from "next/image";
const SubscribeItem = ({
  title,
  description,
  isSubscribed,
  id,
  onChangeStatus,
}: {
  title: string;
  description: string;
  isSubscribed?: boolean;
  onChangeStatus?: () => void;
}) => {
  return (
    <div className="p-5 relative rounded-md overflow-hidden border-border border flex flex-col gap-5 bg-white">
      <div className="absolute right-2.5 top-2.5 ">
        {isSubscribed ? (
          <Icon
            onClick={() => onChangeStatus()}
            name="check_circle"
            className="text-[20px] text-success-500"
          />
        ) : (
          <Icon
            name="add_circle"
            onClick={() => onChangeStatus()}
            className="text-[24px] cursor-pointer"
          />
        )}
        {/* <Icon name="add_circle" className="text-[24px]" />
        <Image
          src={CheckedImg}
          alt="checked"
          width={20}
          height={20}
          className=""
        /> */}
      </div>

      <Text variant={"card_title_large"}>{title}</Text>
      <Text variant={"body"} className="text-neutral">
        {description}
      </Text>
    </div>
  );
};

export default SubscribeItem;
