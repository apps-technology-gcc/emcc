import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import FormBtn from "./FormBtn";
import Radio from "@/src/components/ui/elements/form/Radio";
import { Icon } from "@/src/components/ui/elements/Icon";
import { Input } from "@/src/components/ui/elements/form/Input";

const Form9 = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"} className="text-neutral">
          Before filing this complaint, would you consider a facilitated
          conversation between yourself and the individual for whom this
          complaint may be filed with an IRB Member?
        </Text>
        <Radio label="Yes" id="yes" />
        <Radio label="No" id="no" />
      </div>
      <Text variant={"body"} className="text-neutral">
        Please contact EMCC at ethics@coachingfederation.org
      </Text>
    </div>
  );
};

export default Form9;
