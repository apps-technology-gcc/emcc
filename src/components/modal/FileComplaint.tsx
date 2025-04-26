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
const FileComplaint = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-5"></div>
          <Text variant={"section_title"}>File a Complaint</Text>
          <Text variant={"body"}>
            We aim to respond to all enquiries by the next working day. All
            information you give will be kept confidential and not passed to
            anyone else
          </Text>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            <Input name="full_name" placeholder="Name" label="Your Name" />
            <Input
              name="email"
              placeholder="Email Address"
              type="email"
              label="Contact Email"
            />

            {/* <Input name="country" placeholder="Country" /> */}
            <SearchSelect
              name="country"
              label="Your Country"
              placeholder="Your Country"
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
              label="Is this complaint being made for yourself?"
              options={[
                {
                  label: "Dhaka",
                  value: "Dhaka",
                },
              ]}
            />
            <SearchSelect
              name="city"
              placeholder="City"
              label="Who is the complaint about?"
              options={[
                {
                  label: "Dhaka",
                  value: "Dhaka",
                },
              ]}
            />
            {/* <Input name="city" placeholder="City" /> */}
            <div className="col-span-2">
              <Input
                type="textarea"
                label="Please provide us with further details"
                name="message"
                placeholder="Message"
                className="sm:col-span-2"
              />
            </div>
            {/* Your Full Name
Designation
Email Address
STD
550 4356 455
Country
City
Message */}
          </div>
          <Checkbox label="I agree all statements in " id="checkbox" />
          <div className="flex items-center gap-2">
            <Link
              href={"/"}
              className={cn(
                textVariants({
                  variant: "placeholder",
                }),
                "text-primary-600"
              )}
            >
              Terms of service
            </Link>
          </div>
          {/* <Image width={250} height={250} src={SuccessGif} alt="Success" /> */}
          <Button variant={"default"} btnType={"primary"}>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default FileComplaint;
