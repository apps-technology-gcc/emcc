import SectionTitle from "@/src/components/common/SectionTitle";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";
import ContentSection from "./ContentSection";

// Define types for the text content
interface TextContent {
  id: number;
  content: string;
}

// Define the props interface
interface TextSectionProps {
  title: string;
  texts: string[];
  color?: string;
}

const TextContentSection: React.FC<TextSectionProps> = ({
  title,
  texts,
  color,
}) => {
  return (
    <div className="flex flex-col gap-12">
      <SectionTitle title={title} />
      <ContentSection texts={texts} color={color} />
    </div>
  );
};

export default TextContentSection;
