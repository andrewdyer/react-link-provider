import React from 'react';

import { render, screen } from '@testing-library/react';

import { useLink } from '../useLink';

import LinkProvider from './LinkProvider';

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

describe('LinkProvider', () => {
  it('should provide the link component to children', () => {
    render(
      <LinkProvider LinkComponent={DummyLink}>
        <TestComponent to="/home">Home</TestComponent>
      </LinkProvider>
    );

    const link = screen.getByText('Home');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/home');
    expect(link).toHaveAttribute('data-testid', 'dummy-link');
  });

  it('should work with multiple children', () => {
    render(
      <LinkProvider LinkComponent={DummyLink}>
        <TestComponent to="/home">Home</TestComponent>
        <TestComponent to="/about">About</TestComponent>
      </LinkProvider>
    );

    expect(screen.getByText('Home')).toHaveAttribute('href', '/home');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
  });

  it('should update when LinkComponent changes', () => {
    const AnotherLink = ({
      children,
    }: {
      children: React.ReactNode;
      href: string;
    }) => <span data-testid="another-link">{children}</span>;

    const { rerender } = render(
      <LinkProvider LinkComponent={DummyLink}>
        <TestComponent to="/home">Home</TestComponent>
      </LinkProvider>
    );

    expect(screen.getByText('Home')).toHaveAttribute('href', '/home');

    rerender(
      <LinkProvider LinkComponent={AnotherLink}>
        <TestComponent to="/home">Home</TestComponent>
      </LinkProvider>
    );

    expect(screen.getByText('Home')).toHaveAttribute(
      'data-testid',
      'another-link'
    );
  });
});
