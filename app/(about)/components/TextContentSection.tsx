import SectionTitle from "@/src/components/common/SectionTitle";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

// Define types for the text content
interface TextContent {
  id: number;
  content: string;
}

// Define the props interface
interface TextSectionProps {
  title: string;
  texts: TextContent[];
}

const TextContentSection: React.FC<TextSectionProps> = ({ title, texts }) => {
  return (
    <div className="flex flex-col gap-12">
      <SectionTitle title={title} />
      <div className="flex flex-col gap-8">
        {texts.map((textItem) => (
          <Text key={textItem.id} variant="body" className="text-neutral">
            {textItem.content}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default TextContentSection;
