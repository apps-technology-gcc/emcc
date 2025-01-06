"use client";
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
// import { Body, CardTitle } from "./Text";
import { Icon } from "./Icon";
import { cn } from "../../../lib/utils";
import { Text } from "./Text";

// Accordion wrapper variants
const accordionVariants = cva(
  "overflow-hidden transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "py-[15px]",
        withMedia: "py-5 border-b border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Accordion content variants
const contentVariants = cva(
  "overflow-hidden duration-500 ease-in-out transition-height flex flex-col",
  {
    variants: {
      variant: {
        default: "gap-6 items-center",
        withMedia: "items-center",
      },
      isOpen: {
        true: "h-auto pt-[20px]",
        false: "h-0 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      isOpen: false,
    },
  }
);

interface BaseAccordionProps extends VariantProps<typeof accordionVariants> {
  title: string;
  className?: string;
}

interface AccordionProps extends BaseAccordionProps {
  content: string;
  variant?: "default";
}

interface AccordionWithMediaProps extends BaseAccordionProps {
  children: React.ReactNode;
  variant: "withMedia";
}

const Accordion = React.forwardRef<
  HTMLDivElement,
  AccordionProps | AccordionWithMediaProps
>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, className, variant = "default" } = props;

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div ref={ref} className={cn(accordionVariants({ variant }), className)}>
      <div
        className="cursor-pointer flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <Text
          variant="card_title_small"
          className={variant === "withMedia" ? "!m-0" : ""}
        >
          {title}
        </Text>
        <Icon className="text-neutralDark" name={isOpen ? "remove" : "add"} />
      </div>

      <div className={cn(contentVariants({ variant, isOpen }))}>
        {"content" in props ? (
          <div className="flex w-full items-start flex-col gap-6">
            {props.content.split("<br/>").map((item, index) => (
              <Text variant="body" key={index} color="neutralDark">
                {item}
              </Text>
            ))}
          </div>
        ) : (
          props.children
        )}
      </div>
    </div>
  );
});

Accordion.displayName = "Accordion";

export { Accordion, type AccordionProps, type AccordionWithMediaProps };
