import type { Meta, StoryObj } from '@storybook/react';
import type { CharacterWithViewed } from '../../types';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const mockData: CharacterWithViewed[] = [
  {
    id: 'char_0001',
    name: 'Naruto Uzumaki',
    location: 'Konoha',
    health: 'Healthy',
    power: 9500,
    viewed: false,
  },
  {
    id: 'char_0002',
    name: 'Sasuke Uchiha',
    location: 'Konoha',
    health: 'Injured',
    power: 9000,
    viewed: false,
  },
  {
    id: 'char_0003',
    name: 'Gaara',
    location: 'Suna',
    health: 'Critical',
    power: 8500,
    viewed: false,
  },
  {
    id: 'char_0004',
    name: 'Rock Lee',
    location: 'Konoha',
    health: 'Healthy',
    power: 7500,
    viewed: false,
  },
  {
    id: 'char_0005',
    name: 'Hinata Hyuga',
    location: 'Konoha',
    health: 'Healthy',
    power: 6500,
    viewed: false,
  },
  {
    id: 'char_0006',
    name: 'Neji Hyuga',
    location: 'Konoha',
    health: 'Injured',
    power: 7000,
    viewed: false,
  },
  {
    id: 'char_0007',
    name: 'Shikamaru Nara',
    location: 'Konoha',
    health: 'Healthy',
    power: 5500,
    viewed: false,
  },
  {
    id: 'char_0008',
    name: 'Kankuro',
    location: 'Suna',
    health: 'Critical',
    power: 6000,
    viewed: false,
  },
  {
    id: 'char_0009',
    name: 'Temari',
    location: 'Suna',
    health: 'Healthy',
    power: 6500,
    viewed: false,
  },
  {
    id: 'char_0010',
    name: 'Killer Bee',
    location: 'Kumo',
    health: 'Healthy',
    power: 9200,
    viewed: false,
  },
];

// Generate more data for large dataset story
const generateLargeDataset = (count: number): CharacterWithViewed[] => {
  const locations = ['Konoha', 'Suna', 'Kiri', 'Iwa', 'Kumo'];
  const healthStates = ['Healthy', 'Injured', 'Critical'];
  const names = ['Naruto', 'Sasuke', 'Sakura', 'Kakashi', 'Hinata', 'Gaara', 'Rock Lee', 'Neji'];

  return Array.from({ length: count }, (_, i) => ({
    id: `char_${String(i).padStart(4, '0')}`,
    name: `${names[i % names.length]} ${i}`,
    location: locations[i % locations.length] as any,
    health: healthStates[i % healthStates.length] as any,
    power: Math.floor(Math.random() * 9900) + 100,
    viewed: false,
  }));
};

export const Default: Story = {
  args: {
    data: mockData,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    isLoading: true,
  },
};

export const EmptyData: Story = {
  args: {
    data: [],
    isLoading: false,
  },
};

export const SmallDataset: Story = {
  args: {
    data: mockData.slice(0, 3),
    isLoading: false,
  },
};

export const LargeDataset: Story = {
  args: {
    data: generateLargeDataset(100),
    isLoading: false,
  },
};

export const VeryLargeDataset: Story = {
  args: {
    data: generateLargeDataset(1000),
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests virtualization with 1000 rows for smooth scrolling performance.',
      },
    },
  },
};

export const OnlyHealthyCharacters: Story = {
  args: {
    data: mockData.filter(char => char.health === 'Healthy'),
    isLoading: false,
  },
};

export const OnlyKonohaCharacters: Story = {
  args: {
    data: mockData.filter(char => char.location === 'Konoha'),
    isLoading: false,
  },
};
