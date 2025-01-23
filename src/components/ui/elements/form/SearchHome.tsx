"use client";

import Image from "next/image";
import { Icon } from "../Icon";
import { Text, textVariants } from "../Text";
import { inputVariants } from "./Input";
import Tag from "../Tags";
import { useEffect, useState } from "react";

interface SearchHomeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  ref?: any;

  className?: string;
  placeholder?: string;
  setValue: (value: string) => void;
  props?: any;
  options?: [];
}

export const SearchHome = ({
  id,
  ref,
  className,
  placeholder,
  setValue,
  options,
  ...props
}: SearchHomeProps) => {
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
        onFocus={() => setIsOpenMenu(true)}
        // onFocusOut={() => console.log("Fff")}
      />

      <div className="flex items-center absolute  right-2.5  top-1/2 transform -translate-y-1/2  cursor-pointer">
        <Icon className="text-lg text-neutralDark " name="search" />
      </div>
      {isOpenMenu === true && (
        <ul
          // box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
          style={{
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.2)",
          }}
          className="absolute z-10 bg-white w-full top-10 flex flex-col"
        >
          <ul className="p-2.5 border-b border-border gap-1 flex items-center">
            <li className="">
              <Tag style="style1" variant="tag2">
                Search
              </Tag>
            </li>
            <li className="">
              <Tag style="style1" variant="tag2">
                Search
              </Tag>
            </li>
          </ul>
          <li className="flex p-2.5 border-b border-border items-center gap-2">
            <Icon name="description" />
            <Text as="span" variant="placeholder">
              USA
            </Text>
          </li>
          <li className="flex p-2.5 border-b border-border items-center gap-2">
            <Icon name="description" />
            <Text as="span" variant="placeholder">
              USA
            </Text>
          </li>
        </ul>
      )}
    </div>
  );
};
