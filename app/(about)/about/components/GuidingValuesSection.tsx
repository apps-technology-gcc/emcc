import SectionTitle from "@/src/components/common/SectionTitle";
import { Text } from "@/src/components/ui/elements/Text";

interface GuidingValue {
  id: number;
  title: string;
  description: string;
}

interface GuidingValuesSectionProps {
  values: GuidingValue[];
}

const GuidingValuesSection: React.FC<GuidingValuesSectionProps> = ({
  values,
}) => {
  return (
    <div className="flex flex-col gap-12">
      <SectionTitle title="Our Guiding Values" />
      <div className="flex flex-col gap-8">
        {values.map((value) => (
          <div key={value.id}>
            <Text variant={"h3"} className="text-neutralDark">
              {value.title}
            </Text>
            <Text variant={"body"} className="text-neutral">
              {value.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidingValuesSection;
