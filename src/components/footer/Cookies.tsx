"use client";
import * as React from "react";
import { CookieConsentProps } from "@/src/types";
import { Text } from "../ui/elements/Text";
import { Button } from "../ui/elements/Button";
import { Icon } from "../ui/elements/Icon";
import Checkbox from "../ui/elements/form/Checkbox";
import Radio from "../ui/elements/form/Radio";
import Switch from "../ui/elements/Switch";

export const Cookies: React.FC<any> = (
  {
    // onAccept,
    // onReject,
    // onManage,
  }
) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div className="flex relative z-0 flex-col py-12 px-14 md:py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex justify-between z-0 flex-col md:flex-row gap-5 items-center w-full max-md:max-w-full">
        <Text
          variant="small"
          className=" flex-auto min-w-[240px] max-md:max-w-full"
        >
          Some cookies are essential to how our website works, so they're always
          saved. Other cookies help personalise your experience and remember
          your preferences. You can choose which cookies to accept and change
          them at any time. Learn more about{" "}
          <span className="text-primary-600">how we use our cookies.</span>
        </Text>
        <div className="flex gap-8 w-full justify-between md:justify-end items-center self-stretch my-auto text-sm text-center min-w-[240px]">
          <div className="flex flex-col  justify-end xs:flex-row gap-5 xs:justify-between w-full md:justify-end items-center self-stretch my-auto min-w-[240px]">
            <button
              // onClick={onManage}
              onClick={() => setIsOffcanvasOpen(true)}
              className="gap-2.5 ml-auto xs:m-0 max-w-fit order-2 xs:order-none self-stretch my-auto underline border-solid border-b-[0.5px] border-b-zinc-900 decoration-auto decoration-solid text-zinc-900 underline-offset-auto"
            >
              Manage Settings
            </button>
            <div
              className={`fixed overflow-auto top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                isOffcanvasOpen ? "-translate-x-0" : "-translate-x-full"
              }`}
              style={{
                width: "min(450px, 100vw)",
                zIndex: 1000,
              }}
            >
              <div className="flex flex-col gap-[18px]">
                <div className="p-5 flex justify-between items-center border-b-[1px] border-border">
                  <div className="flex gap-2.5 items-center self-stretch my-auto w-[89px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/a30706981d059982fc024f3de458f6477f15c721a5d911f138e4fe56d831445d?apiKey=06aa3e4feb1a44b58f93292c617c0ab1&"
                      alt="EMCC Logo"
                      className="object-contain self-stretch my-auto aspect-[2.23] w-[89px]"
                    />
                  </div>
                  <Icon
                    name="close"
                    className="cursor-pointer ml-auto text-[20px]"
                    onClick={() => setIsOffcanvasOpen(false)}
                  />
                  {/* Offcanvas content goes here */}
                </div>
                <div className="flex flex-col p-5 gap-5">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                      <Text variant={"card_title_large"}>
                        Privacy Preference Center
                      </Text>
                      <Text variant={"small"}>
                        Most websites store or retrieve information on your
                        browser, mostly in the form of cookies. This information
                        is used to make the site work as you expect it to -
                        while this information doesn't usually directly identify
                        you it helps us understand your preferences and the
                        devices you use so we can provide a more personalized
                        website experience. We respect your right to privacy,
                        and you can choose not to allow some types of cookies.
                        Click on the category headings below to find out more
                        and change the default settings. Please consider that
                        blocking some types of cookies may impact your
                        experience of the site and the services we are able to
                        offer.
                      </Text>
                      <Text variant={"button"} className="text-primary-600">
                        More Information
                      </Text>
                    </div>
                    <Button
                      className="max-w-fit"
                      variant={"default"}
                      btnType={"secondary"}
                    >
                      Allow All
                    </Button>
                  </div>
                  <div className="h-px bg-background w-full"></div>

                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                      <Text variant={"card_title_large"}>
                        Manage Preferences
                      </Text>
                      <div className="flex flex-col gap-2.5">
                        <div
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="p-2.5 cursor-pointer flex flex-col gap-2.5 border-border border"
                        >
                          <div className="flex justify-between items-center gap-5">
                            <div className="flex items-center gap-2.5">
                              <Icon
                                name={isExpanded ? "remove" : "add"}
                                className="text-[20px] cursor-pointer"
                              />
                              <Text variant={"card_title_small"}>
                                Performance Cookies
                              </Text>
                            </div>
                            <div className="">
                              <Switch
                                id="test"
                                label="Set Alert"
                                name="alert"
                              />
                            </div>
                          </div>
                          {isExpanded && (
                            <p className="text-xs text-left font-light text-neutralDark">
                              Lorem ipsum dolor sit amet consectetur. Praesent
                              habitant egestas vel etiam odio donec bibendum.
                              Phasellus mauris quis est posuere amet. Tellus
                              aliquet facilisi lectus elementum purus vel.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <Button
                        className="flex-auto w-full"
                        variant={"default"}
                        btnType={"secondary"}
                      >
                        Reject All
                      </Button>
                      <Button
                        className="flex-auto w-full"
                        variant={"default"}
                        btnType={"secondary"}
                      >
                        Confirm My Choice
                      </Button>
                    </div>
                  </div>

                  {/* {navLinks.map((link, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex border-border px-5 py-[14px] items-center justify-between gap-5",
                        index === 0 ? "border-y-[0.5px]" : "border-b-[0.5px]"
                      )}
                    >
                      <Text variant={"navbar"} className="text-neutralDark">
                        {link.text}
                      </Text>
                      <Icon
                        name="arrow_forward"
                        // size={20}
                        className="cursor-pointer text-[20px]"
                        onClick={() => setIsOffcanvasOpen(true)}
                      />
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
            {isOffcanvasOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                style={{ zIndex: 999 }}
                onClick={() => setIsOffcanvasOpen(false)}
              />
            )}
            <div className="flex w-full xs:w-auto items-center justify-between gap-5">
              <Button
                variant="default"
                btnType="primary"
                outline
                // onClick={onReject}
                className=""
              >
                Reject All
              </Button>
              <Button
                variant="default"
                btnType="primary"

                // onClick={onAccept}
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/0c45b28d304f7a19be626ee20a46006f424868492c5d0f3c3da7b608b05c9d46?apiKey=7d86919144c846178294e9d8a4321223&"
        alt=""
        className="object-contain absolute top-5 right-5 z-0 w-6 h-6 aspect-square"
      />
    </div>
  );
};
