import { Text } from "@/src/components/ui/elements/Text";
import Image from "next/image";
import React from "react";
import PodcastSeriousImg from "@/public/podcast-serious.png";
const PodcastSerious = () => {
  return (
    <div className="flex flex-col gap-8 bg-background rounded-md overflow-hidden py-8 px-5">
      <Text variant={"card_title_large"}>Podcasts Series</Text>
      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-5">
          <div className="min-w-[80px]">
            <Image
              src={PodcastSeriousImg}
              width={80}
              height={80}
              alt="Podcast Serious"
            />
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"}>AI & Digital</Text>
            <Text variant={"body"} className="text-neutral line-clamp-2">
              Lorem ipsum dolor sit amet consectetur. Id diam sit imperdiet
              facilisi. Amet pretium mauris augue purus. Nisl est nunc odio
              volutpat vel quam diam quam tempor. Porttitor id nec nunc lectus
              nisi turpis mi aliquet amet.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastSerious;
