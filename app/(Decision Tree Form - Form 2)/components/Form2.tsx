import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import FormBtn from "./FormBtn";
import Radio from "@/src/components/ui/elements/form/Radio";

const Form2 = () => {
  return (
    <div className="flex flex-col gap-5">
      <Text variant={"card_title_large"} className="text-neutral">
        I understand that EMCC will not review anonymous complaints.
      </Text>
      <Radio label="Yes" id="yes" />
      <Radio label="No" id="no" />
    </div>
  );
};

export default Form2;
