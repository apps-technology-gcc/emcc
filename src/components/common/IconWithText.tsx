import { Icon } from "@/src/components/ui/elements/Icon";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

interface IconWithTextProps {
  iconName?: string;
  variant?: string;
  text: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({
  iconName = "schedule",
  variant = "black",
  text,
}) => {
  const textColor = variant === "white" ? "white" : "neutralDark";

  return (
    <div className="flex items-center gap-2.5">
      <Icon name={iconName} className={`text-[24px] text-${textColor}`} />
      <Text variant="body" className={`text-${textColor}`}>
        {text}
      </Text>
    </div>
  );
};

export default IconWithText;
