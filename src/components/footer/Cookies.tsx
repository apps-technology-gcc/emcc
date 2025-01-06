import * as React from "react";
import { CookieConsentProps } from "@/src/types";
import { Text } from "../ui/elements/Text";
import { Button } from "../ui/elements/Button";

export const Cookies: React.FC<CookieConsentProps> = ({
  onAccept,
  onReject,
  onManage,
}) => (
  <div className="flex relative z-0 flex-col px-14 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex z-0 flex-wrap gap-5 items-center w-full max-md:max-w-full">
      <Text variant="small" className="flex-1 min-w-[240px] max-md:max-w-full">
        Some cookies are essential to how our website works, so they're always
        saved. Other cookies help personalise your experience and remember your
        preferences. You can choose which cookies to accept and change them at
        any time. Learn more about{" "}
        <span className="text-primary-600">how we use our cookies.</span>
      </Text>
      <div className="flex gap-8 items-center self-stretch my-auto text-sm text-center min-w-[240px]">
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
          <button
            onClick={onManage}
            className="gap-2.5 self-stretch my-auto underline border-solid border-b-[0.5px] border-b-zinc-900 decoration-auto decoration-solid text-zinc-900 underline-offset-auto"
          >
            Manage Settings
          </button>
          <Button
            variant="default"
            btnType="primary"
            outline
            onClick={onReject}
            className=""
          >
            Reject All
          </Button>
          <Button variant="default" btnType="primary" onClick={onAccept}>
            Accept All
          </Button>
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
