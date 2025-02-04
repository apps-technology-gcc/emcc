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
import Checkbox from "@/src/components/ui/elements/form/Checkbox";

const page = () => {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-full max-w-[1000px] px-5 md:px-0">
        <div className="flex items-center justify-center flex-col gap-20">
          <PageTitle
            title="Declaration"
            subtitle="Lorem ipsum dolor sit amet consectetur. Curabitur risus tristique sed orci ultricies."
            image={{ image1: Logo.src, image2: Logo.src }}
            // message="The EMCC accreditation award recognises your validated prior learning and relevant experience"
          />

          <div className="flex flex-col gap-8 w-full">
            <Text variant={"card_title_large"} className="text-neutral">
              Declaration
            </Text>
            <Text variant={"body"} className="text-neutral">
              EMCC Global Individual Accreditation: EIA Professional Designation
              to ‘frame’ ongoing practice as a coach and/or mentor or leader
              using coaching and/or mentoring skills as part of a wider
              leadership role
            </Text>
            <div className="p-5 flex flex-col gap-5 rounded-md border border-primary-600 bg-primary-50">
              <div className="flex items-start gap-2.5 ">
                <Checkbox name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  I have read the <u>Global Code of Ethics</u> and{" "}
                  <u>Diversity & Inclusion Declaration</u> and agree to abide by
                  them, and apply both to my ongoing practice
                </Text>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-5 rounded-md border border-primary-600 bg-primary-50">
              <div className="flex items-start gap-2.5 ">
                <Radio name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  I have at least one years experience as a Coach and/or Mentor
                  or Leader using coaching and/or mentoring skills (minimum of
                  50 hours and at least 5 clients over one year – Foundation
                  level)
                </Text>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-5 rounded-md border border-primary-600 bg-primary-50">
              <div className="flex items-start gap-2.5 ">
                <Radio name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  I have at least one years experience as a Coach and/or Mentor
                  or Leader using coaching and/or mentoring skills (minimum of
                  50 hours and at least 5 clients over one year – Foundation
                  level)
                </Text>
              </div>
              <div className="flex items-start gap-2.5 ">
                <Radio name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  I have at least five years experience as a Coach and/or Mentor
                  or Leader using coaching and/or mentoring skills (minimum of
                  250 hours and at least 20 clients over five years – Senior
                  Practitioner level)
                </Text>
              </div>
              <div className="flex items-start gap-2.5 ">
                <Radio name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  I have at least five years experience as a Coach and/or Mentor
                  or Leader using coaching and/or mentoring skills (minimum of
                  250 hours and at least 20 clients over five years – Senior
                  Practitioner level)
                </Text>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-5 rounded-md border border-primary-600 bg-primary-50">
              <div className="flex items-start gap-2.5 ">
                <Checkbox name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  I have supervision in place (minimum 1 hour per quarter for
                  Foundation and Practitioner Level) OR I have supervision in
                  place (minimum 1 hour per quarter/35 hours Coaching and/or
                  Mentoring for Senior Practitioner Level)
                </Text>
              </div>
              <BulletText
                texts={[
                  "<u>Supervision Framework</u> a helpful guide to reflective practice and supervision used in the context in which you are working",
                  "<u>Supervision Information Document</u> (a general guide to supervision)",
                ]}
              />
            </div>
            <div className="p-5 flex flex-col gap-5 rounded-md border border-primary-600 bg-primary-50">
              <div className="flex items-start gap-2.5 ">
                <Checkbox name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  I accept that it is my responsibility to maintain ongoing
                  evidence (logs) to celebrate my ongoing EMCC Global Accredited
                  practice illustrating how I meet the defined criteria for the
                  Professional Designation level I have been recommended for,
                  including:
                </Text>
              </div>
              <BulletText
                texts={[
                  "Professional Practice: <u>Client Log</u>",
                  "Ongoing CPD: <u>CPD Log</u> (Foundation & Practitioner level minimum 16 hours per year; SP level minimum 32 hours per year)",
                  "Reflective practice: <u>Reflective Practice Log </u> - Policy and Practice Guide Reflection and Reflexivity as a Dynamic Inquiry of Professional Practice",
                  "Supervision:	<u>Supervision Log</u> (minimum 1 hour per quarter/35 hours Coaching and/or Mentoring)",
                  "Feedback from Clients: 	Sample templates/frameworks available upon request.",
                ]}
              />
            </div>
            <div className="p-5 flex flex-col gap-5 rounded-md border border-primary-600 bg-primary-50">
              <div className="flex items-start gap-2.5 ">
                <Checkbox name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  I acknowledge that the EMCC Global Individual Accreditation -
                  EIA Professional Designation as an EMCC Global Accredited
                  Coach/Mentor and/or Leader, internationally benchmarked, is
                  valid for five years and that to renew the award after five
                  years, I will have to provide evidence that I meet the renewal
                  criteria.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <Text variant={"card_title_large"} className="text-neutral">
                Membership
              </Text>
              <div className="flex items-start gap-2.5 ">
                <Checkbox name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  I agree to maintain my EMCC Global and (if applicable) EMCC
                  Affiliated Country/Region professional body membership.
                  *Record your EMCC Global and/or Affiliate Country Membership
                  number(s) on page 1 of this form.
                </Text>
              </div>
              <Text variant={"body"} className="text-neutral">
                Note: if you are a member of an EMCC Affiliated Country/Region
                there is no additional cost for your EMCC Global Membership;
                Profession Designations and Renewals are a preferential rate for
                all members
              </Text>
            </div>
            <div className="flex flex-col gap-8">
              <Text variant={"card_title_large"} className="text-neutral">
                Data Protection
              </Text>
              <div className="flex items-start gap-2.5 ">
                <Checkbox name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  Agree that EMCC Global may hold my details, in line with GDPR
                  (May 2018), for the purposes of administering my accreditation
                </Text>
              </div>
              <div className="flex items-start gap-2.5 ">
                <Checkbox name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  Agree that EMCC Global may publish details of my Professional
                  Designation/s (EIA, ESIA, ITCA, IPMA) on the EMCC Global
                  website page that lists all awarded
                </Text>
              </div>
              <div className="flex items-start gap-2.5 ">
                <Checkbox name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  Agree that EMCC Global may contact me, in line with GDPR (May
                  2019), for the purpose of on-going Continuous Professional
                  Development related to my Professional Designation/s practice
                  and to provide support to maintain my Professional
                  Designation/s
                </Text>
              </div>
              <div className="flex items-start gap-2.5 ">
                <Checkbox name="" id="" />
                <Text variant={"placeholder"} className="text-neutralDark">
                  Agree that EMCC Global may contact me, in line with GDPR (May
                  2019), to keep me informed of EMCC Global news and other
                  related matters.
                </Text>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-end">
            <Button variant={"default"} btnType={"primary"}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
