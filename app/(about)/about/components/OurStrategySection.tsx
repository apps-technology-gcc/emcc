import { Text } from "@/src/components/ui/elements/Text";
import SectionTitle from "@/src/components/common/SectionTitle";
import { Accordion } from "@/src/components/ui/elements/Accordions";
import { Button } from "@/src/components/ui/elements/Button";
import { Icon } from "@/src/components/ui/elements/Icon";
import TextContentSection from "@/src/components/common/TextContentSection";

interface OurStrategySectionProps {
  title: string;
  paragraphs: string[];
  accordions: { title: string; content: string }[];
}

const OurStrategySection: React.FC<OurStrategySectionProps> = ({
  title,
  paragraphs,
  accordions,
}) => {
  return (
    <div id="strategy" className="flex flex-col gap-12">
      <TextContentSection title={title} texts={paragraphs} />
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
      <Button
        className="max-w-fit"
        outline
        btnType={"primary"}
        Icon={<Icon name="download" />}
        variant={"default"}
      >
        Download Strategic Priorities
      </Button>
    </div>
  );
};

export default OurStrategySection;
