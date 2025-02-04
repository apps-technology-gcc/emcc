"use client";
import Section from "@/src/components/layout/Section";
import React from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import { Text } from "@/src/components/ui/elements/Text";
import Toast from "@/src/components/ui/elements/Toast";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { Input } from "@/src/components/ui/elements/form/Input";
import { Button } from "@/src/components/ui/elements/Button";
import PageTitle from "../components/PageTitle";

const page = () => {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-full max-w-[1000px] px-5 md:px-0">
        <div className="flex items-center justify-center flex-col gap-20">
          {/* <Image src={Logo} alt="logo" width={130} height={60} /> */}
          <PageTitle
            title="EMCC Global Accreditation Application Form"
            image={{ image1: Logo.src }}
            message="The EMCC accreditation award recognises your validated prior learning and relevant experience"
          />

          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <SearchSelect
              label="Select Accreditation"
              // control={control}
              name="country"
              options={[
                { value: "us", label: "United States" },
                { value: "uk", label: "United Kingdom" },
              ]}
              // checkbox

              placeholder="Select a country"
              onChange={(value) => console.log(value)}
            />
            <SearchSelect
              label="Select Accreditation"
              // control={control}
              name="country"
              options={[
                { value: "us", label: "United States" },
                { value: "uk", label: "United Kingdom" },
              ]}
              // checkbox

              placeholder="Select a country"
              onChange={(value) => console.log(value)}
            />
            <SearchSelect
              label="Select Accreditation"
              // control={control}
              name="country"
              options={[
                { value: "us", label: "United States" },
                { value: "uk", label: "United Kingdom" },
              ]}
              // checkbox

              placeholder="Select a country"
              onChange={(value) => console.log(value)}
            />
            <Input
              label="Please confirm no. of years relevant experience"
              type="text"
              name="noy"
            />
          </div>
        </div>
        <div className="flex mt-[172px] items-center justify-end">
          <Button variant={"default"} btnType={"primary"}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
