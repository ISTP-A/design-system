import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { CTA } from '../components/ui/Button'

const meta: Meta = {
  title: 'BUTTON/CTA',
  component: CTA,
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof CTA>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    children: '버튼'
  }
}

export const Disabled: Story = {
  args: {
    children: '지원기간이 아니에요',
    disabled: true
  }
}
