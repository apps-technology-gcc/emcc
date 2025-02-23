import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import Divider from "@/src/components/ui/elements/Divider";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import { Input, Label } from "@/src/components/ui/elements/form/Input";
import Radio from "@/src/components/ui/elements/form/Radio";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const SuggestionOrComment = () => {
  return (
    <div className="flex flex-col gap-12">
      <Text variant={"section_title"}>Make a Suggestion or Comment</Text>
      <Text variant={"body"}>
        We’d love to here any suggestion you may have in order to help us
        improve our services. <br /> We also love to receive your feedback. Let
        us know when we done something right.
      </Text>

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          <SearchSelect
            options={[]}
            label="What would you like to do today?"
            name="country"
          />
          <SearchSelect
            options={[]}
            label="Please confirm the following"
            name="country"
          />

          <SearchSelect
            options={[]}
            label="Where are you contacting us from?"
            name="country"
          />
          <SearchSelect
            options={[]}
            label="What is your suggestion about?"
            name="country"
          />

          <div className="flex col-span-2 flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <Label label="Please provide further details" />
              <Icon name="info" className="text-[16px]" />
            </div>
            <div className="">
              <Input className="" type="textarea" name="msg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"label"} className="text-neural">
            Would you mind providing us your contact details?
          </Text>
          <div className="p-2.5 gap-2.5 flex rounded-md overflow-hidden bg-warning-50">
            <Icon name="info" className="text-[16px]" />
            <Text variant={"label"}>
              Don’t worry you can provide your feedback anonymously, as we don't
              require the details below. Just press submit once you’re done.
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label label="Can we contact you?" />
          <div className="flex items-center gap-8">
            <Radio label="Yes" id="yes" />
            <Radio label="No" id="no" />
          </div>
        </div>
        <Checkbox label="I agree all statements in" id="agree" />
        <Button className="max-w-fit" variant={"default"} btnType={"primary"}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SuggestionOrComment;
