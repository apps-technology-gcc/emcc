import React from "react";
import Modal from "./ModalWrapper";
import { Text, textVariants } from "../ui/elements/Text";
import SuccessGif from "@/public/success.gif";
import Image from "next/image";
import { Button } from "../ui/elements/Button";
import { Icon } from "../ui/elements/Icon";
import { Input } from "../ui/elements/form/Input";
import PhoneNumberInput from "../common/PhoneNumberInput";
import SearchSelect from "../ui/elements/form/SearchSelect";
import Checkbox from "../ui/elements/form/Checkbox";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
const Enquiry = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-5">
            <Text variant={"section_title"}>Send Me Your Enquiry</Text>
            <Text variant={"body"}>
              We aim to respond to all enquiries by the next working day. All
              information you give will be kept confidential and not passed to
              anyone else
            </Text>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            <Input
              type="text"
              name="name"
              label="Full Name"
              placeholder="Name"
            />
            <Input
              type="email"
              name="email"
              label="Email Address"
              placeholder="Email Address"
            />
            <PhoneNumberInput />
            <SearchSelect
              label="Which practice area are you most interested in?"
              name="interested"
              placeholder="Which practice area are you most interested in?"
              options={[
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" },
                { label: "Option 3", value: "option3" },
              ]}
            />
            <div className="col-span-2">
              <Input
                type="text"
                name="name"
                label="Message"
                placeholder="Message"
                // multiline
                rows={5}
              />
            </div>
          </div>
          <Text variant={"extra_small"}>
            This form collects your contact details so that we can respond to
            your message. EMCC is committed to preserving the privacy of all
            visitors to its website (the 'website'). Please read our full{" "}
            <u>privacy policy </u>to understand how we use and protect the
            information that you provide to us
          </Text>
          <Checkbox
            label="I acknowledge EMCC is not involved in this transaction"
            name="acknowledge"
            id="acknowledge"
          />
          <Button variant={"default"} btnType={"primary"}>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Enquiry;
