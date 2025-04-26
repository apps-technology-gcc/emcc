import React from "react";
import Modal from "./ModalWrapper";
import { Text } from "../ui/elements/Text";
import SuccessGif from "@/public/success.gif";
import Image from "next/image";
import { Button } from "../ui/elements/Button";
import { Icon } from "../ui/elements/Icon";
import { Input } from "../ui/elements/form/Input";
import PhoneNumberInput from "../common/PhoneNumberInput";
import SearchSelect from "../ui/elements/form/SearchSelect";
import Checkbox from "../ui/elements/form/Checkbox";
const ConnectCourseProvider = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-5"></div>
          <Text variant={"section_title"}>
            Contact with the course provider
          </Text>
          <Text variant={"body"}>
            To continue the course, please reach out to the course provider who
            will provide you with further details.
          </Text>
          <div className="flex items-center gap-2.5">
            <Icon name="globe" className="text-[20px]" />
            <Text variant={"small"}>www.mywebdomain.com</Text>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            <Input name="full_name" placeholder="Your Full Name" />
            <Input name="designation" placeholder="Designation" />
            <Input name="email" placeholder="Email Address" type="email" />
            <PhoneNumberInput />
            {/* <Input name="country" placeholder="Country" /> */}
            <SearchSelect
              name="country"
              placeholder="Country"
              options={[
                {
                  label: "United States",
                  value: "United States",
                },
              ]}
            />
            <SearchSelect
              name="city"
              placeholder="City"
              options={[
                {
                  label: "Dhaka",
                  value: "Dhaka",
                },
              ]}
            />
            {/* <Input name="city" placeholder="City" /> */}
            <Input
              type="textarea"
              name="message"
              placeholder="Message"
              className="sm:col-span-2"
            />
            {/* Your Full Name
Designation
Email Address
STD
550 4356 455
Country
City
Message */}
          </div>
          <Text variant={"extra_small"}>
            This form collects your contact details so that we can respond to
            your message. EMCC is committed to preserving the privacy of all
            visitors to its website (the 'website'). Please read our full
            privacy policy to understand how we use and protect the information
            that you provide to us
          </Text>
          <Checkbox
            label="I acknowledge EMCC is not involved in this transaction"
            id="checkbox"
          />
          {/* <Image width={250} height={250} src={SuccessGif} alt="Success" /> */}
          <div className="flex items-center justify-end">
            <Button variant={"default"} btnType={"primary"}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConnectCourseProvider;
