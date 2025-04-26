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
const ConnectCourseProvider = () => {
  return (
    <>
      <Modal isOpen={true} closeModel={() => {}}>
        <div className="flex flex-col gap-8 items-center ">
          <Text variant={"section_title"}>
            Sign In to Apply for Accreditation
          </Text>
          <Text variant={"body"}>
            To complete your Accreditation Application, please sign in. If
            you’re not signed in, you'll need to do so to proceed to the
            application form
          </Text>
          <div className="flex flex-col gap-5">
            <Input name="Email Address" placeholder="Email Address" />
            <Input name="Password" placeholder="Password" type="password" />
            <Link
              href={"/"}
              className={cn(
                textVariants({
                  variant: "button",
                }),
                "text-primary-600"
              )}
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex items-center gap-5 justify-between">
            <div className="flex items-center gap-2.5">
              <Text variant={"body"}>Don’t have an account?</Text>{" "}
              <Link
                href={"/"}
                className={cn(
                  textVariants({
                    variant: "button",
                  }),
                  "text-primary-600"
                )}
              >
                Sign Up
              </Link>
            </div>
            <Button variant={"default"} btnType={"primary"}>
              Sign In
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConnectCourseProvider;
