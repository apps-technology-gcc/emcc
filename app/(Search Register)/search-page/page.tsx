import Breadcrumb from "@/src/components/common/Breadcrumb";
import SectionTitle from "@/src/components/common/SectionTitle";
import Table from "@/src/components/common/Table";
import Section from "@/src/components/layout/Section";
import Breadcrumbs from "@/src/components/ui/elements/Breadcrumbs";
import { Button } from "@/src/components/ui/elements/Button";
import { Input } from "@/src/components/ui/elements/form/Input";
import Radio from "@/src/components/ui/elements/form/Radio";
import SearchSelect from "@/src/components/ui/elements/form/SearchSelect";
import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const Page = () => {
  const data = [
    {
      name: "John Doe",
      country: "USA",
      awardLevel: "Gold",
      awardDate: "2023-01-15",
      validUntil: "2024-01-15",
      status: "Active",
      profile: "View Profile",
    },
    {
      name: "Jane Smith",
      country: "Canada",
      awardLevel: "Silver",
      awardDate: "2023-03-10",
      validUntil: "2024-03-10",
      status: "Expired",
      profile: "View Profile",
    },
    // Add more rows as needed
  ];
  return (
    <>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Home",
              href: "/",
            },
            {
              name: "Search",
              href: "/search",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="background">
        <div className="flex flex-col gap-12">
          <SectionTitle title="Search The Coaches Registrar" />
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              <Input name="full_name" placeholder="Full Name" />
              <Input name="last_name" placeholder="Last Name" />
              <SearchSelect
                name="country"
                placeholder="Country/Region"
                options={[
                  {
                    value: "1",
                    label: "United States",
                  },
                ]}
              />
              <SearchSelect
                name="practitioners"
                placeholder="Practitioners"
                options={[
                  {
                    value: "1",
                    label: "United States",
                  },
                ]}
              />
              <SearchSelect
                name="award_level"
                placeholder="Award Level"
                options={[
                  {
                    value: "1",
                    label: "United States",
                  },
                ]}
              />
              {/* Reference */}
              <Input name="reference" placeholder="Reference" />
            </div>
            <div className="flex  justify-between items-start">
              <div className="flex items-center gap-5">
                <Radio name="By Name" id="name" label="By Name" />
                <Radio name="By Name" id="name" label="By Organisation" />
              </div>
              <Button variant={"default"} btnType={"primary"}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="background" className="!pt-0">
        {/* I want to make an dynamic table using tanstack table or good react package that is best */}
        {/* the header is [Name, Country/Region, Award Level, Award Date, Valid
        Until, Status, Profile ] */}
        <div className="flex flex-col gap-12">
          <Table data={data} />
          <div className="flex flex-wrap items-center justify-between gap-12">
            <div className="flex  items-center gap-5">
              <div className="flex items-center gap-2.5">
                <Icon
                  name="chevron_left"
                  className="text-neutralDark text-[16px]"
                />
                <Text variant="small">Page 2 of 16</Text>
                <Icon
                  name="chevron_right"
                  className="text-neutralDark text-[16px]"
                />
              </div>
              <div className="flex items-center gap-2.5">
                <Text variant="small">Go to page</Text>
                <input
                  name="page"
                  className="h-6 w-6 border border-borer rounded-sm"
                  type="text"
                />
                <Text variant="small">Go</Text>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Text variant="small">Showing 10 of 100</Text>
              <input
                name="page"
                className="h-6 w-6 border border-borer rounded-sm"
                type="text"
              />
              <Text variant="small">Per page</Text>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Page;
