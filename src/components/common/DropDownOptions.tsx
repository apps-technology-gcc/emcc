import React, { useState } from "react";
import { Text } from "../ui/elements/Text";
import Checkbox from "../ui/elements/form/Checkbox";

type DropDownOptionsProps = {
  options: string[];
  type?: "checkbox" | "normal";
  onSelect: (option: string) => void;
  selectedOptions?: string[]; // Optional, for managing selected checkboxes
  onCheckboxChange?: (option: string) => void; // Optional for managing checkbox state
};

const DropDownOptions: React.FC<DropDownOptionsProps> = ({
  options,
  type = "normal",
  onSelect,
  selectedOptions = [],
  onCheckboxChange,
}) => {
  const handleSelect = (option: string) => {
    if (type === "checkbox") {
      // Handle checkbox selection
      onCheckboxChange?.(option); // Toggle checkbox selection
    } else {
      // Handle normal option selection
      onSelect(option);
    }
  };

  return (
    <div className="absolute min-w-[120px] w-fit  flex flex-col top-[26px] bg-white z-50 overflow-hidden right-0 py-[5px] shadow-md">
      {type === "checkbox"
        ? options.map((option) => (
            <div key={option} className="flex items-center gap-2.5 px-2.5 py-2">
              <Checkbox
                name="option"
                id={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleSelect(option)}
              />
              <Text
                variant="placeholder"
                className="text-[#191919] min-w-fit  cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option}
              </Text>
            </div>
          ))
        : options.map((option) => (
            <Text
              key={option}
              variant="placeholder"
              className="text-[#191919] flex min-w-fit px-2.5 py-2 cursor-pointer "
              onClick={() => handleSelect(option)}
            >
              {option}
            </Text>
          ))}
    </div>
  );
};

export default DropDownOptions;
