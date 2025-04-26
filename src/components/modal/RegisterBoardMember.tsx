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
import FileUpload from "../ui/elements/form/FileUpload";
const RegisterBoardMember = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-5">
            <Text variant={"section_title"}>
              Register your interest in becoming a board member
            </Text>
            <Text variant={"body"}>
              Please submit your information below to register your interest for
              the board position. A member of our team will be get back to you
              soon.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            <Input name="full_name" placeholder="Name" label="Your Name" />
            <Input
              name="email"
              placeholder="Email Address"
              type="email"
              label="Contact Email"
            />

            <PhoneNumberInput />
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
              label="City"
              placeholder="City"
              options={[
                {
                  label: "United States",
                  value: "United States",
                },
              ]}
            />
            <Input
              name="email"
              placeholder="LinkedIn"
              type="email"
              label="LinkedIn Profile URL"
            />
            <FileUpload />

            {/* <Input name="city" placeholder="City" /> */}
            <div className="col-span-2">
              <Input
                type="textarea"
                label="Add your message"
                name="message"
                placeholder="Please provide as many details as possible"
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

export default RegisterBoardMember;
