import Image from "next/image";
import React from "react";
import Tag from "@/src/components/ui/elements/Tags";
import { Text } from "@/src/components/ui/elements/Text";

interface CaseStudyCardProps {
  imageUrl: string;
  imageAlt?: string;
  tag: string;
  date: string;
  title: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  imageUrl,
  imageAlt = "Case Study",
  tag,
  date,
  title,
}) => {
  return (
    <div className="flex flex-col gap-5 max-w-[370px]">
      <div className="flex w-full h-auto rounded-md overflow-hidden relative">
        <Image src={imageUrl} width={370} height={250} alt={imageAlt} />
        <div className="absolute top-5 left-5">
          <Tag variant={"tag2"} style={"style1"}>
            {tag}
          </Tag>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-5">
          <Text variant={"body"} className="text-neutral">
            {date}
          </Text>
          <div className="min-w-[100px] h-[2px] bg-green-300 "></div>
        </div>
        <Text
          variant={"resource_header"}
          className="text-neutralDark line-clamp-2"
        >
          {title}
        </Text>
      </div>
    </div>
  );
};

export default CaseStudyCard;
