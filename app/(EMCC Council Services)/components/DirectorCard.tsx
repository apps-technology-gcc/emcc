import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import DirectorImg from "@/public/director.png";
import Image from "next/image";
import { Button } from "@/src/components/ui/elements/Button";
import Link from "@/src/components/ui/elements/Link";
const DirectorCard = () => {
  return (
    <div className="flex gap-5 p-5 border-border border rounded-md">
      <div className="flex flex-col gap-5">
        <Text variant="card_title_large" className="text-neutral">
          Mohammad Falicity Smoke
        </Text>
        <Text variant="small" className="text-neutral">
          Abu Dhabi, UAE
        </Text>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-primary-100">
            <Icon name="local_police" className="text-[10px]" />
            <Text variant={"small"} className="text-neutralDark">
              Coach
            </Text>
          </div>
          <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-green-300">
            <Icon name="local_police" className="text-[10px]" />
            <Text variant={"small"} className="text-neutralDark">
              Mentor
            </Text>
          </div>
          <div className="flex items-center gap-1.5 rounded-[4px] px-1.5 min-h-[18px] bg-pink-200">
            <Icon name="local_police" className="text-[10px]" />
            <Text variant={"small"} className="text-neutralDark">
              Supervisor
            </Text>
          </div>
        </div>
        <Text variant="small" className="text-neutral">
          ITCA - Master
        </Text>
        <Text variant="small" className="text-neutral">
          EIA - Foundation
        </Text>
        <Text variant="small" className="text-neutral">
          IMPA - Intermediate
        </Text>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <div className="w-[65px] h-[80px]">
          <Image
            src={DirectorImg}
            alt="director"
            width={65}
            height={80}
            className="rounded-sm w-full"
          />
        </div>

        <Link href="" variant={"secondary"}>
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DirectorCard;
