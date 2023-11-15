import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@ignite-ui-marcossantosdev/react";

export default {
  title: "Typograph/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "Example heading",
    size: 'md'
  },
  argTypes: {
    size: {
      description: 'heading size',
      options: [
        'sm',
        'md',
        'lg',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
      ],
      control: 'inline-radio'
    }
  }
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
  },
};
