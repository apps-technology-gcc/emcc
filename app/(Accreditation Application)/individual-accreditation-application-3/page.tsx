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
            title="Personal Statement"
            subtitle="A guide to planning your statement"
            image={{ image1: Logo.src, image2: Logo.src }}
            message="The EMCC accreditation award recognises your validated prior learning and relevant experience"
          />

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <Text variant={"card_title_large"} className="text-neutral">
                Getting Started
              </Text>
              <Text variant={"card_title_large"} className="text-neutral">
                including approach to Global Code of Ethics &, Inclusion and
                Diversity Declaration
              </Text>
              <Text variant={"body"} className="text-neutral">
                This helps us get to know you and understand your thinking and
                approach to mentoring/coaching (and most importantly, for you to
                be able to reflect very positively on the value of your
                mentoring and/or coaching practice, approach and experience to
                your role). This statement sets the context for you as a person
                and your approach to mentoring and/or coaching or leadership
                using these skills. You are asked to give a personal statement
                that covers the following questions.
              </Text>
              <div className="flex flex-col">
                <Text variant={"body"} className="text-neutral">
                  You are asked to give a personal statement that covers the
                  following questions:
                </Text>
                <BulletText
                  texts={[
                    "What motivates you to be a mentor/coach OR leader/aspiring leader using mentoring and/or coaching skills in a wider leadership context?",
                    "What is your vision of mentoring/coaching, your philosophy?",
                    "What theoretical underpinning principles shape your practice/model? (You may like to include your own model/the model/s you use)",
                    "How has your practice evolved and developed?",
                    "How do you understand and apply the Global Code of Ethics?",
                  ]}
                />
              </div>
            </div>
            <Input
              warningText="Approximately 300-500 words"
              label="Your Statement (about 300 - 500 words)"
              type="textarea"
              mame="statement"
            />
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
