import BulletText from "@/src/components/ui/elements/BulletText";
import Divider from "@/src/components/ui/elements/Divider";
import { Input } from "@/src/components/ui/elements/form/Input";
import Radio from "@/src/components/ui/elements/form/Radio";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const Form4 = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutralDark">
            It looks like your complaint is ready for us to look at
          </Text>
          <Text variant={"body"} className="text-neutral">
            You can now start filling in our online complaints form. Please make
            sure you upload your final response and supporting documentation.
          </Text>
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutralDark">
            We will need to know about:
          </Text>
          <BulletText
            texts={[
              "Your complaint",
              "When it happened",
              "How it affected you",
              "What you would like done to put things right",
              "If you are planning or have taken legal action",
              "If you are complaining for someone else",
            ]}
          />
        </div>
      </div>
      <Divider />

      <div className="flex flex-col gap-12">
        <div className="flex max-w-[484px] flex-col gap-5">
          <Input label="When it happened?" placeholder="Date" name="date" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            How has this affected you or anyone else?
          </Text>
          <Input type="textarea" name="Describe" placeholder="Describe" />
        </div>

        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Was there anyone else involved?
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
        </div>

        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            What would be the outcome you would like to see? (None, i am just
            making a complaint)
          </Text>
          <Input type="textarea" name="Describe" placeholder="Describe" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Do you have any supporting documents you would like to attach as
            part of the compliant?
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_large"} className="text-neutral">
            Signature
          </Text>
          <Text variant={"body"} className="text-neutral">
            You agree that everything you have included is accurate and true to
            the best of your knowledge.
          </Text>
        </div>

        <div className="flex max-w-[300px] flex-col gap-5">
          <Input label="Full Name" placeholder="Full Name" name="full_name" />
          <Input label="Date" placeholder="Date" name="date" />
        </div>
      </div>
    </>
  );
};

export default Form4;
