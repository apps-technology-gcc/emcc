"use client";
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
// import { Body, CardTitle } from "./Text";
import { Icon } from "./Icon";
import { cn } from "../../../lib/utils";
import { Text, textVariants } from "./Text";

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
  activeSection: string;
}

interface AccordionListProps extends BaseAccordionProps {
  content?: string;
  variant?: "default";
  listItems: {
    id: string;
    text: string;
  }[];
}

interface AccordionWithMediaProps extends BaseAccordionProps {
  children: React.ReactNode;
  variant: "withMedia";
}

const AccordionList = React.forwardRef<
  HTMLDivElement,
  AccordionListProps | AccordionWithMediaProps
>((props, ref) => {
  const [isOpen, setIsOpen] = useState(true);
  const { title, className, activeSection, variant = "default" } = props;

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
          <ul className="flex w-full items-start px-5 flex-col gap-5">
            {props.listItems.map(
              (
                item: {
                  id: string;
                  text: string;
                },
                index
              ) => (
                <li
                  className={cn(
                    textVariants({
                      variant: "navbar",
                    }),
                    "ml-4 list-item ",
                    item.id === activeSection && "text-primary-600 list-disc"
                  )}
                  key={index}
                  color="neutralDark"
                >
                  {item.text}
                </li>
              )
            )}
          </ul>
        ) : (
          props.children
        )}
      </div>
    </div>
  );
});

AccordionList.displayName = "Accordion";

export { AccordionList, type AccordionListProps, type AccordionWithMediaProps };
