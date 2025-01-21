"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Button } from "./components/ui/elements/Button";
import { TextProps } from "./components/ui/foundations/typography";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(TextProps, {
  name: "TextProps",
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "Icon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});
