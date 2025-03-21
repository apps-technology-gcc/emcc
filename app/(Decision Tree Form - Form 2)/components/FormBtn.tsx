import { Button } from "@/src/components/ui/elements/Button";
import Link from "@/src/components/ui/elements/Link";
import React from "react";

const FormBtn = ({
  isBack,
  handleNext,
  handleBack,
}: {
  isBack?: boolean;
  handleNext: () => void;
  handleBack: () => void;
}) => {
  return (
    <div className="flex justify-between">
      {isBack && (
        <Link
          onClick={(e) => {
            e.preventDefault();
            handleBack();
          }}
          variant={"primary"}
          href="#"
        >
          Back
        </Link>
      )}

      <Button
        onClick={() => handleNext()}
        className="ml-auto"
        variant={"default"}
        btnType={"primary"}
      >
        Continue
      </Button>
    </div>
  );
};

export default FormBtn;
