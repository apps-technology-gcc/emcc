import Section from "@/src/components/layout/Section";
import LogoImg from "@/public/logo.svg";
import Image from "next/image";
import React from "react";
import { Text } from "@/src/components/ui/elements/Text";
import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";

const FormLayout = ({
  children,
  title,
  subTitle,
}: {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
}) => {
  return (
    <Section bgColor="white">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-20 items-center">
          <Image src={LogoImg} className="" alt="Logo" />
          <div className="flex flex-col justify-center items-center gap-8">
            {title && (
              <Text variant={"section_title"} className="text-neutral">
                {title}
              </Text>
            )}
            {subTitle && (
              <Text variant={"body"} className="text-neutral">
                {subTitle}
              </Text>
            )}
          </div>
          <div className="w-full flex flex-col gap-12">{children}</div>
        </div>
      </div>
    </Section>
  );
};

export default FormLayout;
