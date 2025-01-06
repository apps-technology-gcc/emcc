import React from "react";
import { Text, textVariants } from "./Text";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

const Breadcrumbs = () => {
  const list = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="flex items-center gap-2.5">
      {list.map((item, index) => (
        <>
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
                  index === list.length - 1 && "underline hover:text-gray-900"
                )
              }
            >
              {item.name}
            </Link>
          ) : (
            <Text
              variant="button"
              key={item.name}
              className="text-gray-500 underline hover:text-gray-900"
            >
              {item.name}
            </Text>
          )}
          {list.indexOf(item) < list.length - 1 && <span>/</span>}
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
