import { Button } from "@/src/components/ui/elements/Button";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import { Input } from "@/src/components/ui/elements/form/Input";
import Link from "@/src/components/ui/elements/Link";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const page = () => {
  return (
    <div className="py-28 min-h-screen ">
      <div className="container max-w-[600px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-5">
            <Text variant={"section_title"}>Sign Up EMCC</Text>
            <Text variant={"body"} className="text-center">
              Lorem ipsum dolor sit amet consectetur. Netus neque vitae
              dignissim nulla nunc non cras sed tellus
            </Text>
          </div>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              <Input placeholder="First Name *" name="email" />
              <Input placeholder="Last Name *" name="password" />
              <Input placeholder="Email *" name="email" />
              <Input placeholder="Confirm Email *" name="cemail" />
              <Input placeholder="Password *" name="password" />
              <Input placeholder="Re-type Password *" name="rpassword" />
            </div>
            <Checkbox
              id="remember"
              name="remember"
              label={"I agree all statements in Terms of service"}
            />
            <Button variant={"radius"} btnType={"secondary"} outline>
              Create Account
            </Button>
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <Text variant={"body"}>Don’t have an account</Text>
            <Link href={"/auth/signup"} className="flex justify-end">
              Sign Up
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"body"} className="text-center">
              By clicking Create Account, you will sign up to the EMCC. When you
              sign up we will send you relevant updates & insights, By signing
              up you agree to our Terms and Conditions and Privacy Policy.
            </Text>
            <div className="flex items-center justify-center gap-2.5">
              <Link href="">Terms of Business</Link>
              <Text variant={"body"} className="text-primary-600">
                |
              </Text>
              <Link href="">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
