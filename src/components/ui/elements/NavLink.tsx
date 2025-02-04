import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import Link from "next/link";
import { textVariants } from "./Text";

const navLinkVariants = cva(
  "inline-flex items-center transition-colors duration-200 font-medium",
  {
    variants: {
      variant: {
        "navlink-1": [
          "text-primary-600 border-b border-b-2 pb-[6px] border-transparent",
          "hover:border-primary-600",
        ],
        "navlink-2": [
          "text-neutralDark border-b border-b-2 pb-[6px] border-transparent",
          "hover:border-primary-600 hover:text-primary-600",
        ],
        "tab-1": [
          "text-neutralDark bg-primary-200 px-5 py-[9px] border-x-[0.5px] border-primary-300",
          "hover:text-white hover:bg-primary-600 hover:border-primary-600",
        ],
        "tab-2": [
          "text-neutralDark bg-background px-5 py-[9px] border-x-[0.5px] border-neutral",
          "hover:text-white hover:bg-neutralDark hover:border-neutralDark",
        ],

        declaration: [
          "text-neutralDark rounded-[6px] px-5 py-[9px] border border-neutralLight",
          "hover:text-white hover:bg-neutralDark hover:border-neutralDark",
        ],
      },
      size: {
        default: "",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "navlink-1",
      size: "default",
    },
  }
);

export interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navLinkVariants> {
  href: string;
  active?: boolean;
  external?: boolean;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    { className, variant, size, href, active, external, children, ...props },
    ref
  ) => {
    const Comp = external ? "a" : Link;

    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(
          navLinkVariants({ variant, size, className }),
          textVariants({
            variant: "button",
          })
        )}
        data-active={active}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
