import ContentSection from "@/src/components/common/ContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

interface MemberBoardProps {
  title: string;
  texts: string[];
  buttonText: string;
  backgroundColor?: string;
  onButtonClick?: () => void;
  buttonType?: "primary" | "secondary";
}

const MemberBoard: React.FC<MemberBoardProps> = ({
  title,
  texts,
  buttonText,
  backgroundColor = "#D9F2ED",
  onButtonClick,
  buttonType = "secondary",
}) => {
  return (
    <div
      className="flex flex-col gap-8 rounded-md p-8"
      style={{ backgroundColor }}
    >
      <Text variant={"section_title"}>{title}</Text>
      <ContentSection texts={texts} />
      <div className="flex">
        <Button
          variant={"default"}
          btnType={buttonType}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default MemberBoard;
