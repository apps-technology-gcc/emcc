import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../src/components/ui/elements/Text";

const meta: Meta<typeof Text> = {
  title: "UI/Elements/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1_page_title",
        "h2_page_title_2",
        "navbar",
        "section_title",
        "body",
        "card_title_large",
        "card_title_small",
        "label",
        "resource_header",
        "placeholder",
        "button",
        "small",
        "tag",
        "extra_small",
        "nav_text_2",
        "side_nav_header",
      ],
    },
    font: {
      control: "select",
      options: ["poppins", "tinos"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is a text component",
    variant: "body",
    font: "poppins",
    align: "left",
  },
};

export const PageTitle: Story = {
  args: {
    children: "Page Title",
    variant: "h1_page_title",
    as: "h1",
  },
};

export const SectionTitle: Story = {
  args: {
    children: "Section Title",
    variant: "section_title",
    as: "h2",
  },
};

export const SmallText: Story = {
  args: {
    children: "Small Text Example",
    variant: "small",
  },
};
