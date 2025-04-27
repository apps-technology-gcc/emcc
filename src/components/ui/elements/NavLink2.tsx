import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";
// import { Badge } from "./Badge";
import { textVariants } from "./Text";

const navLinkVariants = cva(
  // Base styles
  "inline-flex items-center transition-colors duration-200 gap-2",
  {
    variants: {
      variant: {
        one: [
          "flex items-center gap-[6px]",
          textVariants({
            variant: "navbar",
          }),
        ],
        two: [
          "flex items-center gap-[6px] pb-[4.5px] border-b-2 border-transparent hover:border-green-300",
          textVariants({
            variant: "navbar",
          }),
        ],
        three: [
          "px-5 py-[6px] hover:bg-primary-50 text-neutralDark hover:text-primary-600",
          textVariants({
            variant: "nav_text_2",
          }),
        ],
        four: [
          "flex items-center min-w-[118px] justify-between gap-2.5 pb-[4.5px] border-b-2 border-transparent hover:border-green-300",
          textVariants({
            variant: "navbar",
          }),
        ],
        five: [
          "px-5 group flex items-center justify-between gap-2.5 py-[6px] hover:bg-primary-50 text-neutralDark hover:text-primary-600",
          textVariants({
            variant: "nav_text_2",
          }),
        ],
        six: [
          "hover:list-disc text-neutralDark hover:text-primary-600",
          textVariants({
            variant: "navbar",
          }),
        ],
        seven: [
          "px-5 group flex items-center  gap-[6px] py-[6px] hover:bg-primary-50 text-neutralDark hover:text-primary-600",
          textVariants({
            variant: "nav_text_2",
          }),
        ],
        eight: [
          "flex items-center group hover:text-primary-600  px-5 pb-5 min-w-[164px] justify-between gap-2.5 border-b border-border",
          textVariants({
            variant: "card_title_small",
          }),
        ],
        nine: [
          "text-neutralDark hover:text-primary-600",
          textVariants({
            variant: "navbar",
          }),
        ],
        link: [
          "text-neutralDark group hover:text-underline",
          textVariants({
            variant: "small",
          }),
        ],
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      underline: {
        true: "underline underline-offset-4",
        false: "",
      },
    },
    defaultVariants: {
      // variant: "default",
      size: "md",
      underline: false,
    },
  }
);

interface NavLink2Props
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navLinkVariants> {
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  tag?: string | number;
  tagVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning";
  isactive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NavLink2 = React.forwardRef<HTMLAnchorElement, NavLink2Props>(
  (
    {
      className,
      children,
      href,
      variant,
      size,
      underline,
      external = false,
      icon,
      iconPosition = "left",
      tag,
      tagVariant = "primary",
      isactive = false,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const LinkComponent = external ? "a" : Link;

    const content = (
      <>
        {iconPosition === "left" && icon}
        {children}
        {iconPosition === "right" && icon}
        {/* {tag && <Badge variant={tagVariant}>{tag}</Badge>} */}
      </>
    );

    const activeClass = isactive ? "text-green-500" : "text-neutral-800";

    return (
      <LinkComponent
        ref={ref}
        href={href}
        className={`${navLinkVariants({
          variant,
          size,
          underline,
          className,
        })} ${activeClass}`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </LinkComponent>
    );
  }
);

NavLink2.displayName = "NavLink2";

export default NavLink2;
