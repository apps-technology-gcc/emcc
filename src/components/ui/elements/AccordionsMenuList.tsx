"use client";
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./Icon";
import { cn } from "../../../lib/utils";
import { Text, textVariants } from "./Text";
import Link from "next/link";

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
  activeItem?: string;
  itemColor?: string;
}

interface AccordionMenuListProps extends BaseAccordionProps {
  content?: string;
  variant?: "default";
  listItems: {
    title: string;
    href: string;
  }[];
}

interface AccordionWithMediaProps extends BaseAccordionProps {
  children: React.ReactNode;
  variant: "withMedia";
}

const AccordionMenuList = React.forwardRef<
  HTMLDivElement,
  AccordionMenuListProps | AccordionWithMediaProps
>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    title,
    className,
    variant = "default",
    activeItem,
    itemColor = "neutralDark",
  } = props;

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
          className={`text-${itemColor} text-[20px]`}
          name={isOpen ? "remove" : "add"}
        />
      </div>

      <div className={cn(contentVariants({ variant, isOpen }))}>
        {"listItems" in props ? (
          <ul className="flex w-full items-start px-5 flex-col gap-5">
            {props.listItems.map((item, index) => (
              <Link href={item.href}>
                <li
                  className={cn(
                    textVariants({ variant: "navbar" }),
                    `pl-3 hover:list-disc cursor-pointer hover:text-primary-600 ml-5`,
                    activeItem === item.title && "list-disc ml-5",
                    activeItem === item.title
                      ? `text-primary-600`
                      : "text-neutralDark"
                  )}
                  key={index}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          props.children
        )}
      </div>
    </div>
  );
});

AccordionMenuList.displayName = "Accordion";

export {
  AccordionMenuList,
  type AccordionMenuListProps,
  type AccordionWithMediaProps,
};
