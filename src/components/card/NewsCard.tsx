import * as React from "react";
import { Text } from "../ui/elements/Text";
import Tag from "../ui/elements/Tags";
import { Icon } from "../ui/elements/Icon";
import PartnerImg from "@/public/partner.png";
export const AllNewsCard: React.FC<any> = ({
  imageUrl,
  title,
  description,
  imageAlt,
}) => {
  return (
    <article className="max-height-[120px] overflow-hidden xs:p-0 flex bg-background flex-nowrap flex-1 shrink gap-5 xs:gap-8 items-center self-stretch my-auto rounded-md basis-0 bg-neutral-100 min-w-[240px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center self-stretch my-auto  h-full w-[120px]">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="object-contain flex-1 bg-blend-normal aspect-square "
        />
      </div>
      <div className="flex py-1 pr-1 gap-5 flex-col flex-1 shrink self-stretch my-auto text-sm basis-0 min-w-[240px]">
        <Text
          variant={"card_title_small"}
          className="text-neutralDark line-clamp-2"
        >
          {title}
        </Text>
        <Text variant={"body"} className="text-neutral line-clamp-1">
          {description}
        </Text>
      </div>
    </article>
  );
};
export const PartnersNewsCard: React.FC<{
  imageUrl: string;
  title: string;
  description: string;
  imageAlt: string;
  tag: string;
  tagColor: string;
}> = ({ imageUrl, title, description, imageAlt, tag, tagColor }) => {
  return (
    <article className="max-height-[120px] relative overflow-hidden xs:p-0 flex bg-background flex-wrap flex-1 shrink gap-5 xs:gap-8 items-center self-stretch my-auto rounded-md basis-0 bg-neutral-100 min-w-[240px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center self-stretch my-auto  h-full w-[120px]">
        <img
          loading="lazy"
          src={imageUrl || PartnerImg.src}
          alt={imageAlt}
          className="object-contain flex-1 bg-blend-normal aspect-square "
        />
      </div>
      <div className="flex  gap-5 flex-col flex-1 shrink self-stretch my-auto text-sm basis-0 min-w-[240px] pl-0 pr-5 py-5">
        <div className="absolute top-2.5 right-2.5">
          <Tag style={"style1"} variant={"tag2"}>
            {tag}
          </Tag>
        </div>
        <Text
          variant={"card_title_small"}
          className="text-neutralDark line-clamp-1"
        >
          {title}
        </Text>
        <Text variant={"body"} className="text-neutral line-clamp-2">
          {description}
        </Text>
      </div>
    </article>
  );
};
export const LeadershipNewsCard: React.FC<{
  imageUrl: string;
  title: string;
  description: string;
  imageAlt: string;
  dotColor: string;
}> = ({ imageUrl, title, description, imageAlt, dotColor }) => {
  return (
    <article className="max-height-[120px] relative overflow-hidden xs:p-0 flex bg-background flex-wrap flex-1 shrink gap-5 xs:gap-8 items-center self-stretch my-auto rounded-md basis-0 bg-neutral-100 min-w-[240px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center self-stretch my-auto  h-full w-[120px]">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="object-contain flex-1 bg-blend-normal aspect-square "
        />
      </div>
      <div className="flex  gap-5 flex-col flex-1 shrink self-stretch my-auto text-sm basis-0 min-w-[240px] pl-0 pr-5 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center  h-2.5 w-2.5 min-w-2.5 bg-[#258DED]"></div>
          <Text
            variant={"card_title_small"}
            className="text-neutralDark line-clamp-1"
          >
            {title}
          </Text>
        </div>
        <Text variant={"body"} className="text-neutral line-clamp-2">
          {description}
        </Text>
      </div>
    </article>
  );
};
export const EventNewsCard: React.FC<{
  imageUrl: string;
  title: string;
  imageAlt: string;
  date: string;
  team: string;
}> = ({ imageUrl, title, imageAlt, date, team }) => {
  return (
    <article className="max-height-[120px] relative overflow-hidden xs:p-0 flex bg-background flex-wrap flex-1 shrink gap-5 xs:gap-8 items-center self-stretch my-auto rounded-md basis-0 bg-neutral-100 min-w-[240px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center self-stretch my-auto  h-full w-[120px]">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="object-contain flex-1 bg-blend-normal aspect-square "
        />
      </div>
      <div className="flex  gap-5 flex-col flex-1 shrink self-stretch my-auto text-sm basis-0 min-w-[240px] pl-0 pr-5 py-5">
        <div className="flex items-center gap-2.5">
          <Text
            variant={"card_title_small"}
            className="text-neutralDark line-clamp-1"
          >
            {title}
          </Text>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2.5">
          <div className="flex items-center justify-between gap-2.5">
            {/* calendar_today */}
            <Icon name="calendar_today" className="text-[24px] " />
            <Text variant={"small"} className="text-[#333333]">
              Friday 30 July, 2024
            </Text>
          </div>
          <Text variant={"tag"} className="text-primary-600">
            {team}
          </Text>
        </div>
      </div>
    </article>
  );
};
export const CommonNewsCard: React.FC<{
  imageUrl: string;
  title: string;
  imageAlt: string;
  date: string;
}> = ({ imageUrl, title, imageAlt, date }) => {
  return (
    <article className="max-height-[120px] relative overflow-hidden xs:p-0 flex bg-background flex-wrap flex-1 shrink gap-5 xs:gap-8 items-center self-stretch my-auto rounded-md basis-0 bg-neutral-100 min-w-[240px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center self-stretch my-auto  h-full w-[120px]">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="object-contain flex-1 bg-blend-normal aspect-square "
        />
      </div>
      <div className="flex  gap-5 flex-col flex-1 shrink self-stretch my-auto text-sm basis-0 min-w-[240px] pl-0 pr-5 py-5">
        <div className="flex items-center gap-2.5">
          <Text
            variant={"card_title_small"}
            className="text-neutralDark line-clamp-1"
          >
            {title}
          </Text>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2.5">
          <div className="flex items-center justify-between gap-2.5">
            {/* calendar_today */}
            {/* <Icon name="calendar_today" className="text-[24px] " /> */}
            <Text variant={"small"} className="text-[#333333]">
              {date}
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
};
