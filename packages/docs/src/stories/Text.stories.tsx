import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps  } from '@ignite-ui/react'

export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error omnis optio reprehenderit id laboriosam harum itaque blanditiis sequi illo? Maiores, qui odit. Quasi odio facilis ex esse laborum sequi sint?'
    }
} as Meta<TextProps>;

export const Primary = {} as StoryObj<TextProps>

export const Strong = {
    args: {
        as: 'strong',
        children: 'Strong text'
    }
} as StoryObj<TextProps>