import ContentSection from "@/src/components/common/ContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const MemberBoard = () => {
  return (
    <div className="flex flex-col gap-8 bg-[#D9F2ED] rounded-md p-8">
      <Text variant={"section_title"}>Become an EMCC Founding Member</Text>
      <ContentSection
        texts={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          "Funding membership is only available for the first 50 people for a limited time.",
        ]}
      />
      <div className="flex">
        <Button variant={"default"} btnType={"secondary"}>
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default MemberBoard;
