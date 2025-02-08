import { Text } from "@/src/components/ui/elements/Text";

interface BannerSectionProps {
  title: string;
  description: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="max-w-[763px] flex flex-col gap-12">
      <Text
        font={"tinos"}
        variant={"h1_page_title"}
        className="uppercase text-white"
      >
        {title}
      </Text>
      <Text variant={"body"} className="text-white">
        {description}
      </Text>
    </div>
  );
};

export default BannerSection;
