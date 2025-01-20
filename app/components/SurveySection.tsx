import Section from "@/src/components/layout/Section";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import surveyImg from "@/public/survey.svg";
import Image from "next/image";
import { Icon } from "@/src/components/ui/elements/Icon";
const SurveySection = () => {
  return (
    <Section bgColor="" className="relative bg-[#1C1C1C]">
      <div className="flex  py-[81.5px]  max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className=" flex w-auto gap-12 flex-col self-stretch  my-auto  max-md:mt-10 max-md:-mr-3 max-md:max-w-full">
            <Text className="text-white" variant={"section_title"}>
              Lorem ipsum dolor sit amet consectetur. Nibh non vitae leo
              tristique.
            </Text>

            <Text className="text-white" variant={"body"}>
              Lorem ipsum dolor sit amet consectetur. Tellus id id dictumst urna
              fames sit elementum vehicula. Amet vel mi arcu turpis pharetra
              nibh. Arcu pellentesque amet purus ultrices tellus sit volutpat
              proin sodales. Nec velit rutrum egestas enim vitae porttitor
              lectus. Ut odio posuere sagittis scelerisque.
            </Text>

            <Button
              outline
              className="max-w-fit text-white border-white hover:text-white hover:border-white"
              variant={"default"}
              btnType={"secondary"}
              tabIndex={0}
            >
              Take The Survey
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute h-[400px]  right-0 top-1/2 transform -translate-y-1/2 w-[46.5%]">
        <div className="relative w-full flex h-full">
          <div className="bg-primary-600 flex items-center justify-center w-[82px] rounded-bl-md rounded-tl-md">
            <Text
              variant={"section_title"}
              className="uppercase text-white transform rotate-90"
            >
              Survey
            </Text>
          </div>
          <div className="flex-1 max-h-[400px] overflow-hidden">
            <Image
              className=" w-full  flex-auto"
              alt="SurveyImg"
              src={surveyImg}
              width={580}
              height={400}
            />
          </div>
          <div className="absolute flex items-center gap-5  right-5 -bottom-5 transform translate-y-[40px]">
            <div className="cursor-pointer h-10 w-10 rounded-full bg-[#2B2B2B] flex items-center justify-center">
              <Icon
                name="arrow_forward_ios"
                className="text-[20px] text-white transform rotate-180  "
              />
            </div>
            <div className="cursor-pointer h-10 w-10 rounded-full bg-[#2B2B2B] flex items-center justify-center">
              <Icon
                className="text-[20px] text-white "
                name="arrow_forward_ios"
              />
            </div>
          </div>
          <div className="absolute flex items-center gap-5  -left-[48.5] bottom-0 transform -translate-x-[50px]">
            <div className="flex items-center gap-2.5">
              <div className="bg-white w-2.5 h-2.5 rounded-full cursor-pointer"></div>
              <div className="bg-[#ACABAC] w-2.5 h-2.5 rounded-full cursor-pointer"></div>
              <div className="bg-[#ACABAC] w-2.5 h-2.5 rounded-full cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SurveySection;
