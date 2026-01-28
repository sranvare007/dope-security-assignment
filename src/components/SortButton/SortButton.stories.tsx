import type { Meta, StoryObj } from '@storybook/react';
import { SortButton } from './SortButton';

const meta: Meta<typeof SortButton> = {
  title: 'Components/SortButton',
  component: SortButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onToggle: () => console.log('Sort toggled'),
    label: 'power',
  },
};

export default meta;
type Story = StoryObj<typeof SortButton>;

export const NoSort: Story = {
  args: {
    sortOrder: null,
  },
};

export const Ascending: Story = {
  args: {
    sortOrder: 'asc',
  },
};

export const Descending: Story = {
  args: {
    sortOrder: 'desc',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <SortButton sortOrder={null} onToggle={() => {}} label="power" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>No Sort</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SortButton sortOrder="asc" onToggle={() => {}} label="power" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Ascending</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SortButton sortOrder="desc" onToggle={() => {}} label="power" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Descending</div>
      </div>
    </div>
  ),
};
