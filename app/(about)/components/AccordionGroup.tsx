import { Accordion } from "@/src/components/ui/elements/Accordions";
import React from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionGroupProps {
  items: AccordionItem[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ items }) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div key={item.id} className="border-b border-spacing-5 border-border">
          <Accordion
            className="mb-[5px]"
            title={item.title}
            content={item.content}
          />
        </div>
      ))}
    </div>
  );
};

export default AccordionGroup;
