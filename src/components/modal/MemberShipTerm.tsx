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
import BulletText from "../ui/elements/BulletText";
const MemberShipTerm = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8">
          <BulletText
            texts={[
              "I agree that, for as long as I remain a member of EMCC, I will support the aims and guiding principles and abide by such codes of ethics and professional practices as may be put in place",
              "I understand that it is my responsibility to keep my information up to date",
              "I agree that the details I provide, now and in the future, may be kept by EMCC and my national EMCC (if I am assigned to one) for the purposes of maintaining my membership record",
              "I agree that my details can be used to create a 'Find a Mentor/Coach record' that will be visible to the public on the EMCC website",
              "I agree that the details I provide, now and in the future, may be kept by EMCC and my national EMCC (if I am assigned to one) for the purposes of communicating with me about my professional practice e.g. events, conferences, books, research, accreditation etc",
              "I agree that the details I provide, now and in the future, may be kept by EMCC and my national EMCC (if I am assigned to one) for the purposes of informing me about other EMCC activities and other items of interest",
            ]}
          />
          <Button variant={"default"} btnType={"primary"} outline>
            Got it
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default MemberShipTerm;
