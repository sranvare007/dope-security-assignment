import type { Meta, StoryObj } from '@storybook/react';
import type { CharacterWithViewed } from '../../types';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onSelect: () => console.log('Row selected'),
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
type Story = StoryObj<typeof TableRow>;

const mockCharacter: CharacterWithViewed = {
  id: 'char_0001',
  name: 'Naruto Uzumaki',
  location: 'Konoha',
  health: 'Healthy',
  power: 9500,
  viewed: false,
};

export const Default: Story = {
  args: {
    character: mockCharacter,
    isSelected: false,
    index: 0,
  },
};

export const Selected: Story = {
  args: {
    character: mockCharacter,
    isSelected: true,
    index: 0,
  },
};

export const AlternateRow: Story = {
  args: {
    character: mockCharacter,
    isSelected: false,
    index: 1,
  },
};

export const InjuredCharacter: Story = {
  args: {
    character: {
      ...mockCharacter,
      name: 'Sasuke Uchiha',
      health: 'Injured',
      power: 8500,
    },
    isSelected: false,
    index: 0,
  },
};

export const CriticalCharacter: Story = {
  args: {
    character: {
      ...mockCharacter,
      name: 'Rock Lee',
      location: 'Konoha',
      health: 'Critical',
      power: 3500,
    },
    isSelected: false,
    index: 0,
  },
};

export const LowPower: Story = {
  args: {
    character: {
      ...mockCharacter,
      name: 'Sakura Haruno',
      power: 150,
    },
    isSelected: false,
    index: 0,
  },
};

export const DifferentVillages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <TableRow
        character={{ ...mockCharacter, location: 'Konoha', name: 'Naruto' }}
        isSelected={false}
        onSelect={() => {}}
        index={0}
      />
      <TableRow
        character={{ ...mockCharacter, location: 'Suna', name: 'Gaara', health: 'Injured' }}
        isSelected={false}
        onSelect={() => {}}
        index={1}
      />
      <TableRow
        character={{ ...mockCharacter, location: 'Kiri', name: 'Kisame', health: 'Critical' }}
        isSelected={false}
        onSelect={() => {}}
        index={2}
      />
      <TableRow
        character={{ ...mockCharacter, location: 'Iwa', name: 'Deidara' }}
        isSelected={true}
        onSelect={() => {}}
        index={3}
      />
      <TableRow
        character={{ ...mockCharacter, location: 'Kumo', name: 'Killer Bee' }}
        isSelected={false}
        onSelect={() => {}}
        index={4}
      />
    </div>
  ),
};
