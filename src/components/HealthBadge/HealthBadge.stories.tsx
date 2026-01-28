import type { Meta, StoryObj } from '@storybook/react';
import { HealthBadge } from './HealthBadge';

const meta: Meta<typeof HealthBadge> = {
  title: 'Components/HealthBadge',
  component: HealthBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HealthBadge>;

export const Healthy: Story = {
  args: {
    health: 'Healthy',
  },
};

export const Injured: Story = {
  args: {
    health: 'Injured',
  },
};

export const Critical: Story = {
  args: {
    health: 'Critical',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
      <HealthBadge health="Healthy" />
      <HealthBadge health="Injured" />
      <HealthBadge health="Critical" />
    </div>
  ),
};
