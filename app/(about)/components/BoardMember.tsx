import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import Image from "next/image";
import React from "react";

type BoardMemberProps = {
  title: string;
  name: string;
  description: string;
  email?: string;
  imageSrc: string;
};

const BoardMember: React.FC<BoardMemberProps> = ({
  title,
  name,
  description,
  email,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col rounded-md">
      <Text variant={"section_title"} className="text-neutralDark mb-8">
        {title}
      </Text>
      <div className="flex items-start gap-8 flex-wrap md:flex-nowrap">
        <div className="min-w-[200px]">
          <Image
            alt={name}
            src={imageSrc}
            width={200}
            height={230}
            className="flex-auto"
          />
        </div>
        <div className="flex items-start flex-col gap-5">
          <Text variant={"card_title_large"}>{name}</Text>
          <Text variant={"body"} className="text-neutral">
            {description}
          </Text>
          {email && (
            <div className="flex items-center gap-2.5">
              <Icon name="email" className="text-[20px]" />
              <Text variant={"small"}>{email}</Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardMember;
