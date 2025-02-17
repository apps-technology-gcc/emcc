"use client";

import Image from "next/image";
import { Icon } from "../Icon";
import { Text, textVariants } from "../Text";
import { inputVariants } from "./Input";
import { useState } from "react";
import { useEffect } from "react";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  ref?: any;

  className?: string;
  placeholder?: string;
  setValue?: (value: string) => void;
  props?: any;
  options?: [];
  icon?: any;
}

export const SearchInput = ({
  id,
  ref,
  className,
  placeholder,
  setValue,
  options,
  icon,
  ...props
}: SearchProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  useEffect(() => {
    const handleFocusOut = (event: any) => {
      console.log(isOpenMenu);
      setIsOpenMenu(false);
      console.log("Focus moved outside:", event.target);
    };

    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);
  return (
    <div className="relative flex-1">
      <input
        id={id}
        ref={ref}
        {...props}
        // @ts-ignore
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type="text"
        onFocus={() => setIsOpenMenu(true)}
        className={[
          inputVariants({
            variant: "default",
            size: "sm",
          }),
          textVariants({
            variant: "placeholder",
          }),

          "border w-full min-h-[40px] text-neutralDark border-border outline-none px-2.5 py-2 focus:border-primary-600 ",
          className,
        ].join(" ")}
      />

      <div className="flex items-center absolute  right-2.5  top-1/2 transform -translate-y-1/2  cursor-pointer">
        <Icon className="text-lg text-neutralDark " name={icon || "search"} />
      </div>
      {isOpenMenu && (
        <ul
          // box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
          style={{
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.2)",
          }}
          className="absolute shadow- p-2.5 z-10 bg-white w-full top-10 flex flex-col gap-2"
        >
          <li className="flex items-center gap-2">
            <span className="w-[24px] h-auto">
              <Image
                src="/flag.png"
                alt="search"
                width={24}
                height={16}
                className="w-full h-full"
              />
            </span>
            <Text as="span" variant="placeholder">
              Search
            </Text>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-[24px] h-auto">
              <Image
                src="/flag.png"
                alt="search"
                width={24}
                height={16}
                className="w-full h-full"
              />
            </span>
            <Text as="span" variant="placeholder">
              USA
            </Text>
          </li>
        </ul>
      )}
    </div>
  );
};
