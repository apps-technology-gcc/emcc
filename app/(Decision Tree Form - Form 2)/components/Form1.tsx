import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import FormBtn from "./FormBtn";

const Form1 = () => {
  return (
    <div className="flex flex-col gap-12">
      <Text variant={"section_title"} className="text-[#2b2b2b]">
        EMCC Ethical Conduct Review Process
      </Text>
      <TextContentSection
        texts={[
          "Before filing an ethical complaint against an EMCC Professional (individuals who are representing themselves as an EMCC member or an EMCC Credential-holder, in roles including but not limited to Coach, Coach Supervisor, Coach Trainer and Student of Coaching), you will first want to review the <u> Ethical Conduct Review (ECR) Information Packet and Sample form </u> and walk through the following Decision Tree.",
          "Please note that if there are multiple complainants, each of them should try to answer the questions individually, to make the complaint as clear as possible. ",
          "If you have any questions about the Decision Tree or filing an ethical complaint, please contact email@domain.com",
        ]}
      />
    </div>
  );
};

export default Form1;
