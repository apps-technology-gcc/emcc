import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import FormBtn from "./FormBtn";
import Radio from "@/src/components/ui/elements/form/Radio";

const Form2 = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"} className="text-neutral">
          Do you have evidence apart from words and opinions to support your
          allegations?
        </Text>
        <Radio label="Yes" id="yes" />
        <Radio label="No" id="no" />
      </div>
      <Text variant={"body"} className="text-neutral">
        You may file a complaint. Please proceed to the Ethical Complaint Form
        for EMCC Professionals: https://emcc.global/ethical_complaint form.
      </Text>
    </div>
  );
};

export default Form2;
