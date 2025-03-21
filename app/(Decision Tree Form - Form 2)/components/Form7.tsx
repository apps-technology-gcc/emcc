import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import FormBtn from "./FormBtn";
import Radio from "@/src/components/ui/elements/form/Radio";
import { Icon } from "@/src/components/ui/elements/Icon";
import { Input } from "@/src/components/ui/elements/form/Input";

const Form7 = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"} className="text-neutral">
          Is this complaint a business issue?
        </Text>
        <Radio label="Yes" id="yes" />
        <Radio label="No" id="no" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2.5">
          <Text variant={"card_title_small"} className="text-neutralDark">
            Please explain
          </Text>
          <Icon name="info" className="text-[16px]" />
        </div>
        <Input type="textarea" placeholder="Explain here" name="explain" />
      </div>
    </div>
  );
};

export default Form7;
