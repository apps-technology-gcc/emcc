import React from "react";
import { Text } from "../ui/elements/Text";
import Image from "next/image";
import sqricon from "@/public/sqricon.svg";
import { cn } from "@/src/lib/utils";

interface Card {
  title: string;
  description: string;
  icon?: string;
}

interface MoreAboutUsProps {
  title: string;
  cards: Card[];
  style?: "center" | "start";
}

const MoreAboutUs = ({ title, cards, style = "center" }: MoreAboutUsProps) => {
  return (
    <div className="flex bg-background flex-col px-5 py-8 rounded-md gap-8">
      <Text variant={"card_title_large"}>{title}</Text>
      {cards.map((card, index) => (
        <div
          key={index}
          className={cn(
            "flex gap-5",
            style === "center" ? "items-center " : "items-start "
          )}
        >
          <Image
            src={card.icon || sqricon}
            width={50}
            height={40}
            alt={`${card.title} icon`}
          />
          <div className="flex flex-col items-start gap-5">
            <Text variant={"card_title_small"}>{card.title}</Text>
            <Text variant={"body"} className="line-clamp-2">
              {card.description}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreAboutUs;
