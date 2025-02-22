import React, { useState } from "react";
import SubscribeItem from "./SubscribeItem";
import SectionTitle from "@/src/components/common/SectionTitle";
import { Text } from "@/src/components/ui/elements/Text";

const Subscriptions = () => {
  const [subscribeItem, setSubscribeItem] = useState([
    {
      id: "1",
      title: "EMCC Journals",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consequat at porttitor pretium imperdiet vel dapibus amet tempor. ",
      isSubscribed: true,
    },
    {
      id: "2",
      title: "Newsletter",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consequat at porttitor pretium imperdiet vel dapibus amet tempor. ",
    },
    {
      id: "3",
      title: "Podcast",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consequat at porttitor pretium imperdiet vel dapibus amet tempor. ",
    },
  ]);

  const handleChangeSubStatue = (id: any) => {
    console.log(id);
    // change status of item
    const newSubscribeItem = subscribeItem.map((item) => {
      if (item.id === id) {
        item.isSubscribed = !item.isSubscribed;
      }
      return item;
    });
    setSubscribeItem(newSubscribeItem);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center justify-between gap-5">
        <SectionTitle dark caps title="My Subscriptions" />
      </div>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"}>Subscribed</Text>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {subscribeItem
            .filter((item) => item.isSubscribed)
            .map((item, index) => (
              <SubscribeItem
                key={index}
                {...item}
                onChangeStatus={() => handleChangeSubStatue(item.id)}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Text variant={"card_title_large"}>Featured Offering</Text>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {subscribeItem
            .filter((item) => !item.isSubscribed)
            .map((item, index) => (
              <SubscribeItem
                key={index}
                {...item}
                onChangeStatus={() => handleChangeSubStatue(item.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
