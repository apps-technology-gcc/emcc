import * as React from "react";
import { Badge } from "./Badge";
import { HeroSectionProps } from "@/src/types";
import { Text } from "@/src/components/ui/elements/Text";
import { Button } from "@/src/components/ui/elements/Button";
import arrowGif from "@/public/gif/arrow.gif";
import ideaGif from "@/public/gif/idea.gif";
import smileSvg from "@/public/smile.svg";

import Image from "next/image";
export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  description,
  ctaText,
  heroImage,
}) => {
  return (
    <div className="justify-end relative pl-14 w-full bg-white max-md:pl-5 max-md:max-w-full">
      <div className="flex  py-[81.5px]  max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="pt-20 flex w-auto gap-12 flex-col self-stretch  my-auto  max-md:mt-10 max-md:-mr-3 max-md:max-w-full">
            <Badge
              icon={badge.icon}
              text={badge.text}
              linkText={badge.linkText}
              linkIcon={badge.linkIcon}
            />
            <Text variant="h2_page_title_2" className="text-neutralDark">
              {title}
            </Text>
            <Text variant={"body"} className="text-neutral">
              {description}
            </Text>
            <Button
              className="max-w-fit"
              variant={"default"}
              btnType={"primary"}
              tabIndex={0}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute min-h-[600px] bg-primary-600 right-0 top-0 h-full w-[46.5%]">
        <div className="relative w-full h-full">
          <div className="absolute z-10 top-[30px] -left-[30px] bg-[#70FFD7] w-[240px] h-[240px]">
            <Image
              src={arrowGif}
              alt="hero-image"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute p-5 top-[158px] left-[170px] bg-[#ffffff] w-[233px] h-[256px]">
            <Image
              src={ideaGif}
              alt="hero-image"
              width={233}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Width
140px
Heigh
t
140px
To
p
424px
Lef
t
193px */}
          <div className="absolute px-3 py-[35px] p-5 top-[424px] left-[193px] bg-[#ffffff] w-[140px] h-[140px]">
            <Image
              src={smileSvg}
              alt="hero-image"
              width={116}
              height={70}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
