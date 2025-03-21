import React from "react";
import SearchSelect from "../ui/elements/form/SearchSelect";
import { Input, Label } from "../ui/elements/form/Input";

const PhoneNumberInput = () => {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <Label label="Phone Number" />
      <div className="grid grid-cols-[125px_auto] gap-2.5">
        <SearchSelect
          options={[
            {
              label: "Country",
              value: "country",
            },
          ]}
          name="country"
          // label="What is your preferred language of communication?"
        />
        <Input name="number" placeholder="Phone Number" />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
