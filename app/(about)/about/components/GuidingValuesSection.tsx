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
    <div className="flex bg-[#D9F2ED] p-8 flex-col gap-12 rounded-md">
      <Text variant={"section_title"}>Our Guiding Values</Text>
      <div className="flex flex-col gap-8">
        {values.map((value) => (
          <div key={value.id}>
            <Text variant={"card_title_large"} className="text-neutralDark">
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
