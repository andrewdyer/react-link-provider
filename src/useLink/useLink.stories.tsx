import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import useLink from './useLink';
import { LinkProvider } from '../LinkProvider';

interface RouterLinkProps {
  to: string;
  children?: ReactNode;
}

const RouterLink = ({ to, children }: RouterLinkProps) => (
  <a href={`#${to}`} data-router-link="true">
    {children} (router link)
  </a>
);

interface NavigationLinkProps {
  to: string;
  label: string;
}

const NavigationLink = ({ to, label }: NavigationLinkProps) => {
  const Link = useLink();

  return <Link to={to}>{label}</Link>;
};

const meta = {
  title: 'Hooks/useLink',
  component: NavigationLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/about',
    label: 'About',
  },
} satisfies Meta<typeof NavigationLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithProvider: Story = {
  decorators: [
    (Story) => (
      <LinkProvider LinkComponent={RouterLink}>
        <Story />
      </LinkProvider>
    ),
  ],
};

export const WithoutProvider: Story = {};
