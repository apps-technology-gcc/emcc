import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
const items = [
  {
    id: "123456",
    details: { label: "Membership Renewal", text: "24 Nov 2023" },
    amount: "$100",
    active: true,
  },
  {
    id: "123456",
    details: { label: "Invoice topic", text: "24 Nov 2023" },
    amount: "$65",
    active: false,
  },
  {
    id: "123456",
    details: { label: "Accreditation Processing Fee", text: "24 Nov 2023" },
    amount: "$65",
    active: true,
  },
  {
    id: "123456",
    details: { label: "Consultation Fee", text: "24 Nov 2023" },
    amount: "$65",
    active: false,
  },
  {
    id: "123456",
    details: { label: "Subscription Fee", text: "24 Nov 2023" },
    amount: "$65",
    active: true,
  },
];

console.log(items);

const Activity = () => {
  return (
    <div className="flex flex-col">
      <ActivityHeader />
      {items.map((item, index) => (
        <ActivityItems key={item.id} item={item} />
      ))}
    </div>
  );
};

const ActivityHeader = () => {
  return (
    <div className="grid w-full border-b border-border rounded-tl-md rounded-tr-md overflow-hidden grid-cols-[120px_336px_160px_160px_140px] bg-primary-100  ">
      <div className=" px-2.5 py-5">
        <Text variant={"card_title_small"} className="text-[#222222]">
          Ref No.
        </Text>
      </div>
      <div className=" px-2.5 py-5">
        <Text variant={"card_title_small"} className="text-[#222222]">
          Details
        </Text>
      </div>
      <div className=" px-2.5 py-5">
        <Text variant={"card_title_small"} className="text-[#222222]">
          Invoice Date
        </Text>
      </div>
      <div className=" px-2.5 py-5">
        <Text variant={"card_title_small"} className="text-[#222222]">
          Amount
        </Text>
      </div>
      <div className=" px-2.5 py-5">
        <Text
          variant={"card_title_small"}
          className="text-[#222222] text-center"
        >
          Details
        </Text>
      </div>
    </div>
  );
};

interface ActivityItemsProps {
  item: {
    id: string;
    details: {
      label: string;
      text: string;
    };
    amount: string;
    active: boolean;
  };
}

const ActivityItems = ({ item }: ActivityItemsProps) => {
  return (
    <div className="grid border-b border-border grid-cols-[120px_336px_160px_160px_140px]">
      <div className="px-2.5 py-5">
        <Text variant={"body"} className="text-[#222222]">
          {item.id}
        </Text>
      </div>
      <div className="px-2.5 py-5">
        <Text variant={"body"} className="text-[#222222]">
          {item.details.label}
        </Text>
      </div>
      <div className="px-2.5 py-5">
        <Text variant={"body"} className="text-[#222222]">
          {item.details.text}
        </Text>
      </div>
      <div className="px-2.5 py-5">
        <Text variant={"body"} className="text-[#222222]">
          {item.amount}
        </Text>
      </div>
      <div className="px-2.5 py-5 flex items-center justify-center">
        <Icon name="description" className="text-[20px] cursor-pointer" />
      </div>
    </div>
  );
};

export default Activity;
