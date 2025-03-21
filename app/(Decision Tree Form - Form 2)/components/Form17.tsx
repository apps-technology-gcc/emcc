import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import FormBtn from "./FormBtn";
import Radio from "@/src/components/ui/elements/form/Radio";

const Form2 = () => {
  return (
    <div className="flex flex-col gap-12">
      <Text variant={"section_title"} className="text-neutral">
        Outcome of your summitted complaint
      </Text>
      <div className="flex flex-col  bg-warning-50 border border-warning-500 rounded-md p-5">
        <Text variant={"body"} className="text-neutral">
          Based on the information's you provided we recommend the following
        </Text>
        <Text variant={"body"} className="text-neutral">
          In case the EMCC Professional rejects or contradicts what you have
          said or written, the IRB will not able to make a decision because of
          nonexistence of evidence. Either try to find evidence or we recommend
          that you DO NOT FILE A COMPLAINT.
        </Text>
      </div>
    </div>
  );
};

export default Form2;
