"use client";
import Section from "@/src/components/layout/Section";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React, { useState } from "react";
import surveyImg from "@/public/survey.svg";
import Image from "next/image";
import { Icon } from "@/src/components/ui/elements/Icon";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

const SurveySection = () => {
  const sliderData = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Tellus id id dictumst urna fames sit elementum vehicula. Amet vel mi arcu turpis pharetra nibh.",
      buttonText: "Take The Survey",
      image: surveyImg.src, // Replace with your image paths
    },
    {
      title: "Another slide with engaging content.",
      description:
        "Discover new possibilities with our services. Transform the way you work today.",
      buttonText: "Learn More",
      image: surveyImg.src,
    },
    {
      title: "Boost your business with insights.",
      description:
        "Gain valuable insights with our analytics tools and drive success efficiently.",
      buttonText: "Get Started",
      image: surveyImg.src,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <Section bgColor="" className="relative bg-[#1C1C1C]">
      <div className="grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-2 py-[81.5px]  max-md:flex-col">
        <div className="flex flex-col max-md:ml-0 max-md:w-full">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className=" flex w-auto min-h-[281px] gap-12 flex-col self-stretch  my-auto  max-md:mt-10 max-md:-mr-3 max-md:max-w-full"
          >
            <Text className="text-white" variant={"section_title"}>
              {sliderData[currentIndex].title}
            </Text>
            <Text className="text-white" variant={"body"}>
              {sliderData[currentIndex].description}
            </Text>
            <Button
              outline
              className="max-w-fit text-white border-white hover:text-white hover:border-white"
              variant={"default"}
              btnType={"secondary"}
              tabIndex={0}
            >
              {sliderData[currentIndex].buttonText}
            </Button>
          </motion.div>
        </div>
        <div className="relative flex md:hidden w-full h-full">
          <div className="bg-primary-600 flex items-center justify-center w-[82px] rounded-bl-md rounded-tl-md">
            <Text
              variant={"section_title"}
              className="uppercase text-white transform rotate-180"
            >
              Survey
            </Text>
          </div>
          <div className="flex-1 max-h-[400px] overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <Image
                className=" w-full  flex-auto"
                alt="SurveyImg"
                src={sliderData[currentIndex].image}
                width={580}
                height={400}
              />
            </motion.div>
          </div>

          <div className="absolute flex items-center gap-5  right-5 -bottom-5 transform translate-y-[40px]">
            <div
              onClick={() => prevSlide()}
              className="cursor-pointer h-10 w-10 rounded-full bg-[#2B2B2B] flex items-center justify-center"
            >
              <Icon
                name="arrow_forward_ios"
                className="text-[20px] text-white transform rotate-180  "
              />
            </div>
            <div
              onClick={() => nextSlide()}
              className="cursor-pointer h-10 w-10 rounded-full bg-[#2B2B2B] flex items-center justify-center"
            >
              <Icon
                className="text-[20px] text-white "
                name="arrow_forward_ios"
              />
            </div>
          </div>
          <div className="absolute flex items-center gap-5 left-5 -bottom-5 transform h-[40px] translate-y-[40px]">
            <div className="flex items-center gap-2.5">
              {sliderData.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white w-2.5 h-2.5 rounded-full cursor-pointer",
                    currentIndex === index ? "bg-white" : "bg-[#ACABAC]"
                  )}
                  onClick={() => setCurrentIndex(index)} // Handle click to change slide
                ></div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block h-[400px]  right-0 top-1/2 transform -translate-y-1/2 w-[46.5%]">
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
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <Image
                className=" w-full  flex-auto"
                alt="SurveyImg"
                src={sliderData[currentIndex].image}
                width={580}
                height={400}
              />
            </motion.div>
          </div>

          <div className="absolute flex items-center gap-5  right-5 -bottom-5 transform translate-y-[40px]">
            <div
              onClick={() => prevSlide()}
              className="cursor-pointer h-10 w-10 rounded-full bg-[#2B2B2B] flex items-center justify-center"
            >
              <Icon
                name="arrow_forward_ios"
                className="text-[20px] text-white transform rotate-180  "
              />
            </div>
            <div
              onClick={() => nextSlide()}
              className="cursor-pointer h-10 w-10 rounded-full bg-[#2B2B2B] flex items-center justify-center"
            >
              <Icon
                className="text-[20px] text-white "
                name="arrow_forward_ios"
              />
            </div>
          </div>
          <div className="absolute flex items-center gap-5  -left-[48.5] bottom-0 transform -translate-x-[50px]">
            <div className="flex items-center gap-2.5">
              {sliderData.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white w-2.5 h-2.5 rounded-full cursor-pointer",
                    currentIndex === index ? "bg-white" : "bg-[#ACABAC]"
                  )}
                  onClick={() => setCurrentIndex(index)} // Handle click to change slide
                ></div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SurveySection;
