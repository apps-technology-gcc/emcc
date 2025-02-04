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
            title="Evidence of EMCC Global Quality Award"
            subtitle="Lorem ipsum dolor sit amet consectetur. Curabitur risus tristique sed orci ultricies."
            image={{ image1: Logo.src, image2: Logo.src }}
            // message="The EMCC accreditation award recognises your validated prior learning and relevant experience"
          />

          <div className="flex flex-col gap-8 w-full">
            <Text variant={"card_title_large"} className="text-neutral">
              Please complete the following to support your application if you
              have not completed an EMCC Global Quality Award - EQA or
              equivalent education and training, or do use as a guide to inform
              ongoing dialogue and reflections:
            </Text>
            <BulletText
              texts={[
                "<u>EQA Equivalence Log </u> Please use this form to map and celebrate your EQA equivalent education and training and/or learning from work based experience",
                "Case Studies may also be provided, if helpful to illustrate, for example, breadth and excellence of your related and relevant work based learning and experience",
              ]}
            />
          </div>
          <div className="flex flex-col gap-12">
            <Text variant={"card_title_large"} className="text-neutral">
              Other professional body designation/s (if applicable)
            </Text>
            <div className="flex flex-col gap-5">
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
                    <div className="flex items-center col-span-7 border-border border-r px-2.5 py-5">
                      <Text
                        variant={"card_title_small"}
                        className="text-[#222222]"
                      >
                        EMCC EIA or equivalent e.g. AC, ICF Credential, WABC
                        Designation, BCC. EMCC ESIA OR EQUIVALENT e.g. AOCS,
                        APECS (SUPERVISOR ACCREDITATION)
                      </Text>
                    </div>

                    <div className="flex items-center col-span-3 border-border px-2.5 py-5">
                      <Text
                        variant={"card_title_small"}
                        className="text-[#222222]"
                      >
                        LEVEL (if appplicable)
                      </Text>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 border border-b min-h-[50px]">
                    <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                      {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Date
      </Text> */}
                    </div>
                    <div className="flex items-center col-span-7 border-border border-r px-2.5 py-5">
                      {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Hours
      </Text> */}
                    </div>

                    <div className="flex items-center col-span-3 border-border px-2.5 py-5">
                      {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Reflections on EMCC Competence & Assessment Frameworks
      </Text> */}
                    </div>
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
