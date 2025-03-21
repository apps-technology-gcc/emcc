import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import FormBtn from "./FormBtn";
import Radio from "@/src/components/ui/elements/form/Radio";
import { Icon } from "@/src/components/ui/elements/Icon";
import { Input } from "@/src/components/ui/elements/form/Input";

const Form12 = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2.5">
          <Text variant={"card_title_small"} className="text-neutralDark">
            We encourage you to read the 28 Standards of the EMCC Code of Ethics
            along with the Ethical Interpretive Statements. Please describe the
            circumstances that you feel demonstrated unethical behavior, and to
            the best of your ability indicate which specific standards in the
            EMCC Code have been potentially violated. (The Code may be accessed
            here: https://coachingfederation.org/ethics/code-of-ethics.)
          </Text>
        </div>
        <Input type="textarea" placeholder="Explain here" name="explain" />
      </div>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"} className="text-neutral">
          If you cannot find a potential breach Of the EMCC Code Of Ethics,
          would you prefer to have a conversation with someone from the
          Independent Review Board before filing this complaint?
        </Text>
        <Radio label="Yes" id="yes" />
        <Radio label="No" id="no" />
      </div>
      <Text variant={"body"} className="text-neutral">
        Please contact EMCC at ethics@coachingfederation.org for assistance.
      </Text>
    </div>
  );
};

export default Form12;
