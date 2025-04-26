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
import ComplainImg from "@/public/complaint.svg";
const CompleteComplain = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <Text variant={"section_title"}>
            Your Complaint May Be Subject to Regulated Personnel Protocols.
          </Text>
          <Text variant={"body"}>
            We need additional information to determine the best way to handle
            your complaint.
          </Text>

          <Image width={250} height={250} src={ComplainImg} alt="Success" />
          <Button variant={"default"} btnType={"primary"} outline>
            Complete the Decision Tree
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CompleteComplain;
