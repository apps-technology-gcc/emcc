"use client";
import Section from "@/src/components/layout/Section";
import LogoImg from "@/public/logo.svg";
import Image from "next/image";
import React, { useState } from "react";
import { Text } from "@/src/components/ui/elements/Text";
import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import FormLayout from "../components/FormLayout";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Form4 from "../components/Form4";
import Form5 from "../components/Form5";
import Form6 from "../components/Form6";
import Form7 from "../components/Form7";
import Form8 from "../components/Form8";
import Form9 from "../components/Form9";
import Form10 from "../components/Form10";
import Form11 from "../components/Form11";
import Form12 from "../components/Form12";
import Form13 from "../components/Form13";
import Form14 from "../components/Form14";
import Form15 from "../components/Form15";
import Form16 from "../components/Form16";
import Form17 from "../components/Form17";
import FormBtn from "../components/FormBtn";

// Dynamic import of form components
const formComponents = [
  <Form1 />,
  <Form2 />,
  <Form3 />,
  <Form4 />,
  <Form5 />,
  <Form6 />,
  <Form7 />,
  <Form8 />,
  <Form9 />,
  <Form10 />,
  <Form11 />,
  <Form12 />,
  <Form13 />,
  <Form14 />,
  <Form15 />,
  <Form16 />,
  <Form17 />,
];

const Page = () => {
  const [currentFormIndex, setCurrentFormIndex] = useState(17);

  const handleNext = () => {
    if (currentFormIndex < formComponents.length) {
      setCurrentFormIndex(currentFormIndex + 1);
    }
  };
  const handleBack = () => {
    if (currentFormIndex > 0) {
      setCurrentFormIndex(currentFormIndex - 1);
    }
  };
  return (
    <FormLayout>
      {formComponents[currentFormIndex - 1] || <Form1 />}{" "}
      {currentFormIndex != 17 && (
        <FormBtn
          handleNext={handleNext}
          handleBack={handleBack}
          isBack={currentFormIndex > 0}
        />
      )}
    </FormLayout>
  );
};

export default Page;
