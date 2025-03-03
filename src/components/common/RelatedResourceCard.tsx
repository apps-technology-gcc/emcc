import React from "react";
import Tag from "../ui/elements/Tags";
import { Text } from "../ui/elements/Text";
import { TextLink } from "../ui/elements/Additional";

interface RelatedResourceCardProps {
  type: string;
  title: string;
  description: string;
  linkTitle?: string;
}

const RelatedResourceCard: React.FC<RelatedResourceCardProps> = ({
  type,
  title,
  description,
  linkTitle = "Listen",
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <Tag style="style1" className="max-w-fit" variant="tag2">
            {type}
          </Tag>

          <Text variant="resource_header" className="text-neutralDark">
            {title}
          </Text>
        </div>
        <Text variant="body" className="text-neutralDark">
          {description}
        </Text>
      </div>
      <TextLink title={linkTitle} />
    </div>
  );
};

export default RelatedResourceCard;
