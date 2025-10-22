# 🔗 React Link Provider

A lightweight React utility for providing a consistent, framework-agnostic link component across your app.

## ⚖️ License

Licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.

## ✨ Introduction

The `react-link-provider` library is a lightweight, framework-agnostic context for managing link behavior across your React app. It provides a unified way for components to render consistent navigation elements—no matter which routing library you use—while remaining fully compatible with server-side rendering, theming, and flexible context composition.

## 💡 Rationale

In many React applications, components need to render links — but not every project uses the same routing system.
For example:

- One app might use react-router-dom, while another uses Next.js or Remix.
- Some UI components might need to work without any router (e.g., in Storybook or documentation).
- Your design system or shared component library might not want a hard dependency on any routing library.
- You want your link logic to work seamlessly with server-side rendering (SSR) and theming solutions.

This library solves this by:

1. Allowing you to inject any link component (like Link from your router) at the top of your app.
2. Providing a simple useLink() hook that always returns the correct link component in context.
3. Gracefully falling back to a standard <a> element when no router is used.

This makes it ideal for shared UI libraries, SSR environments, and apps that need routing flexibility without coupling to a specific framework.

## 📥 Installation

Install the package using your preferred dependency management tool:

```bash
# npm
npm install react-link-provider

# or pnpm
pnpm add react-link-provider

# or yarn
yarn add react-link-provider
```

## 🚀 Getting Started

Wrap your application in the `<LinkProvider>` and pass a `LinkComponent` — for example, from `react-router-dom`:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LinkProvider } from 'react-link-provider';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LinkProvider LinkComponent={RouterLink}>
        <App />
      </LinkProvider>
    </BrowserRouter>
  </StrictMode>
);
```

## 📖 Usage

The `useLink` hook gives you access to the `LinkComponent` set in context. If no provider is defined, it falls back to a native `<a>` element.

```tsx
import React from 'react';
import { useLink } from 'react-link-provider';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  const Link = useLink();

  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

const About = () => {
  const Link = useLink();

  return (
    <div>
      <h1>About</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```
