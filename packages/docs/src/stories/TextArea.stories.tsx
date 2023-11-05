import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@ignite-ui/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  tags: ["autodocs"],
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
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
          <Text size='sm'>Observations</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>;

export const Primary = {
  args: {
    placeholder: 'Type any observations...'
  }
} as StoryObj<TextAreaProps>;
