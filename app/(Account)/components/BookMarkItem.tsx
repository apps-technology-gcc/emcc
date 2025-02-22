import IconWithText from "@/src/components/common/IconWithText";
import { Icon } from "@/src/components/ui/elements/Icon";
import Link from "@/src/components/ui/elements/Link";
import Tag from "@/src/components/ui/elements/Tags";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const BookMarkItem = ({
  type = "resource",
}: {
  type?: "resource" | "event";
}) => {
  return (
    <>
      {type === "resource" && <ResourceBookMark />}
      {type === "event" && <EventBookMark />}
    </>
  );
};

const ResourceBookMark = () => {
  return (
    <div className="bg-background px-5 py-8 flex flex-col gap-5 relative">
      <Icon
        name="bookmark_remove"
        className="text-[20px] absolute top-5 right-5"
      />
      <Tag style={"style1"} variant={"tag2"} className="max-w-fit">
        Journal
      </Tag>
      <Text variant={"resource_header"} className="line-clamp-1">
        Let’s Talk About a DAM Evolution
      </Text>
      <Text variant={"body"} className="text-neutral line-clamp-3">
        Consectetur vitae ut amet ligula platea facilisi ac ipsum. Faucibus
        auctor consequat suscipit commodo. Id facilisis nunc ut sit nec sed
        sagittis. Suspendisse neque eget pulvinar lorem tincidunt consequat
      </Text>
      <Text variant={"body"} className="text-neutral">
        03 Sep, 2024
      </Text>
    </div>
  );
};

const EventBookMark = () => {
  return (
    <div className="bg-background px-5 py-8 flex flex-col gap-8 relative">
      <div className="flex items-center gap-5 justify-between">
        <Tag style={"style1"} variant={"tag2"} className="max-w-fit">
          Journal
        </Tag>
        <Text variant={"body"} className="text-[#333333]">
          7:00am EDT
        </Text>
      </div>
      <Text variant={"resource_header"} className="line-clamp-1">
        Designing a Better Conference For People Who Build Product
      </Text>
      <div className="flex items-center gap-2.5">
        <Icon name="location_on" className={`text-[20px] `} />
        <Text variant="body" className={`text-[#333333]`}>
          Virtual & In Person - San Francisco, CA
        </Text>
      </div>
      <div className="flex items-center gap-2.5">
        <Icon name="calendar_today" className={`text-[20px] `} />
        <Text variant="body" className={`text-[#333333]`}>
          Friday 30 July, 2024
        </Text>
      </div>
      <div className="flex items-center gap-5 justify-between">
        <Link href="/">Join Event</Link>
        <Link href="/">More Info</Link>
      </div>
    </div>
  );
};
export default BookMarkItem;
