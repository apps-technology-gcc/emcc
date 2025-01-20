import * as React from "react";
import { NewsCardProps } from "./types";
import { Text } from "../ui/elements/Text";

export const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  title,
  description,
  imageAlt,
}) => {
  return (
    <article className="flex bg-background flex-wrap flex-1 shrink gap-8 items-center self-stretch my-auto rounded-md basis-0 bg-neutral-100 min-w-[240px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center self-stretch my-auto rounded-md h-full w-[120px]">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="object-contain flex-1 bg-blend-normal aspect-square "
        />
      </div>
      <div className="flex gap-5 px-5 py-[29px] flex-col flex-1 shrink self-stretch my-auto text-sm basis-0 min-w-[240px]">
        <Text variant={"card_title_small"} className="text-neutralDark">
          {title}
        </Text>
        <Text variant={"body"} className="text-neutral">
          {description.length > 45
            ? description.slice(0, 45) + "..."
            : description}
        </Text>
      </div>
    </article>
  );
};
