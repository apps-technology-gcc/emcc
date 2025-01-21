import React from "react";
import { Text, textVariants } from "./Text";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

const Breadcrumbs = ({
  list,
}: {
  list: {
    name: string;
    href?: string;
  }[];
}) => {
  return (
    <div className="flex items-center gap-2.5">
      {list.map((item, index) => (
        <div key={index}>
          {item.href ? (
            <Link
              key={item.name}
              href={item.href}
              className={
                // Use Text Variaiton
                cn(
                  textVariants({
                    variant: "button",
                  }),
                  //   add underline for last item only
                  index === list.length - 1 &&
                    list.length !== 1 &&
                    "underline hover:text-gray-900"
                )
              }
            >
              {item.name}
            </Link>
          ) : (
            <Text
              variant="button"
              key={item.name}
              className={cn(
                "text-gray-500  hover:text-gray-900",
                list.length !== 1 && "underline"
              )}
            >
              {item.name}
            </Text>
          )}
          {list.indexOf(item) < list.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
