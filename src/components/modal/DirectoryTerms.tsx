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
import ContentSection from "../common/ContentSection";
const FileComplaint = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <Text variant={"section_title"}>Directory Terms</Text>
          <Text variant={"body"}>
            To access the EMCC’s Directory, please review and agree to the terms
            listed below.
          </Text>
          <div className="flex flex-col gap-8 p-5 bg-white">
            <ContentSection
              texts={[
                // EMCC’s Directory is intended to be used as a tool for potential coaching clients to select a coach. This directory is not to be used to promote or market products and/or services to EMCC Members. In order to protect our affiliates’ privacy, EMCC will immediately refer these actions to our legal counsel; EMCC expressly reserves all rights to take further action against those who violate our user agreement.
                // EMCC reserves the right to cancel and/or remove any posting that does not fit within the original purpose for the system. The qualifications of coaches listed, and the information provided is not verified by EMCC in any way. Individuals utilizing this database are urged to take reasonable steps to verify the qualifications of any potential coach.
                // By utilizing EMCC Directory, you agree to hold EMCC harmless from any and all claims which may arise as a result of your using the information provided and agree to adhere to the EMCC Spam Policy and any other spam regulations that may apply. For more information regarding the use and features of EMCC, please view our EMCC FAQs.
                "EMCC’s Directory is intended to be used as a tool for potential coaching clients to select a coach. This directory is not to be used to promote or market products and/or services to EMCC Members. In order to protect our affiliates’ privacy, EMCC will immediately refer these actions to our legal counsel; EMCC expressly reserves all rights to take further action against those who violate our user agreement.",
                "EMCC reserves the right to cancel and/or remove any posting that does not fit within the original purpose for the system. The qualifications of coaches listed, and the information provided is not verified by EMCC in any way. Individuals utilizing this database are urged to take reasonable steps to verify the qualifications of any potential coach.",
                "By utilizing EMCC Directory, you agree to hold EMCC harmless from any and all claims which may arise as a result of your using the information provided and agree to adhere to the EMCC Spam Policy and any other spam regulations that may apply. For more information regarding the use and features of EMCC, please view our EMCC FAQs.",
              ]}
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className={cn(
                textVariants({
                  variant: "button",
                }),
                "text-primary-600"
              )}
            >
              I Do Not Agree
            </Link>
            <Button variant={"default"} btnType={"primary"}>
              I Agree
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FileComplaint;
