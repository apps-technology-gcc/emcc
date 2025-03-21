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

// Dynamic import of form components
const formComponents = [<Form1 />, <Form2 />, <Form3 />];

const Page = () => {
  const [currentFormIndex, setCurrentFormIndex] = useState(3);
  const formData = [
    {
      title: "Ethical Complaint Form for EMCC Professionals",
    },
    {
      title: "Ethical Complaint Form for EMCC Professionals",
    },
    {
      title: "Complaint Form",
      subTitle:
        "To most effectively serve all involved, and to assist in a just resolution, please provide the information requested on the form below.",
    },
  ];
  return (
    <FormLayout {...formData[currentFormIndex - 1]}>
      {formComponents[currentFormIndex - 1] || <Form1 />}{" "}
      <div className="flex justify-end">
        <Button
          // onClick={() => handleNext()}
          className="ml-auto"
          variant={"default"}
          btnType={"primary"}
        >
          Continue
        </Button>
      </div>
    </FormLayout>
  );
};

export default Page;
