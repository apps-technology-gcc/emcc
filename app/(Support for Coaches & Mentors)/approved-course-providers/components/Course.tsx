import { Icon } from "@/src/components/ui/elements/Icon";
import Link from "@/src/components/ui/elements/Link";
import Tag from "@/src/components/ui/elements/Tags";
import { Text } from "@/src/components/ui/elements/Text";
import Image from "next/image";
import React from "react";
import CourseImg from "@/public/course-img.png";
import CourseImgVertical from "@/public/course-img-vertical.jpeg";
interface CourseProps {
  imageSrc?: string;
  title: string;
  category: string;
  description: string;
  lessons: number;
  duration: string;
  location: string;
  level: string;
  startDate: string;
  link: string;
  vertical?: boolean;
}

const Course: React.FC<CourseProps> = ({
  imageSrc = CourseImg.src,
  title,
  category,
  description,
  lessons,
  duration,
  location,
  level,
  startDate,
  link,
  vertical,
}) => {
  return vertical ? (
    <div className="flex border-2 border-primary-600  flex-col rounded-md overflow-hidden">
      <div className="relative">
        <div className="absolute bottom-0 left-0 flex flex-col gap-2.5 bg-[#131314D9] rounded-tr-md px-2.5 py-1.5">
          <div className="flex items-center gap-2.5">
            <Text variant="body" className="text-white">
              Starting Date:
            </Text>
            <Text variant="body" className="text-white">
              {startDate}
            </Text>
          </div>
          <Text variant={"small"} className="text-warning-400">
            17 days left
          </Text>
        </div>
        <Image
          src={CourseImgVertical}
          alt={title}
          width={400}
          height={220}
          className="w-full h-[220px] object-cover"
        />
      </div>{" "}
      <div className="p-5 flex gap-5 flex-col">
        <div className="flex justify-between gap-2.5">
          <div className="flex flex-col gap-2.5">
            <Text variant="resource_header" className="text-[#191919]">
              {title}
            </Text>
            <Text variant="tag" className="text-[#212121]">
              {category}
            </Text>
          </div>
          <Icon
            name="star"
            className="text-[24px] material-star-outlined text-[#D87737]"
          />
        </div>
        <Text variant="body" className="text-[#212121] line-clamp-3">
          {description}
        </Text>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <Icon name="description" className="text-[20px] text-neutralDark" />
            <Text variant="body" className="text-neutralDark">
              {lessons} lessons
            </Text>
          </div>
          <div className="flex items-center gap-2.5">
            <Icon name="schedule" className="text-[20px] text-neutralDark" />
            <Text variant="body" className="text-neutralDark">
              {duration}
            </Text>
          </div>
          <div className="flex items-center gap-2.5">
            <Icon name="location_on" className="text-[20px] text-neutralDark" />
            <Text variant="body" className="text-neutralDark">
              {location}
            </Text>
          </div>
        </div>
        <Link
          href={link}
          iconPosition="right"
          icon={<Icon name="east" className="text-[20px] text-[#394DFF]" />}
        >
          Learn More
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex items-start gap-8">
      <div className="min-w-[200px] ">
        <Image
          className="rounded-md"
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <Text variant="resource_header" className="text-[#191919]">
            {title}
          </Text>
          <Text variant="tag" className="text-[#212121]">
            {category}
          </Text>
        </div>
        <Text variant="body" className="text-[#212121] line-clamp-3">
          {description}
        </Text>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <Icon name="description" className="text-[20px] text-neutralDark" />
            <Text variant="body" className="text-neutralDark">
              {lessons} lessons
            </Text>
          </div>
          <div className="flex items-center gap-2.5">
            <Icon name="schedule" className="text-[20px] text-neutralDark" />
            <Text variant="body" className="text-neutralDark">
              {duration}
            </Text>
          </div>
          <div className="flex items-center gap-2.5">
            <Icon name="location_on" className="text-[20px] text-neutralDark" />
            <Text variant="body" className="text-neutralDark">
              {location}
            </Text>
          </div>
          <Tag
            className="px-2.5 py-[5px] bg-green-300"
            variant="tag2"
            style="style3"
          >
            {level}
          </Tag>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <Text variant="body">Starting Date:</Text>
            <Text variant="body">{startDate}</Text>
          </div>
          <Link
            href={link}
            iconPosition="right"
            icon={<Icon name="east" className="text-[20px] text-[#394DFF]" />}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
