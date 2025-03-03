import React from "react";
import RelatedResourceCard from "./RelatedResourceCard";
import SectionTitle from "./SectionTitle";

interface RelatedResource {
  type: string;
  title: string;
  description: string;
  linkTitle: string;
}

const createRelatedResources = (
  types: string[],
  titles: string[],
  descriptions: string[],
  linkTitles: string[]
): RelatedResource[] => {
  return types.map((type, index) => ({
    type,
    title: titles[index],
    description: descriptions[index],
    linkTitle: linkTitles[index],
  }));
};

const RELATED_RESOURCES = createRelatedResources(
  ["Podcast", "Webinar", "White Paper"],
  [
    "Lectus ac rhoncus volutpat hac",
    "Lectus ac rhoncus volutpat hac",
    "Pulvinar enim dictumst Lectus ac rhoncus volutpat hac",
  ],
  [
    "Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst aliquam pretium imperdiet molestie placerat risus. Mi risus accumsan orci vel.",
    "Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst aliquam pretium imperdiet molestie placerat risus. Mi risus accumsan orci vel.",
    "Lectus ac rhoncus volutpat hac. Pulvinar enim dictumst aliquam pretium imperdiet molestie placerat risus. Mi risus accumsan orci vel.",
  ],
  ["Listen", "Details", "Learn More"]
);

const RelatedResourceGroup = ({
  resources = RELATED_RESOURCES,
  title = "Related Resources",
}: {
  resources?: Array<{
    type: string;
    title: string;
    description: string;
    linkTitle?: string;
  }>;
  title?: string;
}) => {
  return (
    <div className="flex mt-20 flex-col gap-12">
      <SectionTitle title={title} />

      <div className="grid grid-cols-[auto_1px_auto_1px_auto] gap-8">
        {resources.map((resource, index) => {
          return (
            <>
              <RelatedResourceCard {...resource} />
              {index !== resources.length - 1 && (
                <div className="h-full min-h-[250px] w-[1px] bg-background"></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedResourceGroup;
