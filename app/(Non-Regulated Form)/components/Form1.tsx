import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const Form1 = () => {
  return (
    <div className="flex flex-col gap-12">
      <Text variant={"body"} className="text-neutral">
        If you are going to fill in our complaint form, it might help you to
        know what we will ask you. We will ask you the following about your
        complaint:
      </Text>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_small"} className="text-neutralDark">
          When it happened ?
        </Text>
        <Text variant={"body"} className="text-neutral">
          You should normally complain to us within a year of when you first
          became aware of the problem. If it was more than a year ago we may
          still be able to help you, if there were good reasons for the delay.
          We’ll ask you to explain on the complaint form
        </Text>
      </div>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_small"} className="text-neutralDark">
          How it affected you?
        </Text>
        <Text variant={"body"} className="text-neutral">
          What you would like done to put things right We can, for example,
          recommend that organisations explain and apologise, change their
          procedure and, if appropriate, make a payment. We will ask you what
          you would like us to achieve for you. If we do not think that we can
          achieve it, we will let you know.
        </Text>
      </div>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_small"} className="text-neutralDark">
          If you are complaining for someone else
        </Text>
        <Text variant={"body"} className="text-neutral">
          If relevant, we will need to check if they agree to this. We will also
          ask you to send us a copy of the organisation's final response to your
          complaint to them.{" "}
        </Text>
      </div>
    </div>
  );
};

export default Form1;
