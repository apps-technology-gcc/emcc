import { FC, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Text } from "./Text";
import { cn } from "@/src/lib/utils";

const tagVariants = cva("inline-flex leading-1 items-center ", {
  variants: {
    variant: {
      tag1: "text-primary-600",
      tag2: "",
    },
    style: {
      styleNone: "",
      style1: "bg-primary-100 text-neutralDark px-[6px] py-1 rounded-[2px]",
      style2: "bg-primary-50 text-neutralDark px-2.5 py-1 rounded-[2px]",
      style3: "bg-[#AEFFE8] text-neutralDark p-[6px] rounded-[2px]",
    },
    iconPosition: {
      left: "flex-row",
      right: "",
    },
  },
  defaultVariants: {
    variant: "tag1",
    style: "style1",
    iconPosition: "left",
  },
  compoundVariants: [
    {
      variant: "tag1",
      style: ["style1", "style2", "style3"],
      class: "bg-blue-100 text-blue-800 border-blue-200",
    },
  ],
});

interface TagProps extends VariantProps<typeof tagVariants> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Tag: FC<TagProps> = ({
  variant,
  style,
  children,
  className = "",
  icon,
  iconPosition,
}) => {
  const getTextVariant = () => {
    if (variant === "tag1") {
      return "tag";
    }

    if (variant === "tag2") {
      if (style === "style2") {
        return "placeholder";
      }
      return "small";
    }

    return "small";
  };

  if (!icon) {
    return (
      <span className={tagVariants({ variant, style, className })}>
        <Text as="span" className="!leading-none" variant={getTextVariant()}>
          {children}
        </Text>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "gap-2.5",
        tagVariants({ variant, style, iconPosition, className })
      )}
    >
      {iconPosition === "left" ? icon : null}
      <Text as="span" className="!leading-none" variant={getTextVariant()}>
        {children}
      </Text>
      {iconPosition === "right" ? icon : null}
    </span>
  );
};

export default Tag;
