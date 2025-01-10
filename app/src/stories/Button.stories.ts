import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from '../components/ui/Button'

const meta: Meta = {
  title: 'BUTTON/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: '버튼',
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    children: '버튼',
    variant: 'secondary'
  }
}

export const Large: Story = {
  args: {
    children: '버튼',
    variant: 'primary',
    size: 'lg'
  }
}

export const Small: Story = {
  args: {
    children: '버튼',
    variant: 'primary',
    size: 'sm'
  }
}
