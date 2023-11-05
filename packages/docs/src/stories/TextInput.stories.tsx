import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@ignite-ui/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      description: 'Disable element',
      type: 'boolean'
    }
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size='sm'>User</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>;

export const Primary = {
  args: {
    placeholder: 'Type your user name'
  }
} as StoryObj<TextInputProps>;

export const WithPrefix = {
  args: {
    prefix: 'github.com/'
  }
} as StoryObj<TextInputProps>;
