import TextContentSection from "@/src/components/common/TextContentSection";
import { Button } from "@/src/components/ui/elements/Button";
import Divider from "@/src/components/ui/elements/Divider";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import { Input, Label } from "@/src/components/ui/elements/form/Input";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const ComplaintsProcedure = () => {
  return (
    <div className="flex flex-col gap-12">
      <Text variant={"section_title"}>
        Filing a complaint with EMCC Middle East
      </Text>
      <TextContentSection
        // title={"Complaints Procedure"}
        texts={[
          "The EMCC Global complaints procedure has been amended as at November 2020. All complaints made from 1 December 2020 should follow the new procedure.",
          "The purpose of the EMCC Global Complaints and Disciplinary Process is to uphold appropriate standards of professional conduct amongst the communities of coaching, mentoring, supervision professionals, as guided by the Global Code of Ethics. In other words, to protect the general public using the services of professionals, to ensure that members and non-members are best served by EMCC Global and all volunteers who work on EMCC Global’s behalf, to build and maintain confidence in the industry, and to improve the quality of service delivered by professionals who are members of EMCC and non-members holding an EMCC accreditation.",
          "A full version of the complaints procedure applies and can be viewed here",
        ]}
      />

      <div className="flex flex-col gap-8">
        <Text variant={"card_title_large"}>EMCC Global Contacts</Text>
        <TextContentSection
          texts={[
            "we treat all complaints seriously, whether they are made by letter or by email. You will be treated with courtesy and fairness at all times - we would hope, too, that you will be courteous and fair in your dealings with our staff at all times. We will treat your complaint in confidence within the department. We will deal with your complaint promptly - we will acknowledge receipt of a written complaint within 5 working days and we will send you a full reply within 20 working days of receipt.",
            "If we cannot send a full reply within 20 working days of receipt we will tell you the reason why and let you know when we will be able to reply in full we will publish information in our annual report on the numbers and categories of complaints we receive, and the percentage of complaints upheld.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-8">
        <Text variant={"card_title_large"}>Confidentiality</Text>
        <TextContentSection
          texts={[
            "All complaints received will be dealt with confidentially and in accordance with the requirements of the Data Protection Act 1998.",
          ]}
        />
      </div>
      <Divider />
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          <Input label="Your Name" name="name" placeholder="Name" />
          <Input label="Contact Email" name="name" placeholder="Name" />
          <SearchSelect options={[]} label="Your Country" name="country" />
          <SearchSelect
            options={[]}
            label="Is this complaint being made for yourself?"
            name="country"
          />
          <SearchSelect
            options={[]}
            label="Who is the complaint about?"
            name="country"
          />
          <div></div>
          <div className="flex col-span-2 flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <Label label="Please provide us with further details" />
              <Icon name="info" className="text-[16px]" />
            </div>
            <div className="">
              <Input className="" type="textarea" name="msg" />
            </div>
          </div>
        </div>
        <Checkbox label="I agree all statements in" id="" />
        <Button className="max-w-fit" variant={"default"} btnType={"primary"}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ComplaintsProcedure;
