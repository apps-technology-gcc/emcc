import { Text } from "@/src/components/ui/elements/Text";
import SectionTitle from "@/src/components/common/SectionTitle";
import { Accordion } from "@/src/components/ui/elements/Accordions";
import SectionLink from "@/src/components/common/SectionLink";

interface ExecutiveBoardSectionProps {
  title: string;
  description: string;
  accordions: { title: string; content: string }[];
}

const ExecutiveBoardSection: React.FC<ExecutiveBoardSectionProps> = ({
  title,
  description,
  accordions,
}) => {
  return (
    <div className="flex flex-col gap-12">
      <SectionTitle title={title} />
      <div className="flex flex-col gap-8">
        <Text variant={"body"} className="text-neutral">
          {description}
        </Text>
        <SectionLink title="Our Organisational Structure" />
      </div>
      <div className="flex flex-col">
        {accordions.map((accordion, index) => (
          <div key={index} className="border-b border-spacing-5 border-border">
            <Accordion
              className="mb-[5px]"
              title={accordion.title}
              content={accordion.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveBoardSection;
