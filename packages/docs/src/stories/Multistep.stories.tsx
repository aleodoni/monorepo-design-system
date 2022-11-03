import type { StoryObj, Meta } from '@storybook/react'

import { Box, Multistep, MultistepProps } from '@cmc-ui/react'

export default {
  title: 'Form/Multi Step',
  component: Multistep,

  args: {
    size: 4,
    currentStep: 1,
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
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {
  args: {},
}

export const Full: StoryObj<MultistepProps> = {
  args: {
    currentStep: 4,
  },
}
