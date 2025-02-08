"use client";
import Section from "@/src/components/layout/Section";
import React from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import { Text } from "@/src/components/ui/elements/Text";
import Toast from "@/src/components/ui/elements/Toast";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { Input, Label } from "@/src/components/ui/elements/form/Input";
import { Button } from "@/src/components/ui/elements/Button";
import BulletText from "@/src/components/ui/elements/BulletText";
import PageTitle from "../components/PageTitle";
import Radio from "@/src/components/ui/elements/form/Radio";
import { Logbook } from "../components/Logbook";
import Link from "@/src/components/ui/elements/Link";
import { Icon } from "@/src/components/ui/elements/Icon";

const page = () => {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-full max-w-[1000px] px-5 md:px-0">
        <div className="flex items-center justify-center flex-col gap-20">
          <PageTitle
            title="Evidence of EMCC Global Quality Award "
            subtitle="Lorem ipsum dolor sit amet consectetur. Curabitur risus tristique sed orci ultricies."
            image={{ image1: Logo.src, image2: Logo.src }}
            // message="The EMCC accreditation award recognises your validated prior learning and relevant experience"
          />

          <div className="flex flex-col gap-8 w-full">
            <Text variant={"card_title_large"} className="text-neutral">
              EQA or equivalent education and training and / or learning from
              work based experience, and any current professional body mentor,
              coach, or supervisor designations
            </Text>
            <Text variant={"body"} className="text-neutral">
              If you are an applicant who has earned a mentoring / coaching
              education and training certificate via an EMCC Global Quality
              Award accredited programme (‘EQA Provider’) – at least for the
              designated level within the last two years – you are not required
              to submit evidence of capabilities and reflections via case
              studies. You are only required to give details for the EQA
              accredited training programme OR equivalent that you attended and
              attach a copy of your diploma / certificate to this form.{" "}
            </Text>
          </div>
          <div className="flex flex-col gap-12">
            <Text variant={"card_title_large"} className="text-neutral">
              EQA or equivalent certificate/diploma education and training
              and/or work based learning equivalent to formal education and
              training
            </Text>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2.5">
                <div className="overflow-auto w-auto ">
                  <div className="flex  w-full border-border  border flex-col rounded-tl-md rounded-tr-md overflow-hidden">
                    <div className="grid grid-cols-12 bg-primary-100">
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Date
                        </Text>
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          EQA or equivalent education and training provider
                        </Text>
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Level
                        </Text>
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Place of Delivery
                        </Text>
                      </div>

                      <div className="flex items-center col-span-4 border-border px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Title of the Education and Training Programme/s
                        </Text>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border border-b min-h-[50px]">
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Date
      </Text> */}
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Hours
      </Text> */}
                      </div>
                      <div className="flex items-center col-span-4 border-border border-r px-2.5 py-5">
                        {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Event/Activity/Learning
      </Text> */}
                      </div>
                      <div className="flex items-center col-span-4 border-border px-2.5 py-5">
                        {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Reflections on EMCC Competence & Assessment Frameworks
      </Text> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    href="#"
                    variant={"primary"}
                    icon={<Icon name="add" className="text-[20px]" />}
                    iconPosition="right"
                  >
                    Add More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <Text variant={"card_title_large"} className="text-neutral">
              Other recognised ‘work based’ prior learning and experience
              equivalent to EMCC Global Quality Award - EQA Education and
              Training
            </Text>
            <div className="flex flex-col gap-5">
              <div className="overflow-auto">
                <div className="flex flex-col gap-2.5">
                  <div className="flex w-full border-border  border flex-col rounded-tl-md rounded-tr-md overflow-hidden">
                    <div className="grid grid-cols-12 bg-primary-100">
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Date
                        </Text>
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Organisation Name
                        </Text>
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Role
                        </Text>
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Country Location
                        </Text>
                      </div>

                      <div className="flex items-center col-span-4 border-border px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Coach and/or Mentor experience in work based position
                        </Text>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border border-b min-h-[50px]">
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Date
      </Text> */}
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Hours
      </Text> */}
                      </div>
                      <div className="flex items-center col-span-4 border-border border-r px-2.5 py-5">
                        {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Event/Activity/Learning
      </Text> */}
                      </div>
                      <div className="flex items-center col-span-4 border-border px-2.5 py-5">
                        {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Reflections on EMCC Competence & Assessment Frameworks
      </Text> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href="#"
                      variant={"primary"}
                      icon={<Icon name="add" className="text-[20px]" />}
                      iconPosition="right"
                    >
                      Add More
                    </Link>
                  </div>
                </div>
              </div>
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
