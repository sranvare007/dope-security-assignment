import type { Meta, StoryObj } from '@storybook/react';
import { ActionButtons } from './ActionButtons';

const meta: Meta<typeof ActionButtons> = {
  title: 'Components/ActionButtons',
  component: ActionButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onMarkViewed: () => console.log('Mark viewed clicked'),
    onMarkUnviewed: () => console.log('Mark unviewed clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof ActionButtons>;

export const NoSelection: Story = {
  args: {
    selectedCount: 0,
  },
};

export const OneSelected: Story = {
  args: {
    selectedCount: 1,
  },
};

export const MultipleSelected: Story = {
  args: {
    selectedCount: 15,
  },
};

export const ManySelected: Story = {
  args: {
    selectedCount: 150,
  },
};

export const AllSelected: Story = {
  args: {
    selectedCount: 1000,
  },
};
