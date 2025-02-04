import { Text } from "@/src/components/ui/elements/Text";
import Toast from "@/src/components/ui/elements/Toast";
import Image from "next/image";
import React from "react";

const PageTitle = ({
  title,
  subtitle,
  image,
  message,
}: {
  title: string;
  subtitle?: string;
  image: {
    image1: string;
    image2?: string;
  };
  message?: string;
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-20">
      <div className="flex items-center gap-20">
        <Image src={image.image1} alt="logo" width={130} height={60} />
        {image.image2 && (
          <Image src={image.image2} alt="logo" width={130} height={60} />
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <Text variant={"section_title"} className="text-neutral">
          {title}
        </Text>
        {subtitle && (
          <Text variant={"body"} className="text-neutral">
            {subtitle}
          </Text>
        )}
      </div>
      {message && (
        <div className="w-full">
          <Toast message="The EMCC accreditation award recognises your validated prior learning and relevant experience" />
        </div>
      )}
    </div>
  );
};

export default PageTitle;
