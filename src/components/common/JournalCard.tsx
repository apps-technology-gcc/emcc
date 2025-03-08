import Image from "next/image";
import React from "react";
import journalImg from "@/public/journal.png";
import Tag from "@/src/components/ui/elements/Tags";
import { Text } from "@/src/components/ui/elements/Text";
import Link from "@/src/components/ui/elements/Link";
import { Icon } from "@/src/components/ui/elements/Icon";
import { cn } from "@/src/lib/utils";

interface JournalCardProps {
  locked: boolean;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  maxContentLine?: number;
}
const JournalCard: React.FC<JournalCardProps> = ({
  locked,
  imageSrc,
  imageAlt,
  tag,
  date,
  title,
  description,
  maxContentLine,
}) => {
  return (
    <div className="grid grid-cols-[220px_auto] gap-8">
      <div className="w-full min-w-[220px] h-auto flex">
        <Image src={journalImg} width={220} height={315} alt={imageAlt} />
      </div>
      <div className="">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5 justify-between">
            <Tag variant={"tag2"} style={"style1"}>
              {tag}
            </Tag>
            <Text variant={"button"} className="text-neutral">
              {date}
            </Text>
          </div>
          <Text variant={"resource_header"} className="text-neutralDark">
            {title}
          </Text>
          <Text
            variant={"body"}
            className={cn("text-neutral", `line-clamp-[${maxContentLine}]`)}
          >
            {description}
          </Text>
          <Link
            href={""}
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
      </div>
    </div>
  );
};

export default JournalCard;
