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

interface AccordionListProps extends BaseAccordionProps {
  content?: string;
  variant?: "default";
  listItems: string[];
}

interface AccordionWithMediaProps extends BaseAccordionProps {
  children: React.ReactNode;
  variant: "withMedia";
}

const AccordionList = React.forwardRef<
  HTMLDivElement,
  AccordionListProps | AccordionWithMediaProps
>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, className, variant = "default" } = props;

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div ref={ref} className={cn(accordionVariants({ variant }), className)}>
      <div
        className="cursor-pointer px-5 flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <Text
          variant="card_title_small"
          className={variant === "withMedia" ? "!m-0" : ""}
        >
          {title}
        </Text>
        <Icon
          className="text-neutralDark text-[20px]"
          name={isOpen ? "remove" : "add"}
        />
      </div>

      <div className={cn(contentVariants({ variant, isOpen }))}>
        {"listItems" in props ? (
          <div className="flex w-full items-start px-5 flex-col gap-5">
            {props.listItems.map((item, index) => (
              <Text
                className="pl-5"
                variant="navbar"
                key={index}
                color="neutralDark"
              >
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

AccordionList.displayName = "Accordion";

export { AccordionList, type AccordionListProps, type AccordionWithMediaProps };
