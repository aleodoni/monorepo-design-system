import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@cmc-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/aleodoni.png',
    alt: 'Alexandre Odoni',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
