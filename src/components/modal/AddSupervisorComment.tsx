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
const AddSupervisorComment = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center ">
          <Text variant={"section_title"}>Add Supervisor's Comment</Text>
          <Text variant={"body"}>
            Please provide any additional comments or feedback from the
            supervisor.
          </Text>
          <div className="flex flex-col gap-5">
            <p className="text-[14px] text-neutralDark font-light">
              Add Comment
            </p>
            <Input type="textarea" placeholder="Add Comment" name="comment" />
          </div>
          <div className="flex items-center gap-5 justify-end">
            <Button variant={"default"} btnType={"primary"}>
              Done
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddSupervisorComment;
