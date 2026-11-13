# React Link Provider

A link component library for React applications that injects any router or custom link through context, with a native anchor fallback.

## Introduction

This library decouples components from any particular routing solution by supplying the link component through React context. The application registers its link component once at the root, and components retrieve it with a hook that always returns something renderable. When no provider is present, the hook falls back to a native anchor that maps the destination to its href, which keeps shared UI libraries, Storybook stories and server-rendered pages free of a hard router dependency.

## Prerequisites

- **[React](https://react.dev/)**: Version 19.2 or later, together with React DOM, installed as peer dependencies.

## Installation

```bash
npm install react-link-provider
```

```bash
yarn add react-link-provider
```

```bash
pnpm add react-link-provider
```

## Getting Started

Register a link component at the root of the application.

1. Choose a link component that accepts a `to` prop, such as the `Link` exported by [React Router](https://reactrouter.com/).

2. Wrap the application in `LinkProvider`, passing that component as `LinkComponent`:

   ```tsx
   import { createRoot } from 'react-dom/client';
   import { BrowserRouter, Link } from 'react-router-dom';
   import { LinkProvider } from 'react-link-provider';

   import App from './App';

   createRoot(document.getElementById('root')!).render(
     <BrowserRouter>
       <LinkProvider LinkComponent={Link}>
         <App />
       </LinkProvider>
     </BrowserRouter>
   );
   ```

## Usage

Components obtain the registered link component through a hook and render it with a `to` prop.

### Rendering links

`useLink` returns the `LinkComponent` from the nearest `LinkProvider`. Any additional props are passed through to that component.

```tsx
import { useLink } from 'react-link-provider';

const Navigation = () => {
  const Link = useLink();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
```

### Using a custom link component

Any React component with a compatible props shape can be provided, such as a design system link or a styled anchor.

```tsx
import type { ReactNode } from 'react';
import { LinkProvider } from 'react-link-provider';

type CustomLinkProps = { to: string; children?: ReactNode };

const CustomLink = ({ to, children, ...rest }: CustomLinkProps) => (
  <a href={to} className="link" {...rest}>
    {children}
  </a>
);

const Root = () => (
  <LinkProvider LinkComponent={CustomLink}>
    <App />
  </LinkProvider>
);
```

### Falling back without a provider

Outside a `LinkProvider`, `useLink` returns a native anchor that renders `to` as its `href`, so components remain usable in isolation.

```tsx
import { useLink } from 'react-link-provider';

const DocsLink = () => {
  const Link = useLink();

  // Renders <a href="/docs">Documentation</a> when no provider is present
  return <Link to="/docs">Documentation</Link>;
};
```

## License

Licensed under the [MIT License](LICENSE).
