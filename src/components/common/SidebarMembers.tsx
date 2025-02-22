import React from "react";
import { Text } from "../ui/elements/Text";
import MemberImg from "@/public/find_member.png";
import Image from "next/image";
import Link from "../ui/elements/Link";
const SidebarMembers = () => {
  return (
    <div className="flex rounded-md bg-background flex-col px-5 py-8 gap-8">
      <Text variant={"card_title_large"}>Find EIA Accredited Members</Text>
      <div className="flex items-start gap-5">
        <div className="w-20 rounded-md overflow-hidden">
          <Image
            src={MemberImg}
            alt="member"
            width={80}
            height={80}
            className="flex-auto"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"}>Falicity Smoke</Text>
          <Text variant={"body"} className="text-neutral">
            Global Membership Director
          </Text>
        </div>
      </div>
      <div className="flex items-start gap-5">
        <div className="w-20 rounded-md overflow-hidden">
          <Image
            src={MemberImg}
            alt="member"
            width={80}
            height={80}
            className="flex-auto"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"}>Falicity Smoke</Text>
          <Text variant={"body"} className="text-neutral">
            Global Membership Director
          </Text>
        </div>
      </div>
      <div className="flex items-start gap-5">
        <div className="w-20 rounded-md overflow-hidden">
          <Image
            src={MemberImg}
            alt="member"
            width={80}
            height={80}
            className="flex-auto"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Text variant={"card_title_small"}>Falicity Smoke</Text>
          <Text variant={"body"} className="text-neutral">
            Global Membership Director
          </Text>
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/">View All</Link>
      </div>
    </div>
  );
};

export default SidebarMembers;
