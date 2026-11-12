import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import LinkProvider from './LinkProvider';
import { useLink } from '../useLink';

interface RouterLinkProps {
  to: string;
  children?: ReactNode;
}

const RouterLink = ({ to, children }: RouterLinkProps) => (
  <a href={`#${to}`} data-router-link="true">
    {children}
  </a>
);

const Navigation = () => {
  const Link = useLink();

  return (
    <nav aria-label="Main">
      <Link to="/home">Home</Link> | <Link to="/about">About</Link>
    </nav>
  );
};

const meta = {
  title: 'Providers/LinkProvider',
  component: LinkProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    LinkComponent: RouterLink,
    children: <Navigation />,
  },
} satisfies Meta<typeof LinkProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
