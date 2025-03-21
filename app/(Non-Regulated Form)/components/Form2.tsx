import Divider from "@/src/components/ui/elements/Divider";
import { Input } from "@/src/components/ui/elements/form/Input";
import Radio from "@/src/components/ui/elements/form/Radio";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const Form2 = () => {
  return (
    <>
      <Text variant={"body"} className="text-neutral">
        First, we need to ask you some questions to make sure we're the right
        organisation to look at your complaint and that it's ready for us. It
        only takes a few minutes and saves you time by making sure that we are
        the right organisation to look into your complaint. It will also make
        sure your complaint is ready for us to look at.
      </Text>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            To start with, please tell us what is your complaint about?
          </Text>
          <Radio label="The NHS in England" name="yes" id="yes" />
          <Radio
            label="A UK government department or other public organisation"
            name="no"
            id="no"
          />
          <Radio label="Neither of these" name="no" id="no" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Do you work for the organisation and want to complain about an
            employment matter?
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Is your complaint about care received from the EMCC?
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Have you complained directly to the organisation?
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Have you complained directly to the organisation?
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Have you completed their complaints process?
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
        </div>
        <div className="flex max-w-[300px] flex-col gap-5">
          <Input label="Full Name" placeholder="Full Name" name="full_name" />
          <Input label="Date" placeholder="Date" name="date" />
        </div>
      </div>
    </>
  );
};

export default Form2;
