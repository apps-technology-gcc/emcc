"use client";
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
import NavLink from "@/src/components/ui/elements/NavLink";
import NavLink2 from "@/src/components/ui/elements/NavLink2";
import { Text } from "@/src/components/ui/elements/Text";
import { cn } from "@/src/lib/utils";
import React, { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Suspended Coaches");
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
      enableSorting: false,
      size: 250, // Set specific width in pixels
      // Alternatively, you can use minSize and maxSize
      minSize: 200, // Minimum width
      maxSize: 300, // Maximum width
    },
    {
      header: "Country/Region",
      accessorKey: "country",
      enableSorting: false,
    },
    {
      header: "Award Level",
      accessorKey: "award_level",
      enableSorting: false,
    },
    {
      header: "Award Date",
      accessorKey: "award_date",
      enableSorting: false,
    },
    {
      header: "Valid Until",
      accessorKey: "valid_until",
      enableSorting: false,
    },
    {
      header: "Profile",
      accessorKey: "profile",
      enableSorting: false,
    },
  ];
  return (
    <>
      <Breadcrumb>
        <Breadcrumbs
          list={[
            {
              name: "Search a Coach Record",
              href: "/",
            },
            {
              name: "Disciplinary Action",
              href: "/",
            },
          ]}
        />
      </Breadcrumb>
      <Section bgColor="background">
        <div className="flex flex-col gap-12">
          <SectionTitle title="Search The Coaches Registrar" />
          <div className="flex items-center gap-8">
            <NavLink
              variant={"navlink-1"}
              href="/"
              className={cn(
                activeTab === "Suspended Coaches" ? " border-primary-600" : ""
              )}
            >
              <Text variant="small">Suspended Coaches</Text>
            </NavLink>
            <NavLink
              variant={"navlink-1"}
              href="/"
              onClick={() => setActiveTab("Disqualified Coaches")}
              className={cn(
                activeTab === "Disqualified Coaches"
                  ? " border-primary-600"
                  : ""
              )}
            >
              <Text variant="small">Disqualified Coaches</Text>
            </NavLink>
            <NavLink
              variant={"navlink-1"}
              href="/"
              onClick={() => setActiveTab("Inactive Coaches")}
              className={cn(
                activeTab === "Inactive Coaches" ? " border-primary-600" : ""
              )}
            >
              <Text variant="small">Inactive Coaches</Text>
            </NavLink>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              <Input
                className="bg-transparent"
                name="full_name"
                placeholder="Full Name"
              />
              <Input
                className="bg-transparent"
                name="last_name"
                placeholder="Last Name"
              />
              <SearchSelect
                className="bg-transparent"
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
                className="bg-transparent"
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
                className="bg-transparent"
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
              <Input
                className="bg-transparent"
                name="reference"
                placeholder="Reference"
              />
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
          <Table data={[]} columns={columns} />
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
