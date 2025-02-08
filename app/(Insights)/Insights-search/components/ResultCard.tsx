import { Icon } from "@/src/components/ui/elements/Icon";
import Link from "@/src/components/ui/elements/Link";
import Tag from "@/src/components/ui/elements/Tags";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const ResultCard = ({
  locked,
  date,
  tag,
  title,
  description,
  link,
}: {
  locked: boolean;
  date: string;
  tag: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="px-8 flex flex-col gap-5 py-5 bg-background">
      <div className="flex items-center gap-5 justify-between">
        <Tag variant={"tag2"} style={"style1"}>
          {tag}
        </Tag>

        <Text variant={"body"} className="text-neutral">
          {date}
        </Text>
      </div>
      <Text variant={"resource_header"} className="text-neutral">
        {title}
      </Text>
      <Text variant={"body"} className="text-neutral line-clamp-3">
        {description}
      </Text>
      <Link
        href={link}
        iconPosition={"right"}
        icon={
          locked ? (
            <Icon name="lock" className="text-[20px] text-neutralLight" />
          ) : (
            <Icon name="east" className="text-[20px]" />
          )
        }
      >
        Read More
      </Link>
    </div>
  );
};

export default ResultCard;
