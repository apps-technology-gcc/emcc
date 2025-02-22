import SectionTitle from "@/src/components/common/SectionTitle";
import { Icon } from "@/src/components/ui/elements/Icon";
import Image from "next/image";
import React from "react";
import ProfileImg from "@/public/profile.png";
import { Input } from "@/src/components/ui/elements/form/Input";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { Button } from "@/src/components/ui/elements/Button";
const Profile = () => {
  return (
    <>
      <SectionTitle dark caps title="Profile" />
      <div className="flex w-[100px] h-[100px] rounded-full relative">
        <Image
          src={ProfileImg}
          alt="Profile"
          className=" overflow-hidden rounded-full border-primary-600 border-[2px]"
          width={100}
          height={100}
        />
        <div className="absolute right-0 bottom-0 w-6 h-6 rounded-full">
          <Icon
            className="text-white z-10 text-[16px] rounded-full bg-primary-600"
            name="add"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
        <Input label="First Name" name="first name" />
        <Input label="Last Name" name="last_name" />
        <Input label="Job Title" name="job_title" />
        <Input label="Organisation" name="organisation" />
        <Input label="Email" name="email" type="email" />
        <Input label="Phone Number" name="phone_number" type="tel" />

        <SearchSelect label="Country" options={[]} name="country" />
        <SearchSelect label="City" options={[]} name="city" />
      </div>
      <div className="flex justify-end">
        <Button variant={"default"} btnType={"primary"}>
          Update
        </Button>
      </div>
    </>
  );
};

export default Profile;
