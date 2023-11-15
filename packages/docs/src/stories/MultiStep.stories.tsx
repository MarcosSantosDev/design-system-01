import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui-marcossantosdev/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ["autodocs"],
  args: {
    size: 4,
    currentStep: 1,
  },
  argTypes: {
    size: {
      description: 'Count steps',
      control: {
        type: 'number',
        min: 0,
        step: 1,
      },
    },
    currentStep: {
      description: 'Current step',
      control: {
        type: 'number',
        min: 1,
        step: 1,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}