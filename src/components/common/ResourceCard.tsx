import Image from "next/image";
import React from "react";
import MemberCompany from "@/public/member_company.png";
import { Text } from "@/src/components/ui/elements/Text";
import Link from "@/src/components/ui/elements/Link";
import { Icon } from "@/src/components/ui/elements/Icon";

interface ResourceCardProps {
  fromColor: string;
  toColor: string;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
  downloadUrl: string;
  downloadText?: string;
  resourceImg?: string;
}

const ResourceCard = ({
  fromColor,
  toColor,
  imageSrc = MemberCompany.src,
  imageAlt = "company",
  title,
  description,
  downloadUrl,
  downloadText = "Download PDF",
  resourceImg,
}: ResourceCardProps) => {
  return (
    <div className="flex bg-background flex-col rounded-md overflow-hidden">
      <div
        className={`min-h-[250px] py-5 px-[35px] flex items-center justify-center relative bg-gradient-to-r from-[${fromColor}] to-[${toColor}]`}
      >
        {resourceImg && (
          <Image
            className=" w-full h-auto "
            src={resourceImg}
            width={210}
            height={300}
            alt={imageAlt}
          />
        )}

        <Image
          className="absolute w-[60px] h-[60px] -bottom-[60px] transform -translate-y-1/2 left-1/2 -translate-x-1/2"
          src={imageSrc}
          width={60}
          height={60}
          alt={imageAlt}
        />
      </div>
      <div className="pt-12 pb-8 px-5 items-center justify-center flex flex-col gap-5">
        <Text variant={"card_title_small"} className="text-neutralDark">
          {title}
        </Text>
        <Text variant={"resource_header"} className="text-neutral text-center">
          {description}
        </Text>

        <Link
          iconPosition="right"
          icon={<Icon name="file_download" className="text-[20px]" />}
          href={downloadUrl}
        >
          {downloadText}
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
