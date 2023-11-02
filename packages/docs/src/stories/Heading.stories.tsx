import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@ignite-ui/react";

export default {
  title: "Typograph/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "Example heading",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {
  args: {
    children: "Primary heading",
  },
};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: "h1",
    children: "H1 heading",
  }
};
