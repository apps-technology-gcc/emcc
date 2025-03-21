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
          Is this complaint a business issue?
        </Text>
        <Radio label="Yes" id="yes" />
        <Radio label="No" id="no" />
      </div>
      <TextContentSection
        texts={[
          "NOTE: The IRB reserves the right to suspend, at the IRB's reasonable discretion, any action on any properly filed ethical complaint until known pre-existing, pending and related civil or criminal actions have been resolved.* Complaints involved in a current legal matter will be accepted for the ECR process by the IRB leadership on a case-by-case basis. Complainants must be able to provide acceptable documents demonstrating proof of legal proceedings upon request. ",
          "This applies only to active civil litigation or criminal prosecution that is related to the subject matter and facts of the filed complaint.",
        ]}
      />
    </div>
  );
};

export default Form2;
