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
const SignAndSubmit = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center ">
          <Text variant={"section_title"}>Sign & Submit</Text>
          <Text variant={"body"}>
            We aim to respond to all enquiries by the next working day. All
            information you give will be kept confidential and not passed to
            anyone else
          </Text>
          <div className="flex items-center gap-8">
            <Input
              name="first_name"
              type="text"
              placeholder="First Name"
              label="First Name"
            />
            <Input
              name="last_name"
              type="text"
              placeholder="Last Name"
              label="Last Name"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[14px] text-neutralDark font-light">
              Upload Signature
            </p>
            <div className="border mb-2.5 rounded items-center flex flex-col gap-5 border-dashed p-8 border-[#374ED2]">
              <Icon name="upload" className="text-primary text-[50px]" />
              {/* <Body nospace>Upload Your File</Body> */}
              <Text variant={"body"}>Upload Signature</Text>
              <input
                accept=".pdf"
                hidden
                type="file"
                //   ref={inputFileRef}
                //   onChange={onFileChange}
              />
              <Button variant={"default"} btnType={"primary"} outline>
                Choose file
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-5 justify-end">
            <Button variant={"default"} btnType={"primary"}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignAndSubmit;
