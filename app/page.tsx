"use client";
import React, { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { WelcomeSection } from "./components/WelcomeSection";
import ServiceSection from "./components/ServiceSection";
import SurveySection from "./components/SurveySection";
import { StrengthsSection } from "./components/StrengthsSection";
import { StrengthCardProps } from "@/src/types";
import TextSection from "./components/TextSection";
import FormSection from "./components/FormSection";
import Section from "@/src/components/layout/Section";
import { WhatsNew } from "./components/WhatsNew";
import ModalWrapper from "@/src/components/modal/ModalWrapper";
import { Text } from "@/src/components/ui/elements/Text";
import { Button } from "@/src/components/ui/elements/Button";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { SearchInput } from "@/src/components/ui/elements/form/Search";

const page = () => {
  const heroData = {
    badge: {
      icon: "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/2fd91ae3f0fe28382611b3cf3f1c36e74470cb3310ef6ad104d2e36ec8139a46?apiKey=7d86919144c846178294e9d8a4321223&",
      text: "Benefits of team coaching",
      linkText: "Explore more",
      linkIcon:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/b9459871b93817d6bf6807286747f7dc087f5036d3ed826609f1aea645e845f5?apiKey=7d86919144c846178294e9d8a4321223&",
    },
    title: "Empowering The World\nThrough Coaching",
    description:
      "World-Leading, Independent Accreditation Body for Coaching, Mentoring & Professional Supervision",
    ctaText: "Let's Go",
    heroImage:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/ca5fd44863e3ab51cc608c5d731c71c623e0e1bdef2f3b2eaacb3c73f3c823fc?apiKey=7d86919144c846178294e9d8a4321223&",
  };

  const strengths: StrengthCardProps[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/abe06d7921ac5bf69d34fe5573afe27c615111bb93f006480b5705ef06086ddc?apiKey=7d86919144c846178294e9d8a4321223&",
      title: "Accreditation",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/88ec493be145f4e1a14c74ef1fa65ba03441d6e09a94e39b2ff577c12b77f2d7?apiKey=7d86919144c846178294e9d8a4321223&",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/fb9766fcec639c46c98059c48f921497472fb79d0675028567b490a09e771405?apiKey=7d86919144c846178294e9d8a4321223&",
      title: "Research",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/c3a89345b907e08139c00626d1d1a3c5cce9fae5babd7a258c0d51b9207f56e2?apiKey=7d86919144c846178294e9d8a4321223&",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/ab991b61f53039a25a75a7d6da61763195184a96c76068162f9304734c84a263?apiKey=7d86919144c846178294e9d8a4321223&",
      title: "Competency Frameworks",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/0365be7a685e9041787e2edc932f2f4abfad7f8e0ca1c152e013ebc289487eae?apiKey=7d86919144c846178294e9d8a4321223&",
      title: "Regulation",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/c3a89345b907e08139c00626d1d1a3c5cce9fae5babd7a258c0d51b9207f56e2?apiKey=7d86919144c846178294e9d8a4321223&",
    },
  ];
  const [modalName, setModalName] = useState("select_location");
  const [isOpenMainModal, setIsOpenMainModal] = useState(true);
  const closeModel = () => {
    setIsOpenMainModal(!isOpenMainModal);
  };
  const switchLocation = () => {
    setModalName("select_location");
  };
  return (
    <>
      <ModalWrapper
        isOpen={isOpenMainModal && modalName === "initial"}
        closeModel={closeModel}
      >
        <div className="flex w-auto max-w-[504px] flex-col gap-12">
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_large"} className="text-neutralDark">
              Visiting From UAE?
            </Text>
            <Text variant={"body"} className="text-neutral">
              You can switch to this country to see information tailored to your
              location.
            </Text>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 flex-wrap">
            <Button
              className="min-w-max"
              variant={"default"}
              btnType={"primary"}
              outline
            >
              CONTINUE TO UAE
            </Button>
            <Button
              className="min-w-max"
              variant={"default"}
              btnType={"primary"}
            >
              SWITCH LOCATIONS
            </Button>
          </div>
        </div>
      </ModalWrapper>
      <ModalWrapper
        isOpen={isOpenMainModal && modalName === "select_location"}
        closeModel={closeModel}
      >
        <div className="flex w-auto md:min-w-[662px] flex-col gap-8">
          <div className="flex items-center gap-12 justify-between">
            <Text variant={"card_title_large"} className="text-neutralDark">
              Select your Country / Region
            </Text>
            <div className="w-[320px]">
              <SearchInput
                id="Search"
                // control={control}
                name="country"
                options={[]}
                // checkbox
                // isMulti
                placeholder="Select a country"
                onChange={(value) => console.log(value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"}>EMCC Global</Text>
            Logo With Name
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"}>EMCC Global</Text>
            Logo With Name
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"}>EMCC Global</Text>
            Logo With Name
          </div>
        </div>
      </ModalWrapper>
      <HeroSection {...heroData} />
      <WelcomeSection />
      <ServiceSection />
      <SurveySection />
      <StrengthsSection strengths={strengths} />
      <div
        // bgColor=""
        className="!flex flex-wrap md:gap-10 self-stretch pr-14 bg-green-100 max-md:pr-0"
      >
        <TextSection />
        <FormSection />
      </div>
      <WhatsNew />
    </>
  );
};

export default page;
