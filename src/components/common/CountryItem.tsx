import Image from "next/image";
import React from "react";
import EmccFlag from "@/public/emcc-flag.svg";
import { Text } from "../ui/elements/Text";
const CountryItem = ({ image, name }: { image?: string; name: string }) => {
  return (
    <div className="min-w-[220px] flex items-center gap-2.5">
      <Image
        width={24}
        height={16}
        alt="flag"
        className=""
        src={image ? image : EmccFlag}
      />
      <Text variant={"placeholder"}>{name}</Text>
    </div>
  );
};

export default CountryItem;
