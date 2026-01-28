import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { HealthStatus } from '../../types';
import { HealthFilter } from './HealthFilter';

const meta: Meta<typeof HealthFilter> = {
  title: 'Components/HealthFilter',
  component: HealthFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onToggleFilter: () => console.log('Filter toggled'),
    onToggle: () => console.log('Dropdown toggled'),
  },
};

export default meta;
type Story = StoryObj<typeof HealthFilter>;

const HealthFilterWrapper = (args: any) => {
  const [selectedFilters, setSelectedFilters] = useState<Set<HealthStatus>>(
    args.selectedFilters || new Set()
  );
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  const handleToggleFilter = (health: HealthStatus) => {
    setSelectedFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(health)) {
        newSet.delete(health);
      } else {
        newSet.add(health);
      }
      return newSet;
    });
    args.onToggleFilter?.(health);
  };

  return (
    <div style={{ padding: '100px' }}>
      <HealthFilter
        {...args}
        selectedFilters={selectedFilters}
        isOpen={isOpen}
        onToggleFilter={handleToggleFilter}
        onToggle={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export const Closed: Story = {
  render: HealthFilterWrapper,
  args: {
    isOpen: false,
    selectedFilters: new Set(),
  },
};

export const Open: Story = {
  render: HealthFilterWrapper,
  args: {
    isOpen: true,
    selectedFilters: new Set(),
  },
};

export const WithHealthySelected: Story = {
  render: HealthFilterWrapper,
  args: {
    isOpen: true,
    selectedFilters: new Set(['Healthy'] as HealthStatus[]),
  },
};

export const WithMultipleSelected: Story = {
  render: HealthFilterWrapper,
  args: {
    isOpen: true,
    selectedFilters: new Set(['Healthy', 'Injured'] as HealthStatus[]),
  },
};

export const AllSelected: Story = {
  render: HealthFilterWrapper,
  args: {
    isOpen: true,
    selectedFilters: new Set(['Healthy', 'Injured', 'Critical'] as HealthStatus[]),
  },
};
