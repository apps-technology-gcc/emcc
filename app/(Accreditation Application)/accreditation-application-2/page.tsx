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
import BulletText from "@/src/components/ui/elements/BulletText";
import PageTitle from "../components/PageTitle";

const page = () => {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-full max-w-[1000px] px-5 md:px-0">
        <div className="flex items-center justify-center flex-col gap-20">
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
          <div className="flex flex-col gap-8">
            <Text variant={"section_title"} className="text-neutral">
              EIA Professional Designation Content
            </Text>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-green-500"></div>
                <Text variant={"card_title_large"} className="text-neutral">
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </div>
              <BulletText
                texts={[
                  "Lorem ipsum dolor sit amet consectetur.",
                  "Ipsum porttitor faucibus non porta quam. Suspendisse porta scelerisque magna urna urna sem egestas libero etiam.",
                  "In arcu condimentum cras non. Nunc mi maecenas quam et. Lorem elementum pretium sagittis augue ut. Sollicitudin et non tortor in vel fermentum quis et dictum.",
                  "Vitae id a consequat sit at vitae tempus tellus.",
                ]}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-green-500"></div>
                <Text variant={"card_title_large"} className="text-neutral">
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </div>
              <BulletText
                texts={[
                  "Lorem ipsum dolor sit amet consectetur.",
                  "Ipsum porttitor faucibus non porta quam. Suspendisse porta scelerisque magna urna urna sem egestas libero etiam.",
                  "In arcu condimentum cras non. Nunc mi maecenas quam et. Lorem elementum pretium sagittis augue ut. Sollicitudin et non tortor in vel fermentum quis et dictum.",
                  "Vitae id a consequat sit at vitae tempus tellus.",
                ]}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-green-500"></div>
                <Text variant={"card_title_large"} className="text-neutral">
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </div>
              <BulletText
                texts={[
                  "Lorem ipsum dolor sit amet consectetur.",
                  "Ipsum porttitor faucibus non porta quam. Suspendisse porta scelerisque magna urna urna sem egestas libero etiam.",
                  "In arcu condimentum cras non. Nunc mi maecenas quam et. Lorem elementum pretium sagittis augue ut. Sollicitudin et non tortor in vel fermentum quis et dictum.",
                  "Vitae id a consequat sit at vitae tempus tellus.",
                ]}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-end">
            <Button variant={"default"} btnType={"primary"}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
