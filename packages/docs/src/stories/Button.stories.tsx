import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    },
    variant: {
      description: 'Button variant',
      options: [
        'primary',
        'secondary',
        'tertiary',
      ],
      control: 'inline-radio',
    },
    size: {
      description: 'Button size',
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      description: 'Disable element',
      type: 'boolean'
    }
  }
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
};

export const SmallSize: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  }
};