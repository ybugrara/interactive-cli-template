# Interactive CLI Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A beautiful, feature-rich, and interactive CLI template built with TypeScript, React, and Ink. This template provides a solid foundation for creating modern, user-friendly command-line applications.

```
  ___       _                      _   _              ____ _     ___ 
 |_ _|_ __ | |_ ___ _ __ __ _  ___| |_(_)_   _____   / ___| |   |_ _|
  | || '_ \| __/ _ \ '__/ _` |/ __| __| \ \ / / _ \ | |   | |    | | 
  | || | | | ||  __/ | | (_| | (__| |_| |\ V /  __/ | |___| |___ | | 
 |___|_| |_|\__\___|_|  \__,_|\___|\__|_| \_/ \___|  \____|_____|___|

> /greet
Hello, World!
```

## Features

- **Interactive REPL Interface:** A modern, chat-like interface.
- **Slash Commands:** Type `/` to get a list of available commands.
- **Component-Based UI:** Built with React and Ink for creating complex, beautiful terminal UIs.
- **Extensible Command System:** A modular architecture that makes adding new commands trivial.
- **Dynamic Command Loading:** New commands are automatically discovered and loaded at runtime.
- **TypeScript First:** A robust, type-safe codebase.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/interactive-cli-template.git
    cd interactive-cli-template
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run in development mode:**
    ```bash
    npm run dev
    ```

## How to Add a New Command

Adding a new command is designed to be as simple as possible.

**Step 1: Create a new command file**

Create a new file in the `src/commands/` directory (e.g., `src/commands/ping.ts`).

**Step 2: Define the command**

In your new file, create a command object that implements the `Command` interface.

```typescript
// src/commands/ping.ts
import { Command } from '../types/index.js';

const ping: Command = {
  name: 'ping',
  description: 'Responds with pong',
  execute: async () => {
    return 'Pong!';
  },
};

export default ping;
```

**That's it!** The dynamic command loader in `src/commands/index.ts` will automatically detect and load your new command the next time you run the application.

## Project Architecture

-   `src/components/`: Contains all React components used to build the UI with Ink.
    -   `App.tsx`: The main application component.
    -   `Prompt.tsx`: The bordered input prompt.
    -   `Suggestions.tsx`: The command suggestion list.
-   `src/commands/`: Contains all the CLI command definitions.
    -   `index.ts`: The dynamic command loader. It reads all other files in this directory and exports them.
    -   `greet.ts`: The example `greet` command.
-   `src/types/`: Contains shared TypeScript types and interfaces.
    -   `index.ts`: Defines the `Command` interface.
-   `src/index.tsx`: The main application entry point that renders the Ink app.

## Tech Stack

-   [Node.js](https://nodejs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [React](https://reactjs.org/)
-   [Ink](https://github.com/vadimdemedes/ink)
-   [Figlet](https://github.com/patorjk/figlet.js)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 