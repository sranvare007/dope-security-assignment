import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchBox } from './SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'Components/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

// Wrapper component for controlled input
const SearchBoxWrapper = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return <SearchBox {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: SearchBoxWrapper,
  args: {
    placeholder: 'Search...',
    ariaLabel: 'Search',
  },
};

export const WithPlaceholder: Story = {
  render: SearchBoxWrapper,
  args: {
    placeholder: 'Search by name or location...',
    ariaLabel: 'Search characters',
  },
};

export const WithValue: Story = {
  render: SearchBoxWrapper,
  args: {
    value: 'Naruto',
    placeholder: 'Search...',
  },
};

export const LongPlaceholder: Story = {
  render: SearchBoxWrapper,
  args: {
    placeholder: 'Type here to filter characters by their name or village location...',
  },
};
