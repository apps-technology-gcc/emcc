import React from "react";
import Tag from "@/src/components/ui/elements/Tags";
import { Text } from "@/src/components/ui/elements/Text";
import { Icon } from "@/src/components/ui/elements/Icon";
import EventBg from "@/public/event_card.png";

interface EventCardProps {
  title: string;
  topic: string;
  location: string;
  date: string;
  isFree: boolean;
  membersOnly?: boolean;
  backgroundImage?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  topic,
  location,
  date,
  isFree,
  membersOnly = false,
  backgroundImage,
}) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(242, 246, 252, 0.7), rgba(242, 246, 252, 0.7)), url(${
          backgroundImage || EventBg.src
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col gap-5 p-5 rounded-md overflow-hidden"
    >
      {/* Tags */}
      <div className="flex items-center gap-2.5">
        <Tag
          variant={"tag2"}
          style={"style1"}
          className="!bg-green-200 max-w-fit"
        >
          Event
        </Tag>
        {membersOnly && (
          <Tag
            variant={"tag2"}
            style={"style1"}
            className="!bg-pink-200 max-w-fit"
          >
            Members Only
          </Tag>
        )}
      </div>

      {/* Title */}
      <Text variant={"resource_header"} className="line-clamp-2">
        {title}
      </Text>

      {/* Topic */}
      <Text variant={"tag"} className="text-primary-600">
        {topic}
      </Text>

      {/* Location & Date */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2.5">
          <Icon name="location_on" className="text-[24px]" />
          <Text variant={"body"} className="text-[#333333]">
            {location}
          </Text>
        </div>

        <div className="flex items-end justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <Icon name="calendar_today" className="text-[24px]" />
            <Text variant={"body"} className="text-[#333333]">
              {date}
            </Text>
          </div>

          {/* Free or Paid Tag */}
          <Tag
            variant={"tag2"}
            style={"style1"}
            className="bg-white rounded-[2px] border-border border"
          >
            {isFree ? "Free" : "Paid"}
          </Tag>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
