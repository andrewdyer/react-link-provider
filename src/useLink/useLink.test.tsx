import React from 'react';

import { render, screen } from '@testing-library/react';

import { LinkProvider } from '../LinkProvider';

import useLink from './useLink';

type DummyLinkProps = {
  children: React.ReactNode;
  to: string;
};

const DummyLink = ({ children, to }: DummyLinkProps) => (
  <a href={to} data-testid="dummy-link">
    {children}
  </a>
);

type TestComponentProps = {
  to: string;
  children: React.ReactNode;
};

const TestComponent = ({ to, children }: TestComponentProps) => {
  const Link = useLink<{ to: string; children: React.ReactNode }>();

  return <Link to={to}>{children}</Link>;
};

describe('useLink', () => {
  it('should return the LinkComponent from context', () => {
    render(
      <LinkProvider LinkComponent={DummyLink}>
        <TestComponent to="/home">Home</TestComponent>
      </LinkProvider>
    );

    const link = screen.getByText('Home');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/home');
  });

  it('should default to <a> when no provider is used', () => {
    render(<TestComponent to="/default">Default</TestComponent>);

    const link = screen.getByText('Default');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/default');
  });
});
