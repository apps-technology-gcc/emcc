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
            title="Professional development"
            subtitle="Lorem ipsum dolor sit amet consectetur. Curabitur risus tristique sed orci ultricies."
            image={{ image1: Logo.src, image2: Logo.src }}
            // message="The EMCC accreditation award recognises your validated prior learning and relevant experience"
          />

          <div className="flex flex-col gap-12 w-full">
            <Text variant={"card_title_large"} className="text-neutral">
              Professional development
            </Text>
            <Input
              type="textarea"
              name="loe"
              label="Describe your approach including learning focus to your CPD over the last 12 months"
              warningText="Approximately 500 words"
            />
          </div>
          <div className="flex flex-col gap-12">
            <Text variant={"card_title_large"} className="text-neutral">
              Continuing Professional Development – record of hours and learning
              focus
            </Text>
            <div className="flex flex-col gap-5">
              <Logbook />
              <div className="grid grid-cols-2">
                <Input
                  name="hours"
                  label="Total hours (approximate)"
                  placeholder="Hours"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <Text variant={"card_title_large"} className="text-neutral">
              Mentor/coach supervision OR leadership using these skills for teh
              past year (at least 1 hour per quarter spread across the year/1
              hour to every 35 hours of coaching/mentoring/leadership using
              these skills) – brief record of hours, key learning and
              reflections
            </Text>
            <div className="flex flex-col gap-5">
              <Logbook />
              <div className="grid grid-cols-2">
                <Input
                  name="hours"
                  label="Total Supervision Hours (last 12 months)"
                  placeholder="Hours"
                />
              </div>
              <div className="grid grid-cols-2">
                <Input
                  name="hours"
                  label="Total Mentoring/Coaching or Leadership using these skills - hours (last 12 months)"
                  placeholder="Hours"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-12">
            <Text variant={"card_title_large"} className="text-neutral">
              Supervisor feedback (one or more if applicable)
            </Text>
            <div className="overflow-auto">
              <div className="flex  min-w-[650px] flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  <div className="flex w-full border-border  border flex-col rounded-tl-md rounded-tr-md overflow-hidden">
                    <div className="grid grid-cols-10 bg-primary-100">
                      <div className="flex items-center col-span-4 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Supervisor Name
                        </Text>
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Supervisor Signature
                        </Text>
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Supervisor Comment
                        </Text>
                      </div>
                      <div className="flex items-center col-span-2 border-border px-2.5 py-5">
                        <Text
                          variant={"card_title_small"}
                          className="text-[#222222]"
                        >
                          Date
                        </Text>
                      </div>
                    </div>
                    <div className="grid grid-cols-10 border border-b min-h-[50px]">
                      <div className="flex items-center col-span-4 border-border border-r px-2.5 py-5">
                        {/* <Text variant={"card_title_small"} className="text-[#222222]">
        Date
      </Text> */}
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Link variant={"primary"} href="#">
                          Upload
                        </Link>
                      </div>
                      <div className="flex items-center col-span-2 border-border border-r px-2.5 py-5">
                        <Link variant={"primary"} href="#">
                          Add Comment
                        </Link>
                      </div>
                      <div className="flex items-center col-span-2 border-border px-2.5 py-5">
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

          {/* <div className="flex flex-col gap-12 w-full">
            <Text variant={"card_title_large"} className="text-neutral">
              Client Contact hours
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                type="text"
                name="loe"
                label="Total hours over 1, 3 or 5 years"
                //   warningText="Approximately 500 words"
                placeholder="Hours"
              />
              <Input
                type="text"
                name="loe"
                label="Total Clients"
                placeholder="No. of clients"
              />
            </div>
          </div>
          <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-5">
              <Text variant={"card_title_large"} className="text-neutral">
                Client feedback (5 required)
              </Text>
              <Text variant={"body"} className="text-neutral">
                Unless EQA or equivalent education and training is recent ie
                completed in the last 2 years
              </Text>
            </div>
            <div className="flex flex-col gap-2.5">
              <Label label="Client" variant="default" />
              <div className="flex flex-col gap-5">
                <Radio label="Yes" name="yes" id="yes" />
                <Radio
                  label="Not required, already covered in recent validated education and training programme delivery or via other professional body validated accreditations/credentials"
                  name="no"
                  id="no"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-5">
              <Text variant={"card_title_large"} className="text-neutral">
                Reflections on Practice (a total of 5 required)
              </Text>
              <Text variant={"body"} className="text-neutral">
                5 current reflections are required to cover – ongoing CPD
                (section 3.1), supervision (section 3.2) and three for client
                practice. Current reflections, if required, are included in the
                completion of this form
              </Text>
            </div>
            <div className="flex flex-col gap-2.5">
              <Label label="Reflections on Practice" variant="default" />
              <div className="flex flex-col gap-5">
                <Radio label="Required" name="yes" id="yes" />
                <Radio label="Not Required" name="no" id="no" />
              </div>
            </div>
          </div> */}
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
