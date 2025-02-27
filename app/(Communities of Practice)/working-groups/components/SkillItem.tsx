import Image from "next/image";
import React from "react";
import { Text } from "@/src/components/ui/elements/Text";

interface SkillItemProps {
  icon: string;
  iconAlt: string;

  content: string;
  link?: {
    text: string;
    url: string;
  };
}

const SkillItem: React.FC<SkillItemProps> = ({
  icon,
  iconAlt,

  content,
  link,
}) => {
  return (
    <div className="flex items-start gap-5">
      <div className="flex w-[57px] h-[57px] items-center justify-center relative">
        <div
          className={`w-10 h-10 transform rotate-45 border-[0.5px] border-green-300 bg-[#EEFFFC]`}
        />
        <Image
          className="absolute bottom-0 left-0"
          src={icon}
          alt={iconAlt}
          width={29}
          height={29}
        />
      </div>
      <Text variant={"body"} className="text-[#454545]">
        {content}
        {link && (
          <>
            {" "}
            <a href={link.url} className="underline">
              {link.text}
            </a>
          </>
        )}
      </Text>
    </div>
  );
};

export default SkillItem;
