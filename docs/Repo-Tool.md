---
id: Repo-Tool
---

# Assessment Tool

Tilli Assessment is an open-source Next.js application for conducting interactive emotional assessments in a child-friendly interface. It uses Appwrite for authentication and data storage.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Local Setup](#local-setup)
4. [Available Scripts](#available-scripts)
5. [Environment Configuration](#environment-configuration)
6. [Testing and Linting](#testing-and-linting)
7. [Contributing](#contributing)
8. [Community](#community)
9. [License](#license)

## Features

- Built with Next.js 14 and TypeScript
- Tailwind CSS for styling
- Appwrite for authentication and database
- Interactive, multi-step assessment flow
- Responsive design for desktop and mobile

## Prerequisites

- Node.js >= 20.x (recommend using [nvm](https://github.com/nvm-sh/nvm))
- npm, yarn, pnpm, or bun
- An [Appwrite](https://appwrite.io/) account with:
  - A project created
  - A database containing two collections:
    - **Participants**
    - **Assessments**

## Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/<owner>/tilli-assessment-tool.git
   cd tilli-assessment-tool
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Create a `.env.local` file in the project root with the following content:
   ```dotenv
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=<Your Appwrite Project ID>
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=<Your Database ID>
   NEXT_PUBLIC_APPWRITE_PARTICIPANTS_COLLECTION_ID=<Participants Collection ID>
   NEXT_PUBLIC_APPWRITE_ASSESSMENTS_COLLECTION_ID=<Assessments Collection ID>
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs Next.js in development mode
- `npm run build`: Builds the app for production
- `npm run start`: Starts the production server
- `npm run lint`: Runs ESLint checks
- `npm run lint:fix`: Auto-fixes lint issues
- `npm test`: Runs the Jest test suite

## Environment Configuration

| Variable                                        | Description                         |
| ----------------------------------------------- | ----------------------------------- |
| NEXT_PUBLIC_APPWRITE_PROJECT_ID                 | Appwrite project ID                 |
| NEXT_PUBLIC_APPWRITE_DATABASE_ID                | Appwrite database ID                |
| NEXT_PUBLIC_APPWRITE_PARTICIPANTS_COLLECTION_ID | Appwrite participants collection ID |
| NEXT_PUBLIC_APPWRITE_ASSESSMENTS_COLLECTION_ID  | Appwrite assessments collection ID  |

## Testing and Linting

- Jest for unit and integration tests
- React Testing Library for component testing
- ESLint and Prettier for code quality and formatting

## Continuous Integration

On every push or pull request to `main`, GitHub Actions runs the test suite with coverage and uploads a full HTML coverage report as an artifact.

To download the coverage report:

1. Go to the **Actions** tab of this repository.
2. Select the latest **CI** workflow run.
3. In the **Artifacts** section, download **coverage-report** (contains the HTML report).

## Contributing

We welcome contributions from the community:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push to your branch: `git push origin feature/your-feature`.
5. Open a Pull Request against the `main` branch.

Please ensure that your code follows the existing style guidelines and that all tests pass.

## Community

- Submit bugs and feature requests via [GitHub Issues](https://github.com/tillioss/tilli-assessment-tool/issues).
- Join discussions at [GitHub Discussions](https://github.com/tillioss/tilli-assessment-tool/discussions).
- Connect with other contributors on our Discord (link pending).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
