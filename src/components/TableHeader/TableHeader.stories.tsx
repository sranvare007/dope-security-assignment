import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { HealthStatus } from '../../types';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onSelectAll: () => console.log('Select all toggled'),
    onToggleHealthFilter: () => console.log('Health filter toggled'),
    onToggleHealthFilterDropdown: () => console.log('Health filter dropdown toggled'),
    onToggleSort: () => console.log('Sort toggled'),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', minWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    allSelected: false,
    someSelected: false,
    healthFilters: new Set(),
    showHealthFilter: false,
    sortOrder: null,
  },
};

export const AllSelected: Story = {
  args: {
    allSelected: true,
    someSelected: false,
    healthFilters: new Set(),
    showHealthFilter: false,
    sortOrder: null,
  },
};

export const SomeSelected: Story = {
  args: {
    allSelected: false,
    someSelected: true,
    healthFilters: new Set(),
    showHealthFilter: false,
    sortOrder: null,
  },
};

export const WithHealthFilterOpen: Story = {
  args: {
    allSelected: false,
    someSelected: false,
    healthFilters: new Set(['Healthy'] as HealthStatus[]),
    showHealthFilter: true,
    sortOrder: null,
  },
};

export const WithSortAscending: Story = {
  args: {
    allSelected: false,
    someSelected: false,
    healthFilters: new Set(),
    showHealthFilter: false,
    sortOrder: 'asc',
  },
};

export const WithSortDescending: Story = {
  args: {
    allSelected: false,
    someSelected: false,
    healthFilters: new Set(),
    showHealthFilter: false,
    sortOrder: 'desc',
  },
};

export const FullyActive: Story = {
  args: {
    allSelected: true,
    someSelected: false,
    healthFilters: new Set(['Healthy', 'Injured'] as HealthStatus[]),
    showHealthFilter: true,
    sortOrder: 'desc',
  },
};

const InteractiveWrapper = () => {
  const [allSelected, setAllSelected] = useState(false);
  const [healthFilters, setHealthFilters] = useState<Set<HealthStatus>>(new Set());
  const [showHealthFilter, setShowHealthFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const handleToggleHealthFilter = (health: HealthStatus) => {
    setHealthFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(health)) {
        newSet.delete(health);
      } else {
        newSet.add(health);
      }
      return newSet;
    });
  };

  const handleToggleSort = () => {
    setSortOrder(prev => {
      if (prev === null) return 'asc';
      if (prev === 'asc') return 'desc';
      return null;
    });
  };

  return (
    <TableHeader
      allSelected={allSelected}
      someSelected={false}
      onSelectAll={setAllSelected}
      healthFilters={healthFilters}
      onToggleHealthFilter={handleToggleHealthFilter}
      showHealthFilter={showHealthFilter}
      onToggleHealthFilterDropdown={() => setShowHealthFilter(!showHealthFilter)}
      sortOrder={sortOrder}
      onToggleSort={handleToggleSort}
    />
  );
};

export const Interactive: Story = {
  render: () => <InteractiveWrapper />,
};
