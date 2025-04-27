import { IconType } from "@/src/types";
import { cn } from "../../../lib/utils";
import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: IconType | string;
  className?: string;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  return (
    <span
      {...props}
      className={cn(
        "material-icons material-symbols-outlined !leading-none",
        className
      )}
    >
      {name}
    </span>
  );
};
