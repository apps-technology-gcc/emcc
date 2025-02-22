import { Button } from "@/src/components/ui/elements/Button";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import { Input } from "@/src/components/ui/elements/form/Input";
import Link from "@/src/components/ui/elements/Link";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import SendImg from "@/public/send.svg";
import Image from "next/image";
const page = () => {
  return (
    <div className="p-28 h-screen ">
      <div className="container max-w-[600px]">
        <div className="flex justify-center items-center flex-col gap-12">
          <div className="flex flex-col justify-center items-center gap-5">
            <Text variant={"section_title"} className="text-center">
              Reset Your Password
            </Text>
            <Text variant={"body"} className="text-center">
              Enter your email address to reset your password.
            </Text>
          </div>
          <div className="flex w-full flex-col gap-8">
            <Input type="text" placeholder="Email Address *" name="email" />
            <Button variant={"radius"} outline btnType={"secondary"}>
              Reset Password
            </Button>
          </div>
          {/* <Image src={SendImg} alt="Send" width={100} height={60} /> */}
          <Link href="/">Go back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
