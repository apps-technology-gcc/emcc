import PhoneNumberInput from "@/src/components/common/PhoneNumberInput";
import BulletText from "@/src/components/ui/elements/BulletText";
import Divider from "@/src/components/ui/elements/Divider";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import { Input } from "@/src/components/ui/elements/form/Input";
import Radio from "@/src/components/ui/elements/form/Radio";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const Form3 = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_small"} className="text-neutralDark">
          Changes to the way we handle NHS complaints
        </Text>
        <Text variant={"body"} className="text-neutral">
          We've made changes to the way we handle NHS complaints. This is to
          reduce wait times for people who bring their complaints to us and make
          sure we quickly identify significant service failings. We will only
          look further into the more serious complaints about the NHS that
          people bring to us.
        </Text>
      </div>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_small"} className="text-neutralDark">
          Please do not submit a complaint to us if it is about:
        </Text>
        <BulletText
          texts={[
            "• Delays with complaint responses",
            "• Delays with complaint responses",
          ]}
        />
      </div>
    </div>
  );
};

export default Form3;
