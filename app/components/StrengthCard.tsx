import * as React from "react";
import { StrengthCardProps } from "./types";
import { Text } from "@/src/components/ui/elements/Text";
import Link from "@/src/components/ui/elements/Link";
import { Icon } from "@/src/components/ui/elements/Icon";

export const StrengthCard: React.FC<StrengthCardProps> = ({
  imageSrc,
  title,
  iconSrc,
}) => {
  return (
    <div className="flex group overflow-hidden relative flex-col flex-1 shrink bg-white rounded-md basis-0">
      <div className="flex z-0 justify-center items-start w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`Strength illustration for ${title}`}
          className="object-contain flex-1 shrink w-full bg-blend-normal aspect-[0.9] basis-0 min-w-[240px]"
        />
      </div>
      <div className="bg-gradient-to-b from-transparent to-black flex absolute bottom-0 z-0 flex-col px-5 pb-8 w-full text-base font-medium text-white max-md:pt-24">
        <div className="flex gap-2.5 items-center w-full">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex items-center gap-2.5">
              <Text variant={"card_title_large"} className="text-white">
                {title}
              </Text>
              <Icon name="east" />
            </div>
            <Text className="group-hover:block hidden" variant={"body"}>
              We place multiple bets and explore potential sources of revenue
              from a variety of angles.
            </Text>
            <Link
              className="text-white group-hover:flex hidden"
              href="#"
              icon="east"
              iconPosition="right"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
