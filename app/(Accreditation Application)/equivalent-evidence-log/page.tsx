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
import Table from "./components/Table";

const page = () => {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-full max-w-[1000px] px-5 md:px-0">
        <div className="flex items-center justify-center flex-col gap-20">
          <PageTitle
            title="EQA Equivalent Evidence Log"
            subtitle="Lorem ipsum dolor sit amet consectetur. Curabitur risus tristique sed orci ultricies."
            image={{ image1: Logo.src, image2: Logo.src }}
            // message="The EMCC accreditation award recognises your validated prior learning and relevant experience"
          />

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <Input
              type="text"
              label="First Name"
              placeholder="First Name"
              name="first_name"
            />
            <Input label="Last Name" placeholder="Last Name" name="last_name" />
            <Input
              type="email"
              label="Email"
              placeholder="Email"
              name="email"
            />
            <Input
              type="text"
              label="Phone Number"
              placeholder="Phone Number"
              name="phone_number"
            />
            <SearchSelect
              label="Accreditation Level"
              placeholder="Accreditation Level"
              name="accreditation_level"
              options={[
                { label: "Level 1", value: "Level 1" },
                { label: "Level 2", value: "Level 2" },
                { label: "Level 3", value: "Level 3" },
                { label: "Level 4", value: "Level 4" },
              ]}
            />
          </div>

          <div className="flex flex-col gap-8 w-full">
            <Text variant={"card_title_large"} className="text-neutral">
              Emcc global accreditation policy note: Reflective practice and
              dynamic inquiry
            </Text>
            <Text variant={"body"} className="text-neutral">
              The EMCC Global Frameworks for Accreditation including Capability
              Indicators to support EMCC Global Professional Designation/s are
              not intended to be used in a critical, evaluative tick–box manner;
              they are also not a checklist or a set of expectations or
              prescriptive actions that must be taken before moving to the next
              ‘level’.
            </Text>
            <Text variant={"body"} className="text-neutral">
              Instead, they are a set of reference points to naturally consider,
              think about, reflect on and practice in relation to the context in
              which the individual or team is working. The objective in using
              the EMCC Global Framework Guides, is to encourage dialogue,
              reflective practice, and learning between all users of the EMCC
              Global Frameworks, and the frameworks themselves, in order to
              enhance and enrich professional practice and to recognise and
              value prior learning and experience.{" "}
            </Text>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <Text variant={"card_title_large"} className="text-neutral">
              EQA equivalent evidence (if required to support EIA
              recommendation)
            </Text>
            <Text variant={"body"} className="text-neutral">
              For each of the 8 areas, please provide examples of practice and
              experience in coaching/ mentoring at the EIA level applied (refer
              to EMCC Global Capability Indicators{" "}
              <u> Coaching and mentoring competence framework</u>) to
              demonstrate the required capabilities and wider capacities and
              offer reflections of strength and areas for development on your
              coaching/ mentoring practice at the EIA level applied (refer to
              EMCC Global Capability Indicators{" "}
              <u> Coaching and mentoring competence framework</u>)
            </Text>
            <Text variant={"body"} className="text-neutral">
              You do not need to complete this form if you have completed an
              EMCC Global Quality Award or equivalent Education and Training
              programme, however it may provide a helpful ongoing guide to
              inform professional dialogue.
            </Text>
          </div>
          <Table
            title="Understanding self"
            tableHeader={[
              "Demonstrate self-awareness of values, beliefs, and behaviors, and use this awareness to effectively meet client and sponsor objectives.",
              "Reflections: Strengths and Development Focus Areas",
            ]}
            data={[]}
          />
          <Table
            title="Understanding self"
            tableHeader={[
              "Demonstrate self-awareness of values, beliefs, and behaviors, and use this awareness to effectively meet client and sponsor objectives.",
              "Reflections: Strengths and Development Focus Areas",
            ]}
            data={[]}
          />
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
