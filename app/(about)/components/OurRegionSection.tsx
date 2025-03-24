import { Text } from "@/src/components/ui/elements/Text";
import SectionTitle from "@/src/components/common/SectionTitle";
import Image from "next/image";
import world_map from "@/public/world_map.png";
import flag from "@/public/flag.png";

interface OurRegionSectionProps {
  title: string;
  description: string;
  countries: string[];
  councils?: {
    title: string;
    regions: string[];
  };
  countryChapters?: string;
}

const OurRegionSection: React.FC<OurRegionSectionProps> = ({
  title,
  description,
  countries,
  councils,
  countryChapters,
}) => {
  return (
    <div id="region" className="flex flex-col gap-12">
      <SectionTitle title={title} />
      <div className="flex flex-col gap-8">
        <Text variant={"body"} className="text-neutral">
          {description}
        </Text>
      </div>
      <Image
        alt="world_map"
        width={736}
        height={314}
        src={world_map}
        className="w-full"
      />
      {councils && (
        <div className="flex flex-col gap-5">
          {councils?.title && (
            <Text variant={"card_title_large"}>
              Individual Country Chapters
            </Text>
          )}
          <div className="flex items-center gap-5 gap-y-[14px] flex-wrap">
            {councils &&
              councils?.regions?.map((resion, index) => (
                <div
                  key={index}
                  className="min-w-[220px] flex items-center gap-2.5"
                >
                  <Image
                    width={24}
                    height={16}
                    alt="flag"
                    src={flag}
                    className="w-6 h-4"
                  />
                  <Text variant={"placeholder"}>{resion}</Text>
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-5">
        {countryChapters && (
          <Text variant={"card_title_large"}>Individual Country Chapters</Text>
        )}
        <div className="flex items-center gap-5 gap-y-[14px] flex-wrap">
          {countries.map((country, index) => (
            <div
              key={index}
              className="min-w-[220px] flex items-center gap-2.5"
            >
              <Image
                width={24}
                height={16}
                alt="flag"
                src={flag}
                className="w-6 h-4"
              />
              <Text variant={"placeholder"}>{country}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRegionSection;
