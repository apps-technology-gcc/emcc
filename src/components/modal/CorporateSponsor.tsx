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
const CorporateSponsor = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-5">
            {" "}
            <Text variant={"section_title"}>
              Partner with EMCC as a Corporate Sponsor
            </Text>
            <Text variant={"body"}>
              Join us in shaping the future of coaching and mentoring on a
              global scale
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
            {/*  */}{" "}
            <Input
              name="companyName"
              placeholder="Company Name"
              type="text"
              label="Company Name"
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
              label="Please confirm your membership status with EMCC"
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

export default CorporateSponsor;
