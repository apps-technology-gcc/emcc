import SectionTitle from "@/src/components/common/SectionTitle";
import { NavigationMegaMenuBtn } from "@/src/components/ui/elements/Additional";
import Divider from "@/src/components/ui/elements/Divider";
import { Icon } from "@/src/components/ui/elements/Icon";
import NavLink from "@/src/components/ui/elements/NavLink";
import Tag from "@/src/components/ui/elements/Tags";
import { Text } from "@/src/components/ui/elements/Text";
import { cn } from "@/src/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Activity from "./Activity";

type Props = {};

const MembershipAndAccreditation = (props: Props) => {
  const [activeTab, setActiveTab] = useState("Current");
  const [isUnderReview, setIsUnderReview] = useState(false);
  const router = useRouter();

  return (
    <div className="flex  flex-col gap-12">
      <SectionTitle dark caps title="Membership & Accreditation" />
      <div className="flex items-center gap-8">
        <NavLink
          variant={"navlink-1"}
          href="/"
          onClick={(e) => {
            e.preventDefault();

            setActiveTab("Current");
          }}
          className={cn(activeTab === "Current" ? " border-primary-600" : "")}
        >
          Current
        </NavLink>
        <NavLink
          variant={"navlink-1"}
          href="/"
          onClick={(e) => {
            e.preventDefault();

            setActiveTab("Past Activity");
          }}
          className={cn(
            activeTab === "Disqualified Coaches" ? " border-primary-600" : ""
          )}
        >
          Past Activity
        </NavLink>
      </div>
      {activeTab === "Current" && (
        <div className="max-w-[748px] flex  flex-col gap-12">
          <div className="flex   items-start justify-between gap-8">
            <div className="flex flex-col gap-5">
              <Text variant={"card_title_large"}>Membership</Text>
              <Text variant={"body"}>
                You currently subscribed to EMCC{" "}
                <span className="font-medium">{`{ Membership_Name }`}</span>
              </Text>
              <Text variant={"body"}>
                Valid From 01 June 2024 to 30 May 2025
              </Text>
            </div>
            <NavigationMegaMenuBtn
              // onClick={() => router.push("/membership-checkout")}
              title={"Renew"}
              icon="replay"
            />
            {/* Renew */}
            {/* </NavigationMegaMenuBtn> */}
          </div>
          <Divider />
          <div className="flex items-start justify-between gap-8">
            <div className="flex flex-col gap-5">
              <Text variant={"card_title_large"}>Accreditation</Text>
              <Text variant={"body"}>
                You don’t have any accreditation right now. Please go through
                the application process
              </Text>
              {isUnderReview && (
                <div className="flex items-center gap-2.5">
                  <Icon name="description" className={`text-[20px] `} />
                  <Text variant={"navbar"}>EIA Application.PDF</Text>
                  <Icon name="file_download" className={`text-[20px] `} />
                </div>
              )}
            </div>
            {isUnderReview ? (
              <Tag variant={"tag2"} className="bg-warning-200" style={"style3"}>
                Under Review
              </Tag>
            ) : (
              <NavigationMegaMenuBtn
                // onClick={() => setIsUnderReview(true)}
                title={"Apply"}
                icon="arrow_forward"
              />
            )}
          </div>
        </div>
      )}
      {activeTab === "Past Activity" && <Activity />}
    </div>
  );
};

export default MembershipAndAccreditation;
