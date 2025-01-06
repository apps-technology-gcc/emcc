import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { textVariants } from "./Text";

const navProfileLinkVariants = cva(
  "flex items-center gap-[10px] px-[20px] py-[17px] transition-colors duration-200",
  {
    variants: {
      variant: {
        default: [
          "hover:bg-background text-button-text",
          textVariants({
            variant: "button",
          }),
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface NavProfileLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navProfileLinkVariants> {
  icon?: React.ReactNode;
  href: string;
  text: string;
}

const NavProfileLink = ({
  className,
  variant,
  icon,
  href,
  text,
  ...props
}: NavProfileLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(navProfileLinkVariants({ variant, className }))}
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      <span>{text}</span>
    </Link>
  );
};

export default NavProfileLink;
