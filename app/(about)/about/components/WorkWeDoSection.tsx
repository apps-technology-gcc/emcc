import { Text } from "@/src/components/ui/elements/Text";
import { Accordion } from "@/src/components/ui/elements/Accordions";
import SectionTitle from "@/src/components/common/SectionTitle";
import TextContentSection from "@/src/components/common/TextContentSection";
import GuidingValuesSection from "./GuidingValuesSection";
interface GuidingValue {
  id: number;
  title: string;
  description: string;
}
interface WorkWeDoSectionProps {
  title: string;
  paragraphs: string[];
  accordions: { title: string; content: string }[];
  guidingValues: GuidingValue[];
}

const WorkWeDoSection: React.FC<WorkWeDoSectionProps> = ({
  title,
  paragraphs,
  accordions,
  guidingValues,
}) => {
  return (
    <div className="flex flex-col gap-20">
      <div id="work_we_do" className="flex flex-col gap-12">
        <TextContentSection title={title} texts={paragraphs} />
        <div className="flex flex-col">
          {accordions.map((accordion, index) => (
            <div
              key={index}
              className="border-b border-spacing-5 border-border"
            >
              <Accordion
                className="mb-[5px]"
                title={accordion.title}
                content={accordion.content}
              />
            </div>
          ))}
        </div>
      </div>
      <GuidingValuesSection values={guidingValues} />
    </div>
  );
};

export default WorkWeDoSection;
