# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

- [Development Setup](#development-setup)
- [Upgrading Dependencies](#upgrading-dependencies)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Testing](#testing)
- [Building](#building)
- [Local Development with Yalc](#local-development-with-yalc)
- [Publishing](#publishing)

## Development Setup

To get started with contributing, set up the project by following these steps:

1. Begin by cloning the repository and navigating to its directory.
2. Use the correct Node.js version specified in [.nvmrc](.nvmrc):
   - Install `nvm` if you haven't already. Follow the instructions on the [nvm GitHub repository](https://github.com/nvm-sh/nvm).
   - Run `nvm use` to switch to the required Node.js version.
3. Install all project dependencies to ensure a complete setup with `npm install`.
4. Start Storybook using `npm run storybook` to develop and test UI components in isolation.
5. Run tests with `npm test` to verify that the environment is working correctly. You can also use `npm run test:watch` to run the tests in watch mode, and `npm run test:coverage` to generate a coverage report.

## Upgrading Dependencies

Keeping dependencies up-to-date is crucial for maintaining the security and performance of the project. Follow these steps to upgrade dependencies:

1. Check for outdated dependencies with `npm outdated`.
2. Update dependencies using `npm update` or update a specific package with `npm install <package-name>@latest`.
3. Ensure everything works after the upgrade by running the tests with `npm test`.
4. Make sure the `package-lock.json` file is updated with the latest dependency versions by running `npm install`.
5. Commit the changes to the repository with a clear commit message.
6. Push the changes to your branch and create a pull request for review.

## Coding Standards

To maintain code quality and consistency, please follow these guidelines:

- Run `npm run format` to format code using Prettier.
- Run `npm run type-check` to ensure there are no TypeScript type errors.
- Organize imports into clearly separated groups, following this order: React imports, third-party packages, app-level aliases, and local imports.
- Arrange imports alphabetically by package name within each group to improve readability.

## Commit Guidelines

Use clear, descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format. Add emojis to quickly convey the type of change if desired, following [Git Commit Emoji](https://dev.andrewdyer.rocks/git-commit-emoji) conventions.

## Testing

Please write tests for any new features or modifications to the project. Follow these steps to ensure your tests are effective and consistent:

- Use `npm run test` to run the tests.
- Use `npm run test:watch` to run the tests in watch mode, which will re-run tests when files change.
- Check coverage using `npm run test:coverage` to ensure all tests pass.

For consistency and modularity, organize test code into structured sections:

- Start by mocking dependencies or libraries.
- Create helper functions to streamline repetitive logic.
- Define constants for mock data or configurations.
- Structure the main test suite using `describe` blocks and focused test cases.

Ensure tests are clear, reusable, and easy to maintain before submitting changes.

## Building

Use the following commands as needed to build and preview the project:

- Build the project with `npm run build`, which generates CommonJS, ES Modules, as well as TypeScript declaration files in the `dist/` folder.
  - Build CommonJS (CJS) modules for the project with `npm run build:cjs`.
  - Build ES Modules (ESM) for the project with `npm run build:esm`.
  - Generate TypeScript declaration files with `npm run build:types`.
  - Clean the `dist/` folder to ensure a clean build with `npm run clean`.
- Generate a static Storybook build with `npm run build:storybook`.

## Local Development with Yalc

Use Yalc to test this package locally in other projects without publishing it to the npm registry.

1. Install Yalc globally using `npm install yalc -g`.
2. In the target project's directory, add this package with `yalc add @your-scope/react-package-template`.
3. Publish changes to the local Yalc store by running `npm run yalc:publish` in this package's directory.
4. Push updates to the target project with `npm run yalc:push`, which notifies the target project of the latest changes.
5. Alternatively, manually update the package in the target project with `yalc update @your-scope/react-package-template`.

Follow these steps to ensure your changes work as expected before submitting them.

## Publishing

To enable automated publishing of new releases to npm, you need to create and configure an npm token.

1. Log in to your npm account.
2. Navigate to **Access Tokens** in your npm account settings.
3. Generate a new token with the **Automation** option (recommended if you have 2FA enabled).
4. Add the token to this repository's GitHub secrets:
   - Go to **Settings > Secrets and variables > Actions**.
   - Add a new secret named `NPM_TOKEN` and paste your npm token.

Once this is done, GitHub Actions will automatically publish the package to npm whenever a new release is created.
