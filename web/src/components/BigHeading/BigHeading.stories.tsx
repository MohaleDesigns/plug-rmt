// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import BigHeading from './BigHeading'

const meta: Meta<typeof BigHeading> = {
  component: BigHeading,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BigHeading>

export const Primary: Story = {}
