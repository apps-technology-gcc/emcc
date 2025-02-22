import React from "react";
import { Text } from "../ui/elements/Text";
import { Button } from "../ui/elements/Button";

interface ApplyBoardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const ApplyBoard: React.FC<ApplyBoardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex rounded-md bg-background flex-col px-5 py-8 gap-8">
      <Text variant={"card_title_large"}>{title}</Text>
      <Text variant={"body"}>{description}</Text>
      <Button
        variant={"default"}
        btnType={"primary"}
        outline
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ApplyBoard;
