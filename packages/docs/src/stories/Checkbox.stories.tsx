import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, Checkbox, CheckboxProps } from "@ignite-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
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
          <Text size='sm'>Accept terms of use</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<CheckboxProps>;

export const Primary = {} as StoryObj<CheckboxProps>;
