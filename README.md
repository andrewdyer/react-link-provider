![React + Vite Package Template](https://raw.githubusercontent.com/andrewdyer/public-assets/refs/heads/main/images/covers/react-vite-package-template.png)

# React + Vite Package Template

A template for creating packages using the [React](https://react.dev/) framework and the [Vite](https://vitejs.dev/) build tool, and written in [TypeScript](https://www.typescriptlang.org/).

## ⚖️ License

Licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.

## ✨ Introduction

This template is designed to provide a solid foundation to help you hit the ground running and save valuable time when starting a new React package. With all the necessary tools and configurations included, you can focus on building your package without worrying about the initial setup.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **[Node.js](https://nodejs.org/)**: Version 22.x (as specified in [.nvmrc](.nvmrc)) is required.
- **[npm](https://www.npmjs.com/)**: Dependency management tool, version 9.x or higher.
- **[yalc](https://github.com/wclr/yalc)** (optional): For local package development and testing.

## 🛠️ Features

This template includes the following tools and configurations:

- [Vite](https://vitejs.dev/) for fast builds and modern bundling with multiple output formats (ESM, CJS, and UMD), using [`@vitejs/plugin-react-swc`](https://www.npmjs.com/package/@vitejs/plugin-react-swc) for React support.
- [TypeScript](https://www.typescriptlang.org/) for static type checking, with dedicated configurations for builds and development.
- [Vitest](https://vitest.dev/) for unit testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), Vitest UI, and coverage reports.
- [Prettier](https://prettier.io/) for consistent code formatting across the codebase.
- [Husky](https://typicode.github.io/husky/#/) for Git hooks to automate tasks such as formatting, type-checking, and testing before commits.
- CI (Continuous Integration) setup with [GitHub Actions](https://github.com/features/actions) for automated testing, building, type-checking, and publishing the package to npmjs.

## 🚀 Getting Started

If you like what you've seen so far and think this setup fits your needs, you can quickly get started by clicking the **Use this template** button at the top of the repository on GitHub.

## 🤝 Contributing

Before contributing to this package, please refer to the [contributing](./CONTRIBUTING.md) documentation.
