"use client";
import Section from "@/src/components/layout/Section";
import React from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import { Text } from "@/src/components/ui/elements/Text";
import Toast from "@/src/components/ui/elements/Toast";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { Input } from "@/src/components/ui/elements/form/Input";
import { Button } from "@/src/components/ui/elements/Button";
import BulletText from "@/src/components/ui/elements/BulletText";
import PageTitle from "../components/PageTitle";

const page = () => {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-full max-w-[1000px] px-5 md:px-0">
        <div className="flex items-center justify-center flex-col gap-20">
          <PageTitle
            title="EMCC Global Accreditation Application Form"
            image={{ image1: Logo.src, image2: Logo.src }}
            // message="The EMCC accreditation award recognises your validated prior learning and relevant experience"
          />

          <div className="flex flex-col gap-12">
            <Text variant={"card_title_large"} className="text-neutral">
              Personal Details
            </Text>
            <div className="flex flex-col gap-5">
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                <Input
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                />
                <Input
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                />
                <Input
                  label="Address Line 1"
                  type="text"
                  name="addressLine1"
                  placeholder="Enter your address"
                />
                <Input
                  label="Address Line 2"
                  type="text"
                  name="addressLine2"
                  placeholder="Enter additional address details (optional)"
                />
                <Input
                  label="Post Code"
                  type="text"
                  name="postCode"
                  placeholder="Enter your post code"
                />
              </div>
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                <div>
                  <SearchSelect
                    label="Country"
                    name="country"
                    options={[
                      { value: "us", label: "United States" },
                      { value: "uk", label: "United Kingdom" },
                      // Add more countries as needed
                    ]}
                    placeholder="Select your country"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                {/* City - Select Field */}
                <div>
                  <SearchSelect
                    label="City"
                    name="city"
                    options={[
                      { value: "new-york", label: "New York" },
                      { value: "london", label: "London" },
                      // Add more cities as needed
                    ]}
                    placeholder="Select your city"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                {/* Email - Input Field */}
                <div>
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone Number - Select Field */}
                <div>
                  <SearchSelect
                    label="Phone Number"
                    name="phone"
                    options={[
                      { value: "+1", label: "+1 (USA)" },
                      { value: "+44", label: "+44 (UK)" },
                      // Add more phone codes as needed
                    ]}
                    placeholder="Select your phone number code"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                {/* Current Role - Select Field */}
                <div>
                  <SearchSelect
                    label="Current Role"
                    name="currentRole"
                    options={[
                      { value: "mentor", label: "Mentor" },
                      { value: "coach", label: "Coach" },
                      { value: "supervisor", label: "Supervisor" },
                      // Add more roles as needed
                    ]}
                    placeholder="Select your current role"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                {/* LinkedIn Profile URL - Input Field */}
                <div>
                  <Input
                    label="LinkedIn Profile URL"
                    type="url"
                    name="linkedin"
                    placeholder="Enter your LinkedIn profile URL"
                  />
                </div>

                {/* EU VAT ID - Select Field */}
                <div>
                  <SearchSelect
                    label="EU VAT ID (if applicable)"
                    name="vatId"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                    placeholder="Do you have an EU VAT ID?"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                {/* Website - Input Field */}
                <div>
                  <Input
                    label="Website"
                    type="url"
                    name="website"
                    placeholder="Enter your website URL"
                  />
                </div>

                {/* Date of Joining EMCC Global - Select Field */}
                <div>
                  <SearchSelect
                    label="Date of Joining EMCC Global"
                    name="joiningDate"
                    options={[
                      { value: "2020", label: "2020" },
                      { value: "2021", label: "2021" },
                      { value: "2022", label: "2022" },
                      // Add more years as needed
                    ]}
                    placeholder="Select the year you joined"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                {/* Country or Region - Select Field */}
                <div>
                  <SearchSelect
                    label="Country or Region"
                    name="region"
                    options={[
                      { value: "eu", label: "Europe" },
                      { value: "na", label: "North America" },
                      // Add more regions as needed
                    ]}
                    placeholder="Select your region"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                {/* Other Memberships - Select Field */}
                <div>
                  <SearchSelect
                    label="What other memberships do you hold?"
                    name="otherMemberships"
                    options={[
                      { value: "icf", label: "ICF" },
                      { value: "emcc", label: "EMCC" },
                      { value: "ac", label: "Association for Coaching" },
                      // Add more memberships as needed
                    ]}
                    placeholder="Select your other memberships"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                {/* Common Mentoring/Coaching/Supervisor Topics - Select Field */}
                <div>
                  <SearchSelect
                    label="What are your most common Mentoring / Coaching / Supervisor topics?"
                    name="commonTopics"
                    options={[
                      { value: "leadership", label: "Leadership" },
                      { value: "career-growth", label: "Career Growth" },
                      {
                        value: "work-life-balance",
                        label: "Work-Life Balance",
                      },
                      // Add more topics as needed
                    ]}
                    placeholder="Select your common topics"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                {/* Range of Clients - Select Field */}
                <div>
                  <SearchSelect
                    label="Describe the range of clients you typically see"
                    name="clientRange"
                    options={[
                      { value: "executives", label: "Executives" },
                      { value: "entrepreneurs", label: "Entrepreneurs" },
                      { value: "students", label: "Students" },
                      // Add more client types as needed
                    ]}
                    placeholder="Select your typical clients"
                    onChange={(value) => console.log(value)}
                  />
                </div>

                <div>
                  <SearchSelect
                    label="What are your most common Mentoring / Coaching / Supervisor topics?"
                    name="commonTopics"
                    options={[
                      { value: "leadership", label: "Leadership" },
                      { value: "career-growth", label: "Career Growth" },
                      {
                        value: "work-life-balance",
                        label: "Work-Life Balance",
                      },
                      // Add more topics as needed
                    ]}
                    placeholder="Select your common topics"
                    onChange={(value) => console.log(value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-end">
            <Button variant={"default"} btnType={"primary"}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
