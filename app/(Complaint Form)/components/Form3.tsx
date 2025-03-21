import PhoneNumberInput from "@/src/components/common/PhoneNumberInput";
import Divider from "@/src/components/ui/elements/Divider";
import Checkbox from "@/src/components/ui/elements/form/Checkbox";
import { Input } from "@/src/components/ui/elements/form/Input";
import Radio from "@/src/components/ui/elements/form/Radio";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const Form3 = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <Text variant={"card_title_large"} className="text-neutral text-center">
          Information about the Complainant (individual filing the complaint)
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          <Input
            label="Full Name"
            placeholder="Full Name"
            name="full_name"
            id="full_name"
          />
          <Input label="Title" placeholder="Title" name="Title" id="Title" />
          <Input
            label="Address Line 1"
            placeholder="Address Line 1"
            name="address"
            id="address_1"
          />
          <Input
            label="Address Line 2"
            placeholder="Address Line 2"
            name="address"
            id="address_1"
          />
          <Input
            label="Post Code"
            placeholder="Post Code"
            name="address"
            id="address_1"
          />
          <div></div>
          <SearchSelect
            options={[
              {
                label: "Country",
                value: "country",
              },
            ]}
            name="country"
            label="Country"
          />
          <SearchSelect
            options={[
              {
                label: "Country",
                value: "country",
              },
            ]}
            name="country"
            label="City"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          <div className="flex w-full">
            <PhoneNumberInput />
          </div>
          <Input
            name="email"
            type="email"
            label="Email Address"
            placeholder="Email Address"
          />
          <SearchSelect
            options={[
              {
                label: "Country",
                value: "country",
              },
            ]}
            name="country"
            label="What is your preferred language of communication?"
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-12">
        <Text variant={"card_title_large"} className="text-neutral text-center">
          Information about the EMCC Professional involved in your Complaint
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          <Input
            label="EMCC Professional's Full Name:"
            placeholder="EMCC Professional's Full Name:"
            name="full_name"
            id="full_name"
          />
          <Input
            label="Name of EMCC Professional's Business (if applicable):"
            placeholder="Name of EMCC Professional's Business (if applicable):"
            name="noe"
            id="noe"
          />
          <Input
            label="Address Line 1"
            placeholder="Address Line 1"
            name="address"
            id="address_1"
          />
          <Input
            label="Address Line 2"
            placeholder="Address Line 2"
            name="address"
            id="address_1"
          />
          <Input
            label="Post Code"
            placeholder="Post Code"
            name="address"
            id="address_1"
          />
          <div></div>
          <SearchSelect
            options={[
              {
                label: "Country",
                value: "country",
              },
            ]}
            name="country"
            label="Country"
          />
          <SearchSelect
            options={[
              {
                label: "Country",
                value: "country",
              },
            ]}
            name="country"
            label="City"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          <div className="flex w-full">
            <PhoneNumberInput />
          </div>
          <Input
            name="email"
            type="email"
            label="Email Address"
            placeholder="Email Address"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Is the EMCC Professional an EMCC Member?
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
          <Radio label="I don’t know" name="idk" id="idk" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Is the EMCC Professional an EMCC Credential-holder?
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
          <Radio label="I don’t know" name="idk" id="idk" />
        </div>

        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            What was the EMCC Professional's role when these events occurred?
          </Text>
          <Checkbox label="Coach" name="role" id="coach" />
          <Checkbox label="Trainer" name="role" id="trainer" />
          <Checkbox label="Mentor" name="role" id="mentor" />
          <Checkbox label="Supervisor" name="role" id="supervisor" />
          <Checkbox
            label="Conference Speaker"
            name="role"
            id="conference_speaker"
          />
          <Checkbox label="Other" name="role" id="other" />
          <div className="max-w-[300px]">
            <Input
              //   label="Please Specify"
              placeholder="Please specify other role"
              name="other_role"
              id="other_role"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            If you had a coach-client relationship, was there a written or
            verbal agreement? If written, you will be given the opportunity to
            upload your document at the end of this form.
          </Text>
          <Radio label="Yes" name="yes" id="yes" />
          <Radio label="No" name="no" id="no" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            If you had a coach-client relationship, was there a written or
            verbal agreement? If written, you will be given the opportunity to
            upload your document at the end of this form.
          </Text>
          <Input type="textarea" name="Describe" placeholder="Describe" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            What financial arrangements did you have with this EMCC
            Professional?
          </Text>
          <Radio label="Pro bono" name="yes" id="yes" />
          <Radio label="Paid by me" name="no" id="no" />
          <Radio
            label="Paid by a third party (individual or organization)"
            name="no"
            id="no"
          />
          <Radio label="None" name="no" id="no" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            What was your relationship with the EMCC Professional at the time of
            these events?
          </Text>
          <Input
            type="text"
            name="Specify"
            placeholder="Specify"
            className="max-w-[360px]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            What other agreements or understandings did you have?
          </Text>
          <Input
            warningText="Please indicate with whom and how, and, and who gave you information about these."
            type="textarea"
            name="Describe"
            placeholder="Describe"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Input label="Date" type="date" name="date" />
          <Input label="Date" type="date" name="date" />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-12">
        <Text variant={"card_title_large"} className="text-neutral">
          Information regarding the specific allegations
        </Text>
        <Text variant={"body"} className="text-neutral">
          In this section, please select up to four primary standards of the
          EMCC Code of Ethics that you consider were breached by the EMCC
          Professional named in this complaint.
        </Text>
        <Text variant={"body"} className="text-neutral">
          You may review all 28 standards of the EMCC Code of Ethics:
          https://coachingfederation.org/ethics/code-ofethics. If you need help
          from EMCC to understand the EMCC Code of Ethics, please contact us at
          ethics@coachingfederation.org.
        </Text>
        <Text variant={"body"} className="text-neutral">
          If you need help from EMCC to understand the EMCC Code of Ethics,
          please contact us at email@domain.com{" "}
        </Text>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Please choose one of standards of the EMCC Code of Ethics that was
            allegedly breached by the EMCC Professional named in this complaint:
          </Text>
          <div className="flex flex-col gap-2.5">
            <div className="max-w-[350px]">
              <SearchSelect
                options={[]}
                name="standard"
                placeholder="Standard"
              />
            </div>
            <Text variant={"small"} className="text-[#000000]">
              You may review all 28 standards of the EMCC Code of Ethics:
              https://coachingfederation.org/ethics/code-of-ethics. If you need
              help from EMCC to understand the EMCC Code of Ethics, please
              contact us at ethics@coachingfederation.org.
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            Please explain how the EMCC Professional allegedly breached this
            standard of the EMCC Code of Ethics.
          </Text>
          <Input
            warningText="Include any evidence or documents to support your alleged breach of this standard. Please provide a
document name (short display name for the document). Browse your computer files for the document(s)
you wish to upload. Click on the upload button. Use the additional upload fields for the remainder of your
supporting documents."
            type="textarea"
            name="Describe"
            placeholder="Describe"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            When and where did these events take place?
          </Text>
          <Input type="textarea" name="Describe" placeholder="Describe" />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-12">
        <Text variant={"card_title_large"} className="text-neutral">
          Information regarding the specific allegations
        </Text>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            What resolution alternatives have you and the EMCC Professional
            discussed to date? If none, please explain.
          </Text>
          <Input type="textarea" name="Describe" placeholder="Describe" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            State below any other actions you have taken to resolve this
            complaint and the outcomes:
          </Text>
          <Input type="textarea" name="Describe" placeholder="Describe" />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"} className="text-neutral">
            By submitting this complaint, what are the expected outcomes from
            this process?{" "}
          </Text>
          <Input type="textarea" name="Describe" placeholder="Describe" />
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <Text variant={"card_title_large"} className="text-neutral">
            Signature
          </Text>
          <Text variant={"body"} className="text-neutral">
            You agree that everything you have included is accurate and true to
            the best of your knowledge.
          </Text>
        </div>
        <div className="max-w-[484px]">
          <Input type="date" label="Date Signed" name="date" />
        </div>
      </div>
    </>
  );
};

export default Form3;
