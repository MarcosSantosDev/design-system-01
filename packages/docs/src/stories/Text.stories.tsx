import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui-marcossantosdev/react";

export default {
  title: "Typograph/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error omnis optio reprehenderit id laboriosam harum itaque blanditiis sequi illo? Maiores, qui odit. Quasi odio facilis ex esse laborum sequi sint?",
      size: 'md'
  },
  argTypes: {
    size: {
      description: 'Text size',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: 'inline-radio'
    }
  }
} as Meta<TextProps>;

export const Primary = {} as StoryObj<TextProps>;

export const Strong = {
  args: {
    as: "strong",
    children: "Strong text",
  },
} as StoryObj<TextProps>;
