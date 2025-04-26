import React from "react";
import Modal from "./ModalWrapper";
import { Text } from "../ui/elements/Text";
import SuccessGif from "@/public/success.gif";
import Image from "next/image";
import { Button } from "../ui/elements/Button";
const SuccessModal = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <Text variant={"section_title"} className="text-center">
            Your Form Has Been Successfully Submitted .
          </Text>

          <Text variant={"body"} className="text-center">
            Thank you, we’ve received your complaint. A member of our
            organisation will review the details and provide you feedback within
            7 - 10 working days. In the meantime, you may refer to our full
            complaints guide.
          </Text>
          <Image width={250} height={250} src={SuccessGif} alt="Success" />
          <div className="flex items-center justify-center">
            <Button variant={"default"} btnType={"primary"} outline>
              Done
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SuccessModal;
