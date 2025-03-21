import Section from "@/src/components/layout/Section";
import LogoImg from "@/public/logo.svg";
import Image from "next/image";
import React from "react";
import { Text } from "@/src/components/ui/elements/Text";
import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";

const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section bgColor="white">
      <div className="max-w-[800px] mx-auto">
        <div className="flex flex-col gap-20 items-center">
          <Image src={LogoImg} className="" alt="Logo" />{" "}
          <div className="flex flex-col gap-12 min-h-[520px] justify-between  w-full p-12 border border-border rounded-md">
            {children}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FormLayout;
