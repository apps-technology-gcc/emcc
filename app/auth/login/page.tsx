import { Button } from "@/src/components/ui/elements/Button";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import { Input } from "@/src/components/ui/elements/form/Input";
import Link from "@/src/components/ui/elements/Link";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const page = () => {
  return (
    <div className="p-28 h-screen ">
      <div className="container max-w-[600px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-5">
            <Text variant={"section_title"}>Login to EMCC</Text>
            <Text variant={"body"} className="text-center">
              Lorem ipsum dolor sit amet consectetur. Netus neque vitae
              dignissim nulla nunc non cras sed tellus
            </Text>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <Input placeholder="Email Address *" name="email" />
              <div className="flex flex-col gap-2.5 ">
                <Input placeholder="Password *" name="password" />
                <div className="flex justify-end">
                  <Link href={"/"} className="flex justify-end">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
            <Checkbox id="remember" name="remember" label={"Remember me"} />
            <Button variant={"radius"} btnType={"secondary"} outline>
              Login
            </Button>
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <Text variant={"body"}>Don’t have an account</Text>
            <Link href={"/auth/signup"} className="flex justify-end">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
