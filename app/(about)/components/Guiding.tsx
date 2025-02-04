import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

// Define types for the value items
interface GuidingValue {
  id: number;
  title: string;
  description: string;
}

// Define the props interface
interface GuidingProps {
  values: GuidingValue[];
  sectionTitle: string;
}

const Guiding: React.FC<GuidingProps> = ({ values, sectionTitle }) => {
  return (
    <div className="gap-12 flex flex-col p-5 rounded-md bg-[#D9F2ED]">
      <Text variant="section_title" className="text-neutralDark">
        {sectionTitle}
      </Text>
      <div className="flex flex-col gap-8">
        {values.map((value) => (
          <div key={value.id} className="flex flex-col gap-5">
            <Text variant="card_title_large" className="text-neutralDark">
              {value.id}. {value.title}
            </Text>
            <Text variant="body" className="text-neutral">
              {value.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guiding;
