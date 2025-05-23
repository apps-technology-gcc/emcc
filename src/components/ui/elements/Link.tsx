import React from "react";
import { cn } from "../../../lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Text } from "./Text";
import { Icon } from "./Icon";
import NextLink from "next/link";
// Common styles matching Button component
const baseStyles =
  "inline-flex max-w-fit flex items-center text-button gap-2.5 items-center transition-colors";
const primaryStyle = "text-primary-600 hover:text-primary-700";
const secondaryStyle =
  "text-neutralDark hover:text-gray-900 underline hover:no-underline underline-offset-4";

const linkVariants = cva(baseStyles, {
  variants: {
    variant: {
      primary: cn(primaryStyle),
      secondary: cn(secondaryStyle),
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
}

const Link = ({
  href,
  children,
  className,
  variant,
  disabled,
  icon,
  iconPosition = "left",
  ...props
}: LinkProps) => {
  return (
    <NextLink
      href={disabled ? "/" : href}
      className={cn("flex items-center gap-2.5")}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <Icon
          // @ts-ignore
          name={icon}
          className={cn(
            "text-[20px]",
            variant === "secondary"
              ? "text-neutralDark hover:text-gray-900"
              : "text-primary-600 hover:text-primary-700"
          )}
        />
      )}
      <Text
        className={cn(linkVariants({ variant, className }))}
        as="span"
        variant="button"
      >
        {children}
      </Text>
      {icon && iconPosition === "right" && (
        <Icon
          // @ts-ignore
          name={icon}
          className={cn(
            "text-[20px]",
            variant === "secondary"
              ? "text-neutralDark hover:text-gray-900"
              : "text-primary-600 hover:text-primary-700"
          )}
        />
      )}
    </NextLink>
  );
};

export default Link;
