import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@ignite-ui-marcossantosdev/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://github.com/MarcosSantosDev.png",
    alt: "Marcos Santos Dev",
  },
  argTypes: {
    src: {
      description: 'Image url',
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
};
