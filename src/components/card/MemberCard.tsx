import Image from "next/image";
import React from "react";
import Member from "@/public/member.png";
import { Text } from "../ui/elements/Text";
import MemberCompany from "@/public/member_company.png";
const MemberCard = () => {
  return (
    <div className="flex bg-background flex-col rounded-md overflow-hidden">
      <div className="min-h-[220px] relative">
        <Image
          className="absolute w-[60px] h-[60px] -bottom-[60px] transform -translate-y-1/2 left-1/2 -translate-x-1/2"
          src={MemberCompany}
          width={60}
          height={60}
          alt="company"
        />
        <Image
          className="w-full h-auto"
          src={Member}
          width={224}
          height={220}
          alt="Member"
        />
      </div>
      <div className="pt-12 pb-8 px-5 flex flex-col gap-5 items-center">
        <Text
          variant={"card_title_large"}
          className="text-[#222222] text-center"
        >
          Mohammad Abdullah
        </Text>
        <div className="flex flex-col items-center justify-center">
          <Text variant={"label"}>Executive Director</Text>
          <Text variant={"label"}>Community Development</Text>
        </div>
        <Text variant={"label"}>emailname@domain.com</Text>
      </div>
    </div>
  );
};

export default MemberCard;
