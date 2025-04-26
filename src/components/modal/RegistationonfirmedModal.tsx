import React from "react";
import Modal from "./ModalWrapper";
import { Text } from "../ui/elements/Text";
import SuccessGif from "@/public/success.gif";
import Image from "next/image";
import { Button } from "../ui/elements/Button";
import Divider from "../ui/elements/Divider";
import Checkbox from "../ui/elements/form/Checkbox";
import { Icon } from "../ui/elements/Icon";
const MoreFilters = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <Text variant={"section_title"}>Registration Confirmed!</Text>
            <Text variant={"body"}>
              Thank you for registering for the event. We're excited to have you
              join us!
            </Text>
          </div>
          <div className="flex flex-col gap-5 p-8 bg-primary-50">
            <Text variant={"resource_header"}>
              Designing a Better Conference For People Who Build Product
            </Text>{" "}
            <div className="flex items-center gap-2.5">
              <Icon name="location_on" className="text-[24px]" />
              <Text variant={"body"}>
                Virtual & In Person - San Francisco, CA
              </Text>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon name="schedule" className="text-[24px]" />
              <Text variant={"body"}>7:00 am to 2:00pm EDT</Text>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon name="calendar_today" className="text-[24px]" />
              <Text variant={"body"}>Friday 30 July, 2024</Text>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"body"}>
              A confirmation email with information on how to join the event has
              been sent to you
            </Text>
            <Text variant={"body"}>
              Please email at <u>event@emcc.global</u> if you wish to cancel the
              event.{" "}
            </Text>
            <Text variant={"body"}>
              Your event has been added to your <u>dashboard</u>
            </Text>
          </div>
          <div className="flex items-center justify-end">
            <Button variant={"default"} btnType={"primary"} outline>
              Add to Calendar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MoreFilters;
