import * as React from "react";
import { StrengthCard } from "./StrengthCard";
// import { StrengthsSectionProps } from "./types";
import { Text } from "@/src/components/ui/elements/Text";
import Section from "@/src/components/layout/Section";
import { StrengthsSectionProps } from "@/src/types";

export const StrengthsSection: React.FC<StrengthsSectionProps> = ({
  strengths,
}) => {
  return (
    <Section
      bgColor="white"
      className="flex flex-col justify-center self-stretch py-20 bg-white"
      aria-labelledby="strengths-title"
    >
      <div className="flex flex-col w-full max-md:max-w-full">
        <header className="flex flex-col max-w-full text-2xl font-semibold uppercase text-zinc-900 w-[212px]">
          <Text variant={"section_title"} className="text-neutralDark">
            Our Strengths
          </Text>
          <div
            className="flex mt-2.5 w-full bg-green-300 min-h-[2px]"
            role="presentation"
          />
        </header>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {strengths.map((strength, index) => (
            <StrengthCard
              key={index}
              imageSrc={strength.imageSrc}
              title={strength.title}
              iconSrc={strength.iconSrc}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
